<template>
  <a-card size="small">
    <a-button type="primary" @click="handleAdd">新增</a-button>
    <a-button type="link" shape="round"><LinkOutlined />Jetbrains </a-button>
    <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__fast">
      <a-space class="mb-2">
        <a-date-picker allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
        <a-date-picker allowClear placeholder="结束日期" :disabled-date="disabledEndDate" v-model:value="endDate" />
      </a-space>
    </transition>
    <IdeaDataList ref="IdeaDataListRef" @handleEdit="handleEdit" />
  </a-card>
  <!-- 表单区域 -->
  <IdeaModal @register="registerModal" @success="handleSuccess" />
</template>

<script lang="ts" setup>
  import IdeaDataList from './modules/IdeaDataList.vue';
  import { LinkOutlined } from '@ant-design/icons-vue';

  import { useModal } from '/@/components/Modal';
  import IdeaModal from './modules/IdeaModal.vue';
  import { ref } from 'vue';
  import moment, { Moment } from 'moment';
  const startDate = ref<Moment>(moment());
  const endDate = ref<Moment>(moment());
  const disabledStartDate = (current: Moment) => {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  };
  const disabledEndDate = (current: Moment) => {
    return (current && current > moment().endOf('day')) || current.isBefore(startDate.value);
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
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30 };
    IdeaDataListRef.value.initQuery(params);
  };
</script>
<style scoped></style>
