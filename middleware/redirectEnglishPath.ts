import { Context } from '@nuxt/types';

export default ({ app, redirect }: Context): void => {
  // @ts-ignore
  const { locale } = app.i18n;

  const routeName = app.getRouteBaseName();

  if (locale !== 'en') {
    redirect(app.localePath({ name: routeName }, 'en'));
  }
};
