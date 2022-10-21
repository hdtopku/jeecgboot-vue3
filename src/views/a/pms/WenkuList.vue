<template>
  <a-card size="small">
    <Search
      ref="SearchRef"
      showTop
      showCopy
      showTabs
      @confirm-copy="confirmCopy"
      @query-list="(params) => queryList(params, true)"
      placeholder="粘贴或模糊搜索激活码、用户标识"
      :tabPane="tabPane"
    />
    <WenkuDataList ref="DataListRef" @handle-edit="handleEdit" />
    <!-- 表单区域 -->
    <WenkuModal @register="registerModal" @success="queryList" />
  </a-card>
</template>

<script lang="ts" setup>
  import Search from '/@/views/a/pms/modules/Search.vue';
  import WenkuDataList from './modules/WenkuDataList.vue';
  import WenkuModal from './modules/WenkuModal.vue';
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { getCodes } from '/@/views/a/pms/Wenku.api';
  const SearchRef = ref();
  const confirmCopy = (params) => {
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

  const DataListRef = ref();
  const [registerModal, { openModal }] = useModal();
  const cachedParams = ref();
  const queryList = (newParams = {}, useNewParams = false) => {
    if (useNewParams) {
      cachedParams.value = newParams;
    }
    DataListRef.value.startQuery(cachedParams.value);
  };
  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
      showFooter: true,
    });
  }

  const tabPane = {
    tabs: [
      {
        tabKey: '-1',
        tabName: '已退款',
      },
      {
        tabKey: '1',
        tabName: '已打开',
      },
      {
        tabKey: '0',
        tabName: '刷新',
      },
      {
        tabKey: '3',
        tabName: '已成交',
      },
    ],
    activeKey: '0',
  };
</script>
