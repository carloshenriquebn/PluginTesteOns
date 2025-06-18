"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeuPluginPage = exports.Meuplugin = exports.rootRouteRef = void 0;
const core_plugin_api_1 = require("@backstage/core-plugin-api");
exports.rootRouteRef = (0, core_plugin_api_1.createRouteRef)({
    id: 'Meuplugin',
});
exports.Meuplugin = (0, core_plugin_api_1.createPlugin)({
    id: 'Meuplugin',
    routes: {
        root: exports.rootRouteRef,
    },
});
exports.MeuPluginPage = exports.Meuplugin.provide((0, core_plugin_api_1.createRoutableExtension)({
    name: 'MeuPluginPage',
    component: () => Promise.resolve(() => "Hello World"),
    mountPoint: exports.rootRouteRef,
}));
