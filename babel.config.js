module.exports = {
  presets: [
    '@babel/react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/proposal-class-properties',
      {
        loose: true
      }
    ],
    ['import', {
      'libraryName': 'antd',
      'libraryDirectory': 'es',
      javascriptEnabled: true,
      'style': 'css' // `style: true` 会加载 less 文件
    }]
  ],
  'comments': false
}
