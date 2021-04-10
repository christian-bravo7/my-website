import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'guest',
  stateFactory: true,
  namespaced: true,
})
export default class GuestStore extends VuexModule {
  storeReady: boolean = false;

  get isAppInitialized (): boolean {
    return this.storeReady;
  }

  @Mutation
  setStoreReady (): void {
    this.storeReady = true;
  }
}
