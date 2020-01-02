import { Component as VueComponent, Prop, Watch } from 'vue-property-decorator'
import { Component } from 'vue-tsx-support'
import { VNode } from 'vue'
import '@/styles/demo.scss'

export interface IDemo {
  /**
   * Component name
   */
  name?: string
}

@VueComponent
export class Demo extends Component<IDemo> {
  @Prop({
    default: 'ABC'
  })
  private name!: string

  public value: string = ''
  msg: string = ''

  public get valueLength() {
    return this.value.length
  }

  @Watch('value')
  protected valueWatch(newV: any, oldV: any) {
    this.msg = `监听到属性value发生变化，新的值为：${newV}，旧值为${oldV}`
  }

  public created() {
    // console.log(this.$parent)
  }

  protected render(): VNode {
    return (
      <div class="demo">
        <h1>{this.name}</h1>
        <v-text-field v-model={this.value} label="Regular"></v-text-field>
        <p>{this.msg}</p>
        <p>{this.valueLength}</p>
      </div>
    )
  }
}
