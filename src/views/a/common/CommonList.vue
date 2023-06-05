<!--<CommonList ref="CommonListRef">-->
<!--<template #header></template>-->
<!--<template #top="{ item }"></template>-->
<!--<template #bottom="{ item }">-->
<!--      <div><a-tag>进价</a-tag></div>-->
<!--      <div><a-tag>备注</a-tag></div>-->
<!--</template>-->
<!--<template #left="{ item, index }"></template>-->
<!--<template #right="{ item }"></template>-->
<!--<template #operate="{ item, index }">-->
<!--  <a-menu>-->
<!--    <a-menu-item>-->
<!--      <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>-->
<!--    </a-menu-item>-->
<!--    <a-menu-item>-->
<!--      <a-button v-if="item.status === 0" @click="changeStatus(item, -1)" type="link" size="small" danger>失效</a-button>-->
<!--      <a-button v-if="item.status === -1" @click="changeStatus(item, 0)" type="link" size="small">恢复</a-button>-->
<!--    </a-menu-item>-->
<!--  </a-menu>-->
<!--</template>-->
<!--</CommonList>-->
<template>
  <div>
    <a-row class="">
      <a-col :span="4">
        <a-typography-title :level="5">共{{ dataList?.total ?? 0 }}条</a-typography-title>
      </a-col>
      <a-col :span="14">
        <a-slider style="display: inline-block" v-model:value="count" :min="1" :max="500" />
      </a-col>
      <a-col class="text-center" :span="6">
        <a-button :loading="btnLoading" type="primary" v-show="count === 1" @click="confirmCopy">复制{{ count }}条 </a-button>
        <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
          <a-button type="primary" :loading="btnLoading" v-show="count > 1">复制{{ count }}条 </a-button>
        </a-popconfirm>
      </a-col>
    </a-row>
  </div>
  <a-list :loading="loading" :data-source="dataList?.records">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <span>
              <slot name="top" :item="item" :index="index"></slot>
            </span>
          </template>
          <template #description>
            <slot name="bottom" :item="item" :index="index"></slot>
          </template>
          <template v-if="showLeft" #avatar>
            <div>
              <span class="border-solid rounded">#{{ index + 1 }} </span>
              <span>
                <slot name="shelter" :item="item" :index="index"></slot>
              </span>
            </div>
            <a-dropdown>
              <a class="ant-dropdown-link">
                操作
                <DownOutlined />
              </a>
              <template #overlay>
                <span>
                  <slot name="operate" :item="item" :index="index"></slot>
                </span>
              </template>
            </a-dropdown>
            <span>
              <slot style="position: relative" name="left" :item="item" :index="index"></slot>
            </span>
          </template>
        </a-list-item-meta>
        <span>
          <slot name="right" :item="item" :index="index"></slot>
        </span>
      </a-list-item>
    </template>
    <template #loadMore>
      <div v-if="dataList?.total > 0" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <span v-if="finished">加载完成({{ dataList?.records?.length }}/{{ dataList?.total }})</span>
        <span v-else>
          <a-spin v-if="loadingMore" />
          <a-button v-else @click="handleLoadMore">加载更多({{ dataList?.records?.length }}/{{ dataList?.total }})</a-button>
        </span>
      </div>
    </template>
  </a-list>
</template>

<script setup lang="ts">
  // import { ref } from 'vue';
  // import CommonList from '/@/views/a/common/CommonList.vue';
  // import { list } from '/@/views/a/pms/IdeaMember.api';
  // const CommonListRef = ref();
  // const initQuery = (params = {}) => {
  //   CommonListRef.value.execQuery(list, params);
  // };
  // defineExpose({ initQuery });
  // 最顶层
  // import ProductDataList from './modules/ProductDataList.vue';
  // import { onMounted, ref } from 'vue';
  // const ProductDataListRef = ref();
  // const queryList = () => {
  //   ProductDataListRef.value.startQuery();
  // };
  // onMounted(() => {
  //   queryList();
  // });
  import { DownOutlined } from '@ant-design/icons-vue';
  import { computed, getCurrentInstance, ref } from 'vue';
  import { getCodes } from '/@/views/a/pms/idea/api/IdeaCode.api';
  import { useMessage } from '/@/hooks/web/useMessage';

  // defineEmits
  const emit = defineEmits(['queryList', 'changeAdvanced', 'confirmCopy']);
  const count = ref<number>(1);
  const btnLoading = ref(false);
  const confirmCopy = () => {
    btnLoading.value = true;
    emit('confirmCopy', { count: count.value });
  };
  const props = defineProps({
    showLeft: {
      type: Boolean,
      default: true,
    },
  });
  const loading = ref(false);
  const loadingMore = ref(false);
  const dataList = ref();
  const listFunction = ref();
  const queryParams = ref(); // loadMore记录上一次参数
  const execQuery = (list: Function, params: { pageNo: 1; pageSize: 30 }, loadMore = false) => {
    listFunction.value = list;
    queryParams.value = params;
    if (loadMore) {
      loadingMore.value = true;
    } else {
      loading.value = true;
      params.pageNo = 1;
    }
    list(params)
      .then((res) => {
        params.pageNo = res.current + 1;
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
  const handleLoadMore = () => {
    execQuery(listFunction.value, queryParams.value, true);
  };
  const finished = computed(() => {
    return dataList?.value?.total === 0 || (dataList?.value?.records?.length >= dataList?.value?.total ?? false);
  });
  defineExpose({ execQuery });
</script>
<style scoped></style>
