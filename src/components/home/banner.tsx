import { Component as VueComponent } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { VNode } from 'vue'
import { SlideItem } from '../common/base/SlideBase'
import { BannerShow } from './BannerShow'
import { getRandImage } from '@/core/utils'

export interface IBanner {}

@VueComponent
export class Banner extends Component<IBanner> {
  private items: SlideItem[] = [
    {
      title: '诺亚｜Noah',
      subtitle: '点击进入｜开源公测启动！',
      img: getRandImage(1920, 1080)
    },
    {
      title: '新课发布｜智能化设计教程',
      subtitle: '点击进入｜了解详情',
      img: getRandImage(1920, 1080)
    },
    {
      title: '陪跑｜参数化设计技能培训',
      subtitle: '点击进入｜每月发车',
      img: getRandImage(1920, 1080)
    }
  ]

  protected render(): VNode {
    return (
      <section id="banner">
        <BannerShow items={this.items}></BannerShow>
      </section>
    )
  }
}
