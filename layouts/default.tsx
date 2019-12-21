import { VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

declare interface NavItem {
  name: string
  icon: string
}

@Component
export default class extends Vue {
  public drawer: boolean = false

  public navItems: NavItem[] = [
    {
      name: '1',
      icon: '1'
    }
  ]

  protected render(): VNode {
    return (
      <v-app>
        <v-navigation-drawer
          color="transparent"
          v-model={this.drawer}
          app
          clipped
        >
          <v-list>{this.NavItems()}</v-list>
        </v-navigation-drawer>
        <v-app-bar
          color="transparent"
          class="elevation-0 px-5"
          app
          clipped-left
          dense
        >
          <v-app-bar-nav-icon small onClick={this.OnNavBtnClick} />
          <v-toolbar-title class="mr-12 align-center">
            <span class="title">NCFZ</span>
          </v-toolbar-title>
        </v-app-bar>

        <v-content>
          <v-container class="fill-height">
            <Nuxt></Nuxt>
          </v-container>
        </v-content>
      </v-app>
    )
  }

  /**
   * navItems
   */
  public NavItems(): VNode[] {
    return this.navItems.map((item) => {
      return (
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{item.icon}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{item.name}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      )
    })
  }

  public OnNavBtnClick(): void {
    this.drawer = !this.drawer
  }
}
