import { Component as VueComponent } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'

import '@/styles/home/banner.scss'

export interface IBanner {
  title: string
  subtitle: string
  img: string
  url: string
}

@VueComponent
export class Banner extends Component<IBanner> {}
