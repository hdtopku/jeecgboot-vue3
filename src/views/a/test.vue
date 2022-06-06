<template>
  <a-button type="primary" preIcon="ant-design:plus-outlined" @click="openHandle">选择</a-button>
  <UserSelectModal rowKey="id" @register="registerSelUserModal" @getSelectResult="onSelectOk" />
</template>
<script lang="ts" setup>
  import UserSelectModal from '/@/components/Form/src/jeecg/components/modal/UserSelectModal.vue';
  import { useModal } from '/@/components/Modal';
  // 注册用户选择框
  const [registerSelUserModal, { openModal }] = useModal();

  // 打开用户选择框
  function openHandle() {
    openModal();
  }
  // 选择用户成功
  function onSelectOk(options, values) {
    //处理业务逻辑
    console.log(values);
  }
</script>
