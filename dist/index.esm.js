import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "Meuplugin"
});
const Meuplugin = createPlugin({
  id: "Meuplugin",
  routes: {
    root: rootRouteRef
  }
});
const MeuPluginPage = Meuplugin.provide(
  createRoutableExtension({
    name: "MeuPluginPage",
    component: () => Promise.resolve(() => "Hello World"),
    mountPoint: rootRouteRef
  })
);

export { MeuPluginPage, Meuplugin, rootRouteRef };
//# sourceMappingURL=index.esm.js.map
