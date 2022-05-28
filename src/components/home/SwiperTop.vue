<template>
  <div class="swiperTop">
    <van-swipe :autoplay="3000" lazy-render :indicatorColor="`#db8282`">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getBanner } from '@/request/api/home'

const images = reactive([])

const {
  data: { banners }
} = await getBanner()
banners.forEach((item) => {
  images.push(item.pic.replace('http://p1.music.126.net', '/img'))
})
</script>

<style lang="scss" scoped>
.swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>
