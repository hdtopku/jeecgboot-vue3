<template>
  <a-card size="small">
    <a-select ref="select" v-model:value="value1" style="width: 120px" @change="handleChange">
      <a-select-option v-for="item in ideaGroupList" :key="item.id" :value="item.id"> {{ item.groupName }} </a-select-option>
    </a-select>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { list } from './IdeaGroup.api';

  const visible = ref(false);
  const ideaGroupList = ref([]);
  // /**
  //  * 新增事件
  //  */
  const handleAdd = () => {
    visible.value = true;
  };
  const handleChange = () => {};
  const getIdeaGroupList = () => {
    list({}).then((res) => {
      ideaGroupList.value = res.records;
    });
  };
  getIdeaGroupList();
</script>
<style scoped></style>
