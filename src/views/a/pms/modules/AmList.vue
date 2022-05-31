<template>
  <a-list :loading="loading" item-layout="horizontal" :data-source="dataList?.records">
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
            <a-popover placement="right">
              <template #content>
                <div><a-tag>系统</a-tag>{{ item.system }}</div>
                <div><a-tag>设备</a-tag>{{ item.model }}</div>
                <div><a-tag>网络</a-tag>{{ item.operator }}</div>
                <div><a-tag>ip</a-tag>{{ item.ip }}</div>
              </template>
              属地： {{ item.country?.indexOf('中国') > -1 ? '' : item.country }} {{ item.province }}{{ item.city }}{{ item.county }}
            </a-popover>
          </template>
          <template #description>
            {{ item?.verifyTime }}
            <div><a-tag>打开时间</a-tag>{{ item?.visitTime?.substring(5) }}</div>
            <div
              ><a-tag>验证时间</a-tag>
              <span v-if="item?.verifyTime?.length > 0">{{ item?.verifyTime?.substring(5) }}</span>
              <a-tag v-else text="标签" color="error" plain plainFill>未开始</a-tag>
            </div>
          </template>
        </a-list-item-meta>
        <div>
          <a-tag color="error" v-if="item.status === '1'">已打开</a-tag>
          <a-tag color="green" v-if="item.status === '2'">
            <span v-if="item.verifyTime > moment().subtract(10, 'minute').format('YYYY-MM-DD HH:mm:ss')"> 验证中 </span>
            <span v-else> 已完成 </span>
          </a-tag>
        </div>
      </a-list-item>
    </template>
    <template #loadMore>
      <div v-if="dataList?.total > 1" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
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
  import moment from 'moment';
  import { DownOutlined } from '@ant-design/icons-vue';
  import { computed, ref } from 'vue';
  import { getList } from '/@/views/a/pms/Am.api';

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
