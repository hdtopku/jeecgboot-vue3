<template>
  <a-list size="small" bordered :data-source="sysIpInfoItem.sysIps">
    <template #renderItem="{ item }">
      <a-list-item>
        <div>
          <div>
            <a-tag>属地</a-tag>{{ item?.country?.indexOf('中国') > -1 || item?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : item.country }} {{ item.province }}{{ item.city
            }}{{ item.county }} |
            {{ item.ip }}
          </div>
          <div> <a-tag>系统</a-tag>{{ item.operator }} | {{ item.model }} | {{ item.system }}|{{ item.browser }}</div>
          <div> <a-tag>首次</a-tag>{{ item.createTime }}</div>
          <div>
            <a-tag>最近</a-tag>{{ item.updateTime }} <a-tag color="blue">共{{ item.visitCount }}次</a-tag></div
          >
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
  defineProps({
    sysIpInfoIndex: { type: Number },
    sysIpInfoItem: { type: Object },
  });
</script>

<style scoped></style>
