<template>
  <CommonList ref="CommonListRef">
    <template #header></template>
    <template #top="{ item }">
      <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
      {{ item.name }}
    </template>
    <template #bottom="{ item }">
      <div
        ><a-tag color="error">售价</a-tag>
        <span class="text-red-500 text-3xl">￥{{ item.price }}</span>
      </div>
      <div><a-tag>进价</a-tag>￥{{ item.cost }}</div>
      <div
        ><a-tag>备注</a-tag>
        一袋500kg
      </div>
    </template>
    <template #left="{ item, index }"> </template>
    <template #right="{ item }">
      <div>
        <img style="width: 100px" :src="item.pic" />
      </div>
    </template>
    <template #operate="{ item, index }"> </template>
  </CommonList>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getList } from '/@/views/a/pjlh/Product.api';
  const emit = defineEmits(['queryList', 'handleEdit']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  const CommonListRef = ref();
  const initQuery = (params = {}) => {
    CommonListRef.value.initData(getList, params);
  };
  defineExpose({ initQuery });
</script>
