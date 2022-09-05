<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <a-typography-text v-show="activeKey === '0'" mark>有效的用户</a-typography-text>
      <a-typography-text v-show="activeKey === '-1'" mark>失效的用户</a-typography-text>
      <a-typography-text v-show="activeKey === '2'" mark>有效+失效的用户</a-typography-text>
    </template>
    <template #top="{ item }">
      <a-tag> <a-typography-text :delete="item?.valid === -1">用户标识</a-typography-text> </a-tag>
      <a-typography-text copyable>
        <span :class="item.status === -1 ? 'line-through text-gray-400' : ''">{{ item.identity }}</span>
      </a-typography-text>
    </template>
    <template #bottom="{ item }">
      <div><a-tag>打开时间</a-tag>{{ item?.createTime }}</div>
      <div><a-tag>激活时间</a-tag>{{ item?.activeTime }}</div>
      <div><a-tag>有效期至</a-tag>{{ item?.invalidTime }}</div>
      <!--      <a-tag>绑定分组</a-tag><IdeaGroupSelect :ideaGroup="ideaGroup" :currentGroupId="item.ideaGroupId" @changeGroup="(groupId) => changeGroup(item.id, groupId)" />-->
      <!--      <div>-->
      <!--        <a-tag> <a-typography-text :delete="item?.ideaStatus === -1">账号密码</a-typography-text> </a-tag-->
      <!--        ><a-typography-text :delete="item?.ideaStatus === -1" :copyable="{ text: copyAccount(item.ideaAccount, item.ideaPassword) }">-->
      <!--          <a-typography-text copyable>{{ item.ideaAccount }}</a-typography-text>-->
      <!--          <a-typography-text copyable>{{ item.ideaPassword }}</a-typography-text></a-typography-text-->
      <!--        >-->
      <!--      </div>-->
      <!--      <div><a-tag>账号有效期</a-tag>{{ item?.ideaInvalidTime?.substring(0, 10) }}</div>-->
    </template>
    <template #left="{ item }">
      <div>
        <a-typography-text copyable>
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item.code }}</span>
        </a-typography-text>
      </div>
    </template>
    <template #operate="{ item, index }">
      <a-menu>
        <a-menu-item>
          <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
        </a-menu-item>
        <a-menu-item>
          <a-button v-if="item.valid === 0" @click="changeValid(item, -1)" type="link" size="small" danger>失效</a-button>
          <a-button v-if="item.valid === -1" @click="changeValid(item, 0)" type="link" size="small">恢复</a-button>
        </a-menu-item>
      </a-menu>
    </template>
    <template #right="{ item }"></template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import IdeaGroupSelect from './IdeaGroupSelect.vue';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getList, saveOrUpdate } from '/@/views/a/pms/IdeaMember.api';
  import { list as listGroup } from '/@/views/a/pms/IdeaGroup.api';

  const ideaGroup = ref();
  const queryIdeaGroupList = () => {
    listGroup({ pageSize: 1000, status: 0 }).then((res) => {
      ideaGroup.value = res?.groups?.records;
      // currentGroupId.value = res.currentGroupId;
    });
  };
  queryIdeaGroupList();

  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['queryList', 'handleEdit']);
  const changeGroup = (id, ideaGroupId) => {
    saveOrUpdate({ id, ideaGroupId }, true).then(() => {
      emit('queryList');
    });
  };
  const changeValid = (record, valid) => {
    record.valid = valid;
    saveOrUpdate(record, true).then(() => {
      emit('queryList');
    });
  };
  const activeKey = ref('0');
  const changeActiveKey = (key) => {
    activeKey.value = key.value;
  };
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  const CommonListRef = ref();
  const initQuery = (params = {}) => {
    CommonListRef.value.initData(getList, params);
  };
  defineExpose({ initQuery, changeActiveKey });
</script>
<style scoped></style>
