const { override, useBabelRc, addWebpackPlugin } = require("customize-cra");
const webpack = require('webpack');

module.exports = override(
    useBabelRc(),
    addWebpackPlugin(
        new webpack.DefinePlugin(
            {
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }
        )
        
    )
);
