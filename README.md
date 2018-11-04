### 代码目录
```js
+-- dist /                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- scripts/                                ---npm run 脚本文件
+-- src/                                    ---核心代码目录
|   +-- assets                              ---静态文件
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- Exception                      ---404组件
|   |    |    --- ...
|   |    +-- PageLoading                    ---Loading
|   |    |    --- ...
|   +-- public_axios                        ---http请求存放目录
|   |    --- index.js
|   +-- public_store                        ---store
|   |    --- index.js
|   +-- router                              ---Router
|   +-- urlApi                              ---urlApi
|   --- App.jsx                             ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- babel.config.js                         ---babel配置
--- package.json
```

### 应用要点
1.代码文件的组织结构
2.确定模块的边界
3.Store的状态树设计