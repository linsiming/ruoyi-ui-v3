
// 发布阶段需要使用的babel插件
const prodPlugins = []
// 处于产品发布模式
if (process.env.NODE_ENV === 'production' && process.env.VUE_REMOVE_CONSOLE) {
  // 添加插件
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     // 引入组件
    //     customName: (name) => {
    //       name = name.slice(3)
    //       return `element-plus/lib/components/${name}`
    //     },
    //     // 引入样式
    //     customStyleName: (name) => {
    //       name = name.slice(3)
    //       // 如果你需要引入 [name].scss 文件，你需要用下面这行
    //       // return `element-plus/lib/components/${name}/style`
    //       // 引入 [name].css
    //       return `element-plus/lib/components/${name}/style/css`
    //     }
    //   }
    // ],
    // 发布产品时候的插件数组  ...为展开运算符，数组内容展开赋给一个新数组
    ...prodPlugins
  ]
}
