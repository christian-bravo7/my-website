import { Context } from '@nuxt/types';

export default ({ redirect, app, isDev }: Context): void => {
  if (app.getRouteBaseName() === 'wip' || isDev) {
    return;
  }

  redirect(app.localePath({ name: 'wip' }));
};
