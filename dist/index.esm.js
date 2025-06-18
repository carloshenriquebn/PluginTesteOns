import { createRouteRef, createPlugin } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "meuplugin"
});
const meuPlugin = createPlugin({
  id: "meuplugin",
  routes: {
    root: rootRouteRef
  }
});

export { meuPlugin, rootRouteRef };
//# sourceMappingURL=index.esm.js.map
