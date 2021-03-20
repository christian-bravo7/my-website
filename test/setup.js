/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { config } from '@vue/test-utils';

config.mocks = {
  $md: label => label,
  $t: msg => msg,
  localePath: path => path,
};
