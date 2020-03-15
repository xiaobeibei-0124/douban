<template>
  <movie-list></movie-list>
</template>

<script>
export default {
  created () {
    // 尝试调用action方法
    this.$store.dispatch('getList', 'in_theaters')
  }
}
</script>

<style>

</style>
