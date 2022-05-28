<template>
  <vxe-table border show-overflow ref="xTable1" height="300" :row-config="{ isHover: true }">
    <vxe-column type="seq" width="50" />
    <vxe-column field="name" title="Name" sortable />
    <vxe-column field="role" title="Role" />
    <vxe-column field="sex" title="Sex" />
  </vxe-table>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue';
  import { VxeTableInstance } from 'vxe-table';
  import XEUtils from 'xe-utils';

  export default defineComponent({
    setup() {
      const mockList1: any = [];
      for (let index = 0; index < 200; index++) {
        mockList1.push({
          name: 'Test' + index,
          role: 'Developer',
          sex: '男',
        });
      }

      const xTable1 = ref({} as VxeTableInstance);

      onMounted(() => {
        nextTick(() => {
          const $table = xTable1.value;
          if ($table) {
            $table.loadData(XEUtils.clone(mockList1, true));
          }
        });
      });

      return {
        xTable1,
      };
    },
  });
</script>

<style scoped></style>
