import service from '..'

// 获取歌单详情
export const getMusicListDetail = (id) => {
  return service({
    method: 'get',
    url: `/api/playlist/detail?id=${id}`
  })
}
