<template>
  <a-card size="small">
    <Search
      @change-advanced="changeAdvanced"
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      placeholder="模糊搜索"
      :tabPane="tabPane"
    >
      <template #suffixAdvanced>
        <a-button type="primary" @click="handleAdd">新增</a-button>
      </template>
    </Search>
    <IdeaJetCodeDataList @handle-add="handleAdd" ref="IdeaJetCodeDataListRef" @handle-edit="handleEdit" @query-list="queryList" />
    <!-- 表单区域 -->
    <IdeaJetCodeModal @register="registerModal" @success="queryList" />
  </a-card>
</template>

<script lang="ts" name="IdeaJetCodeList" setup>
  import Search from '/@/views/a/common/Search.vue';
  import IdeaJetCodeDataList from './datalist/IdeaJetCodeDataList.vue';
  import IdeaJetCodeModal from './modules/IdeaJetCodeModal.vue';
  import { onMounted, ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  const [registerModal, { openModal }] = useModal();
  const copyBtnLoading = ref(false);
  const tabPane = {
    tabs: [
      {
        tabKey: '-1',
        tabName: '回收站',
      },
      {
        tabKey: '1',
        tabName: '备用',
      },
      {
        tabKey: '0',
        tabName: '使用中',
      },
      // {
      //   tabKey: '100',
      //   tabName: '所有',
      // },
    ],
    activeKey: '0',
  };

  /**
   * 新增事件
   */
  function handleAdd() {
    openModal(true, {
      isUpdate: false,
      showFooter: true,
    });
  }
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
  const IdeaJetCodeDataListRef = ref();
  const changeAdvanced = () => {
    IdeaJetCodeDataListRef.value.changeAdvanced();
  };
  const copyCode = () => {
    copyBtnLoading.value = true;
    IdeaJetCodeDataListRef.value.copyCode().finally(() => {
      copyBtnLoading.value = false;
    });
  };
  const cachedParams = ref();
  const queryList = (newParams = {}, useNewParams = false) => {
    if (useNewParams) {
      cachedParams.value = newParams;
    }
    IdeaJetCodeDataListRef.value.startQuery(cachedParams.value);
  };
  onMounted(() => {
    queryList();
  });
</script>
<style scoped></style>
