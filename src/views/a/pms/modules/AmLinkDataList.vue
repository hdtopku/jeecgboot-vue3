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
        <a-menu-item v-if="item?.status === -1 || item?.status === 1" @click="changeStatus(item, 0)">
          <a-button type="link" size="small">使用</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type !== 1 && item?.type !== 6">
          <a-button @click="changeType(item, 6)" type="link" size="small">设为至尊</a-button>
        </a-menu-item>
        <a-menu-item v-if="item?.type !== 1 && item?.type !== 6">
          <a-button @click="changeType(item, 1)" type="link" size="small">设为普通</a-button>
        </a-menu-item>
        <a-menu-item @click="changeType(item, 0)" v-if="item?.type === 6">
          <a-button type="link" size="small">取消至尊</a-button>
        </a-menu-item>
        <a-menu-item @click="changeType(item, 0)" v-if="item?.type === 1">
          <a-button type="link" size="small">取消普通</a-button>
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
      <div :class="item?.type === 6 || item?.type === 1 ? 'bg-pink-100 p-2' : ''">
        <div>
          <a-tag>激活链</a-tag>
          <a-typography-text v-if="item?.link?.length > 0" :delete="item?.status === -1" :copyable="{ text: item.link }"
            >{{ getLongLink(item.link) }}
          </a-typography-text>
          <a-tag v-else color="error">未生成</a-tag>
        </div>
        <div>
          [创建]{{ item?.createTime?.substring(5, 16) }}
          <span v-if="getDateTime(item)?.length > 0" class="text-indigo-700">[激活]{{ getDateTime(item) }} </span></div
        >
        <div class="text-red-600" v-if="item?.remark?.length > 0">
          <a-tag color="red">备注</a-tag>
          {{ item.remark }}
        </div>
        <div v-if="item?.email?.length > 0 && (advanced || item?.status === 1 || item?.type === 1)">
          <a-tag>预存</a-tag>
          <a-typography-text v-if="item?.email?.length > 0" :copyable="{ text: item.email }">
            {{ getLongLink(item.email) }}
          </a-typography-text>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
        <div v-if="(advanced && item?.longLink?.length > 0) || item?.status === 1">
          <a-tag>长链接</a-tag>
          <a-typography-text v-if="item?.longLink?.length > 0" :copyable="{ text: item.longLink }">
            {{ getLongLink(item.longLink) }}
          </a-typography-text>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
        <div v-if="item?.thirdLink?.length > 0 && (advanced || item?.status === 1 || item?.status === 6)">
          <a-tag>预存</a-tag>
          <a-typography-text v-if="item?.thirdLink?.length > 0" :copyable="{ text: item.thirdLink }">
            {{ getLongLink(item.thirdLink) }}
          </a-typography-text>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
        <div v-if="advanced">
          <span class="text-indigo-700">
            [创建]{{ item?.createBy }}
            <div v-if="item?.updateBy?.length > 0">[更新]{{ item?.updateBy }}：{{ item?.updateTime?.substring(5, 19) }}</div>
          </span>
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
        return d.format('MM-DD HH:mm');
      }
    }
    return '';
  };
  const getLongLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('clicked/');
      if (index >= 0) {
        return link.substring(index, index + 13);
      }
      index = link.indexOf('&ud_t=');
      if (index >= 0) {
        return link.substring(index + 4);
      }
      // index = link.indexOf('@stu.hnucm.edu.cn');
      // if (index >= 0) {
      //   return link.substring(0, index + 1);
      // }
    }
    return link;
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
  const copyCode = (record) => {
    getCodes({ count: 1, type: 6, linkId: record?.id, link: record?.link, username }, (data) => {
      proxy.tool.copy(data, data + '已复制');
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
