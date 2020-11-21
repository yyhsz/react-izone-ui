const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'production',
  entry:{
    index:'./lib/index.tsx'
  },
  output:{
    path:path.resolve(__dirname,'dist/lib'),
    library:'izone-ui',
    libraryTarget:'umd'
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/, loader:'awesome-typescript-loader'
      } 
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'izone-ui',
      template:'index.html'
    })
  ]
}