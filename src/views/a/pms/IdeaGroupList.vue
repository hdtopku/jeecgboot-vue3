<template>
  <a-card>
    <div class="flex flex-wrap justify-evenly">
      <a-space class="mb-2">
        <a-button type="link" @click="router.push('/pms/idea')">idea列表</a-button>
        <a-select style="width: 150px" v-model:value="currentGroupId" @change="updateCurGroup">
          <a-select-option v-for="(item, index) in ideaGroup" :key="item.id" :value="item.id"> #{{ index + 1 }}|{{ item.groupName }} </a-select-option>
        </a-select>
      </a-space>
      <a-space class="mb-2">
        <a-button type="primary" @click="handleAdd">新增</a-button>
        <a-input v-model:value="keyword" allowClear>
          <template #suffix>
            <a-button @click="queryList" type="primary">查询</a-button>
          </template>
        </a-input>
      </a-space>
    </div>
    <div class="flex flex-wrap justify-evenly">
      <a-tabs :animated="false" v-model:activeKey="activeKey">
        <a-tab-pane key="-1" tab="失效" />
        <a-tab-pane key="0" tab="正常" />
        <a-tab-pane key="2" tab="全部" />
      </a-tabs>
    </div>
    <IdeaGroupDataList :currentGroupId="currentGroupId" ref="IdeaGroupDataListRef" :ideaList="ideaList" @handleEdit="handleEdit" />
  </a-card>
  <IdeaGroupModal :ideaList="ideaList" @register="registerModal" @success="handleSuccess" />
</template>

<script lang="ts" setup>
  import IdeaGroupDataList from './modules/IdeaGroupDataList.vue';
  import IdeaGroupModal from './modules/IdeaGroupModal.vue';
  import { useModal } from '/@/components/Modal';
  import { onMounted, ref, watch } from 'vue';
  import { getList } from '/@/views/a/pms/Idea.api';
  import { list as listGroup, updateCurrentGroup } from '/@/views/a/pms/IdeaGroup.api';
  import moment from 'moment';
  import { router } from '/@/router';
  const [registerModal, { openModal }] = useModal();
  import { useMessage } from '/@/hooks/web/useMessage';
  const { createMessage } = useMessage();
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
  const keyword = ref();
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30 };
    if (activeKey.value === '0' || activeKey.value === '-1') {
      params.status = activeKey.value;
    } else {
      params.status = null;
    }
    if (keyword.value != null && keyword.value.trim() !== '') {
      params.groupName = '*' + keyword.value + '*';
    }
    IdeaGroupDataListRef.value.initQuery(params);
  };
  watch(keyword, queryList);
  const queryIdeaList = () => {
    getList({ pageSize: 1000, status: 0, startTime: moment().subtract(1.5, 'year').format('YYYY-MM-DD HH:mm:ss') }).then((res) => {
      ideaList.value = res.records;
    });
  };
  const ideaGroup = ref();
  const queryIdeaGroupList = () => {
    listGroup({ pageSize: 1000, status: 0 }).then((res) => {
      ideaGroup.value = res?.groups?.records;
      currentGroupId.value = res.currentGroupId;
    });
  };
  const updateLoading = ref(false);
  const currentGroupId = ref();
  const updateCurGroup = () => {
    updateLoading.value = true;
    updateCurrentGroup({ groupId: currentGroupId.value })
      .then(() => {
        createMessage.success('更新成功');
      })
      .finally(() => {
        updateLoading.value = false;
      });
  };
  const handleSuccess = () => {
    queryIdeaGroupList();
    queryList();
  };
  onMounted(() => {
    queryIdeaList();
    queryIdeaGroupList();
    queryList();
  });
  const ideaList = ref();
</script>
