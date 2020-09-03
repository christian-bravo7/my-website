import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'guest',
  stateFactory: true,
  namespaced: true,
})
export default class GuestStore extends VuexModule {
  theme: string = 'light';

  get hasDarkTheme (): boolean {
    return this.theme === 'dark';
  }

  @Mutation
  changeTheme (): void {
    const theme = this.theme === 'dark' ? 'light' : 'dark';
    this.theme = theme;
  }
}
