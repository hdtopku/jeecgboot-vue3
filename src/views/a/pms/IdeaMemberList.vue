<template>
  <IdeaMemberDataList ref="IdeaMemberDataListRef" />
</template>

<script lang="ts" setup>
  import IdeaMemberDataList from './modules/IdeaMemberDataList.vue';
  import { nextTick, onMounted, ref } from 'vue';
  const IdeaMemberDataListRef = ref();
  onMounted(() => {
    nextTick(() => {
      IdeaMemberDataListRef.value.initQuery({});
    });
  });
</script>
<style scoped></style>
