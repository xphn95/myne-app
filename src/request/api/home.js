import service from '..'

// 获取首页轮播图
export const getBanner = () => {
  return service({
    method: 'get',
    url: '/api/banner?type=2'
  })
}

// 获取推荐歌单
export const getRecommendList = () => {
  return service({
    method: 'get',
    url: '/api/personalized?limit=10'
  })
}
