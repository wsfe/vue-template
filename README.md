[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# vue-template

> 结合fet的vue模板

## Build Setup

``` bash
# install dependencies
npm install

# 在localhost:8080启动本地调试
npm run dev

# 打包成开发机环境的代码
npm run pack

# 为不同开发机环境打包代码
npm run pack --server=开发机名称（在package.json中的servers里面配置，详细见下面）

# 发布到对应的开发机
- 可以直接在命令行运行 `npm run pack --server=serverName && fet sync serverName`
- 也可以在package.json里面配置scripts`npm run pack --server=serverName && fet sync serverName`，然后运行该命令，建议用第二种方式

# 打包线上代码
npm run build

# 打包线上代码并生成分析报告
npm run build --report

# 打包到制定的域名
npm run build --server=serverName

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# servers配置说明
```json
{
  "servers": {
    "serverName": { // 服务器名称
      "host": "10.8.1.61", // sync到远程的服务器ip
      "domain": "//static.example.com", // 服务器对应的域名
      "port": 22, // 服务器的ssh端口
      "local": "./", // sync那个目录下面的文件，默认是当前目录下面
      "path": "/usr/local/share/vue-template", // sync到服务器的那个地址
      "sudo": false, // 是否开启sudo权限
      "user": "sshName", // 登录服务器的ssh账号，默认获取电脑名称。
      "exclude": ["node_modules", "build", ".gitignore", "README.md", "package.json", "ft.config.js", "ver", "refs", "src", "prd", ".cache", ".vscode", ".editorconfig"] // 哪些文件不需要传到服务器
    }
  }
}
```
