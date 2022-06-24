<template>
  <a-list :data-source="dataList?.records">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <div class="border-solid rounded">#{{ index + 1 }} </div>
            <a-dropdown>
              <a class="ant-dropdown-link">
                操作
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a-button type="link" size="small" @click="handleEdit(item)">编辑</a-button>
                  </a-menu-item>
                  <a-menu-item>
                    <a-button type="link" size="small" danger>失效</a-button>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <div>
              <a-switch />
            </div>
          </template>
          <template #description>
            <div
              ><a-tag>账号</a-tag><a-typography-text copyable>{{ item.account }}</a-typography-text></div
            >
            <div>
              <a-tag>密码</a-tag><a-typography-text copyable>{{ item.password }}</a-typography-text>
            </div>
            <div><a-tag>激活时间</a-tag>{{ item?.activeTime?.substring(0, 10) }}</div>
          </template>
        </a-list-item-meta>
        <div>
          <div><a-typography-text :copyable="{ text: copyAccount(item.account, item.password) }">复制账密</a-typography-text></div>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
  import { DownOutlined } from '@ant-design/icons-vue';
  import { list } from '../Idea.api';
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  const [registerModal, { openModal }] = useModal();
  const dataList = ref();
  const loading = ref(false);
  const params = ref({
    pageNo: 1,
    pageSize: 30,
  });
  const initQuery = (queryParams) => {
    params.value = queryParams;
    queryList();
  };
  const queryList = (loadMore = false) => {
    loading.value = true;
    list(params.value)
      .then((res) => {
        loading.value = false;
        params.value.pageNo = res.current + 1;
        if (res.current > 1 && loadMore) {
          dataList.value.records.push(...res.records);
          return;
        }
        dataList.value = res;
      })
      .catch((err) => {
        console.error(err);
        loading.value = false;
      });
  };
  list({}).then((res) => {
    dataList.value = res;
  });
  const copyAccount = (account, password) => {
    return `账号【${account}】
密码【${password}】`;
  };
  const emit = defineEmits(['handleEdit']);
  const handleEdit = (record) => {
    emit('handleEdit', record);
  };
  defineExpose({ initQuery });
</script>

<style scoped></style>
