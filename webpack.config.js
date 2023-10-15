const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        index: './client/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
};

module.exports = () => {
    config.mode = isProduction ? 'production' : 'development';
    return config;
};
