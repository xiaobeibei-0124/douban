<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="`/detail/${item.id}`">
        <img :src="`https://images.weserv.nl/?url=${item.images.small}`">
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p><span class="tag" v-for="obj in item.genres" :key="obj">{{ obj }}</span></p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  }
}
</script>

<style>

</style>
