module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        safe: true,
      },
    ],
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
          // prettier-ignore
          'src': './src',
          '@types': './src/types',
        },
      },
    ],
    ['transform-inline-environment-variables'],
  ],
}
