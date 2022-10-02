<template>
  <a-card size="small">
    <Search
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      showTop
      showCopy
      showTabs
      showSwitch
      @confirm-copy="confirmCopy"
      placeholder="粘贴或模糊搜索激活码、用户标识"
      :tabs="tabs"
    >
      <template #suffix> </template>
      <template #left>
        <a-button
          class="animate__animated animate__heartBeat animate__slower animate__repeat-3"
          @click="router.push('/pms/am/help')"
          type="link"
          danger
          >帮助</a-button
        >
      </template>
    </Search>
    <AmDataList ref="AmDataListRef" class="w-full" />
  </a-card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import AmDataList from '/@/views/a/pms/modules/AmDataList.vue';
  import { getCodes } from '/@/views/a/pms/Am.api';
  import Search from '/@/views/a/pms/modules/Search.vue';
  import { router } from '/@/router';

  const AmDataListRef = ref();
  const SearchRef = ref();
  const queryParams = ref();
  const queryList = (params = {}, fromSearch = false) => {
    if (fromSearch) {
      queryParams.value = params;
    } else {
      params = queryParams.value;
    }
    if (params?.checked) {
      params.type = 6;
    }
    AmDataListRef.value.startQuery(params);
  };
  const tabs = [
    {
      tabKey: '-1',
      tabName: '退款',
    },
    {
      tabKey: '1',
      tabName: '打开',
    },
    {
      tabKey: '0',
      tabName: '刷新',
    },
    {
      tabKey: '2',
      tabName: '成交',
    },
  ];
  const confirmCopy = (params) => {
    if (params?.checked) {
      params.type = 6;
    }
    getCodes(
      params,
      (data) => {
        SearchRef.value.queryFinish(data);
      },
      () => {
        SearchRef.value.queryFinish();
      }
    );
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
