<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="swipe-wrap">
      <Suspense>
        <swiper-top></swiper-top>
      </Suspense>
    </div>
    <icon-list></icon-list>
    <div class="music-list-wrap">
      <Suspense>
        <music-list></music-list>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'
</script>

<style lang="scss" scoped>
.swipe-wrap {
  height: 0;
  padding-bottom: 40%;
  overflow: hidden;
}
.music-list-wrap {
  height: 0;
  padding-bottom: 250px;
  overflow: hidden;
}
</style>
