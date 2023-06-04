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
      <template #suffixAdvanced>
        <a-button class="animate__animated animate__heartBeat animate__slower animate__repeat-3" @click="showDrawer" type="link" danger
          >激活码</a-button
        ></template
      >
      <template #suffix>
        <a-switch @change="changeSwitch" v-model:checked="checked">
          <template #checkedChildren>
            <span class="font-bold">jc激活码版</span>
          </template>
          <template #unCheckedChildren>
            <span class="text-red-600 font-bold">jb插件激活</span>
          </template>
        </a-switch>
      </template>
    </Search>
    <IdeaCodeDataList @handle-edit="handleEdit" ref="IdeaCodeDataListRef" class="w-full" />
  </a-card>

  <a-drawer size="large" v-model:visible="drawerVisible" title="激活码管理" placement="top">
    <IdeaJetCodeList />
  </a-drawer>
</template>
<script lang="ts" setup name="IdeaCodeList">
  import { ref } from 'vue';
  import IdeaJetCodeList from './IdeaJetCodeList.vue';
  import IdeaCodeDataList from '/@/views/a/pms/idea/datalist/IdeaCodeDataList.vue';
  import { getCodes } from '/@/views/a/pms/idea/api/IdeaCode.api';
  import Search from '/@/views/a/common/Search.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  const IdeaCodeDataListRef = ref();
  const SearchRef = ref();
  const queryParams = ref();
  const drawerVisible = ref(false);
  const showDrawer = () => {
    drawerVisible.value = true;
  };
  const checked = ref(false);
  checked.value = JSON.parse(localStorage.getItem('searchSwitch:IdeaCodeList') ?? 'false');
  const { createMessage } = useMessage();
  const changeSwitch = () => {
    localStorage.setItem('searchSwitch:IdeaCodeList', JSON.stringify(checked.value));
    if (checked.value) {
      createMessage.success('已切换至：激活码版');
    } else {
      createMessage.success('已切换至：插件激活');
    }
  };
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
  const confirmCopy = (params) => {
    if (checked.value) {
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
