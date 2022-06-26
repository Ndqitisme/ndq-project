//Config Webpack Overrides to use useBabelRc
//Cấu hình Webpack Overrides để sử dụng useBabelRc
const { override, useBabelRc } = require('customize-cra');

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());
