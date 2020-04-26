let path = require('path');

module.exports = {
    entry: {
        react: ['react','reacr-dom']
    },
    output:{
        filename: '_dll_[name].js',
        path: path.resolve(__dirname,'dist'),
        library: 'ab',
        libraryTarget: 'var'      // commonjs var this
    }
}