import { Component as VueComponent, Prop } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { VNode } from 'vue'
import '@/styles/home/HeaderTitle.scss'

export interface IHeaderTitle {
  /**
   * 网址
   */
  link: string
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
  private link!: string

  @Prop()
  private title!: string

  @Prop()
  private subtitle!: string

  protected render(): VNode {
    return (
      <v-container class="herderTitle">
        <div class="text-center">
          <a href={this.link} class="display-1 title-text">
            {this.title}
          </a>
          <p class="body-1">{this.subtitle}</p>
        </div>
      </v-container>
    )
  }
}
