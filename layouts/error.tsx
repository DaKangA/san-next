import { VNode } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { NuxtError } from '@nuxt/types'

@Component
export default class extends Vue {
  @Prop()
  public error!: NuxtError

  /**
   * head
   */
  public head() {
    return this.error.statusCode === 404 ? '404 Not Found' : 'An error occurred'
  }

  /**
   * ErrorMessage
   */
  public ErrorMessage(): VNode {
    if (this.error.statusCode === 404) {
      return <h1>404 Not Found</h1>
    } else return <h1>发生了一些错误</h1>
  }

  protected render(): VNode {
    return (
      <v-app>
        {this.ErrorMessage()}
        <nuxt-link to="/">Home page</nuxt-link>
      </v-app>
    )
  }
}
