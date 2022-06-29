<template>
  <CommonList ref="CommonListRef">
    <template #listHeader>
      <a-typography-text v-show="activeKey === '0'" mark>有效的分组</a-typography-text>
      <a-typography-text v-show="activeKey === '-1'" mark>失效的分组</a-typography-text>
      <a-typography-text v-show="activeKey === '2'" mark>有效+失效的分组</a-typography-text>
    </template>
    <template #left="{ item, index }">
      <div class="border-solid rounded">#{{ index + 1 }} </div>
      <a-dropdown>
        <a class="ant-dropdown-link">
          操作
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
            </a-menu-item>
            <a-menu-item>
              <a-button v-if="item.status === 0" @click="changeStatus(item, -1)" type="link" size="small" danger>失效</a-button>
              <a-button v-if="item.status === -1" @click="changeStatus(item, 0)" type="link" size="small">恢复</a-button>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
    <template #title="{ item }">
      <a-space>
        <a-typography-text copyable>
          <span :class="item.status === -1 ? 'line-through text-gray-400' : ''">{{ item.groupName }}</span>
        </a-typography-text>
        <a-tag v-if="currentGroupId === item.id" color="processing"
          ><template #icon> <sync-outlined :spin="true" /> </template>当前默认分组</a-tag
        >
      </a-space>
    </template>
    <template #center="{ item }">
      <div><a-tag>创建时间</a-tag>{{ item.createTime }}</div>
      <a-select disabled ref="select" v-model:value="item.ideaId" style="width: 250px">
        <a-select-option :key="ideaItem.id" v-for="ideaItem in ideaList" :value="ideaItem.id">{{ ideaItem.account }}|{{ ideaItem.activeTime }}</a-select-option>
      </a-select>
    </template>
  </CommonList>
</template>

<script setup lang="ts">
  import { DownOutlined, SyncOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import { list, saveOrUpdate } from '/@/views/a/pms/IdeaGroup.api';
  import CommonList from '../../common/CommonList.vue';
  defineProps({
    currentGroupId: {
      type: String,
    },
    ideaList: {
      type: [],
    },
  });
  const CommonListRef = ref();
  const initQuery = (params = {}) => {
    CommonListRef.value.initData(list, params);
  };
  const emit = defineEmits(['handleEdit']);
  const handleEdit = (record: Recordable) => {
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
