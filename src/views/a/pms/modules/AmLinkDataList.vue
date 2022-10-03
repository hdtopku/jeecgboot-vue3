<template>
  <CommonList ref="CommonListRef">
    <template #header>
      <a-typography-text
        class="mr-8"
        :copyable="{ text: 'https://www.myunidays.hk/CN/zh-CN/partners/applemusic/micro-access/online' }"
        v-show="activeKey === '1'"
        >复制online地址
      </a-typography-text>
      <a-typography-text v-show="activeKey === '0'" mark>按创建时间倒排</a-typography-text>
      <a-typography-text v-show="activeKey === '100' || activeKey === '-1' || activeKey === '1'" mark>按修改时间倒排 </a-typography-text>
    </template>
    <template #operate="{ item }">
      <a-menu>
        <a-menu-item>
          <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.status === 0 || item?.status === 1">
          <a-button @click="changeStatus(item, -1)" type="link" size="small" danger>删除</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.status === 0">
          <a-button @click="changeStatus(item, 1)" type="link" size="small">暂存</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.status === -1 || item?.status === 1">
          <a-button @click="changeStatus(item, 0)" type="link" size="small">使用</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type !== 1 && item?.type !== 6">
          <a-button @click="changeType(item, 6)" type="link" size="small">设为至尊</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type !== 1 && item?.type !== 6">
          <a-button @click="changeType(item, 1)" type="link" size="small">设为普通</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type === 6">
          <a-button @click="changeType(item, 0)" type="link" size="small">取消至尊</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type === 1">
          <a-button @click="changeType(item, 0)" type="link" size="small">取消普通</a-button>
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
        <a-tag v-if="item?.type === 6" color="red">至尊版</a-tag>
        <a-tag v-if="item?.type === 1">普通版</a-tag>
        <div v-if="item?.link?.length > 0" style="margin-left: -10px">
          <a-button size="small" type="link" @click="copyCode(item)">复制短链</a-button>
        </div>
      </div>
    </template>
    <template #bottom="{ item }">
      <div>
        <a-tag>激活链接</a-tag>
        <span v-if="item?.link?.length > 0">
          <a-typography-text :delete="item?.status === -1" :copyable="{ text: item.link }" />{{ getLink(item.link) }}
        </span>
        <a-tag v-else color="error">未生成</a-tag>
      </div>
      <div v-if="advanced && item?.thirdLink.length > 0">
        <a-tag>第三方链</a-tag>
        <span v-if="item?.thirdLink?.length > 0">
          <a-typography-text :delete="item?.thirdLinkValid === -1" :copyable="{ text: item.thirdLink }" />{{ getLongLink(item.thirdLink) }}
        </span>
        <a-tag v-else color="error">未绑定</a-tag>
      </div>
      <div>
        <a-tag>创建时间</a-tag>
        {{ item?.createTime?.substring(5, 16) }} <span class="text-gray-200" style="font-size: 1px">{{ getDateTime(item) }}</span>
      </div>
      <div class="text-red-600" v-if="item?.remark?.length > 0">
        <a-tag color="red">备注事项</a-tag>
        {{ item.remark }}
      </div>
      <div v-if="advanced || (item?.status === 1 && item?.type === 0)">
        <a-tag>长链地址</a-tag>
        <span v-if="item?.longLink?.length > 0"> <a-typography-text :copyable="{ text: item.longLink }" />{{ getLongLink(item.longLink) }} </span>
        <a-tag v-else color="error">未填写</a-tag>
        <div>
          <a-tag>邮箱地址</a-tag>
          <span v-if="item?.email?.length > 0"> <a-typography-text :copyable="{ text: item.email }" />{{ getLongLink(item.email) }} </span>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
      </div>
      <div v-if="advanced">
        <div>
          <a-tag>更新时间</a-tag>
          {{ item?.updateTime }}
        </div>
        <div>
          <a-tag>创建者是</a-tag>
          {{ item?.createBy }}
        </div>
        <div>
          <a-tag>最近更改</a-tag>
          {{ item?.updateBy }}
        </div>
      </div>
    </template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { getList, saveOrUpdate } from '../AmLink.api';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { getCurrentInstance, ref } from 'vue';
  import { getCodes } from '/@/views/a/pms/Am.api';
  import { getAuthCache } from '/@/utils/auth';
  import { LOGIN_INFO_KEY } from '/@/enums/cacheEnum';
  import dayjs from 'dayjs';

  const loginInfo = getAuthCache(LOGIN_INFO_KEY);
  let { username, realname } = loginInfo?.userInfo;

  const CommonListRef = ref();
  const emit = defineEmits(['handleEdit', 'queryList']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
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
        return d.format('MM-DD hh:mm');
      }
    }
    return '';
  };
  const getLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('&ud_t=');
      if (index >= 0) {
        return link.substring(index + 4);
      }
    }
    return link;
  };
  const getLongLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('clicked/');
      if (index >= 0) {
        return link.substring(index, index + 13);
      }
    }
    return link;
  };
  const changeStatus = (record, status) => {
    record.status = status;
    saveOrUpdate(record, true).then(() => {
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
  const copyCode = (record) => {
    getCodes({ count: 1, type: record?.type, username }, (data) => {
      let idx = data?.indexOf('/d/');
      proxy.tool.copy(data, data?.substring(idx + 3) + '已复制');
    });
  };
  const activeKey = ref('0');
  const startQuery = (params = {}) => {
    activeKey.value = params?.status;
    CommonListRef.value.execQuery(getList, params);
  };
  const advanced = ref(false);
  defineExpose({
    startQuery,
    changeAdvanced: () => {
      advanced.value = !advanced.value;
    },
  });
</script>
<style scoped></style>
