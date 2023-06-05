<template>
  <a-card size="small">
    <Search
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      showTop
      showCopy
      showPeople
      @confirm-copy="confirmCopy"
      @change-advanced="changeAdvanced"
      placeholder="粘贴或模糊搜索激活码、用户标识"
      :tabPane="tabPane"
    >
      <template #left> </template>
    </Search>
    <IdeaCrackDataList @handle-edit="handleEdit" ref="IdeaCrackDataListRef" class="w-full" />
    <!-- 表单区域 -->
    <AmModal @register="registerModal" @success="queryList" />
  </a-card>
</template>
<script lang="ts" setup name="AmList">
  import { ref } from 'vue';
  import IdeaCrackDataList from '/@/views/a/pms/idea/datalist/IdeaCrackDataList.vue';
  import { getCodes } from '/@/views/a/pms/idea/api/IdeaCrack.api';
  import AmModal from '../am/modules/AmModal.vue';
  import Search from '/@/views/a/common/Search.vue';
  import { useModal } from '/@/components/Modal';
  const [registerModal, { openModal }] = useModal();
  const IdeaCrackDataListRef = ref();
  const SearchRef = ref();
  const queryParams = ref();
  const queryList = (params = {}, fromSearch = false) => {
    if (fromSearch) {
      queryParams.value = params;
    } else {
      params = queryParams.value;
    }
    IdeaCrackDataListRef.value.startQuery(params);
  };
  /**
   * 编辑事件
   */
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
        tabName: '销毁',
      },
      {
        tabKey: '0',
        tabName: '刷新',
      },
      {
        tabKey: '1',
        tabName: '成交',
      },
    ],
    activeKey: '0',
  };
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
  const changeAdvanced = () => {
    IdeaCrackDataListRef.value.changeAdvanced();
  };
</script>
<style scoped lang="less">
  :deep(.ant-select) {
    width: 90px !important;
    .ant-select-selector {
      width: 90px !important;
    }
  }
</style>
