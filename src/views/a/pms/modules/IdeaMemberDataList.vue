<template>
  <a-card size="small">
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
      <template #left="{ item, index }">3</template>
      <template #right="{ item }">4</template>
    </CommonList>
  </a-card>
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
  const changeGroup = (id, ideaGroupId) => {
    console.log(ideaGroupId);
    saveOrUpdate({ id, ideaGroupId }, true).then((res) => {
      console.log(res);
    });
  };
  const CommonListRef = ref();
  const initQuery = (params = {}) => {
    CommonListRef.value.initData(getList, params);
  };
  defineExpose({ initQuery });
</script>
<style scoped></style>
