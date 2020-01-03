import { Component as VueComponent, Prop } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { VNode } from 'vue'
import '@/styles/home/banner.scss'
import { getRandImage, IMG_RAND_HOLDER } from '@/core/utils'

export interface IBanner {
  /**
   * 颜色蒙版颜色
   */
  color: string
  /**
   * 颜色蒙版透明度
   */
  opacity: number
  /**
   * 显示箭头
   */
  showArrow: boolean
}
/**
 * 单个轮播接口
 */
export interface BannerItem {
  /**
   * 标题
   */
  title: string
  /**
   * 副标题
   */
  subtitle: string
  img: string
  url: string
}

@VueComponent
export class Banner extends Component<IBanner> {
  @Prop()
  private color!: string

  @Prop()
  private opacity!: number

  @Prop()
  private showArrow!: boolean

  public bannerItems: BannerItem[] = [
    {
      title: '轮播标题1',
      subtitle: '轮播小标题1',
      img: getRandImage(1920, 1080),
      url: ''
    },
    {
      title: '轮播标题2',
      subtitle: '轮播小标题2',
      img: getRandImage(1920, 1080),
      url: ''
    },
    {
      title: '轮播标题3',
      subtitle: '轮播小标题2',
      img: getRandImage(1920, 1080),
      url: ''
    }
  ]

  private get BannerItems(): VNode[] {
    return this.bannerItems.map((item) => {
      const { title, img } = item
      return (
        <v-carousel-item>
          <v-img height="100%" tile src={img.replace(IMG_RAND_HOLDER, title)}>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{title}</div>
            </v-row>
          </v-img>
        </v-carousel-item>
      )
    })
  }

  protected render(): VNode {
    return (
      <div class="banner" style={`background-color: ${this.color};`}>
        <v-carousel>{this.BannerItems}</v-carousel>
      </div>
    )
  }
}
