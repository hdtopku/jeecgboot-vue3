<template>
  <a-card size="small">
    <a-row>
      <a-col :span="4">
        <a-button class="animate__animated animate__slideInLeft animate__slower animate__repeat-3" @click="clickHelp" type="link" danger>帮助</a-button>
      </a-col>
      <a-col :span="12">
        <a-slider v-model:value="count" :min="1" :max="500" />
      </a-col>
      <a-col class="text-center" :span="8">
        <a-button v-show="count === 1" @click="confirmCopy" :loading="btnLoading" placeholder="开始日期" type="primary">复制{{ count }}条</a-button>
        <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
          <a-button v-show="count > 1" :loading="btnLoading" placeholder="开始日期" type="primary">复制{{ count }}条</a-button>
        </a-popconfirm>
      </a-col>
    </a-row>
    <div class="flex flex-wrap justify-evenly">
      <a-space class="mb-2">
        <a-button type="link" @click="advanced = !advanced">
          <DownOutlined v-if="advanced" />
          <UpOutlined v-else />
        </a-button>
        <a-button :type="btnNum === 1 ? 'link' : ''" @click="clickThisMonth">本月</a-button>
        <a-button :type="btnNum === 2 ? 'link' : ''" @click="clickNearDay(30, 0)">近30天</a-button>
        <a-button :type="btnNum === 3 ? 'link' : ''" @click="clickNearDay(1, 1)">昨天</a-button>
        <a-button :type="btnNum === 4 ? 'link' : ''" @click="clickNearDay(0, 0)">今天</a-button>
      </a-space>
      <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__fast">
        <a-space v-show="advanced" class="mb-2">
          <a-date-picker allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
          <a-date-picker allowClear placeholder="结束日期" :disabled-date="disabledEndDate" v-model:value="endDate" />
        </a-space>
      </transition>
      <a-input ref="inputRef" allowClear v-model:value="keyword" placeholder="粘贴激活链并查询" @search="queryList">
        <template v-if="advanced" #prefix>
          <a-select v-if="hasPermission('am:selectUser')" :loading="userLoading" allowClear ref="select" v-model:value="selectName" style="width: 120px" @focus="focus" @change="handleChange">
            <a-select-option :key="item.id" v-for="item in userList" :value="item.username">{{ item.realname }}</a-select-option>
            <template v-if="userLoading" #notFoundContent>
              <a-spin size="small" />
            </template>
          </a-select>
          <a-button @click="clickPaste">粘贴</a-button>
        </template>
        <template #suffix>
          <a-button @click="queryList" type="primary">查询</a-button>
        </template>
      </a-input>
      <a-tabs :animated="false" v-model:activeKey="activeKey">
        <a-tab-pane key="4" tab="关闭" />
        <a-tab-pane key="1" tab="打开" />
        <a-tab-pane key="0" tab="全部" />
        <a-tab-pane key="2" tab="验证" />
      </a-tabs>
      <AmDataList ref="AmDataListRef" class="w-full" />
    </div>
  </a-card>
</template>
<script lang="ts" setup>
  import { getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';
  import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
  import { getCodes } from './Am.api';
  import { message } from 'ant-design-vue';
  import { LOGIN_INFO_KEY } from '/@/enums/cacheEnum';
  import { getAuthCache } from '/@/utils/auth';
  import { getUserList } from '/@/api/common/api';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useRouter } from 'vue-router';
  import AmDataList from './modules/AmDataList.vue';

  const advanced = ref(false);
  import moment, { Moment } from 'moment';
  const count = ref<number>(1);
  const startDate = ref<Moment>(moment());
  const endDate = ref<Moment>(moment());
  const disabledStartDate = (current: Moment) => {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  };
  const disabledEndDate = (current: Moment) => {
    return (current && current > moment().endOf('day')) || current.isBefore(startDate.value);
  };
  const btnNum = ref(4);
  const { proxy } = getCurrentInstance();
  const btnLoading = ref(false);
  const confirmCopy = () => {
    btnLoading.value = true;
    getCodes(
      { count: count.value },
      (data) => {
        proxy.tool.copy(data, '复制成功');
        btnLoading.value = false;
      },
      () => (btnLoading.value = false)
    );
  };
  let data = ref({});
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

  const dealKeyword = () => {
    keyword.value = keyword.value?.trim();
    if (keyword.value != null && keyword.value.indexOf('c/') > -1) {
      keyword.value = keyword.value.substring(keyword.value.indexOf('c/') + 2, keyword.value.indexOf('c/') + 8);
    }
    queryList();
  };

  watch(keyword, dealKeyword);
  watch(startDate, () => {
    if (startDate.value != null && startDate.value.isAfter(endDate.value)) {
      endDate.value = startDate.value;
    }
    queryList();
  });
  watch(endDate, queryList);
  watch(activeKey, () => {
    queryList();
    AmDataListRef.value.changeActiveKey(activeKey);
  });
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
  const clickThisMonth = () => {
    btnNum.value = 1;
    startDate.value = moment().startOf('month');
  };
  const clickNearDay = (day, end = 0) => {
    if (day === 30) {
      btnNum.value = 2;
    } else if (day === 1) {
      btnNum.value = 3;
    } else if (day === 0) {
      btnNum.value = 4;
    }
    startDate.value = moment().subtract(day, 'day');
    endDate.value = moment().subtract(end, 'day');
  };
  onMounted(() => {
    queryList();
  });
  const loginInfo = getAuthCache(LOGIN_INFO_KEY);
  const selectName = ref();
  let { username, realname } = loginInfo?.userInfo;
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
  const handleChange = (value) => {
    username = value;
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
