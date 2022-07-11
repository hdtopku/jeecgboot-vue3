<template>
  <a-card size="small">
    <a-row :gutter="48">
      <a-col :span="4">
        <a-tabs style="position: fixed" tabPosition="left" :animated="false" v-model:activeKey="activeKey" size="small" type="card">
          <a-tab-pane key="0" tab="热销" />
          <a-tab-pane key="1" tab="主食" />
          <a-tab-pane key="2" tab="调味" />
          <a-tab-pane key="3" tab="肉蛋" />
          <a-tab-pane key="4" tab="粮油" />
          <a-tab-pane key="5" tab="百货" />
          <a-tab-pane key="6" tab="干货" />
          <a-tab-pane key="7" tab="散装" />
          <a-tab-pane key="8" tab="纸张" />
        </a-tabs>
      </a-col>
      <a-col :span="20">
        <div class="pl-2">
          <div class="mb-3" style="position: fixed">
            <a-input v-model:value="keyword" placeholder="输入商品名称模糊查询" allowClear>
              <template #suffix>
                <a-button @click="queryList" type="primary">查询</a-button>
              </template>
            </a-input>
          </div>
          <ProductDataList :showLeft="false" @handleEdit="handleEdit" ref="ProductDataListRef" @queryList="queryList" />
        </div>
      </a-col>
    </a-row>
  </a-card>
  <ProductModal @register="registerModal" @success="queryList" />
</template>
<script lang="ts" setup>
  import ProductDataList from './modules/ProductDataList.vue';
  import ProductModal from './modules/ProductModal.vue';
  import { onMounted, ref, watch } from 'vue';
  import { useModal } from '/@/components/Modal';
  const [registerModal, { openModal }] = useModal();
  const activeKey = ref('0');
  const keyword = ref();
  /**
   * 编辑事件
   */
  const handleEdit = (record: Recordable) => {
    openModal(true, {
      record,
      isUpdate: true,
      showFooter: true,
    });
  };
  const ProductDataListRef = ref();
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30 };
    if (keyword.value != null && keyword.value.trim() !== '') {
      params.keyword = keyword.value;
    }
    ProductDataListRef.value.initQuery(params);
  };
  watch(keyword, queryList);
  onMounted(() => {
    queryList();
  });
</script>
