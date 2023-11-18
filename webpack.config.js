const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: '/js/script.js',
    mode: 'development',
    output: {
        filename: 'output.js', // Имя выходного файла JavaScript
        path: __dirname + '/dist', // Директория для сгенерированных файлов
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Имя выходного файла стилей
        }),
    ],
};
