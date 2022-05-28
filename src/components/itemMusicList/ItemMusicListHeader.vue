<template>
  <div class="item-music-list-header">
    <div class="header-content">
      <div class="header-left">
        <img :src="props.coverImgUrl" alt="" />
      </div>
      <div class="header-right">
        <div class="title">{{ props.title }}</div>
        <div class="creator">
          <img :src="props.avatarUrl" alt="" />
          <span>{{ props.creator }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
        <div class="description">
          <span>{{ props.description }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="icons">
      <div v-for="(item, index) in iconsList" :key="index" class="item-wrap">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#${item.icon}`"></use>
        </svg>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
const props = defineProps({
  commentCount: {
    type: Number,
    required: true
  },
  shareCount: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coverImgUrl: {
    type: String,
    required: true
  }
})

const iconsList = reactive([
  {
    icon: 'icon-jianyi',
    content: props.commentCount
  },
  {
    icon: 'icon-fenxiang',
    content: props.shareCount
  },
  {
    icon: 'icon-xiazai',
    content: '下载'
  },
  {
    icon: 'icon-show_duoxuan',
    content: '多选'
  }
])
</script>

<style lang="scss" scoped>
.item-music-list-header {
  .header-content {
    width: 100%;
    height: 3.6rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    svg {
      fill: #fff;
    }
    .header-left {
      img {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 5%;
      }
    }
    .header-right {
      width: 60%;
      height: 2.6rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-between;
      .title {
        height: 0.8rem;
        font-weight: 700;
        margin-bottom: 0.16rem;
      }
      .creator {
        display: flex;
        align-items: center;
        margin-bottom: 0.16rem;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          margin-right: 0.2rem;
        }
      }
      .description {
        display: flex;
        align-items: flex-end;
        span {
          width: 4.2rem;
          height: 0.8rem;
          align-items: center;
          word-break: break-all;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        svg {
          margin-bottom: -0.06rem;
        }
      }
    }
  }
  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .item-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      svg {
        fill: #fff;
        margin-bottom: 0.08rem;
      }
    }
  }
}
</style>
