<template>
  <a-list v-if="ipIdeaItem.showIp" size="small" bordered :data-source="ipIdeaItem.ideaUsages">
    <template #renderItem="{ item }">
      <a-list-item>
        <div>
          <div>
            <a-tag> <a-typography-text>次数</a-typography-text> </a-tag>
            <a-tag color="blue">共{{ item.useCount }}次</a-tag>
          </div>
          <div>
            <a-tag> <a-typography-text>账密</a-typography-text> </a-tag>
            <span
              ><a-typography-text :delete="item?.status === -1" :copyable="{ text: copyAccount(item.account, item.password) }">
                <a-typography-text copyable>{{ item.account }}</a-typography-text>
                <a-typography-text copyable>{{ item.password }}</a-typography-text>
                {{ item?.invalidTime }}
              </a-typography-text>
            </span>
          </div>
          <div> <a-tag>首次</a-tag>{{ item.createTime }}</div>
          <div> <a-tag>最近</a-tag>{{ item.updateTime }} </div>
        </div>
      </a-list-item>
    </template>
  </a-list>
  <a-list v-else size="small" bordered :data-source="ipIdeaItem.sysIps">
    <template #renderItem="{ item }">
      <a-list-item>
        <div>
          <div>
            <a-tag>属地</a-tag>{{ item?.country?.indexOf('中国') > -1 || item?.country?.toUpperCase()?.indexOf('CHINA') > -1 ? '' : item.country }}
            {{ item.province }}{{ item.city }}{{ item.county }} |
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
    ipIdeaItem: { type: Object },
  });

  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
</script>

<style scoped></style>
