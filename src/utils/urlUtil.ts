export const extractUrl = (s) => {
  if (s == null) {
    return '';
  }
  //var reg = /(https:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  const r = s.match(reg);
  return r != null ? r[0] : s;
};
