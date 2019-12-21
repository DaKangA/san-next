import { Component, Vue } from 'vue-property-decorator'
import '@/styles/index.scss'

@Component
export default class extends Vue {
  protected render() {
    return (
      <div class="about">
        <h1>This is an Home page</h1>
      </div>
    )
  }
}
