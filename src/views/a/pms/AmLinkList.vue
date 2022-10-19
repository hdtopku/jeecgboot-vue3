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
        <a-button type="warning" @click="copyCode" :loading="copyBtnLoading">复制1条</a-button>
      </template>
    </Search>
    <AmLinkDataList @handle-add="handleAdd" ref="AmLinkDataListRef" @handle-edit="handleEdit" @query-list="queryList" />
    <!-- 表单区域 -->
    <AmLinkModal @register="registerModal" @success="queryList" />
  </a-card>
</template>

<script lang="ts" name="AmLinkList" setup>
  import Search from '/@/views/a/pms/modules/Search.vue';
  import AmLinkDataList from './modules/AmLinkDataList.vue';
  import AmLinkModal from './modules/AmLinkModal.vue';
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
        tabName: '待使用',
      },
      {
        tabKey: '0',
        tabName: '使用中',
      },
      {
        tabKey: '100',
        tabName: '所有',
      },
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
  const AmLinkDataListRef = ref();
  const changeAdvanced = () => {
    AmLinkDataListRef.value.changeAdvanced();
  };
  const copyCode = () => {
    copyBtnLoading.value = true;
    AmLinkDataListRef.value.copyCode().finally(() => {
      copyBtnLoading.value = false;
    });
  };
  const cachedParams = ref();
  const queryList = (newParams = {}, useNewParams = false) => {
    if (useNewParams) {
      cachedParams.value = newParams;
    }
    AmLinkDataListRef.value.startQuery(cachedParams.value);
  };
  onMounted(() => {
    queryList();
  });
</script>
<style scoped></style>
