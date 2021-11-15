const path = require("path");

const pathObj = path.parse(__dirname);
// __filename C:\Users\Administrator\Desktop\study_node\module_path\path.js
// __dirname C:\Users\Administrator\Desktop\study_node\module_path

console.log(pathObj.base);      // .base: 最后一个"/"后的内容
/*
{
    root: 'C:\\',
    dir: 'C:\\Users\\Administrator\\Desktop\\study_node\\module_path',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}
*/