import { Component as VueComponent } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { VNode } from 'vue'
import { HeaderTitle } from '../common/HeaderTitle'

export interface INow {}

@VueComponent
export class Now extends Component<INow> {
  protected render(): VNode {
    return (
      <section id="now" class="section">
        <HeaderTitle
          title="此刻｜Now"
          subtitle="… 为您展示NCFZ最新动态及技术推文 …"
          link="fdsa"
        />
      </section>
    )
  }
}
