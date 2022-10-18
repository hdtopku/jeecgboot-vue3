<template>
  <a-card size="small">
    <div size="small" class="w-full">
      <Search
        ref="SearchRef"
        showTop
        showCopy
        showTabs
        @query-list="(params) => queryList(params, true)"
        @change-advanced="changeAdvanced"
        @confirm-copy="confirmCopy"
        placeholder="粘贴或模糊搜索激活码、用户标识"
        :tabPane="tabPane"
      >
        <template #suffixAdvanced>
          <a-button type="link" @click="router.push('/pms/id/list')">账号列表</a-button>
        </template>
        <template #left>
          <div class="pt-1">
            <a-typography-text :copyable="{ text: 'https://www.yuque.com/docs/share/cef44c5f-cb62-4e96-ae03-95e47422a375' }"
              >教程</a-typography-text
            ></div
          >
        </template>
      </Search>
    </div>
    <IdeaMemberDataList ref="IdeaMemberDataListRef" @handle-edit="handleEdit" @query-list="queryList" />
  </a-card>
  <IdeaMemberModal @register="registerModal" @success="queryList" />
</template>

<script lang="ts" setup name="IdeaMemberList">
  import IdeaMemberDataList from './modules/IdeaMemberDataList.vue';
  import IdeaMemberModal from './modules/IdeaMemberModal.vue';
  import Search from '/@/views/a/pms/modules/Search.vue';
  import { ref } from 'vue';
  import { router } from '/@/router';
  import { useModal } from '/@/components/Modal';
  import { getCodes } from './IdeaMember.api';
  const IdeaMemberDataListRef = ref();
  const [registerModal, { openModal }] = useModal();
  const SearchRef = ref();
  const advanced = ref(false);

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
  /**
   * 编辑事件
   */
  const handleEdit = (record: Recordable) => {
    openModal(true, {
      record,
      isUpdate: true,
      showFooter: true,
    });
  };
  const cachedParams = ref();
  const queryList = (newParams = {}, useNewParams = false) => {
    if (useNewParams) {
      cachedParams.value = newParams;
    }
    IdeaMemberDataListRef.value.startQuery(cachedParams.value);
  };
  const tabPane = {
    tabs: [
      {
        tabKey: '-100',
        tabName: '重点',
      },
      {
        tabKey: '-1',
        tabName: '失效',
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
        tabName: '已用',
      },
    ],
    activeKey: '0',
  };
  const changeAdvanced = () => {
    advanced.value = !advanced.value;
    IdeaMemberDataListRef.value.changeAdvanced();
  };
</script>
<style scoped></style>
