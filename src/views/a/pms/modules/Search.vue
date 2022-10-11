<template>
  <a-card size="small">
    <!--    top -->
    <div class="flex flex-wrap justify-evenly">
      <div v-if="showTop" class="flex flex-wrap justify-evenly">
        <a-space :size="5" class="mb-2">
          <a-button :type="!rangeQuery && dayOff === 365 ? 'link' : ''" @click="clickNearDay(365, 0)">今年 </a-button>
          <a-button :type="!rangeQuery && dayOff === 30 ? 'link' : ''" @click="clickNearDay(30, 0)"> 30天 </a-button>
          <a-button :type="!rangeQuery && dayOff === 100 ? 'link' : ''" @click="clickNearDay(100)"> 本月 </a-button>
          <a-button :type="!rangeQuery && dayOff === 1 ? 'link' : ''" @click="clickNearDay(1, 1)"> 昨天 </a-button>
          <a-button :type="!rangeQuery && dayOff === 0 ? 'link' : ''" @click="clickNearDay(0, 0)"> 今天 </a-button>
        </a-space>
        <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__faster">
          <a-space v-show="advanced" class="mb-2">
            <a-date-picker @change="clickDatePicker" allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
            <a-date-picker @change="clickDatePicker" allowClear placeholder="结束日期" :disabled-date="disabledEndDate" v-model:value="endDate" />
          </a-space>
        </transition>
      </div>

      <a-input size="large" v-model:value="keyword" @change="queryList" :placeholder="placeholder" allowClear>
        <template #prefix>
          <a-button type="link" @click="changeAdvanced">
            <DownOutlined v-if="advanced" />
            <UpOutlined v-else />
          </a-button>
          <slot name="prefix"></slot>
          <a-space v-if="advanced">
            <a-select
              size=""
              v-if="hasPermission('am:selectUser') && showPeople"
              :loading="userLoading"
              allowClear
              ref="select"
              v-model:value="selectName"
              style="width: 90px"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option :key="item.id" v-for="item in userList" :value="item.username">
                {{ item.realname }}
              </a-select-option>
              <template v-if="userLoading" #notFoundContent>
                <a-spin size="small" />
              </template>
            </a-select>
            <a-button ghost type="success" v-if="isPc()" @click="clickPaste">粘贴</a-button>
          </a-space>
        </template>
        <template #suffix>
          <slot v-if="advanced" name="suffix"></slot>
          <slot name="suffixAdvanced"></slot>

          <span v-if="showSwitch && hasPermission('link:switch')">
            <a-button
              class="animate__animated animate__heartBeat animate__slower animate__repeat-3"
              @click="router.push('/pms/am/link')"
              type="link"
              danger
              >激活链</a-button
            >
            <a-switch @click="queryList" v-model:checked="checked" />
          </span>
        </template>
      </a-input>
    </div>
  </a-card>

  <!--      showCopy -->
  <a-row v-if="showCopy" class="w-full mt-2">
    <a-col :span="4">
      <slot name="left"></slot>
    </a-col>
    <a-col :span="14">
      <a-slider style="display: inline-block" v-model:value="count" :min="1" :max="500" />
    </a-col>
    <a-col class="text-center" :span="6">
      <a-button v-show="count === 1" @click="confirmCopy" :loading="btnLoading" :type="getButtonType()">复制{{ count }}条 </a-button>
      <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
        <a-button v-show="count > 1" :loading="btnLoading" placeholder="开始日期" :type="getButtonType()">复制{{ count }}条 </a-button>
      </a-popconfirm>
    </a-col>
  </a-row>

  <!--  showTabs-->
  <div v-if="props.tabPane?.tabs?.length > 0" class="flex flex-wrap justify-evenly">
    <a-tabs :animated="false" v-model:activeKey="activeKey" @tab-click="tabClick">
      <a-tab-pane v-for="item in props.tabPane?.tabs" :key="item.tabKey" :tab="item.tabName" />
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
  import { getCurrentInstance, onMounted, ref } from 'vue';
  import dayjs, { Dayjs } from 'dayjs';
  import { extractUrl } from '/@/utils/urlUtil';
  import { getAuthCache } from '/@/utils/auth';
  import { LOGIN_INFO_KEY } from '/@/enums/cacheEnum';
  import { getUserList } from '/@/api/common/api';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { message } from 'ant-design-vue';
  import { isPc } from '/@/views/a/utils/browser.js';
  import { router } from '/@/router';

  const { hasPermission } = usePermission();

  const props = defineProps({
    placeholder: {
      type: String,
      default: '粘贴搜索',
    },
    showTop: {
      type: Boolean,
      default: false,
    },
    showCopy: {
      type: Boolean,
      default: false,
    },
    showSwitch: {
      type: Boolean,
      default: false,
    },
    showPeople: {
      type: Boolean,
      default: false,
    },
    tabPane: {
      type: Object,
      default: () => {
        return { tabs: [], activeKey: '0' };
      },
    },
  });

  const startDate = ref<Dayjs>(dayjs());
  // const startDate = ref<Dayjs>(dayjs().subtract(1, 'year'));
  const endDate = ref<Dayjs>(dayjs());
  const keyword = ref();
  const count = ref<number>(1);
  const isSelf = ref(true);
  const btnLoading = ref(false);
  const userLoading = ref(false);
  const userList = ref([]);
  const dayOff = ref(0);
  const advanced = ref(false);
  const checked = ref(false);

  const disabledStartDate = (current: Dayjs) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf('day');
  };
  const disabledEndDate = (current: Dayjs) => {
    return (current && current > dayjs().endOf('day')) || current.isBefore(startDate.value);
  };

  const rangeQuery = ref();
  const clickNearDay = (day, end = 0) => {
    dayOff.value = day;
    if (dayOff.value === 365) {
      startDate.value = dayjs().startOf('year');
    } else if (dayOff.value === 100) {
      startDate.value = dayjs().startOf('month');
    } else {
      startDate.value = dayjs().subtract(day, 'day');
    }
    endDate.value = dayjs().subtract(end, 'day');
    rangeQuery.value = false;
    queryList();
  };
  const clickDatePicker = () => {
    rangeQuery.value = true;
    queryList();
  };

  const clickPaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        keyword.value = text;
        queryList();
      })
      .catch((err) => {
        if (err instanceof DOMException) {
          message.error('请手动粘贴，或允许读取剪贴板，失败原因：' + err);
        } else {
          message.error('请手动粘贴，失败原因：' + err);
        }
      });
  };
  const getButtonType = () => {
    if (!isSelf.value) {
      return 'error';
    }
    if (checked.value) {
      return 'warning';
    }
    return 'primary';
  };
  const focus = () => {
    if (userList.value.length === 0) {
      userLoading.value = true;
      getUserList({}).then((res) => {
        userList.value = res.records;
        userLoading.value = false;
      });
    }
  };
  const loginInfo = getAuthCache(LOGIN_INFO_KEY);
  const selectName = ref();
  let { username, realname } = loginInfo?.userInfo;
  const originUsername = username;
  selectName.value = realname;
  const handleChange = (value) => {
    username = value;
    isSelf.value = originUsername === selectName.value;
    if (value == null) {
      selectName.value = '所有人';
    }
    queryList();
  };
  const activeKey = ref(props?.tabPane?.activeKey);

  const tabClick = (tabKey) => {
    activeKey.value = tabKey;
    queryList();
  };
  // defineEmits
  const emit = defineEmits(['queryList', 'changeAdvanced', 'confirmCopy']);
  const queryList = () => {
    if (startDate.value.isAfter(endDate.value)) {
      endDate.value = startDate.value;
    }
    keyword.value = extractUrl(keyword?.value?.trim());
    let idx = keyword.value?.indexOf('/j/'); // jet
    if (idx < 0) {
      // am普通版
      idx = keyword.value?.indexOf('/c/');
    }
    if (idx < 0) {
      // am定制版
      idx = keyword.value?.indexOf('/d/');
    }
    if (idx >= 0) {
      keyword.value = keyword.value?.substring(idx + 3);
    }
    emit('queryList', {
      pageNo: 1,
      pageSize: 30,
      startTime: startDate.value.startOf('day').format('YYYY-MM-DD HH:mm:ss'),
      endTime: endDate.value.endOf('day').format('YYYY-MM-DD HH:mm:ss'),
      keyword: keyword.value,
      username,
      checked: checked.value,
      status: activeKey.value,
    });
  };
  const changeAdvanced = () => {
    advanced.value = !advanced.value;
    emit('changeAdvanced');
  };
  const confirmCopy = () => {
    btnLoading.value = true;
    emit('confirmCopy', { count: count.value, username: username.value, checked: checked.value });
  };

  // defineExpose
  const { proxy } = getCurrentInstance();
  const queryFinish = (data = '') => {
    if (count.value === 1) {
      proxy.tool.copy(data, data + '已复制');
    } else {
      proxy.tool.copy(data, count.value + '条已复制');
    }
    btnLoading.value = false;
  };
  defineExpose({ queryFinish });
  onMounted(() => {
    queryList();
  });
</script>
<style scoped></style>
