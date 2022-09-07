<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <a-typography-text v-show="activeKey === '-1'" mark>失效的账号</a-typography-text>
      <a-typography-text v-show="activeKey === '0'" mark>待启用的账号</a-typography-text>
      <a-typography-text v-show="activeKey === '1'" mark>使用中的账号</a-typography-text>
      <a-typography-text v-show="activeKey === '5'" mark>所有账号</a-typography-text>
    </template>
    <template #left="{ item, index }">
      <div class="mt-1">
        <a-typography-text :copyable="{ text: copyAccount(item.account, item.password) }">账密</a-typography-text>
      </div>
    </template>
    <template #operate="{ item, index }">
      <div>
        <a-menu>
          <a-menu-item>
            <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === 0 || item.status === 1">
            <a-button @click="changeStatus(item, -1)" type="link" size="small" danger>失效</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === -1 || item.status === 1">
            <a-button @click="changeStatus(item, 0)" type="link" size="small">待用</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === -1 || item.status === 0">
            <a-button @click="changeStatus(item, 1)" type="link" size="small">在用</a-button>
          </a-menu-item>
        </a-menu>
      </div>
    </template>
    <template #bottom="{ item }">
      <div>
        <a-tag>账号</a-tag><a-typography-text :delete="item?.status === -1" copyable>{{ item.account }}</a-typography-text>
      </div>
      <div>
        <a-tag>密码</a-tag><a-typography-text :delete="item?.status === -1" copyable>{{ item.password }}</a-typography-text>
      </div>
      <div><a-tag>有效期至</a-tag>{{ item?.invalidTime }}</div>
    </template>
    <template #right="{ item }">
      <div> </div>
    </template>
  </CommonList>
</template>

<script setup lang="ts">
  import { DownOutlined } from '@ant-design/icons-vue';
  import { getList, saveOrUpdate } from '../Idea.api';
  import { ref } from 'vue';
  import CommonList from '../../common/CommonList.vue';
  const CommonListRef = ref();
  const initQuery = (params = {}) => {
    CommonListRef.value.initData(getList, params);
  };
  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['handleEdit']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  const changeStatus = (record, status) => {
    record.status = status;
    saveOrUpdate(record, true).then(() => {
      initQuery();
    });
  };
  const activeKey = ref('0');
  const changeActiveKey = (key) => {
    activeKey.value = key.value;
  };
  defineExpose({ initQuery, changeActiveKey });
</script>
