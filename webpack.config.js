const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
      title: `${name}`
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

let jsFiles = {};
function generateJSEntries(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    jsFiles[name] = templateDir + "/" + item;
  });
  jsFiles.style = "./src/sass/style.sass";

  return jsFiles;
}
const jsEntries = generateJSEntries("./src/js");

module.exports = {
  entry: jsEntries,
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "./js/[name].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /styles/],
        include: [path.resolve(__dirname, "src/js")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: "env",
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "../",
            name: "img/[name].[ext]"
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "../",
            name: `fonts/[name].[ext]`
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        include: [path.resolve(__dirname, "src/sass")],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  require("autoprefixer")({
                    browsers: ["> 1%", "last 2 versions"]
                  })
                ],
                sourceMap: true
              }
            },
            // {
            //   loader: "resolveurl-loader"
            // },
            {
              loader: "sass-loader",
              options: {
                outputStyle: "compressed",
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true
        }
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "./src/html/"),
        use: ["raw-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: "popper.js/dist/umd/popper.js"
    }),
    new ExtractTextPlugin({
      filename: "./css/style.bundle.css",
      allChunks: true
    })
    // new HtmlWebpackPlugin()
  ].concat(htmlPlugins)
};
