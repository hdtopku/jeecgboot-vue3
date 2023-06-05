<template>
  <a-card size="small">
    <Search
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      showTop
      showCopy
      showPeople
      switchName="switch:AmList"
      @confirm-copy="confirmCopy"
      placeholder="粘贴或模糊搜索激活码、用户标识"
      :tabPane="tabPane"
    >
      <template #left>
        <a-button
          class="animate__animated animate__heartBeat animate__slower animate__repeat-3"
          @click="router.push('/pms/am/help')"
          type="link"
          danger
          >帮助</a-button
        >
      </template>
      <template #suffixAdvanced>
        <span v-if="hasPermission('link:switch')">
          <a-button class="animate__animated animate__heartBeat animate__slower animate__repeat-3" @click="showDrawer" type="link" danger
            >激活链</a-button
          >
        </span>
      </template>
      <template #suffix> <a-switch @click="changeSwitch" v-model:checked="checked" /> </template>
    </Search>
    <AmDataList @handle-edit="handleEdit" ref="AmDataListRef" class="w-full" />
    <!-- 表单区域 -->
    <AmModal @register="registerModal" @success="queryList" />
    <a-drawer size="large" v-model:visible="drawerVisible" title="AM激活链管理" placement="top">
      <AmLinkList />
    </a-drawer>
  </a-card>
</template>
<script lang="ts" setup name="AmList">
  import { ref } from 'vue';
  import AmDataList from '/@/views/a/pms/am/datalist/AmDataList.vue';
  import AmLinkList from './AmLinkList.vue';
  import { getCodes } from '/@/views/a/pms/am/api/Am.api';
  import AmModal from './modules/AmModal.vue';
  import Search from '/@/views/a/common/Search.vue';
  import { router } from '/@/router';
  import { useModal } from '/@/components/Modal';
  import { usePermission } from '/@/hooks/web/usePermission';
  const { hasPermission } = usePermission();
  const checked = ref(false);
  checked.value = JSON.parse(localStorage.getItem('searchSwitch:AmList') ?? 'false');
  const changeSwitch = () => {
    localStorage.setItem('searchSwitch:AmList', JSON.stringify(checked.value));
    queryList();
  };
  const drawerVisible = ref(false);
  const showDrawer = () => {
    drawerVisible.value = true;
  };
  const [registerModal, { openModal }] = useModal();
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
    ],
    activeKey: '0',
  };
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
  :deep(.ant-select) {
    width: 90px !important;
    .ant-select-selector {
      width: 90px !important;
    }
  }
</style>
