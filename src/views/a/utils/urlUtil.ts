export const extractUrl = (s) => {
  if (s == null) {
    return '';
  }
  const reg = /[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  // reg =
  //   /((http[s]{0,1}|ftp):\/\/[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(\/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?)|(www.[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(\/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?)/;
  const r = s.match(reg);
  return r != null ? r[0] : s;
};
g
