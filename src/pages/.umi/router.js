import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'D:/project/ReactAntdPro/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('D:/project/ReactAntdPro/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        name: 'welcome',
        icon: 'smile',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Welcome" */ '../Welcome'),
              LoadingComponent: require('D:/project/ReactAntdPro/src/components/PageLoading/index')
                .default,
            })
          : require('../Welcome').default,
        exact: true,
      },
      {
        path: '/demo',
        name: 'demo',
        icon: 'android',
        routes: [
          {
            path: '/demo/1',
            name: 'demo1',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__demo__demo1" */ '../demo/demo1'),
                  LoadingComponent: require('D:/project/ReactAntdPro/src/components/PageLoading/index')
                    .default,
                })
              : require('../demo/demo1').default,
            exact: true,
          },
          {
            path: '/demo/2',
            name: 'demo2',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__demo__demo2" */ '../demo/demo2'),
                  LoadingComponent: require('D:/project/ReactAntdPro/src/components/PageLoading/index')
                    .default,
                })
              : require('../demo/demo2').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/project/ReactAntdPro/node_modules/_umi-build-dev@1.10.12@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('D:/project/ReactAntdPro/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/project/ReactAntdPro/node_modules/_umi-build-dev@1.10.12@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('D:/project/ReactAntdPro/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('D:/project/ReactAntdPro/node_modules/_umi-build-dev@1.10.12@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
    <RendererWrapper0>
      <Router history={history}>{renderRoutes(routes, props)}</Router>
    </RendererWrapper0>
  );
}
