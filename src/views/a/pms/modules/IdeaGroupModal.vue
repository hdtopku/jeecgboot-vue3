<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="title" @ok="handleSubmit" width="80%">
    <a-form
      layout="horizontal"
      :model="formState"
      v-bind="{
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }"
      :rules="rules"
      ref="formRef"
    >
      <a-form-item label="组名" name="groupName">
        <a-input autoComplete="off" v-model:value="formState.groupName" placeholder="请输入组名" allowClear @pressEnter="handleSubmit" />
      </a-form-item>
      <a-form-item label="指定idea" name="ideaId">
        <a-select v-model:value="formState.ideaId" style="width: 250px">
          <a-select-option :key="item.id" v-for="item in ideaList" v-model:value="item.id">{{ item.account }}|{{ item.activeTime }}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { ref, computed, unref, toRaw } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { saveOrUpdate } from '/@/views/a/pms/IdeaGroup.api';
  import moment from 'dayjs';

  defineProps({
    ideaList: {
      type: [],
    },
  });
  // Emits声明
  const emit = defineEmits(['register', 'success']);
  const isUpdate = ref(true);
  const formState = ref({});
  const formRef = ref();
  //表单赋值
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    await setModalProps({ confirmLoading: false, showCancelBtn: true, showOkBtn: true });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      formState.value = data.record;
    } else {
      formRef.value.resetFields();
      let day = Number.parseInt(moment().format('DD'));
      let time = moment().format('YYYYMMDD').substring(2);
      if (day > 0 && day < 11) {
        formState.value.groupName = time + '上';
      } else if (day < 21) {
        formState.value.groupName = time + '中';
      } else {
        formState.value.groupName = time + '下';
      }
    }
  });
  const handleSubmit = async () => {
    try {
      if (!(await formRef.value.validate())) {
        return;
      }
      setModalProps({ confirmLoading: true, showCancelBtn: true, showOkBtn: true });
      await saveOrUpdate(toRaw(formState.value), isUpdate.value);
      //关闭弹窗
      closeModal();
      //刷新列表
      emit('success', { isUpdate: isUpdate.value });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  };
  const rules = {
    groupName: [{ required: true, trigger: ['blur', 'change'], message: '请输入组名' }],
    ideaId: [{ required: true, trigger: ['blur', 'change'], message: '请指定idea' }],
  };
  //设置标题
  const title = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));
  const activeKey = ref('0');
  const changeActiveKey = (key) => {
    activeKey.value = key.value;
  };
  defineExpose({ changeActiveKey });
</script>

<style lang="less" scoped></style>
