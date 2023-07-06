const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    allowedHosts: [
      'localhost:3000',
      'http://127.0.0.1:8000/'
    ],
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/',
        pathRewrite: {'^/api' : ''}
      }
    },
    historyApiFallback: true // تفعيل إعادة التوجيه في خادم التطوير
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // تحديد مسار قالب HTML
      //template: './ecommerce/backend/frontend/public/index.html'

    })
  ]
};
