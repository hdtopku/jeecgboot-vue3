<template>
  <CommonList ref="CommonListRef">
    <template #operate="{ item }">
      <div>
        <a-menu>
          <a-menu-item>
            <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === 0 || item.status === 1">
            <a-button @click="changeStatus(item, -1)" type="link" size="small" danger>删除</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === 0">
            <a-button @click="changeStatus(item, 1)" type="link" size="small">暂存</a-button>
          </a-menu-item>
          <a-menu-item v-if="item.status === -1 || item.status === 1">
            <a-button @click="changeStatus(item, 0)" type="link" size="small">使用</a-button>
          </a-menu-item>
        </a-menu>
      </div>
    </template>
    <!--    <template #left="{ item, index }">-->
    <!--      <div>-->
    <!--        <a-typography-text :copyable="{ text: item?.code }">-->
    <!--          <span class="" :class="item?.valid === -1 ? 'text-gray-500 line-through' : 'text-purple-900 font-medium'"> {{ item?.code }}</span>-->
    <!--        </a-typography-text>-->
    <!--      </div>-->
    <!--    </template>-->
    <template #bottom="{ item }">
      <div>
        <a-tag>激活链接</a-tag
        ><a-typography-text :delete="item?.status === -1" :copyable="{ text: item.link }">{{ getLink(item.link) }}</a-typography-text>
      </div>
      <div v-if="item?.thirdLink.length > 0">
        <a-tag>第三方链</a-tag
        ><a-typography-text v-if="item?.thirdLink.length > 0" :delete="item?.thirdLinkValid === -1" copyable="{ text: item.thirdLink }">{{
          getLongLink(item.thirdLink)
        }}</a-typography-text>
        <a-tag v-else color="error">未绑定</a-tag>
      </div>
      <div class="text-red-600" v-if="item?.remark?.length > 0"><a-tag color="red">备注事项</a-tag>{{ item.remark }}</div>
      <div><a-tag>创建时间</a-tag>{{ item?.createTime }}</div>
      <div v-if="advanced">
        <div>
          <a-tag>邮箱地址</a-tag>
          <a-typography-text v-if="item?.email.length > 0" :copyable="{ text: item.email }">{{ getLongLink(item.email) }}</a-typography-text>
          <a-tag v-else color="error">未填写</a-tag>
        </div>
        <div>
          <a-tag>长链地址</a-tag><a-typography-text :copyable="{ text: item.longLink }">{{ getLongLink(item.longLink) }}</a-typography-text>
        </div>
        <div><a-tag>更新时间</a-tag>{{ item?.updateTime }}</div>
        <div><a-tag>创建者是</a-tag>{{ item.createBy }}</div>
      </div>
    </template>
  </CommonList>
</template>

<script lang="ts" setup>
  import { getList, saveOrUpdate } from '../AmLink.api';
  import CommonList from '/@/views/a/common/CommonList.vue';
  import { ref } from 'vue';
  const CommonListRef = ref();
  const emit = defineEmits(['handleEdit', 'queryList']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };

  const getLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('&ud_t=');
      if (index >= 0) {
        return link.substring(index + 4);
      }
    }
    return link;
  };
  const getLongLink = (link) => {
    if (link?.length > 0) {
      let index = link.indexOf('clicked/');
      if (index >= 0) {
        return link.substring(index, index + 13);
      }
    }
    return link;
  };
  const changeStatus = (record, status) => {
    record.status = status;
    saveOrUpdate(record, true).then(() => {
      emit('queryList');
    });
  };

  const startQuery = (params = {}) => {
    CommonListRef.value.execQuery(getList, params);
  };
  const advanced = ref(false);
  defineExpose({
    startQuery,
    changeAdvanced: () => {
      advanced.value = !advanced.value;
    },
  });
</script>
<style scoped></style>
