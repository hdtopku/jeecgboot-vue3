<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <a-typography-text v-show="activeKey === '0'" mark>有效的用户</a-typography-text>
      <a-typography-text v-show="activeKey === '-1'" mark>失效的用户</a-typography-text>
      <a-typography-text v-show="activeKey === '2'" mark>有效+失效的用户</a-typography-text>
    </template>
    <template #top="{ item }">
      <div> {{ getLocation(item) }}</div>
      <div> {{ getDevice(item) }}</div>
      <div>
        <a-tag>
          <a-typography-text>标识</a-typography-text>
        </a-tag>
        <span v-if="item?.identity.length > 0">
          <a-typography-text :copyable="advanced"> {{ item.identity }}</a-typography-text>
        </span>
        <a-tag v-else color="error">未绑定</a-tag>
      </div>
    </template>
    <template #bottom="{ item }">
      <div>
        <a-tag>打开</a-tag>
        <span v-if="item?.openTime?.length > 0">{{ item?.openTime }}</span>
        <a-tag v-else color="error">未打开</a-tag>
      </div>
      <div>
        <a-tag>激活</a-tag>
        {{ item?.activeTime }}
      </div>
      <!--      <div><a-tag>截止</a-tag>{{ item?.invalidTime }}</div>-->
      <div>
        <a-tag>截止</a-tag>
        {{ item?.invalidTime }}
      </div>
      <div>
        <a-tag>
          <a-typography-text>账密</a-typography-text>
        </a-tag>
        <span v-if="item?.status === 2 && item?.ideaStatus != null"
          ><a-typography-text
            :delete="item?.ideaStatus === -1"
            :copyable="advanced ? { text: copyAccount(item.ideaAccount, item.ideaPassword) } : false"
          >
            <a-typography-text :copyable="advanced">{{ item.ideaAccount }}</a-typography-text>
            <div
              ><a-typography-text :copyable="advanced">{{ item.ideaPassword }}</a-typography-text></div
            >
            {{ item?.ideaInvalidTime }}
          </a-typography-text>
        </span>
        <a-tag v-else color="error">未关联</a-tag>
      </div>
    </template>
    <template #left="{ item, index }">
      <div>
        <a-typography-text :copyable="{ text: copyLink(item?.code) }">
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item?.code }}</span>
        </a-typography-text>
      </div>
      <div style="color: #dc2626">
        <div
          ><a href="javascript:;" @click="showSysIpInfo(item)">{{ item?.sysIps.length }}个设备</a></div
        >
        <div
          ><a href="javascript:;" @click="showSysIpInfo(item, true)">{{ item?.ideaUsages.length }}个账号</a></div
        >
        总{{ item?.count }}次提取
      </div>
    </template>
    <template #operate="{ item, index }">
      <a-menu>
        <a-menu-item>
          <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
        </a-menu-item>
        <a-menu-item>
          <a-button v-if="item.valid === 0" @click="changeValid(item, -1)" type="link" size="small" danger>失效 </a-button>
          <a-button v-if="item.valid === -1" @click="changeValid(item, 0)" type="link" size="small"> 恢复 </a-button>
        </a-menu-item>
      </a-menu>
    </template>
    <template #right="{ item }">
      <a-tag :color="getColor(item)">
        <text :class="item?.valid === -1 ? 'line-through' : ''">{{ item.statusName }}</text>
      </a-tag>
    </template>
  </CommonList>
  <a-drawer placement="bottom" closable :visible="showDrawer" @close="onClose">
    <template #title>
      <div>
        <a-tag>总次数：{{ ipIdeaItem?.showIp ? ipIdeaItem.totalUseCount : ipIdeaItem.totalVisitCount }} </a-tag>
        <a-typography-text :copyable="{ text: copyLink(ipIdeaItem?.code) }">
          <span class="" :class="ipIdeaItem?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'">
            {{ ipIdeaItem?.code }}</span
          >
        </a-typography-text>
      </div>
      <div>
        <a-tag>总条数：{{ ipIdeaItem?.showIp ? ipIdeaItem.ideaUsages.length : ipIdeaItem?.sysIps.length }} </a-tag>
        <a-typography-text v-if="ipIdeaItem?.identity.length > 0" copyable>
          <span>{{ ipIdeaItem.identity }}</span>
          <!--        <span :class="item.status === -1 ? 'line-through text-gray-400' : ''">{{ item.identity }}</span>-->
        </a-typography-text>
        <a-tag v-else color="error">未绑定</a-tag>
      </div>
    </template>
    <IdeaSysIpInfo :ipIdeaItem="ipIdeaItem" />
  </a-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getList, saveOrUpdate } from '/@/views/a/pms/IdeaMember.api';
  import IdeaSysIpInfo from './IdeaSysIpInfo.vue';

  const advanced = ref(false);

  const showDrawer = ref(false);
  const onClose = () => {
    showDrawer.value = false;
  };

  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['queryList', 'handleEdit']);
  const copyLink = (code) => {
    return 'https://c.taojingling.cn/j/' + code;
  };
  const getColor = (item) => {
    if (item.valid === -1) {
      return 'error';
    }
    switch (Number.parseInt(item.status)) {
      case 1:
        return 'processing';
      case 2:
        return 'success';
      case 0:
        return 'error';
    }
  };
  const ipIdeaItem = ref();
  const showSysIpInfo = (item, showIp = false) => {
    ipIdeaItem.value = item;
    ipIdeaItem.value.showIp = showIp;
    showDrawer.value = true;
  };
  const changeValid = (record, valid) => {
    record.valid = valid;
    saveOrUpdate(record, true).then(() => {
      emit('queryList');
    });
  };
  const activeKey = ref('0');
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  const CommonListRef = ref();
  const getLocation = (item) => {
    if (item?.sysIps?.length > 0) {
      let location = item?.sysIps[0];
      return (
        (location?.country?.indexOf('中国') > -1 || location?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : location?.country) +
        location.province +
        location.city +
        location.county +
        ' | ' +
        location.browser
      );
    }
    return '';
  };
  const getDevice = (item) => {
    if (item?.sysIps?.length > 0) {
      let device = item?.sysIps[0];
      return device.operator + ' | ' + device.model + ' | ' + device.system;
    }
    return '';
  };
  defineExpose({
    startQuery: (params = {}) => {
      CommonListRef.value.execQuery(getList, params);
    },
    changeActiveKey: (key) => {
      activeKey.value = key.value;
    },
    changeAdvanced: () => {
      advanced.value = !advanced.value;
    },
  });
</script>
<style scoped></style>
