<template>
  <a-card size="small">
    <div>
      <a-select ref="select" v-model:value="value1" style="width: 120px" @focus="getLinks" @change="handleChange">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </div>
    <Search
      @change-advanced="changeAdvanced"
      showTabs
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      placeholder="模糊搜索"
      :tabs="tabs"
    >
      <template #suffix>
        <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button>
      </template>
    </Search>
    <AmLinkDataList ref="AmLinkDataListRef" @handle-edit="handleEdit" @query-list="queryList" />
    <!-- 表单区域 -->
    <AmLinkModal @register="registerModal" @success="queryList" />
  </a-card>
</template>

<script lang="ts" name="pms-amLink" setup>
  import Search from '/@/views/a/pms/modules/Search.vue';
  import AmLinkDataList from './modules/AmLinkDataList.vue';
  import AmLinkModal from './modules/AmLinkModal.vue';
  import { onMounted, ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  const [registerModal, { openModal }] = useModal();
  import { getList } from './AmLink.api';
  const currAdvancedLink = () => {};
  const currentLink = () => {};

  const getLinks = () => {
    getList().then((res) => {
      console.log(res);
    });
  };

  const tabs = [
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
  ];

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
