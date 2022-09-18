/**
 * 剑指 Offer 05. 替换空格
 *
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */

function replaceSpace(s: string): string {
  const tmp = s.split(" ");
  return tmp.join("%20");
}

function replaceSpace1(s: string): string {
  if (s === "%20") {
    return s;
  }
  return encodeURI(s);
}

console.log(replaceSpace("We are happy."));
