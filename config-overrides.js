const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    // 配置别名Alias，需要配合tsconfig.json的paths属性
    ["@"]: path.resolve(__dirname, "src"),
  })
);
