<template>
  <div>
    <a-list size="small" bordered :data-source="sysIpInfoItem.sysIps">
      <template #renderItem="{ item }">
        <a-list-item>
          <div>
            {{ item?.country?.indexOf('中国') > -1 || item?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : item.country }} {{ item.province }}{{ item.city }}{{ item.county }} |
            {{ item.browser }} | <a-tag>{{ item.visitCount }}</a-tag>
          </div>
          <div> {{ item.operator }} | {{ item.model }} | {{ item.system }}</div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts" setup>
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { ref } from 'vue';
  const CommonListRef = ref();
  const props = defineProps({
    sysIpInfoIndex: { type: Number },
    sysIpInfoItem: { type: Object },
  });
</script>

<style scoped></style>
