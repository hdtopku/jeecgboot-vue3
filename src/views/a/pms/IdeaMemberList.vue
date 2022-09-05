<template>
  <a-card size="small">
    <div>
      <a-space class="mt-2">
        <a-button type="link" @click="router.push('/pms/id/group')">idea分组</a-button>
        <a-button type="link" @click="router.push('/pms/id')">idea列表</a-button>
      </a-space>
      <a-input size="large" v-model:value="keyword" placeholder="粘贴或模糊搜索激活码、用户标识" allowClear>
        <template #suffix> </template>
      </a-input>
      <a-row class="w-full my-2">
        <a-col :span="4">
          <a-button class="animate__animated animate__slideInLeft animate__slower animate__repeat-3" @click="clickHelp" type="link" danger>帮助</a-button>
        </a-col>
        <a-col :span="12">
          <a-slider v-model:value="count" :min="1" :max="500" />
        </a-col>
        <a-col class="text-center" :span="8">
          <a-button v-show="count === 1" @click="confirmCopy" :loading="btnLoading" placeholder="开始日期" :type="isSelf ? 'primary' : 'error'">复制{{ count }}条</a-button>
          <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
            <a-button v-show="count > 1" :loading="btnLoading" placeholder="开始日期" :type="isSelf ? 'primary' : 'error'">复制{{ count }}条</a-button>
          </a-popconfirm>
        </a-col>
      </a-row>
    </div>
    <div class="flex flex-wrap justify-evenly">
      <a-tabs :animated="false" v-model:activeKey="activeKey" @tabClick="tabClick">
        <a-tab-pane key="-1" tab="失效" />
        <a-tab-pane key="1" tab="打开" />
        <a-tab-pane key="4" tab="刷新" />
        <a-tab-pane key="2" tab="已用" />
      </a-tabs>
    </div>
    <IdeaMemberDataList ref="IdeaMemberDataListRef" @handleEdit="handleEdit" @queryList="queryList" />
  </a-card>
  <IdeaMemberModal @register="registerModal" @success="queryList" />
</template>

<script lang="ts" setup>
  import IdeaMemberDataList from './modules/IdeaMemberDataList.vue';
  import IdeaMemberModal from './modules/IdeaMemberModal.vue';
  import { getCurrentInstance, onMounted, ref, watch } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { router } from '/@/router';
  import { getCodes } from './IdeaMember.api';
  const count = ref<number>(1);
  const IdeaMemberDataListRef = ref();
  const [registerModal, { openModal }] = useModal();
  const { proxy } = getCurrentInstance();
  onMounted(() => {
    queryList();
  });
  const activeKey = ref('4');

  const btnLoading = ref(false);
  const confirmCopy = () => {
    btnLoading.value = true;
    getCodes(
      { count: count.value },
      (data) => {
        if (count.value === 1) {
          proxy.tool.copy(data, data.substring(27) + '已复制');
        } else {
          proxy.tool.copy(data, count.value + '条已复制');
        }
        btnLoading.value = false;
      },
      () => (btnLoading.value = false)
    );
  };
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
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30 };
    if (activeKey.value != '0') {
      params.status = activeKey.value;
    }
    if (keyword.value != null && keyword.value.trim() !== '') {
      params.keyword = keyword.value;
    }
    IdeaMemberDataListRef.value.initQuery(params);
  };
  const tabClick = (tabKey) => {
    activeKey.value = tabKey;
    queryList();
  };
  watch(keyword, queryList);
</script>
<style scoped></style>
