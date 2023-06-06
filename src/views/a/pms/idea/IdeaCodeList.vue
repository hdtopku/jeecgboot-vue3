<template>
  <a-card size="small">
    <Search
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      showTop
      showPeople
      @change-advanced="changeAdvanced"
      placeholder="粘贴或模糊搜索激活码、用户标识"
      :tabPane="tabPane"
    >
      <template #suffix>
        <a-button
          class="animate__animated animate__heartBeat animate__slower animate__repeat-3"
          @click="showDrawer"
          type="link"
          danger
          v-if="codeType === 6 || codeType === 8"
          >激活码管理</a-button
        ><a-button
          class="animate__animated animate__heartBeat animate__slower animate__repeat-3"
          @click="showDrawerAccount"
          type="link"
          danger
          v-if="codeType === 8"
          >账号管理</a-button
        >
      </template>
    </Search>
    <IdeaCodeDataList @handle-edit="handleEdit" ref="IdeaCodeDataListRef" class="w-full" />
  </a-card>

  <a-drawer size="large" v-model:visible="drawerVisible" title="激活码管理" placement="top">
    <IdeaJetCodeList />
  </a-drawer>
  <a-drawer size="large" v-model:visible="drawerAccountVisible" title="账号管理" placement="top">
    <IdeaList />
  </a-drawer>
</template>
<script lang="ts" setup name="IdeaCodeList">
  import { getCurrentInstance, ref } from 'vue';
  import IdeaJetCodeList from './IdeaJetCodeList.vue';
  import IdeaList from './IdeaList.vue';
  import IdeaCodeDataList from '/@/views/a/pms/idea/datalist/IdeaCodeDataList.vue';
  import Search from '/@/views/a/common/Search.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  const codeType = ref();
  let instance = getCurrentInstance();
  instance?.proxy?.bus.on('changeCodeType', (type) => {
    codeType.value = type;
  });
  const IdeaCodeDataListRef = ref();
  const SearchRef = ref();
  const queryParams = ref();
  const drawerVisible = ref(false);
  const drawerAccountVisible = ref(false);
  const showDrawer = () => {
    drawerVisible.value = true;
  };
  const showDrawerAccount = () => {
    drawerAccountVisible.value = true;
  };
  const checked = ref(false);
  checked.value = JSON.parse(localStorage.getItem('searchSwitch:IdeaCodeList') ?? 'false');
  const { createMessage } = useMessage();
  const queryList = (params = {}, fromSearch = false) => {
    if (fromSearch) {
      queryParams.value = params;
    } else {
      params = queryParams.value;
    }
    if (checked.value) {
      params.type = 6;
    }
    IdeaCodeDataListRef.value.startQuery(params);
  };
  /**
   * 编辑事件
   */
  const { openModal } = useModal();
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
      // {
      //   tabKey: '0',
      //   tabName: '刷新',
      // },
      {
        tabKey: '1',
        tabName: '刷新',
      },
    ],
    activeKey: '1',
  };
  const changeAdvanced = () => {
    IdeaCodeDataListRef.value.changeAdvanced();
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
