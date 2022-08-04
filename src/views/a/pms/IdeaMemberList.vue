<template>
  <a-card size="small">
    <div>
      <a-space class="mt-2">
        <a-button type="link" @click="router.push('/pms/idea')">idea分组</a-button>
        <a-button type="link" @click="router.push('/pms/idea')">idea列表</a-button>
      </a-space>
      <div class="mb-2">
        <a-button type="primary" @click="handleCopy">复制1条</a-button>
      </div>
      <a-input v-model:value="keyword" placeholder="输入激活码或用户标识查询" allowClear>
        <template #suffix>
          <a-button @click="queryList" type="primary">查询</a-button>
        </template>
      </a-input>
    </div>
    <div class="flex flex-wrap justify-evenly">
      <a-tabs :animated="false" v-model:activeKey="activeKey">
        <a-tab-pane key="-1" tab="失效" />
        <a-tab-pane key="0" tab="正常" />
        <a-tab-pane key="2" tab="全部" />
      </a-tabs>
    </div>
    <IdeaMemberDataList ref="IdeaMemberDataListRef" @handleEdit="handleEdit" @queryList="queryList" />
  </a-card>
  <IdeaMemberModal @register="registerModal" @success="queryList" />
</template>

<script lang="ts" setup>
  import IdeaMemberDataList from './modules/IdeaMemberDataList.vue';
  import IdeaMemberModal from './modules/IdeaMemberModal.vue';
  import { onMounted, ref, watch } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { router } from '/@/router';
  const IdeaMemberDataListRef = ref();
  const [registerModal, { openModal }] = useModal();
  import { getCodes } from './IdeaMember.api';
  onMounted(() => {
    queryList();
  });
  const activeKey = ref('0');
  watch(activeKey, () => {
    IdeaMemberDataListRef.value.changeActiveKey(activeKey);
    queryList();
  });
  const keyword = ref();
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
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30 };
    if (activeKey.value === '0' || activeKey.value === '-1') {
      params.status = activeKey.value;
    } else {
      params.status = null;
    }
    if (keyword.value != null && keyword.value.trim() !== '') {
      params.keyword = keyword.value;
    }
    IdeaMemberDataListRef.value.initQuery(params);
  };
  const handleCopy = () => {
    getCodes(
      {},
      (res) => {
        console.log(res);
      },
      () => {}
    );
  };
  watch(keyword, queryList);
</script>
<style scoped></style>
