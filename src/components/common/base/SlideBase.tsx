import { VNode } from 'vue'
import { Component as VueComponent } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { IMG_RAND_HOLDER } from '@/core/utils'

export interface SlideItem {
  title: string
  subtitle: string
  img: string
  link?: string
}

export interface ISlideBase {
  items: SlideItem[]
}

/**
 * 轮播 @基本组件
 * abstract items: SlideItem[]
 */
@VueComponent
export class SlideBase extends Component<ISlideBase> {
  private items!: SlideItem[]

  private SlideContent(title: string, subtitle: string): VNode {
    return (
      <div>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-center carousel-caption">
            <p class="display-1">{title}</p>
            <p class="subtitle-1">{subtitle}</p>
          </div>
        </v-row>
        <div class="mask rgba-black-strong"></div>
      </div>
    )
  }

  private get SlideItems(): VNode[] {
    return this.items.map((item) => {
      const { img, title, subtitle } = item
      return (
        <v-carousel-item>
          <v-img height="100%" tile src={img.replace(IMG_RAND_HOLDER, title)}>
            {this.SlideContent(title, subtitle)}
          </v-img>
        </v-carousel-item>
      )
    })
  }

  protected render(): VNode {
    return (
      <div>
        <v-carousel cycle hide-delimiters>
          {this.SlideItems}
        </v-carousel>
      </div>
    )
  }
}
