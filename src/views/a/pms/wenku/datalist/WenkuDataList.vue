<template>
  <CommonList ref="CommonListRef">
    <template #operate="{ item }">
      <a-menu>
        <a-menu-item v-if="item?.status !== 0" @click="setTop(item.id)">
          <a-button type="warning" ghost size="small">置顶</a-button>
        </a-menu-item>
        <a-menu-item @click="handleEdit(item)">
          <a-button type="link" size="small">编辑</a-button>
        </a-menu-item>
      </a-menu>
    </template>
    <template #left="{ item }">
      <div>
        <a-typography-text copyable>
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item?.code }}</span>
        </a-typography-text>
      </div>
    </template>
    <template #top="{ item }">
      <div>
        <a-tag>邮箱</a-tag>
        <a-typography-text copyable>
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-red-500 font-medium'"> {{ item?.email }}</span>
        </a-typography-text>
      </div>
      <div>
        <a-tag>链接</a-tag>
        <a-typography-text copyable>
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-red-500 font-medium'"> {{ item?.link }}</span>
        </a-typography-text>
      </div>
    </template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { getList, saveOrUpdate } from '../api/Wenku.api';
  import CommonList from '../../../common/CommonList.vue';
  import { ref } from 'vue';
  const CommonListRef = ref();
  const queryParams = ref(); // initQuery使用
  const activeKey = ref('0');
  const startQuery = (params = { pageNo: 1, pageSize: 30, status: activeKey.value }) => {
    queryParams.value = params;
    activeKey.value = params?.status;
    CommonListRef.value.execQuery(getList, params);
  };
  const emit = defineEmits(['queryList', 'handleEdit']);
  const setTop = (id) => {
    saveOrUpdate({ id }, true).then(() => {
      emit('queryList');
    });
  };
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  defineExpose({ startQuery });
</script>
