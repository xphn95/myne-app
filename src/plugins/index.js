import { Swipe, SwipeItem } from 'vant'

const plugins = [Swipe, SwipeItem]

export default function getVant(app) {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
