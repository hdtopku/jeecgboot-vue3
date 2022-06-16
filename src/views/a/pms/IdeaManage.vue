<template>
  <a-button @click="handleAdd">新增</a-button>
  <!--  <IdeaModal @register="registerModal" />-->
  <BasicDrawer @register="registerDrawer" v-bind="$attrs" title="Drawer Title" width="100%"> Drawer Info. </BasicDrawer>
</template>

<script lang="ts" setup>
  import IdeaModal from './modules/IdeaModal.vue';
  import { useModal } from '/@/components/Modal';
  const [registerModal, { openModal }] = useModal();
  import { BasicDrawer, useDrawer, useDrawerInner } from '/@/components/Drawer';
  const [registerDrawer, { setDrawerProps, openDrawer }] = useDrawer();

  // step1 引入useDrawerAdaptiveWidth方法
  import { useDrawerAdaptiveWidth } from '/@/hooks/jeecg/useAdaptiveWidth';
  // step2 获取到adaptiveWidth
  /**
   * 新增事件
   */
  function handleAdd() {
    openDrawer(true, {
      isUpdate: false,
      showFooter: true,
    });
  }
</script>
<style scoped></style>
