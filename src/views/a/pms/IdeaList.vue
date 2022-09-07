<template>
  <a-card size="small">
    <div class="flex flex-wrap justify-evenly">
      <a-space>
        <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__fast">
          <div class="flex flex-wrap justify-evenly">
            <a-button type="link" @click="advanced = !advanced">
              <DownOutlined v-if="advanced" />
              <UpOutlined v-else />
            </a-button>
          </div>
        </transition>

        <a-input size="large" ref="inputRef" allowClear v-model:value="keyword" placeholder="粘贴账号或密码查询" @search="queryList">
          <template v-if="advanced" #prefix>
            <a-button @click="clickPaste">粘贴</a-button>
          </template>
          <template #suffix>
            <a-button v-if="advanced" type="primary" @click="handleAdd">新增</a-button>
          </template>
        </a-input>
        <a-button @click="jumpToJet" type="link" shape="round"><LinkOutlined /> </a-button>
      </a-space>
    </div>

    <div class="flex flex-wrap justify-evenly">
      <a-tabs :animated="false" v-model:activeKey="activeKey" @tabClick="tabClick">
        <a-tab-pane key="-1" tab="失效" />
        <a-tab-pane key="0" tab="待用" />
        <a-tab-pane key="1" tab="在用" />
        <a-tab-pane key="5" tab="全部" />
      </a-tabs>
    </div>
    <IdeaDataList ref="IdeaDataListRef" @handleEdit="handleEdit" />
  </a-card>
  <!-- 表单区域 -->
  <IdeaModal @register="registerModal" @success="handleSuccess" />
</template>

<script lang="ts" setup>
  import IdeaDataList from './modules/IdeaDataList.vue';
  import { DownOutlined, UpOutlined, LinkOutlined } from '@ant-design/icons-vue';
  import { useModal } from '/@/components/Modal';
  import IdeaModal from './modules/IdeaModal.vue';
  import { nextTick, onMounted, ref, watch } from 'vue';
  import moment, { Moment } from 'moment';
  import { message } from 'ant-design-vue';

  const advanced = ref(false);
  const startDate = ref<Moment>(moment().subtract(1.5, 'year'));
  const endDate = ref<Moment>(moment());
  const keyword = ref();
  const disabledStartDate = (current: Moment) => {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  };
  const disabledEndDate = (current: Moment) => {
    return (current && current > moment().endOf('day')) || current.isBefore(startDate.value);
  };

  const [registerModal, { openModal }] = useModal();
  const clickPaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        keyword.value = text;
      })
      .catch((err) => {
        if (err instanceof DOMException) {
          message.error('请手动粘贴，或允许读取剪贴板，失败原因：' + err);
        } else {
          message.error('请手动粘贴，失败原因：' + err);
        }
      });
  };

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
  const tabClick = (tabKey) => {
    activeKey.value = tabKey;
    IdeaDataListRef.value.changeActiveKey(activeKey);
    queryList();
  };
  watch(endDate, queryList);
  onMounted(() => {
    queryList();
  });
  const jumpToJet = () => {
    window.open('https://account.jetbrains.com');
  };
</script>
<style scoped></style>
