module.exports = {
    entry: "./app.js",
    output: {
      path: "/",
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['env', 'react', 'es2015']
            }
          }
        }
      ]
    }
  }