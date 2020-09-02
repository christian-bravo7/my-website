import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'initial',
  stateFactory: true,
  namespaced: true,
})
export default class initialStore extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels (extra: number): void {
    this.wheels += extra;
  }

  get axles (): number {
    return this.wheels / 2;
  }
}
