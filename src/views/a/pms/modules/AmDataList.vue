<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <span>
        <a-typography-text v-show="activeKey === '1'" mark>已打开验证页面，但还没点击开始验证</a-typography-text>
        <a-typography-text v-show="activeKey === '0'" mark>所有状态：已打开+已开始+已关闭+退款等</a-typography-text>
        <a-typography-text v-show="activeKey === '2'" mark>验证结束后，系统关闭教程及页面至空白</a-typography-text>
        <a-typography-text v-show="activeKey === '4'" mark>
          <span v-if="dataList?.total === 0">买家申请退款，记得销毁验证页面</span>
          <span v-else>
            <span>管理员关闭{{ dataList?.total - refuneCount }}条</span>
            <span v-if="refuneCount > 0">+买家主动退款{{ refuneCount }}条</span>
            <span v-else>买家主动退款</span>
          </span>
        </a-typography-text>
      </span>
    </template>
    <template #shelter="{ item }">
      <span v-if="item.verifyCount > 0">|{{ item.verifyCount }}</span> <span v-if="hasPermission('link:switch') && item?.type === 6">[尊]</span>
    </template>
    <template #left="{ item }">
      <div>
        <a-typography-text :copyable="{ text: copyLink(item) }">
          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item?.code }}</span>
        </a-typography-text>
      </div>
      <div v-if="hasPermission('link:switch') && item?.link?.length > 3">
        <a-typography-link :copyable="{ text: item?.link }"> {{ item?.link?.substring(item?.link?.length - 4) }} </a-typography-link>
      </div>
      <div v-if="hasPermission('link:switch') && item?.remark?.length > 0">
        <a-typography-text :copyable="{ text: item?.remark }" mark> 注:{{ item?.remark }} </a-typography-text>
      </div>
    </template>
    <template #operate="{ item }">
      <a-menu>
        <a-menu-item @click="handleEdit(item)" v-if="item">
          <a-button v-if="hasPermission('link:switch')" type="link" size="small">编辑 </a-button>
        </a-menu-item>
        <a-menu-item>
          <a-button v-if="false" type="link" size="small" danger @click="updateVerifyStatus(item, 0)">恢复验证 </a-button>
          <a-button type="link" size="small" danger @click="updateVerifyStatus(item, -1)"> 销毁验证 </a-button>
        </a-menu-item>
      </a-menu>
    </template>
    <template #top="{ item }">
      <div>
        {{ item?.country?.indexOf('中国') > -1 || item?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : item.country }} {{ item.province
        }}{{ item.city }}{{ item.county }} |
        {{ item.browser }}
      </div>
      <div> {{ item.operator }} | {{ item.model }} | {{ item.system }}</div>
      <div>
        <a-tag>打开时间</a-tag>
        {{ item?.visitTime?.substring(5) }}
      </div>
      <div>
        <a-tag>验证时间</a-tag>
        <span v-if="item?.verifyTime?.length > 0">{{ item?.verifyTime?.substring(5) }}</span>
        <a-tag v-else color="error" plain plainFill> 未开始</a-tag>
      </div>
      <div>
        <a-tag>最后访问</a-tag>
        <span v-if="item?.updateTime?.length > 0">{{ item?.updateTime?.substring(5) }}</span>
      </div>
      <div v-if="item?.refundTime?.length > 0">
        <a-tag color="error">买家退款</a-tag>
        <span>{{ item?.refundTime?.substring(5) }}</span>
      </div>
      <div v-if="hasPermission('link:switch') && item?.createBy?.length > 0">
        <a-tag>创建人</a-tag>
        <span> {{ item?.createBy }} </span>
      </div>
    </template>
    <template #right="{ item }">
      <div>
        <div>
          <a-tag :color="getColor(item.status)">
            <text :class="item?.valid === -1 ? 'line-through' : ''">{{ item.statusName }}</text>
          </a-tag>
        </div>
        <div class="font-light text-sm text-gray-500" v-if="!(item?.valid !== -1 && item?.status > -1 && item?.status < 4)"> 页面空白 </div>
      </div>
    </template>
  </CommonList>
</template>
<script lang="ts" setup>
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { ref, watch } from 'vue';
  import { getList } from '/@/views/a/pms/Am.api';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { saveOrUpdate } from '/@/views/a/pms/Am.api';

  const { hasPermission } = usePermission();

  const CommonListRef = ref();

  const dataList = ref();
  const updateVerifyStatus = (item, valid) => {
    item.valid = valid;
    saveOrUpdate(item, true).then(() => {});
  };
  const activeKey = ref('0');
  const copyLink = (item) => {
    if (item?.type === 6) {
      return 'c.taojingling.cn/d/' + item?.code;
    }
    return 'c.taojingling.cn/c/' + item?.code;
  };
  const refuneCount = ref(0);
  watch(dataList, () => {
    refuneCount.value = 0;
    dataList.value?.records?.forEach((item) => {
      if (item.valid === -1) {
        if (item.status === -1 || item.status === -2) {
          ++refuneCount.value;
        }
      }
      item.showOperate = item?.valid !== -1 && item?.status > -1 && item?.status < 4;
    });
  });
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
  const emit = defineEmits(['handleEdit']);
  const handleEdit = (item) => {
    emit('handleEdit', item);
  };
  const advanced = ref(false);
  defineExpose({
    startQuery: (params = {}) => {
      activeKey.value = params?.status;
      CommonListRef.value.execQuery(getList, params);
    },
    changeAdvanced: () => {
      advanced.value = !advanced.value;
    },
    changeActiveKey: (key) => {
      activeKey.value = key;
    },
  });
</script>
