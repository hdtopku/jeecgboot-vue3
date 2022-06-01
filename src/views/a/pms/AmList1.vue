<template>
  <a-card size="small">
    <a-row>
      <a-col :span="16">
        <a-slider v-model:value="count" :min="1" :max="50" />
      </a-col>
      <a-col class="text-center" :span="8">
        <a-button v-show="count === 1" @click="confirmCopy" :loading="btnLoading" placeholder="开始日期" type="primary">复制{{ count }}条</a-button>
        <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
          <a-button v-show="count > 1" :loading="btnLoading" placeholder="开始日期" type="primary">复制{{ count }}条</a-button>
        </a-popconfirm>
      </a-col>
    </a-row>
    <div class="flex flex-wrap justify-evenly">
      <a-space>
        <a-date-picker allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
        <a-date-picker allowClear placeholder="结束日期" :disabled-date="disabledEndDate" v-model:value="endDate" />
      </a-space>
      <a-space class="p-2">
        <a-button @click="clickThisMonth">本月</a-button>
        <a-button @click="clickNearDay(30, 0)">近30天</a-button>
        <a-button @click="clickNearDay(1, 1)">昨天</a-button>
        <a-button @click="clickNearDay(0, 0)">今天</a-button>
      </a-space>
      <a-input ref="inputRef" allowClear v-model:value="keyword" placeholder="粘贴激活链并查询" @search="queryList">
        <template #prefix>
          <a-button @click="clickPaste">粘贴</a-button>
        </template>
        <template #suffix>
          <a-button @click="queryList" type="primary">查询</a-button>
        </template>
      </a-input>
      <a-tabs :animated="false" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="打开" />
        <a-tab-pane key="0" tab="全部" />
        <a-tab-pane key="2" tab="验证" />
        <a-tab-pane key="4" tab="关闭" />
      </a-tabs>
      <AmList ref="AmListRef" class="w-full" />
    </div>
  </a-card>
</template>
<script lang="ts" setup>
  import { getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';
  import moment, { Moment } from 'moment';
  import AmList from './modules/AmList.vue';
  const count = ref<number>(1);
  const startDate = ref<Moment>(moment());
  const endDate = ref<Moment>(moment());
  import { getCodes } from './Am.api';
  import { message } from 'ant-design-vue';

  const disabledStartDate = (current: Moment) => {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  };
  const disabledEndDate = (current: Moment) => {
    return (current && current > moment().endOf('day')) || current.isBefore(startDate.value);
  };

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
  const AmListRef = ref();
  const inputRef = ref();
  const keyword = ref<string>();
  const activeKey = ref('0');

  const queryList = () => {
    let params = { keyword: keyword.value, pageNo: 1, pageSize: 30 };
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
    AmListRef.value.initQuery(params);
  };
  const dealKeyword = () => {
    keyword.value = keyword.value?.trim();
    if (keyword.value != null && keyword.value.indexOf('taojingling.cn?c=') > -1) {
      keyword.value = keyword.value.substring(keyword.value.indexOf('taojingling.cn?c=') + 17);
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
    AmListRef.value.changeActiveKey(activeKey);
  });
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
    startDate.value = moment().startOf('month');
  };
  const clickNearDay = (day, end = 0) => {
    startDate.value = moment().subtract(day, 'day');
    endDate.value = moment().subtract(end, 'day');
  };
  onMounted(() => {
    nextTick(() => {
      queryList();
    });
  });
</script>
<style scoped></style>
