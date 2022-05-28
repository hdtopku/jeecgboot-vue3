<template>
  <a-list item-layout="horizontal" :data-source="dataList?.records">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <div>#{{ index + 1 }}</div>
            <a-typography-paragraph copyable> {{ item.code }} </a-typography-paragraph>

            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                操作
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a-button type="link" size="small" danger>申请退款</a-button>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item>
                    <a-button type="link" size="small" danger>延长时间</a-button>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
          <template #title>
            <a-tooltip placement="right">
              <template #title>
                <div><a-tag>系统</a-tag>ios 13.2.3</div>
                <div><a-tag>设备</a-tag>iphone</div>
                <div><a-tag>网络</a-tag>移动</div>
                <div><a-tag>ip</a-tag>183.253.210.100</div>
              </template>
              属地： 福建宁德寿宁
            </a-tooltip>
          </template>
          <template #description>
            <div><a-tag>打开时间</a-tag>05-25 01:25:17</div>
            <div><a-tag>验证时间</a-tag>未开始</div>
            <div><a-tag>失效时间</a-tag>05-25 01:25:17</div>
            <div><a-tag>剩余时间</a-tag>25分钟</div>
          </template>
        </a-list-item-meta>
        <div> <a-tag color="green">已完成</a-tag></div>
      </a-list-item>
    </template>
    <template #loadMore>
      <div v-if="dataList?.total > 5" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <span v-if="finished">加载完成({{ dataList?.records?.length }}/{{ dataList?.total }})</span>
        <span v-else>
          <a-spin v-if="loading" />
          <a-button v-else @click="queryList(true)">加载更多({{ dataList?.records?.length }}/{{ dataList?.total }})</a-button>
        </span>
      </div>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
  import { DownOutlined } from '@ant-design/icons-vue';
  import { computed, ref } from 'vue';
  import { getList } from '/@/views/a/pms/Am.api';

  const loading = ref(false);
  const params = ref({
    pageNo: 1,
    pageSize: 1,
  });
  const dataList = ref();
  const queryList = (loadMore = false) => {
    loading.value = true;
    getList(params.value)
      .then((res) => {
        loading.value = false;
        params.value.pageNo = params.value.pageNo + 1;
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
  const initQuery = (queryParams) => {
    params.value = queryParams;
    queryList();
  };
  defineExpose({ initQuery });
</script>
