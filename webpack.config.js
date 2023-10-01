const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const SpeedMeasure = new SpeedMeasurePlugin();

const mfeSharedConfig = {
  react: {
    eager: true,
    singleton: true,
    // `requiredVersion` is excluded to inherit from the root shell container
  },

  'react-dom': {
    eager: true,
    singleton: true,
    // `requiredVersion` is excluded to inherit from the root shell container
  },

  'react-router-dom': {
    eager: true,
    singleton: true,
    // `requiredVersion` is excluded to inherit from the root shell container
  },
};

module.exports = (env, argv) =>
  SpeedMeasure.wrap({
    entry: {
      index: './src/index.tsx',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].min.js',
      clean: true,
    },
    ...(argv.mode === 'development' && {
      devServer: {
        hot: true,
        port: 7001,
        static: './dist',
      },
    }),
    devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new TsconfigPathsPlugin({
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['demo'],
        template: './public/index.html',
      }),
      new webpack.DefinePlugin({
        APP_VERSION: `"${env.APP_VERSION}"`, // it's coming from the Jenkinsfile
      }),

      new ModuleFederationPlugin({
        name: 'ShoppingCart',
        filename: 'remoteEntry.js',
        exposes: {
          './Counter': './src/components/Counter/Counter',
        },
        shared: mfeSharedConfig,
      }),
      ...(argv.mode === 'production' ? [new CompressionPlugin()] : []),
    ],
  });
