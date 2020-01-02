import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  protected render() {
    return (
      <div id="home-content">
        <section id="banner"></section>
      </div>
    )
  }
}
