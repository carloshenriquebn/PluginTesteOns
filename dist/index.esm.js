import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "meuplugin"
});
const MeuPlugin = createPlugin({
  id: "meuplugin",
  routes: {
    root: rootRouteRef
  }
});
const MeuPluginPage = MeuPlugin.provide(
  createRoutableExtension({
    name: "MeuPluginPage",
    component: () => Promise.resolve(() => "Hello World"),
    mountPoint: rootRouteRef
  })
);

export { MeuPlugin, MeuPluginPage, rootRouteRef };
//# sourceMappingURL=index.esm.js.map
