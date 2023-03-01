const CracoAlias = require('craco-alias')

module.exports = {
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-private-methods'],
      ['@babel/plugin-proposal-class-properties'],
      ['@babel/plugin-proposal-private-property-in-object']
    ]
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified*/
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
}
