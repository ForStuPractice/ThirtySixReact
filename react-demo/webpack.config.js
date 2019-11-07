module.exports = {
    entry: "./main.js",
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