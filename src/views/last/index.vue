<script setup lang="ts">
import { useLast } from "./utils/hook";

defineOptions({
  name: "LastIndex"
});

const {
  form,
  dateTimeRange,
  loading,
  fetchData,
  resetForm,
  formRef,
  dataList
} = useLast();
</script>

<template>
  <div class="main">
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="search-form w-[99/100] pl-8 pt-[12px] mb-[55px]"
    >
      <el-form-item label="船名：" prop="name1">
        <el-input
          v-model="form.name1"
          placeholder="请输入船名"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="进港时间：" prop="datetimerange">
        <el-date-picker
          v-model="dateTimeRange"
          type="datetimerange"
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
      </el-form-item>
      <el-form-item label="停泊位：" prop="name4">
        <el-select
          class="!w-[220px]"
          v-model="form.name4"
          placeholder="请选择停泊位"
        >
          <el-option label="上海" value="上海" />
          <el-option label="浙江" value="浙江" />
          <el-option label="深圳" value="深圳" />
        </el-select>
      </el-form-item>
      <el-form-item label="IMO：" prop="name5">
        <el-input
          v-model="form.name5"
          placeholder="请输入IMO"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="fetchData">
          搜索
        </el-button>
        <el-button @click="resetForm(formRef)"> 重置 </el-button>
      </el-form-item>
    </el-form>
    {{ dataList }}
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}
</style>
