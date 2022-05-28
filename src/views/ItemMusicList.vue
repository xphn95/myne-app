<template>
  <item-music-list-top :playlist="state.playlist"></item-music-list-top>
  <item-music-list-header
    :commentCount="state.playlist.commentCount"
    :shareCount="state.playlist.shareCount"
    :coverImgUrl="state.playlist.coverImgUrl"
    :title="state.playlist.name"
    :creator="state.playlist.creator.nickname"
    :avatarUrl="state.playlist.creator.avatarUrl"
    :description="state.playlist.description"
  ></item-music-list-header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getMusicListDetail } from '@/request/api/itemMusicList'
import { reactive } from 'vue'
import ItemMusicListTop from '@/components/itemMusicList/ItemMusicListTop.vue'
import ItemMusicListHeader from '@/components/itemMusicList/ItemMusicListHeader.vue'

const state = reactive({
  playlist: {}
})

const {
  query: { id }
} = useRoute()

const {
  data: { playlist }
} = await getMusicListDetail(id)
state.playlist = playlist
// console.log(playlist, 'data')
</script>
