<template>
  <a-card size="small">
    <div class="flex flex-wrap justify-evenly">
      <a-space class="mb-2">
        <a-button type="link" @click="advanced = !advanced">
          <DownOutlined v-if="advanced" />
          <UpOutlined v-else />
        </a-button>
        <a-button :type="!rangeQuery && dayOff === 100 ? 'link' : ''" @click="clickNearDay(100)">本月</a-button>
        <a-button :type="!rangeQuery && dayOff === 30 ? 'link' : ''" @click="clickNearDay(30, 0)">近30天</a-button>
        <a-button :type="!rangeQuery && dayOff === 1 ? 'link' : ''" @click="clickNearDay(1, 1)">昨天</a-button>
        <a-button :type="!rangeQuery && dayOff === 0 ? 'link' : ''" @click="clickNearDay(0, 0)">今天</a-button>
      </a-space>
      <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__faster">
        <a-space v-show="advanced" class="mb-2">
          <a-date-picker @change="clickDatePicker" allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
          <a-date-picker
            @change="clickDatePicker(false)"
            allowClear
            placeholder="结束日期"
            :disabled-date="disabledEndDate"
            v-model:value="endDate"
          />
        </a-space>
      </transition>
      <a-input ref="inputRef" allowClear v-model:value="keyword" placeholder="粘贴激活链，或模糊搜索激活码" @search="queryList" size="large">
        <template #prefix>
          <span v-if="advanced">
            <a-select
              v-if="hasPermission('am:selectUser')"
              :loading="userLoading"
              allowClear
              ref="select"
              v-model:value="selectName"
              style="width: 120px"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option :key="item.id" v-for="item in userList" :value="item.username">{{ item.realname }}</a-select-option>
              <template v-if="userLoading" #notFoundContent>
                <a-spin size="small" />
              </template>
            </a-select>
            <a-button @click="clickPaste">粘贴</a-button>
          </span>
        </template>
        <template #suffix> </template>
      </a-input>
      <a-row class="w-full mt-2">
        <a-col :span="4">
          <a-button class="animate__animated animate__heartBeat animate__repeat-3" @click="clickHelp" type="link" danger>帮助</a-button>
        </a-col>
        <a-col :span="12">
          <a-slider v-model:value="count" :min="1" :max="500" />
        </a-col>
        <a-col class="text-center" :span="8">
          <a-button v-show="count === 1" @click="confirmCopy" :loading="btnLoading" placeholder="开始日期" :type="isSelf ? 'primary' : 'error'"
            >复制{{ count }}条</a-button
          >
          <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
            <a-button v-show="count > 1" :loading="btnLoading" placeholder="开始日期" :type="isSelf ? 'primary' : 'error'"
              >复制{{ count }}条</a-button
            >
          </a-popconfirm>
        </a-col>
      </a-row>
      <a-tabs :animated="false" v-model:activeKey="activeKey" @tabClick="tabClick">
        <a-tab-pane key="4" tab="退款" />
        <a-tab-pane key="1" tab="打开" />
        <a-tab-pane key="0">
          <template #tab>
            <span> 刷新 </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="2" tab="成交" />
      </a-tabs>
    </div>
    <AmDataList ref="AmDataListRef" class="w-full" />
  </a-card>
</template>
<script lang="ts" setup>
  import { getCurrentInstance, onMounted, ref, watch } from 'vue';
  import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
  import { getCodes } from './Am.api';
  import { message } from 'ant-design-vue';
  import { LOGIN_INFO_KEY } from '/@/enums/cacheEnum';
  import { getAuthCache } from '/@/utils/auth';
  import { getUserList } from '/@/api/common/api';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useRouter } from 'vue-router';
  import AmDataList from './modules/AmDataList.vue';
  import _ from 'lodash-es';
  const advanced = ref(false);
  import dayjs, { Dayjs } from 'dayjs';
  const count = ref<number>(1);
  const startDate = ref<Dayjs>(dayjs());
  const endDate = ref<Dayjs>(dayjs());
  const disabledStartDate = (current: Dayjs) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf('day');
  };
  const disabledEndDate = (current: Dayjs) => {
    return (current && current > moment().endOf('day')) || current.isBefore(startDate.value);
  };
  const dayOff = ref(0);
  const endOff = ref(0);
  const { proxy } = getCurrentInstance();
  const btnLoading = ref(false);
  const confirmCopy = () => {
    btnLoading.value = true;
    getCodes(
      { count: count.value, username },
      (data) => {
        if (count.value === 1) {
          proxy.tool.copy(data, data.substring(27) + '已复制');
        } else {
          proxy.tool.copy(data, count.value + '条已复制');
        }
        btnLoading.value = false;
      },
      () => (btnLoading.value = false)
    );
  };
  // let data = ref({});
  const AmDataListRef = ref();
  const inputRef = ref();
  const keyword = ref<string>();
  const activeKey = ref('0');
  const { hasPermission } = usePermission();
  const router = useRouter();
  const queryList = () => {
    let params = { keyword: keyword.value, pageNo: 1, pageSize: 30, username };
    if (startDate.value != null) {
      params.startTime = startDate.value.startOf('day').format('YYYY-MM-DD HH:mm:ss');
    }
    if (endDate.value != null) {
      params.endTime = endDate.value.endOf('day').format('YYYY-MM-DD HH:mm:ss');
    }
    if (activeKey.value != null || activeKey.value !== '0') {
      if (activeKey.value === '4') {
        params.valid = -1;
      } else {
        params.status = activeKey.value;
      }
    }
    AmDataListRef.value.initQuery(params);
  };
  const debounceQueryList = _.debounce(queryList, 0, { trailing: true });

  const dealKeyword = () => {
    keyword.value = keyword.value?.trim();
    if (keyword.value != null && keyword.value.indexOf('c/') > -1) {
      keyword.value = keyword.value.substring(keyword.value.indexOf('c/') + 2, keyword.value.indexOf('c/') + 8);
    }
    queryList();
  };
  const rangeQuery = ref(false);
  watch(keyword, _.debounce(dealKeyword, 0, { trailing: true }));
  const clickDatePicker = (isStart = true) => {
    if (isStart && startDate.value != null && startDate.value.isAfter(endDate.value)) {
      endDate.value = startDate.value;
    }
    rangeQuery.value = true;
    debounceQueryList();
  };
  const clickHelp = () => {
    router.push('/pms/am/help');
  };
  const clickPaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        keyword.value = text;
        dealKeyword();
      })
      .catch((err) => {
        if (err instanceof DOMException) {
          message.error('请手动粘贴，或允许读取剪贴板，失败原因：' + err);
        } else {
          message.error('请手动粘贴，失败原因：' + err);
        }
      });
  };
  const clickNearDay = (day, end = 0) => {
    dayOff.value = day;
    rangeQuery.value = false;
    if (dayOff.value === 100) {
      startDate.value = dayjs().startOf('month');
      debounceQueryList();
      return;
    }
    endOff.value = end;
    startDate.value = dayjs().subtract(day, 'day');
    endDate.value = dayjs().subtract(end, 'day');
    debounceQueryList();
  };
  const tabClick = (tabKey) => {
    activeKey.value = tabKey;
    if (rangeQuery.value) {
      queryList();
    } else {
      clickNearDay(dayOff.value, endOff.value);
    }
    AmDataListRef.value.changeActiveKey(tabKey);
  };
  onMounted(() => {
    queryList();
  });
  const loginInfo = getAuthCache(LOGIN_INFO_KEY);
  const selectName = ref();
  let { username, realname } = loginInfo?.userInfo;
  const originUsername = username;
  selectName.value = realname;
  const userLoading = ref(false);
  const userList = ref([]);
  const focus = () => {
    if (userList.value.length === 0) {
      userLoading.value = true;
      getUserList({}).then((res) => {
        userList.value = res.records;
        userLoading.value = false;
      });
    }
  };
  const isSelf = ref(true);
  const handleChange = (value) => {
    username = value;
    isSelf.value = originUsername === selectName.value;
    if (value == null) {
      selectName.value = '所有人';
    }
    queryList();
  };
</script>
<style scoped lang="less">
  ::v-deep(.ant-select) {
    width: 90px !important;
    .ant-select-selector {
      width: 90px !important;
    }
  }
</style>
