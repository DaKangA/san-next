import '@/styles/home/banner.scss'
import { Component } from 'vue-tsx-support'
import { Prop } from 'vue-property-decorator'
import { SlideBase, SlideItem } from '../common/base/SlideBase'

export interface IBannerShow {
  items: SlideItem[]
}

export class BannerShow extends Component.mixin(SlideBase)<IBannerShow> {
  @Prop()
  items!: SlideItem[]
}
