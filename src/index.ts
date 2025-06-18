import { createPlugin, createRouteRef, createRoutableExtension } from '@backstage/core-plugin-api';


export const rootRouteRef = createRouteRef({
  id: 'meuplugin',
});

export const meuPlugin = createPlugin({
  id: 'meuplugin',
  routes: {
    root: rootRouteRef,
  },
});

export const MeuPluginPage = meuPlugin.provide(
  createRoutableExtension({
    name: 'MeuPluginPage',
    component: () =>
      Promise.resolve(() => "Hello World"),
    mountPoint: rootRouteRef,
  }),
);
