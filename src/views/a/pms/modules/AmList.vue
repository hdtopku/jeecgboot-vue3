<template>
  <div class="w-full">
    <div class="flex justify-between">
      <a-typography-title :level="5">共{{ dataList?.total ?? 0 }}条</a-typography-title>
      <span>
        <a-typography-text v-show="activeKey === '1'" mark>已打开页面，但还没点击开始验证</a-typography-text>
        <a-typography-text v-show="activeKey === '0'" mark>打开页面+开始验证+验证完成+关闭验证</a-typography-text>
        <a-typography-text v-show="activeKey === '2'" mark>包含开始验证及验证完成</a-typography-text>
        <a-typography-text v-show="activeKey === '4'" mark
          >关闭后，验证页面变为空白
          <span v-if="refuneCount > 0">(买家退款{{ refuneCount }}条)</span>
          <span v-else>(买家退款等)</span>
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
              <a-typography-paragraph copyable> {{ item.code }} </a-typography-paragraph>

              <a-dropdown v-if="item?.valid !== -1">
                <a class="ant-dropdown-link">
                  操作
                  <DownOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a-button v-if="false" type="link" size="small" danger @click="updateVerifyStatus(item.code, 0)">恢复验证</a-button>
                      <a-button type="link" size="small" danger @click="updateVerifyStatus(item.code, -1)">关闭验证</a-button>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
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
                <a-tag v-else text="标签" color="error" plain plainFill>
                  {{ item.statusName }}
                </a-tag>
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
            <a-spin v-if="loading" />
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
  const params = ref({
    pageNo: 1,
    pageSize: 30,
  });
  const dataList = ref();
  const queryList = (loadMore = false) => {
    loading.value = true;
    getList(params.value)
      .then((res) => {
        loading.value = false;
        params.value.pageNo = res.current + 1;
        if (res.current > 1 && loadMore) {
          dataList.value.records.push(...res.records);
          return;
        }
        dataList.value = res;
      })
      .catch((err) => {
        console.error(err);
        loading.value = false;
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
    activeKey.value = key.value;
  };
  defineExpose({ initQuery, changeActiveKey });

  const refuneCount = ref(0);
  watch(dataList, () => {
    console.log(dataList.value);
    refuneCount.value = 0;
    dataList.value?.records?.forEach((item) => {
      console.log(item);
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
        return 'success';
    }
  };
</script>
