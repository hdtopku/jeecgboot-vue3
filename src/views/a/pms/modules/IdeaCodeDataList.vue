<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <a-typography-text v-show="activeKey === '-100'" mark>关黑屋，激活码会失效</a-typography-text>
      <a-typography-text v-show="activeKey === '-90'" mark>重点观察，激活码不会失效</a-typography-text>
      <a-typography-text v-show="activeKey === '-10'" mark>激活码会失效</a-typography-text>
      <a-typography-text v-show="activeKey === '90'" mark>按提取次数倒排</a-typography-text>
      <a-typography-text v-show="activeKey !== '-100' && activeKey !== '-90' && activeKey !== '-10' && activeKey !== '90'" mark>
        按更新时间倒排
      </a-typography-text>
    </template>
    <template #top="{ item }">
      <a-tag color="success">正版激活码</a-tag>
      <div v-if="item?.sysIps?.length > 0">
        {{ getLocation(item?.sysIps[0]) }} <a-typography-text v-if="advanced" copyable>{{ item?.sysIps[0]?.ip }}</a-typography-text>
      </div>
      <div v-if="item?.sysIps?.length > 0"> {{ getDevice(item?.sysIps[0]) }}</div>
      <div>
        <a-tag :color="getColor(item)">
          <template #icon>
            <minus-circle-outlined v-if="item.valid === -1" />
            <clock-circle-outlined v-if="item.valid === 0 && item.status === -1" />
            <sync-outlined v-if="item.valid === 0 && item.status === 1" :spin="true" />
          </template>
          {{ item?.statusName }}
        </a-tag>
        <span :class="item.valid === -1 || item.status === -1 ? 'line-through text-red-300' : 'text-red-500'">
          {{ item?.openTime?.substring(5) }}
        </span>
      </div>
    </template>
    <template #bottom="{ item, index }" v-if="advanced">
      <div
        ><a-tag>{{ item?.createBy }}创建</a-tag>{{ item?.createTime.substring(5) }}</div
      >
      <div
        ><a-tag>{{ item?.updateBy }}更新</a-tag>{{ item?.updateTime.substring(5) }}</div
      ></template
    >
    <template #left="{ item, index }">
      <div class="w-20">
        <div>
          <a-popover placement="right">
            <template #content>
              <div :key="idx" v-for="(sysIp, idx) in item?.sysIps">
                <a-typography-text copyable>
                  <div>
                    {{ getLocation(sysIp) }} | <a-typography-text copyable>{{ item?.sysIps[0]?.ip }}</a-typography-text></div
                  >
                  <span> {{ getDevice(sysIp) }}</span>
                </a-typography-text>
              </div>
            </template>
            <a href="javascript:;" @click="showSysIpInfo(item)">{{ item?.sysIps?.length }}个设备</a>
          </a-popover>
        </div>
        <a-typography-text :copyable="{ text: copyLink(item?.code) }">
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item?.code }}</span>
        </a-typography-text>
      </div>
    </template>
    <template #operate="{ item, index }">
      <a-menu>
        <a-menu-item>
          <a-button type="link" size="small" danger @click="updateVerifyStatus(item, -1)"> 销毁验证 </a-button>
        </a-menu-item>
      </a-menu></template
    >
  </CommonList>
</template>

<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getList, saveOrUpdate } from '/@/views/a/pms/IdeaCode.api';
  import { MinusCircleOutlined, ClockCircleOutlined, SyncOutlined } from '@ant-design/icons-vue';
  defineComponent({
    components: { MinusCircleOutlined, ClockCircleOutlined, SyncOutlined },
  });
  const advanced = ref(false);
  const copyLink = (code) => {
    return 'e.taojingling.cn/jb/' + code;
  };
  const getColor = (item) => {
    if (item.valid === -1) {
      if (item.status === -1) {
        return 'default';
      }
      return 'error';
    }
    switch (Number.parseInt(item.status)) {
      case 1:
        return 'processing';
      case 0:
        return 'error';
    }
  };
  const activeKey = ref('0');
  const CommonListRef = ref();
  const getLocation = (location) => {
    if (location?.ip == null) {
      return '位置信息采集中...';
    }
    return (
      `${location.operator}-` +
      (location?.country?.indexOf('中国') > -1 || location?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : location?.country) +
      location.province +
      location.city +
      location.county
    );
  };
  const getDevice = (device) => {
    return device.model + ' | ' + device.system + ' | ' + device.browser;
  };
  const updateVerifyStatus = (item, valid) => {
    item.valid = valid;
    saveOrUpdate(item, true).then(() => {});
  };
  defineExpose({
    startQuery: (params = {}) => {
      activeKey.value = params?.status;
      CommonListRef.value.execQuery(getList, params);
    },
    changeAdvanced: () => {
      advanced.value = !advanced.value;
    },
  });
</script>
<style scoped></style>
