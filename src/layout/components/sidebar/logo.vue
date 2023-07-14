<script setup lang="ts">
import { getTopMenu } from "@/router/utils";
import { useNav } from "@/layout/hooks/useNav";

const props = defineProps({
  collapse: Boolean
});

const { title } = useNav();
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
        :to="getTopMenu()?.path ?? '/'"
      >
        <img src="/logo.png" alt="logo" />
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        :to="getTopMenu()?.path ?? '/'"
      >
        <img src="/logo.svg" alt="logo" />
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .sidebar-logo-link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;

    img {
      display: inline-block;
      height: 68px;
    }

    .sidebar-title {
      display: inline-block;
      height: 80px;
      margin: 0 0 0 20px;
      overflow: hidden;
      font-size: 46px;
      font-weight: 600;
      line-height: 80px;
      // color: #040439;
      color: rgb(4 4 57 / 100%);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
