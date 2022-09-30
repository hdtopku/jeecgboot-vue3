<template>
  <CommonList ref="CommonListRef">
    <template #operate="{ item }">
      <div>
        <a-menu>
          <a-menu-item>
            <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === 0">
            <a-button @click="changeStatus(item, -1)" type="link" size="small" danger>删除</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === -1">
            <a-button @click="changeStatus(item, 0)" type="link" size="small">回收</a-button>
          </a-menu-item>
        </a-menu>
      </div>
    </template>
    <template #left="{ item, index }">
      <div>
        <a-typography-text :copyable="{ text: item?.code }">
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item?.code }}</span>
        </a-typography-text>
      </div>
    </template>
    <template #bottom="{ item }">
      <div>
        <a-tag>激活链</a-tag
        ><a-typography-text :delete="item?.status === -1" :copyable="{ text: item.link }">{{ getLink(item.link) }}</a-typography-text>
      </div>
      <div>
        <a-tag>长链接</a-tag
        ><a-typography-text :delete="item?.status === -1" copyable="{ text: item.longLink }">{{ getLongLink(item.longLink) }}</a-typography-text>
      </div>
      <div class="text-red-600" v-if="item?.remark?.length > 0"><a-tag color="red">备注</a-tag>{{ item.remark }}</div>
      <div><a-tag>创建时间</a-tag>{{ item?.createTime }}</div>
      <div><a-tag>更新时间</a-tag>{{ item?.updateTime }}</div>
    </template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { getList, saveOrUpdate } from '../AmLink.api';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { ref } from 'vue';
  const CommonListRef = ref();

  const emit = defineEmits(['handleEdit', 'queryList']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };

  const getLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('&ud_t=');
      if (index >= 0) {
        return link.substring(index);
      }
    }
    return link;
  };
  const getLongLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('clicked/');
      if (index >= 0) {
        return link.substring(index, index + 20);
      }
    }
    return link;
  };
  const changeStatus = (record, status) => {
    record.status = status;
    saveOrUpdate(record, true).then(() => {
      emit('queryList');
    });
  };

  const startQuery = (params = {}) => {
    CommonListRef.value.execQuery(getList, params);
  };
  defineExpose({ startQuery });
</script>
<style scoped></style>
