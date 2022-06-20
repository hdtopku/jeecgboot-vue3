<template>
  <a-list :data-source="dataList.records">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <div><a-tag>账号</a-tag>{{ item.account }} <a-tag>密码</a-tag>{{ item.password }}</div>
            <div><a-tag>激活时间</a-tag>{{ item.activeTime }}</div>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
  import { list } from '../Idea.api';
  import { ref } from 'vue';
  const dataList = ref();
  list({}).then((res) => {
    dataList.value = res;
  });
</script>

<style scoped></style>
