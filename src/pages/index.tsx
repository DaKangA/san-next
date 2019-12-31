import { Component, Vue } from 'vue-property-decorator'
import { Demo } from '../components/demo'

@Component
export default class extends Vue {
  protected render() {
    return (
      <div class="about">
        <Demo ref="demo"></Demo>
      </div>
    )
  }
}
