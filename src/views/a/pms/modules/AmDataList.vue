<template>
  <div class="w-full">
    <div class="flex justify-between">
      <a-typography-title :level="5">共{{ dataList?.total ?? 0 }}条</a-typography-title>
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
    </div>
    <a-list :loading="loading" item-layout="horizontal" :data-source="dataList?.records">
      <template #renderItem="{ item, index }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <div
                >#{{ index + 1 }}
                <span v-if="item.visitCount > 1">|{{ item.visitCount }}</span>
              </div>
              <a-typography-paragraph :class="item?.valid === -1 ? 'line-through' : ''" copyable>
                <span class="" :class="item?.valid === -1 ? 'text-gray-500' : 'text-purple-900 font-medium'"> {{ item.code }}</span>
              </a-typography-paragraph>

              <a-dropdown v-if="item?.valid !== -1 && item?.status > 0 && item?.status < 4">
                <a class="ant-dropdown-link">
                  操作
                  <DownOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a-button v-if="false" type="link" size="small" danger @click="updateVerifyStatus(item.code, 0)">恢复验证</a-button>
                      <a-button type="link" size="small" danger @click="updateVerifyStatus(item.code, -1)">销毁验证</a-button>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
              <span v-else> 页面空白 </span>
            </template>
            <template #title>
              <div>
                {{ item?.country?.indexOf('中国') > -1 || item?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : item.country }} {{ item.province }}{{ item.city }}{{ item.county }} |
                {{ item.browser }}
              </div>
              <div> {{ item.operator }} | {{ item.model }} | {{ item.system }}</div>
            </template>
            <template #description>
              <div><a-tag>打开时间</a-tag>{{ item?.visitTime?.substring(5) }}</div>
              <div
                ><a-tag>验证时间</a-tag>
                <span v-if="item?.verifyTime?.length > 0">{{ item?.verifyTime?.substring(5) }}</span>
                <a-tag v-else color="error" plain plainFill> 未开始 </a-tag>
              </div>
              <div v-if="item?.refundTime?.length > 0"
                ><a-tag color="error">买家退款</a-tag> <span>{{ item?.refundTime?.substring(5) }}</span>
              </div>
            </template>
          </a-list-item-meta>
          <div>
            <a-tag :color="getColor(item.status)">
              <a-typography-text :delete="item?.valid === -1"> {{ item.statusName }}</a-typography-text>
            </a-tag>
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
  </div>
</template>
<script lang="ts" setup>
  import { DownOutlined } from '@ant-design/icons-vue';
  import { computed, ref, watch } from 'vue';
  import { getList, updateCodeStatus } from '/@/views/a/pms/Am.api';

  const loading = ref(false);
  const loadingMore = ref(false);
  const params = ref({
    pageNo: 1,
    pageSize: 30,
  });
  const dataList = ref();
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
  const finished = computed(() => {
    return dataList?.value?.total === 0 || (dataList?.value?.records?.length >= dataList?.value?.total ?? false);
  });
  const updateVerifyStatus = (code, valid) => {
    updateCodeStatus({ code, valid }).then(() => {
      params.value.pageNo = 1;
      queryList();
    });
  };
  const initQuery = (queryParams) => {
    params.value = queryParams;
    queryList();
  };
  const activeKey = ref('0');
  const changeActiveKey = (key) => {
    activeKey.value = key;
  };
  defineExpose({ initQuery, changeActiveKey });

  const refuneCount = ref(0);
  watch(dataList, () => {
    refuneCount.value = 0;
    dataList.value?.records?.forEach((item) => {
      if (item.valid === -1) {
        if (item.status === -1 || item.status === -2) {
          ++refuneCount.value;
        }
      }
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
</script>
