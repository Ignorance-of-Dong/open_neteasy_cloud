const { override, fixBabelImports } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
// const rewireLess = require('react-app-rewire-less');
const { addWebpackAlias } = require('customize-cra');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const path = require('path');

const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};

// module.exports = function override(config, env) {
//     // console.log(config)
//     override(
//         rewiredMap(),
//         fixBabelImports('import', {
//             libraryName: 'antd-mobile',
//             libraryDirectory: 'es',
//             style: 'css',
//         }),
//     )
//     config.module.rules.unshift({
//         test: /\.(ts|tsx)$/,
//         loader: require.resolve("tslint-loader"),
//         enforce: "pre",
//     });
//     config = rewireReactHotLoader(config, env);
//     config = addWebpackAlias({
//         'utils': path.resolve(__dirname, 'src', 'utils'),
//         'src': path.resolve(__dirname, 'src'),
//         // ['themed-components']: path.resolve(__dirname, 'src', 'utils', 'themed-components')
//     })(config);
//     config = rewireStyledComponents(config, env, {
//         pure: true,
//     });
//     return config;
// };


module.exports = override(
    rewiredMap(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
