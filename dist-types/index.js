"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meuPlugin = exports.rootRouteRef = void 0;
const core_plugin_api_1 = require("@backstage/core-plugin-api");
exports.rootRouteRef = (0, core_plugin_api_1.createRouteRef)({
    id: 'Meuplugin',
});
exports.meuPlugin = (0, core_plugin_api_1.createPlugin)({
    id: 'Meuplugin',
    routes: {
        root: exports.rootRouteRef,
    },
});
