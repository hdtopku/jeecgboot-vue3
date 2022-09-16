<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <a-typography-text v-show="activeKey === '0'" mark>有效的用户</a-typography-text>
      <a-typography-text v-show="activeKey === '-1'" mark>失效的用户</a-typography-text>
      <a-typography-text v-show="activeKey === '2'" mark>有效+失效的用户</a-typography-text>
    </template>
    <template #top="{ item }">
      <a-tag> <a-typography-text>用户标识</a-typography-text> </a-tag>
      <a-typography-text v-if="item?.identity.length > 0" copyable>
        <span>{{ item.identity }}</span>
        <!--        <span :class="item.status === -1 ? 'line-through text-gray-400' : ''">{{ item.identity }}</span>-->
      </a-typography-text>
      <a-tag v-else color="error">未绑定</a-tag>
    </template>
    <template #bottom="{ item }">
      <div><a-tag>打开时间</a-tag>{{ item?.createTime }}</div>
      <div><a-tag>激活时间</a-tag>{{ item?.activeTime }}</div>
      <div><a-tag>有效期至</a-tag>{{ item?.invalidTime }}</div>
      <!--      <a-tag>绑定分组</a-tag><IdeaGroupSelect :ideaGroup="ideaGroup" :currentGroupId="item.ideaGroupId" @changeGroup="(groupId) => changeGroup(item.id, groupId)" />-->
      <div>
        <a-tag> <a-typography-text :delete="item?.ideaStatus === -1">账号密码</a-typography-text> </a-tag
        ><a-typography-text :delete="item?.ideaStatus === -1" :copyable="{ text: copyAccount(item.ideaAccount, item.ideaPassword) }">
          <a-typography-text copyable>{{ item.ideaAccount }}</a-typography-text>
          <a-typography-text copyable>{{ item.ideaPassword }}</a-typography-text></a-typography-text
        >
      </div>
      <div><a-tag>账号截至</a-tag>{{ item?.ideaInvalidTime }}</div>
    </template>
    <template #left="{ item, index }">
      <div>
        <a-typography-text :copyable="{ text: copyLink(item.code) }">
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item.code }}</span>
        </a-typography-text>
      </div>
      <div>
        <a-button @click="showSysIpInfo(item, index)" size="small">查看</a-button>
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
    <template #right="{ item }">
      <a-tag :color="getColor(item.status)">
        <a-typography-text :delete="item?.valid === -1"> {{ item.statusName }}</a-typography-text>
      </a-tag>
    </template>
  </CommonList>
  <a-drawer title="Basic Drawer" placement="bottom" closable :visible="showDrawer" @close="onClose">
    <IdeaSysIpInfo :sysIpInfoItem="sysIpInfoItem" />
  </a-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getList, saveOrUpdate } from '/@/views/a/pms/IdeaMember.api';
  import { list as listGroup } from '/@/views/a/pms/IdeaGroup.api';
  import IdeaSysIpInfo from './IdeaSysIpInfo.vue';

  const ideaGroup = ref();
  const showDrawer = ref(false);
  const onClose = () => {
    showDrawer.value = false;
  };

  const queryIdeaGroupList = () => {
    listGroup({ pageSize: 1000, status: 0 }).then((res) => {
      ideaGroup.value = res?.groups?.records;
    });
  };
  queryIdeaGroupList();

  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['queryList', 'handleEdit']);
  const copyLink = (code) => {
    return 'https://c.taojingling.cn/j/' + code;
  };
  const getColor = (status) => {
    status = Number.parseInt(status);
    switch (status) {
      case 0:
      case 1:
      case 2:
        return 'processing';
      case 3:
        return 'cyan';
      case 4:
        return 'success';
      case -1:
      case -2:
        return 'error';
    }
  };
  const sysIpInfoItem = ref();
  const sysIpInfoIndex = ref();
  const showSysIpInfo = (item, index) => {
    sysIpInfoItem.value = item;
    sysIpInfoIndex.value = index;
    showDrawer.value = true;
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
