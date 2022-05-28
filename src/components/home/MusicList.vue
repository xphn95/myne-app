<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="imgWidth"
        class="my-swipe"
        :show-indicators="false"
      >
        <van-swipe-item v-for="(musicList, index) in musicLists" :key="index">
          <router-link
            :to="{ path: '/itemMusicList', query: { id: musicList.id } }"
          >
            <img
              :src="
                musicList.picUrl.replace('https://p1.music.126.net', '/img')
              "
              alt=""
            />
            <span class="logo">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyunyinle1"></use>
              </svg>
            </span>
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
              </svg>
              {{ changeCount(musicList.playCount) }}
            </span>
            <span class="name">{{ musicList.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getRecommendList } from '@/request/api/home'
const musicLists = reactive([])
const imgWidth = ref(window.screen.width / 2.5)
console.log(imgWidth)
const changeCount = (count) => {
  if (count > 1e8) {
    return `${(count / 1e8).toFixed(1)}亿`
  } else if (count > 1e4) {
    return `${(count / 1e4).toFixed(1)}万`
  } else {
    return count
  }
}
const {
  data: { result }
} = await getRecommendList()
musicLists.push(...result)
console.log(musicLists)
</script>

<style lang="scss" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 4rem;
    .my-swipe {
      height: 100%;
      position: relative;
      a {
        text-decoration: none;
        color: #000;
      }
      img {
        width: 100%;
        height: 150px;
      }
      .logo {
        position: absolute;
        top: 6px;
        left: 4px;
        width: 0.4rem;
        height: 0.4rem;
        background-color: rgb(0, 0, 0, 0.2);
        border-radius: 50%;
        svg {
          width: 0.32rem;
          height: 0.32rem;
          fill: #fff;
          padding-left: 0.08rem;
          padding-top: 0.08rem;
        }
      }
      .playCount {
        position: absolute;
        padding: 0.06rem 0.16rem;
        border-radius: 999em;
        font-size: 0.28rem;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0.1rem;
        font-size: 0.24rem;
        right: 0.1rem;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        svg {
          width: 0.4rem;
          height: 0.4rem;
          fill: #fff;
        }
      }
    }
  }
}
</style>
