module.exports = {
  dev61: {
    host: '10.8.203.61',
    domain: '//dev1.img.wangsu.com',
    port: 63501,
    local: './', // 默认当前目录
    path: '/usr/local/nginx/one',
    sudo: false,
    exclude: ["node_modules", "build", ".gitignore", "README.md", "package.json", "ft.config.js", "ver", "refs", "src", "prd", ".cache", ".vscode", ".editorconfig"]
  }
};
