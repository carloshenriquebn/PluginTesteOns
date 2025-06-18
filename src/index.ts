import { createPlugin, createRouteRef, createRoutableExtension } from '@backstage/core-plugin-api';


export const rootRouteRef = createRouteRef({
  id: 'Meuplugin',
});

export const Meuplugin = createPlugin({
  id: 'Meuplugin',
  routes: {
    root: rootRouteRef,
  },
});

export const MeuPluginPage = Meuplugin.provide(
  createRoutableExtension({
    name: 'MeuPluginPage',
    component: () =>
      Promise.resolve(() => "Hello World"),
    mountPoint: rootRouteRef,
  }),
);
