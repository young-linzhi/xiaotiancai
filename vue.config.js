// 这里的webpack配置会和公共的webpack.config.js进行合并
module.exports = {
    // NODE_ENV：Node.js 暴露给执行脚本的系统环境变量。通常用于确定在开发环境还是生产环境
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
}
