const path = require('path');
const manifest = require('./package.json');

const config = manifest.customConfig;
const mainFile = manifest.main;
const exportFileName = path.basename(mainFile, path.extname(mainFile));

module.exports = {
    output: {
        filename: `${exportFileName}.js`,
        libraryTarget: 'umd',
        library: config.mainVarName
    },
    externals: {},
    resolve: {
        modulesDirectories: [ 'node_modules', 'src', 'src/js' ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
}