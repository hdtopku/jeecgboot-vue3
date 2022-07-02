<template>
  <CommonList ref="CommonListRef">
    <template #header></template>
    <template #top="{ item }">
      <a-typography-text copyable> {{ item.username }}</a-typography-text>
    </template>
    <template #bottom="{ item }">
      <a-tag>绑定分组</a-tag><IdeaGroupSelect :currentGroupId="item.ideaGroupId" @changeGroup="(groupId) => changeGroup(item.id, groupId)" />
      <div
        ><a-tag :delete="item.accountStatus === 0">账号密码</a-tag
        ><a-typography-text :copyable="{ text: copyAccount(item.ideaAccount, item.ideaPassword) }">
          <a-typography-text copyable>{{ item.ideaAccount }}</a-typography-text>
          <a-typography-text copyable>{{ item.ideaPassword }}</a-typography-text></a-typography-text
        >
      </div>
      <div><a-tag>有效期至</a-tag>{{ item?.validTime?.substring(0, 10) }}</div>
      <div><a-tag>创建时间</a-tag>{{ item?.createTime }}</div>
    </template>
    <template #left="{ item }">
      <div>
        <a-typography-text copyable>
          <span class="" :class="item?.valid === -1 ? 'text-gray-500' : 'text-purple-900 font-medium'"> {{ item.code }}</span>
        </a-typography-text>
      </div>
    </template>
    <template #operate="{ item, index }">
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
    <template #right="{ item }">4</template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import IdeaGroupSelect from './IdeaGroupSelect.vue';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getList, saveOrUpdate } from '/@/views/a/pms/IdeaMember.api';

  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['queryList']);
  const changeGroup = (id, ideaGroupId) => {
    saveOrUpdate({ id, ideaGroupId }, true).then(() => {
      emit('queryList');
    });
  };
  const CommonListRef = ref();
  const initQuery = (params = {}) => {
    CommonListRef.value.initData(getList, params);
  };
  defineExpose({ initQuery });
</script>
<style scoped></style>
