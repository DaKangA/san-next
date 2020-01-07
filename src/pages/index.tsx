import { Component, Vue } from 'vue-property-decorator'
import { Banner } from '../components/home/Banner'
import '@/styles/index.scss'
import { Now } from '../components/home/Now'

export interface HomePageSetting {
  bannerMaskColor: string
  bannerMaskOpacity: number
}

@Component
export default class extends Vue {
  protected render() {
    return (
      <div id="home-content">
        <Banner />
        <Now class="my-5" />
      </div>
    )
  }
}
