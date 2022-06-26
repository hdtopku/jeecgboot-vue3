<!--<CommonList ref="CommonListRef">-->
<!--<template #listHeader></template>-->
<!--<template #left="{ item, index }"></template>-->
<!--<template #title="{ item }"></template>-->
<!--<template #center="{ item }"></template>-->
<!--<template #right="{ item }"></template>-->
<!--</CommonList>-->
<template>
  <div class="flex justify-between">
    <a-typography-title :level="5">共{{ dataList?.total ?? 0 }}条</a-typography-title>
    <slot name="listHeader"></slot>
  </div>
  <a-list :loading="loading" :data-source="dataList?.records">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <slot name="left" :item="item" :index="index"></slot>
          </template>
          <template #title>
            <slot name="title" :item="item" :index="index"></slot>
          </template>
          <template #description>
            <slot name="center" :item="item" :index="index"></slot>
          </template>
        </a-list-item-meta>
        <slot name="right" :item="item" :index="index"></slot>
      </a-list-item>
    </template>
    <template #loadMore>
      <div v-if="dataList?.total > 0" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <span v-if="finished">加载完成({{ dataList?.records?.length }}/{{ dataList?.total }})</span>
        <span v-else>
          <a-spin v-if="loadingMore" />
          <a-button v-else @click="handleLoadMore">加载更多({{ dataList?.records?.length }}/{{ dataList?.total }})</a-button>
        </span>
      </div>
    </template>
  </a-list>
</template>

<script setup lang="ts">
  // const CommonListRef = ref();
  // const initQuery = (params = {}) => {
  //   CommonListRef.value.initData(getList, params);
  // };
  import { computed, ref } from 'vue';
  const loading = ref(false);
  const loadingMore = ref(false);
  const dataList = ref();
  const listFunction = ref();
  const queryParams = ref();
  const initData = (list: Function, params: { pageNo: 1; pageSize: 30 }, loadMore = false) => {
    listFunction.value = list;
    queryParams.value = params;
    if (loadMore) {
      loadingMore.value = true;
    } else {
      loading.value = true;
      params.pageNo = 1;
    }
    list(params)
      .then((res) => {
        params.pageNo = res.current + 1;
        if (res.current > 1 && loadMore) {
          dataList.value.records.push(...res.records);
          return;
        }
        dataList.value = res;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        loading.value = false;
        loadingMore.value = false;
      });
  };
  const handleLoadMore = () => {
    initData(listFunction.value, queryParams.value, true);
  };
  const finished = computed(() => {
    return dataList?.value?.total === 0 || (dataList?.value?.records?.length >= dataList?.value?.total ?? false);
  });
  defineExpose({ initData });
</script>
<style scoped></style>
