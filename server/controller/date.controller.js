const time = Date.now() + 28800000;
const hktNow = () => {
  return new Date(time).toUTCString();
};

module.exports = hktNow;
