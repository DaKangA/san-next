import { Component as VueComponent, Prop } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { VNode } from 'vue'
import '@/styles/home/HeaderTitle.scss'

export interface IHeaderTitle {
  /**
   * 颜色
   */
  color: string
}

export interface HeaderTitleItem {
  /**
   * 标题
   */
  title: string
  /**
   * 副标题
   */
  subtitle: string
}
@VueComponent
export class HeaderTitle extends Component<IHeaderTitle> {
  @Prop()
  private color!: string

  public headerTitleItems: HeaderTitleItem[] = [
    {
      title: '此刻｜Now',
      subtitle: '… 为您展示NCFZ最新动态及技术推文 …'
    }
  ]

  private get HeaderTitleItems(): VNode[] {
    return this.headerTitleItems.map((item) => {
      const { title, subtitle } = item
      return (
        <div>
          <a href="" class="display-1 title-text">
            {title}
          </a>
          <p class="body-1">{subtitle}</p>
        </div>
      )
    })
  }

  protected render(): VNode {
    return (
      <div class="herderTitle" style={`color: ${this.color};`}>
        <v-list-tile-content>{this.HeaderTitleItems}</v-list-tile-content>
      </div>
    )
  }
}
