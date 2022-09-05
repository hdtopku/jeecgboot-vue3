<template>
  <a-select style="width: 150px" v-model:value="currentGroupId" @change="handleChange">
    <a-select-option v-for="(item, index) in ideaGroup" :key="item.id" :value="item.id"> #{{ index + 1 }}|{{ item.groupName }} </a-select-option>
  </a-select>
</template>

<script lang="ts" setup>
  import { onMounted, ref, toRefs } from 'vue';
  import { list as listGroup } from '../IdeaGroup.api';
  const props = defineProps<{
    currentGroupId: {
      type: String;
    };
    ideaGroup: [];
  }>();
  const { currentGroupId, ideaGroup } = toRefs(props);
  // const ideaGroup = ref();
  // const queryIdeaGroupList = () => {
  //   listGroup({ pageSize: 1000, status: 0 }).then((res) => {
  //     ideaGroup.value = res?.groups?.records;
  //     // currentGroupId.value = res.currentGroupId;
  //   });
  // };
  const emit = defineEmits(['changeGroup']);
  const handleChange = (groupId) => {
    emit('changeGroup', groupId);
  };
  // onMounted(() => {
  //   queryIdeaGroupList();
  // });
</script>

<style scoped></style>
