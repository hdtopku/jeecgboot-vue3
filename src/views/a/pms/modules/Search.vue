<template>
  <a-card size="small">
    <a-row>
      <a-col :span="4">
        <a-button class="animate__animated animate__slideInLeft animate__slower animate__repeat-3" @click="clickHelp" type="link" danger>帮助</a-button>
      </a-col>
      <a-col :span="12">
        <a-slider v-model:value="count" :min="1" :max="200" />
      </a-col>
      <a-col class="text-center" :span="8">
        <a-button v-show="count === 1" @click="confirmCopy" :loading="btnLoading" placeholder="开始日期" type="primary">复制{{ count }}条</a-button>
        <a-popconfirm :title="`确定复制${count}条吗?`" ok-text="确定" cancel-text="取消" @confirm="confirmCopy">
          <a-button v-show="count > 1" :loading="btnLoading" placeholder="开始日期" type="primary">复制{{ count }}条</a-button>
        </a-popconfirm>
      </a-col>
    </a-row>
    <div class="flex flex-wrap justify-evenly">
      <a-space class="mb-2">
        <a-button type="link" @click="advanced = !advanced">
          <DownOutlined v-if="advanced" />
          <UpOutlined v-else />
        </a-button>
        <a-button :type="btnNum === 1 ? 'link' : ''" @click="clickThisMonth">本月</a-button>
        <a-button :type="btnNum === 2 ? 'link' : ''" @click="clickNearDay(30, 0)">近30天</a-button>
        <a-button :type="btnNum === 3 ? 'link' : ''" @click="clickNearDay(1, 1)">昨天</a-button>
        <a-button :type="btnNum === 4 ? 'link' : ''" @click="clickNearDay(0, 0)">今天</a-button>
      </a-space>
      <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__fast">
        <a-space v-show="advanced" class="mb-2">
          <a-date-picker allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
          <a-date-picker allowClear placeholder="结束日期" :disabled-date="disabledEndDate" v-model:value="endDate" />
        </a-space>
      </transition>
      <a-input ref="inputRef" allowClear v-model:value="keyword" placeholder="粘贴激活链并查询" @search="queryList">
        <template v-if="advanced" #prefix>
          <a-select v-if="hasPermission('am:selectUser')" :loading="userLoading" allowClear ref="select" v-model:value="selectName" style="width: 120px" @focus="focus" @change="handleChange">
            <a-select-option :key="item.id" v-for="item in userList" :value="item.username">{{ item.realname }}</a-select-option>
            <template v-if="userLoading" #notFoundContent>
              <a-spin size="small" />
            </template>
          </a-select>
          <a-button @click="clickPaste">粘贴</a-button>
        </template>
        <template #suffix>
          <a-button @click="queryList" type="primary">查询</a-button>
        </template>
      </a-input>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
  import { getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';
  import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
  const advanced = ref(false);
  import moment, { Moment } from 'moment';
  const count = ref<number>(1);
  const startDate = ref<Moment>(moment());
  const endDate = ref<Moment>(moment());
  import { message } from 'ant-design-vue';
  import { LOGIN_INFO_KEY } from '/@/enums/cacheEnum';
  import { getAuthCache } from '/@/utils/auth';
  import { getUserList } from '/@/api/common/api';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useRouter } from 'vue-router';
  import { getCodes } from '/@/views/a/pms/Idea.api';

  const btnLoading = ref(false);
  const { proxy } = getCurrentInstance();

  const confirmCopy = () => {
    btnLoading.value = true;
    getCodes(
      { count: count.value },
      (data) => {
        proxy.tool.copy(data, '复制成功');
        btnLoading.value = false;
      },
      () => (btnLoading.value = false)
    );
  };
</script>
<style scoped lang="less">
  ::v-deep(.ant-select) {
    width: 90px !important;
    .ant-select-selector {
      width: 90px !important;
    }
  }
</style>
