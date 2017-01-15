const manifest = require('./package.json');

const config = manifest.customConfig;

module.exports = {
    output: {
        filename: `js/${config.entryFileName}`,
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