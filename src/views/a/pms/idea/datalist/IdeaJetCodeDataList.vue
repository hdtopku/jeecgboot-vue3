<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <span v-if="activeKey === '1'">
        <!--        <a-button class="mr-6" size="small" type="primary" preIcon="ant-design:plus-outlined" @click="handleAdd">新增</a-button>-->
      </span>
      <a-typography-text v-show="activeKey === '0'" mark>按创建时间倒排</a-typography-text>
      <a-typography-text v-show="activeKey === '100' || activeKey === '-1' || activeKey === '1'" mark>按修改时间倒排 </a-typography-text>
    </template>
    <template #operate="{ item }">
      <a-menu>
        <a-menu-item v-if="item?.status !== 0" @click="setTop(item.id)">
          <a-button type="warning" ghost size="small">置顶</a-button>
        </a-menu-item>
        <a-menu-item @click="handleEdit(item)">
          <a-button type="link" size="small">编辑</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.status === 0 || item?.status === 1" @click="changeStatus(item, -1)">
          <a-button type="link" size="small" danger>删除</a-button>
        </a-menu-item>
        <a-menu-item @click="changeStatus(item, 1)" v-if="item?.status === 0 || item?.status === -1">
          <a-button type="link" size="small">备用</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type !== 1 && item?.type !== 6">
          <a-button @click="changeType(item, 6)" type="link" size="small">设为激活码</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type !== 1 && item?.type !== 6">
          <a-button @click="changeType(item, 1)" type="link" size="small">设为账号补新</a-button>
        </a-menu-item>
      </a-menu>
    </template>
    <template #shelter="{ item }">
      <span v-if="item?.bindCount > 0">
        |<span size="small" class="text-red-500">{{ item?.bindCount }}次</span>
      </span>
    </template>
    <template #left="{ item }">
      <div>
        <a-tag v-if="item?.type === 6" color="red">激活码提取</a-tag>
        <a-tag v-if="item?.type === 1" color="blue">账号补新</a-tag>
      </div>
      <div v-if="item?.link?.length > 0" style="margin-left: -10px">
        <a-button size="small" type="link" @click="copyCode(item)">复制短链</a-button>
      </div>
    </template>
    <template #bottom="{ item }">
      <div :class="item?.type === 6 ? 'bg-pink-100 p-2' : item?.type === 1 ? 'bg-blue-100 p-2' : ''">
        <div class="mb-1">
          <a-tag>激活码</a-tag>
          <a-typography-text v-if="item?.jetCode?.length > 0" :delete="item?.status === -1" :copyable="{ text: item.jetCode }"
            >{{ item.jetCode.substring(0, 10) }}
          </a-typography-text>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
        <div class="text-red-600" v-if="item?.remark?.length > 0">
          <a-tag color="red">备注</a-tag>
          {{ item.remark }}
        </div>
        <div>
          {{ item?.createTime?.substring(5, 16) }} 创建
          <span v-if="getDateTime(item)?.length > 0" class="text-indigo-700">[激活]{{ getDateTime(item) }} </span></div
        >
      </div>
    </template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { list, saveOrUpdate } from '../api/IdeaJetCode.api';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getCurrentInstance, ref } from 'vue';
  import { getCodes } from '/@/views/a/pms/am/api/Am.api';
  import { getAuthCache } from '/@/utils/auth';
  import { LOGIN_INFO_KEY } from '/@/enums/cacheEnum';
  import dayjs from 'dayjs';

  const loginInfo = getAuthCache(LOGIN_INFO_KEY);
  let { username, realname } = loginInfo?.userInfo;

  const CommonListRef = ref();
  const emit = defineEmits(['handleEdit', 'handleAdd', 'queryList']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  const handleAdd = (record) => {
    emit('handleAdd', record);
  };
  const getDateTime = (item) => {
    return parseDateTime(item?.link) + parseDateTime(item?.thirdLink) + parseDateTime(item?.shortLink);
  };
  const parseDateTime = (link) => {
    if (link?.indexOf('itunes.apple.com') > 0) {
      let idx = link?.indexOf('&ud_t=');
      if (idx > 0) {
        let milliseconds = Number.parseInt(link?.substring(idx + 6)) * 1000;
        let d = dayjs(milliseconds);
        return d.format('MM-DD HH:mm');
      }
    }
    return '';
  };
  const changeStatus = (record, status) => {
    record.status = status;
    saveOrUpdate(record, true).then(() => {
      emit('queryList');
    });
  };
  const setTop = (id) => {
    saveOrUpdate({ id }, true).then(() => {
      emit('queryList');
    });
  };
  const changeType = (record, type) => {
    record.type = type;
    saveOrUpdate(record, true).then(() => {
      emit('queryList');
    });
  };
  const { proxy } = getCurrentInstance();
  const copyCode = (record = {}) => {
    return getCodes({ count: 1, type: 6, linkId: record?.id, link: record?.link, username }, (data) => {
      proxy.tool.copy(data, data + '已复制');
    });
  };
  const activeKey = ref('0');
  const startQuery = (params = {}) => {
    activeKey.value = params?.status;
    CommonListRef.value.execQuery(list, params);
  };
  const advanced = ref(false);
  defineExpose({
    startQuery,
    changeAdvanced: () => {
      advanced.value = !advanced.value;
    },
    copyCode,
  });
</script>
<style scoped></style>
