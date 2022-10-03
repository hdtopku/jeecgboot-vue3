<template>
  <CommonList ref="CommonListRef">
    <template #header>
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
    <template #left="{ item }">
      <div class="mb-1" v-if="item?.bindCount > 0">
        <a-tag color="success">{{ item?.bindCount }}次</a-tag>
      </div>
      <a-button size="small" type="primary" @click="copyCode(item)">短链</a-button>
    </template>
    <template #bottom="{ item }">
      <div>
        <a-tag>激活链接</a-tag>
        <a-typography-text v-if="item?.link?.length > 0" :delete="item?.status === -1" :copyable="{ text: item.link }"
          >{{ getLink(item.link) }}
        </a-typography-text>
        <a-tag v-else color="error">未生成</a-tag>
      </div>
      <div v-if="item?.thirdLink.length > 0">
        <a-tag>第三方链 </a-tag>
        <a-typography-text v-if="item?.thirdLink?.length > 0" :delete="item?.thirdLinkValid === -1" copyable="{ text: item.thirdLink }"
          >{{ getLongLink(item.thirdLink) }}
        </a-typography-text>
        <a-tag v-else color="error">未绑定</a-tag>
      </div>
      <div class="text-red-600" v-if="item?.remark?.length > 0">
        <a-tag color="red">备注事项</a-tag>
        {{ item.remark }}
      </div>
      <div>
        <a-tag>创建时间</a-tag>
        {{ item?.createTime }}
      </div>
      <div v-if="advanced || item?.status === 1">
        <a-tag>长链地址 </a-tag>
        <a-typography-text v-if="item?.longLink?.length > 0" :copyable="{ text: item.longLink }">
          {{ getLongLink(item.longLink) }}
        </a-typography-text>
        <a-tag v-else color="error">未填写</a-tag>
      </div>
      <div v-if="advanced">
        <div>
          <a-tag>邮箱地址</a-tag>
          <a-typography-text v-if="item?.email?.length > 0" :copyable="{ text: item.email }">
            {{ getLongLink(item.email) }}
          </a-typography-text>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
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
    <template #right="{ item }">
      <div>
        <a-tag v-if="item?.type === 6" color="red">至尊版</a-tag>
      </div>
      <div>
        <a-tag v-if="item?.type === 1">普通版</a-tag>
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
  const loginInfo = getAuthCache(LOGIN_INFO_KEY);
  let { username, realname } = loginInfo?.userInfo;

  const CommonListRef = ref();
  const emit = defineEmits(['handleEdit', 'queryList']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
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
