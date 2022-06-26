<template>
  <a-form
    :model="formState"
    v-bind="{
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }"
  >
    <a-form-item label="组名">
      <a-input placeholder="请输入组名" />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
  import { computed, defineComponent, reactive, UnwrapRef } from 'vue';

  interface FormState {
    layout: 'horizontal' | 'vertical' | 'inline';
    fieldA: string;
    fieldB: string;
  }
  export default defineComponent({
    setup() {
      const formState: UnwrapRef<FormState> = reactive({
        layout: 'horizontal',
        fieldA: '',
        fieldB: '',
      });
      const formItemLayout = computed(() => {
        const { layout } = formState;
        return layout === 'horizontal'
          ? {
              labelCol: { span: 4 },
              wrapperCol: { span: 14 },
            }
          : {};
      });
      const buttonItemLayout = computed(() => {
        const { layout } = formState;
        return layout === 'horizontal'
          ? {
              wrapperCol: { span: 14, offset: 4 },
            }
          : {};
      });
      return {
        formState,
        formItemLayout,
        buttonItemLayout,
      };
    },
  });
</script>
