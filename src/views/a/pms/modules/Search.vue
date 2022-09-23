<template>
  <a-card size="small">
    <div class="flex flex-wrap justify-evenly">
      <a-space class="mb-2">
        <a-button :type="dayOff === 100 ? 'link' : ''" @click="clickNearDay(100)">本月</a-button>
        <a-button :type="dayOff === 30 ? 'link' : ''" @click="clickNearDay(30, 0)">近30天</a-button>
        <a-button :type="dayOff === 1 ? 'link' : ''" @click="clickNearDay(1, 1)">昨天</a-button>
        <a-button :type="dayOff === 0 ? 'link' : ''" @click="clickNearDay(0, 0)">今天</a-button>
      </a-space>
      <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX animate__faster">
        <a-space v-show="advanced" class="mb-2">
          <a-date-picker @change="clickDatePicker" allowClear placeholder="开始日期" :disabled-date="disabledStartDate" v-model:value="startDate" />
          <a-date-picker
            @change="clickDatePicker(false)"
            allowClear
            placeholder="结束日期"
            :disabled-date="disabledEndDate"
            v-model:value="endDate"
          />
        </a-space>
      </transition>
      <a-input size="large" v-model:value="keyword" placeholder="粘贴或模糊搜索激活码、用户标识" allowClear>
        <template v-if="advanced" #suffix>
          <a-button class="animate__animated animate__heartBeat animate__slower animate__repeat-3" @click="clickHelp" type="link" danger
            >帮助</a-button
          >
        </template>
        <template #prefix>
          <a-button type="link" @click="advanced = !advanced">
            <DownOutlined v-if="advanced" />
            <UpOutlined v-else />
          </a-button>
        </template>
      </a-input>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
  import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
  import { onMounted, ref, watch } from 'vue';
  import dayjs, { Dayjs } from 'dayjs';

  const startDate = ref<Dayjs>(dayjs().subtract(1, 'year'));
  const endDate = ref<Dayjs>(dayjs());
  const keyword = ref();

  const dayOff = ref(0);
  const advanced = ref(false);
  const disabledStartDate = (current: Dayjs) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf('day');
  };
  const disabledEndDate = (current: Dayjs) => {
    return (current && current > dayjs().endOf('day')) || current.isBefore(startDate.value);
  };

  const emit = defineEmits(['initQuery']);
  const initQuery = () => {
    emit('initQuery', { startDate, endDate, keyword });
  };

  const clickNearDay = (day, end = 0) => {
    dayOff.value = day;
    if (dayOff.value === 100) {
      startDate.value = dayjs().startOf('month');
    } else {
      startDate.value = dayjs().subtract(day, 'day');
    }
    endDate.value = dayjs().subtract(end, 'day');
  };
  const clickDatePicker = (isStart = true) => {
    if (isStart && startDate.value.isAfter(endDate.value)) {
      endDate.value = startDate.value;
    }
  };
  watch(keyword, initQuery);
  watch(startDate, () => {
    if (startDate.value.isAfter(endDate.value)) {
      endDate.value = startDate.value;
    }
  });
  watch(endDate, initQuery);
  onMounted(() => {
    initQuery();
  });
</script>
<style scoped></style>
