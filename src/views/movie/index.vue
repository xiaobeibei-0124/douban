<template>
  <movie-list></movie-list>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getList', 'coming_soon')
  }
}
</script>

<style>

</style>
