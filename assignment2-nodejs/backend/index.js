// getSystemInfo.js
const os = require("os");

const info = {
  platform: os.platform(),
  cpu: os.arch(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  userInfo: os.userInfo()
};

console.log(JSON.stringify(info));