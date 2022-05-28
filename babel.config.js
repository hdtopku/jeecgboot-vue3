module.exports = {
  plugins: [
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }], // `style: true` 会加载 less 文件
    ['import', { libraryName: 'vxe-table', style: true }], // 样式是否也按需加载
  ],
};
