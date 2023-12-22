// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const FaviconPlugin = require('favicons-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


//export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname,'dist'),
        // filename: 'main.js',
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.s?css$/, // 정규표현식 s? = s가 있을수도 없을수도있다,
                use: [            // style - css 순서가 중요하다
                    'style-loader', // html 파일에서 style 부분에 삽입을 해준다.
                    'css-loader', // js 파일에서 css파일을 해석하게 해준다.
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new FaviconPlugin({
            logo: 'static/favicon.ico'
        }),
        new CopyPlugin({
            patterns: [
                {from:'static'}
            ]
        })
    ],

    devServer:{
        host: 'localhost'
    }
}