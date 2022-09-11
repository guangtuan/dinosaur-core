const R = require("ramda");

module.exports = R.pipe(
    R.apply(require("path").join),
    // 根据之前实现的偏好 掐头去尾
    // 但其实是否必要 有待商榷
    R.replace(/^\/|\/$/g, "")
);
