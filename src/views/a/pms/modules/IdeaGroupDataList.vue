<template>
  <div class="flex justify-between">
    <a-typography-title :level="5">共{{ dataList?.total ?? 0 }}条</a-typography-title>
    <span>
      <a-typography-text v-show="activeKey === '0'" mark>有效的账号</a-typography-text>
      <a-typography-text v-show="activeKey === '-1'" mark>失效的账号</a-typography-text>
      <a-typography-text v-show="activeKey === '2'" mark>有效+失效的账号</a-typography-text>
    </span>
  </div>
  <a-list :loading="loading" :data-source="dataList?.records">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <div class="border-solid rounded">#{{ index + 1 }} </div>
            <a-dropdown>
              <a class="ant-dropdown-link">
                操作
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
                  </a-menu-item>
                  <a-menu-item>
                    <a-button v-if="item.status === 0" @click="changeStatus(item, -1)" type="link" size="small" danger>失效</a-button>
                    <a-button v-if="item.status === -1" @click="changeStatus(item, 0)" type="link" size="small">恢复</a-button>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
          <template #description>
            <div
              ><a-tag>账号</a-tag><a-typography-text :delete="item?.status === -1" copyable>{{ item.account }}</a-typography-text></div
            >
            <div>
              <a-tag>密码</a-tag><a-typography-text :delete="item?.status === -1" copyable>{{ item.password }}</a-typography-text>
            </div>
            <div><a-tag>激活时间</a-tag>{{ item?.activeTime?.substring(0, 10) }}</div>
          </template>
        </a-list-item-meta>
        <div v-if="item.status === 0">
          <a-typography-text :copyable="{ text: copyAccount(item.account, item.password) }">复制账密</a-typography-text>
        </div>
      </a-list-item>
    </template>
    <template #loadMore>
      <div v-if="dataList?.total > 0" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <span v-if="finished">加载完成({{ dataList?.records?.length }}/{{ dataList?.total }})</span>
        <span v-else>
          <a-spin v-if="loadingMore" />
          <a-button v-else @click="queryList(true)">加载更多({{ dataList?.records?.length }}/{{ dataList?.total }})</a-button>
        </span>
      </div>
    </template>
  </a-list>
</template>

<script setup lang="ts">
  import { DownOutlined } from '@ant-design/icons-vue';
  import { getList, saveOrUpdate } from '../Idea.api';
  import { computed, ref } from 'vue';
  const dataList = ref();
  const loading = ref(false);
  const loadingMore = ref(false);
  const params = ref({
    pageNo: 1,
    pageSize: 30,
  });
  const initQuery = (queryParams) => {
    params.value = queryParams;
    queryList();
  };
  const activeKey = ref('0');
  const changeActiveKey = (key) => {
    activeKey.value = key.value;
  };
  const queryList = (loadMore = false) => {
    if (loadMore) {
      loadingMore.value = true;
    } else {
      loading.value = true;
    }
    getList(params.value)
      .then((res) => {
        params.value.pageNo = res.current + 1;
        if (res.current > 1 && loadMore) {
          dataList.value.records.push(...res.records);
          return;
        }
        dataList.value = res;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        loading.value = false;
        loadingMore.value = false;
      });
  };
  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['handleEdit']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  const changeStatus = (record, status) => {
    record.status = status;
    saveOrUpdate(record, true).then(() => {
      queryList();
    });
  };
  const finished = computed(() => {
    return dataList?.value?.total === 0 || (dataList?.value?.records?.length >= dataList?.value?.total ?? false);
  });
  defineExpose({ initQuery, changeActiveKey });
</script>

<style scoped></style>
