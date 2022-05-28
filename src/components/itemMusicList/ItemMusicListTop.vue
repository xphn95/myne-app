<template>
  <div class="itemMusicListTop">
    <img
      :src="
        props.playlist.coverImgUrl.replace('https://p1.music.126.net', '/img')
      "
      alt=""
      class="bgImg"
    />
    <div class="top-left">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-back"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="top-right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hanbaocaidan"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  playlist: {
    type: Object,
    required: true
  }
})

console.log(props.playlist)
</script>

<style lang="scss" scoped>
.itemMusicListTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 11rem;
    margin-left: -0.2rem;
    margin-right: -0.2rem;
    z-index: -99;
    filter: blur(30px);
  }
  .top-left,
  .top-right {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 0.4rem;
      color: #fff;
    }
    .icon {
      fill: #fff;
    }
  }
}
</style>
