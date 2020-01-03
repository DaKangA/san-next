import { Component, Vue } from 'vue-property-decorator'
import { Banner } from '../components/home/banner'

export interface HomePageSetting {
  bannerMaskColor: string
  bannerMaskOpacity: number
}

@Component
export default class extends Vue {
  protected render() {
    return (
      <div id="home-content">
        <section id="banner">
          <Banner color="#323232" opacity={0.2} showArrow={true}></Banner>
        </section>
      </div>
    )
  }
}
