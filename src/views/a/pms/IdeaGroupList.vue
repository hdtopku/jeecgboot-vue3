<template>
  <a-card>
    <a-button type="link" @click="jumpToAccount">idea账号</a-button>
    <a-button type="primary" @click="handleAdd">新增</a-button>
    <div class="flex flex-wrap justify-evenly">
      <a-tabs :animated="false" v-model:activeKey="activeKey">
        <a-tab-pane key="-1" tab="失效" />
        <a-tab-pane key="0" tab="正常" />
        <a-tab-pane key="2" tab="全部" />
      </a-tabs>
    </div>
    <IdeaGroupDataList ref="IdeaGroupDataListRef" :ideaList="ideaList" @handleEdit="handleEdit" />
  </a-card>
  <IdeaGroupModal :ideaList="ideaList" @register="registerModal" @success="queryList" />
</template>

<script lang="ts" setup>
  import IdeaGroupDataList from './modules/IdeaGroupDataList.vue';
  import IdeaGroupModal from './modules/IdeaGroupModal.vue';
  import { useModal } from '/@/components/Modal';
  import { onMounted, ref, watch } from 'vue';
  import { getList } from '/@/views/a/pms/Idea.api';
  import moment from 'moment';
  import { router } from '/@/router';
  const [registerModal, { openModal }] = useModal();
  const jumpToAccount = () => {
    router.push('/pms/idea');
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
  const handleAdd = (record: Recordable) => {
    openModal(true, {
      record,
      isUpdate: false,
      showFooter: true,
    });
  };
  const IdeaGroupDataListRef = ref();
  const activeKey = ref('0');
  watch(activeKey, () => {
    IdeaGroupDataListRef.value.changeActiveKey(activeKey);
    queryList();
  });
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30 };
    if (activeKey.value === '0' || activeKey.value === '-1') {
      params.status = activeKey.value;
    } else {
      params.status = null;
    }
    IdeaGroupDataListRef.value.initQuery(params);
  };
  onMounted(() => {
    queryList();
  });
  const ideaList = ref();
  const queryIdeaList = () => {
    getList({ pageSize: 1000, status: 0, startTime: moment().subtract(1.5, 'year').format('YYYY-MM-DD HH:mm:ss') }).then((res) => {
      ideaList.value = res.records;
    });
  };
  queryIdeaList();
</script>
