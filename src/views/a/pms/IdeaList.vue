<template>
  <a-card size="small">
    <!--    <div class="flex flex-wrap justify-evenly">-->
    <!--      <a-space size="large" class="mb-2">-->
    <!--        <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__fast">-->
    <!--          <div class="flex flex-wrap justify-evenly">-->
    <!--            <a-button type="link" @click="advanced = !advanced">-->
    <!--              <DownOutlined v-if="advanced" />-->
    <!--              <UpOutlined v-else />-->
    <!--            </a-button>-->
    <!--          </div>-->
    <!--        </transition>-->
    <!--        <a-button type="primary" @click="handleAdd">新增</a-button>-->
    <!--        <a-button @click="jumpToJet" type="link" shape="round">JET官网</a-button>-->
    <!--      </a-space>-->

    <!--      <a-input size="large" ref="inputRef" allowClear v-model:value="keyword" placeholder="粘贴账号或密码查询" @search="queryList">-->
    <!--        <template v-if="advanced" #prefix>-->
    <!--          <a-button @click="clickPaste">粘贴</a-button>-->
    <!--        </template>-->
    <!--        <template #suffix> </template>-->
    <!--      </a-input>-->
    <!--    </div>-->

    <!--    <div class="flex flex-wrap justify-evenly">-->
    <!--      <a-tabs :animated="false" v-model:activeKey="activeKey" @tabClick="tabClick">-->
    <!--        <a-tab-pane key="0" tab="备用" />-->
    <!--        <a-tab-pane key="-1" tab="失效" />-->
    <!--        <a-tab-pane key="1" tab="在用" />-->
    <!--        <a-tab-pane key="5" tab="全部" />-->
    <!--      </a-tabs>-->
    <!--    </div>-->

    <Search
      @query-list="(params) => queryList(params, true)"
      ref="SearchRef"
      showBottom
      @confirm-copy="confirmCopy"
      placeholder="粘贴或模糊搜索激活码、用户标识"
      :tabs="tabs"
    >
      <template #suffix>
        <a-button
          class="animate__animated animate__heartBeat animate__slower animate__repeat-3"
          @click="router.push('/pms/am/help')"
          type="link"
          danger
          >帮助</a-button
        >
      </template>
    </Search>
    <IdeaDataList ref="IdeaDataListRef" @handleEdit="handleEdit" />
  </a-card>
  <!-- 表单区域 -->
  <IdeaModal @register="registerModal" @success="handleSuccess" />
</template>

<script lang="ts" setup>
  import IdeaDataList from './modules/IdeaDataList.vue';
  import Search from '/@/views/a/pms/modules/Search.vue';
  import { useModal } from '/@/components/Modal';
  import IdeaModal from './modules/IdeaModal.vue';
  import { onMounted, ref, watch } from 'vue';
  import moment, { Dayjs } from 'dayjs';

  const startDate = ref<Dayjs>(moment().subtract(1.5, 'year'));
  const endDate = ref<Dayjs>(moment());
  const keyword = ref();

  const [registerModal, { openModal }] = useModal();

  /**
   * 新增事件
   */
  function handleAdd() {
    openModal(true, {
      isUpdate: false,
      showFooter: true,
    });
  }
  /**
   * 编辑事件
   */
  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
      showFooter: true,
    });
  }
  const handleSuccess = () => {
    queryList();
  };
  const IdeaDataListRef = ref();

  const tabs = [
    {
      tabKey: '0',
      tabName: '备用',
    },
    {
      tabKey: '-1',
      tabName: '失效',
    },
    {
      tabKey: '1',
      tabName: '在用',
    },
    {
      tabKey: '5',
      tabName: '全部',
    },
  ];
  const activeKey = ref('1');
  const queryList = () => {
    let params = { pageNo: 1, pageSize: 30, keyword: keyword.value };
    if (startDate.value != null) {
      params.startTime = startDate.value.startOf('day').format('YYYY-MM-DD HH:mm:ss');
    }
    if (endDate.value != null) {
      params.endTime = endDate.value.endOf('day').format('YYYY-MM-DD HH:mm:ss');
    }
    if (activeKey.value !== '2') {
      params.status = activeKey.value;
    } else {
      params.status = null;
    }
    IdeaDataListRef.value.initQuery(params);
  };
  watch(keyword, queryList);
  watch(startDate, () => {
    if (startDate.value != null && startDate.value.isAfter(endDate.value)) {
      endDate.value = startDate.value;
    }
    queryList();
  });
  watch(endDate, queryList);
  onMounted(() => {
    queryList();
  });
  const jumpToJet = () => {
    window.open('https://account.jetbrains.com');
  };
</script>
<style scoped></style>
