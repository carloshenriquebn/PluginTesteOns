import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "meuplugin"
});
const meuPlugin = createPlugin({
  id: "meuplugin",
  routes: {
    root: rootRouteRef
  }
});
const MeuPluginPage = meuPlugin.provide(
  createRoutableExtension({
    name: "MeuPluginPage",
    component: () => Promise.resolve(() => "Hello World"),
    mountPoint: rootRouteRef
  })
);

export { MeuPluginPage, meuPlugin, rootRouteRef };
//# sourceMappingURL=index.esm.js.map
