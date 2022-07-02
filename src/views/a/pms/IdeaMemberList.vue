<template>
  <a-card size="small">
    <IdeaMemberDataList @queryList="queryList" ref="IdeaMemberDataListRef" />
  </a-card>
</template>

<script lang="ts" setup>
  import IdeaMemberDataList from './modules/IdeaMemberDataList.vue';
  import { onMounted, ref } from 'vue';
  const IdeaMemberDataListRef = ref();
  onMounted(() => {
    queryList();
  });
  const queryList = () => {
    IdeaMemberDataListRef.value.initQuery({});
  };
</script>
<style scoped></style>
