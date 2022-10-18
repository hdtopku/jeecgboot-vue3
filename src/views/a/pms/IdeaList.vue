<template>
  <a-card size="small">
    <Search @query-list="(params) => queryList(params, true)" ref="SearchRef" placeholder="粘贴或模糊搜索激活码、用户标识" :tabPane="tabPane">
      <template #suffix>
        <a-button @click="handleAdd" type="primary">新增</a-button>
      </template>
      <template #suffixAdvanced>
        <a-button @click="jumpToJet" type="link">Jet官网</a-button>
      </template>
      <template #left>
        <a-button class="animate__animated animate__heartBeat animate__slower animate__repeat-3" @click="jumpToJet" type="link" danger
          >Jet官网</a-button
        >
      </template>
    </Search>
    <IdeaDataList ref="IdeaDataListRef" @handle-edit="handleEdit" />
  </a-card>
  <!-- 表单区域 -->
  <IdeaModal @register="registerModal" @success="handleSuccess" />
</template>

<script lang="ts" setup name="IdeaList">
  import IdeaDataList from './modules/IdeaDataList.vue';
  import Search from '/@/views/a/pms/modules/Search.vue';
  import { useModal } from '/@/components/Modal';
  import IdeaModal from './modules/IdeaModal.vue';
  import { onMounted, ref } from 'vue';

  const tabPane = {
    tabs: [
      {
        tabKey: '-1',
        tabName: '回收站',
      },
      {
        tabKey: '0',
        tabName: '待使用',
      },
      {
        tabKey: '1',
        tabName: '使用中',
      },
      {
        tabKey: '100',
        tabName: '所有',
      },
    ],
    activeKey: '1',
  };

  const [registerModal, { openModal }] = useModal();

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
  const handleSuccess = () => {
    queryList();
  };
  const IdeaDataListRef = ref();

  const cachedParams = ref();
  const queryList = (newParams = {}, useNewParams = false) => {
    if (useNewParams) {
      cachedParams.value = newParams;
    }
    IdeaDataListRef.value.startQuery(cachedParams.value);
  };
  onMounted(() => {
    queryList();
  });
  const jumpToJet = () => {
    window.open('https://account.jetbrains.com');
  };
</script>
<style scoped></style>
