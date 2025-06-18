import { createPlugin, createRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'meuplugin',
});

export const meuPlugin = createPlugin({
  id: 'meuplugin',
  routes: {
    root: rootRouteRef,
  },
});