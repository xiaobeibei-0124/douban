<template>
  <div id="app">
    <!-- 头部组件 -->
    <LayoutHeader></LayoutHeader>
    <div class="wrapper">
      <router-view/>
    </div>
    <!-- 尾部组件 -->
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<script>
import LayoutHeader from '@/components/layout-header'
import LayoutFooter from '@/components/layout-footer'
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style lang="less">

</style>
