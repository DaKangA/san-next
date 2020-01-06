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
      title: '诺亚｜Noah',
      subtitle: '点击进入｜开源公测启动！',
      img: getRandImage(1920, 1080),
      url: ''
    },
    {
      title: '新课发布｜智能化设计教程',
      subtitle: '点击进入｜了解详情',
      img: getRandImage(1920, 1080),
      url: ''
    },
    {
      title: '陪跑｜参数化设计技能培训',
      subtitle: '点击进入｜每月发车',
      img: getRandImage(1920, 1080),
      url: ''
    }
  ]

  private get BannerItems(): VNode[] {
    return this.bannerItems.map((item) => {
      const { title, subtitle, img } = item
      return (
        <v-carousel-item>
          <v-img height="100%" tile src={img.replace(IMG_RAND_HOLDER, title)}>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-center carousel-caption">
                <p class="display-1">{title}</p>
                <p class="headline">{subtitle}</p>
              </div>
            </v-row>
            <div class="mask rgba-black-strong"></div>
          </v-img>
        </v-carousel-item>
      )
    })
  }

  protected render(): VNode {
    return (
      <div class="banner" style={`background-color: ${this.color};`}>
        <v-carousel cycle hide-delimiters>
          {this.BannerItems}
        </v-carousel>
      </div>
    )
  }
}
