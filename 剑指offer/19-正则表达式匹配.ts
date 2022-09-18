/**
 * 剑指 Offer 19. 正则表达式匹配
 *
 * 请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，
 * 而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。
 */

/**
 * 1.递归
 */
function isMatch(s: string, p: string): boolean {
  const isMatchIdx = (
    s: string,
    p: string,
    sIdx: number,
    pIdx: number
  ): boolean => {
    if (!s[sIdx] && !p[pIdx]) {
      return true;
    }
    if (s[sIdx] && !p[pIdx]) {
      return false;
    }
    if (p[pIdx + 1] === "*") {
      if (s[sIdx] === p[pIdx] || (p[pIdx] === "." && s[sIdx])) {
        // s 不能为空的原因： '.'正则要求必须至少有一个字符
        return (
          isMatchIdx(s, p, sIdx + 1, pIdx + 2) || // 例子：s === 'dbc', p === 'a*bc'
          isMatchIdx(s, p, sIdx + 1, pIdx) || // 例子：s === 'aaabc', p === 'a*bc'
          isMatchIdx(s, p, sIdx, pIdx + 2)
        ); // 例子： s === 'abc', p === 'a*abc'
      } else {
        return isMatchIdx(s, p, sIdx, pIdx + 2); // 例子： s === 'bc', p === 'a*bc'
      }
    }
    if (s[sIdx] === p[pIdx] || (p[pIdx] === "." && s[sIdx])) {
      return isMatchIdx(s, p, sIdx + 1, pIdx + 1); // 若第一个字符匹配上，则模式和字符串比较位置向后移一位
    }
    return false;
  };

  return isMatchIdx(s, p, 0, 0);
}

/**
 * 2.动态规划
 */
function isMatch1(s: string, p: string): boolean {
  const sLen = s.length;
  const pLen = p.length;
  const dp = new Array<boolean[]>(sLen + 1);
  for (let idx = 0; idx < dp.length; idx++) {
    dp[idx] = new Array<boolean>(pLen + 1).fill(false);
  }

  const isMatchIdx: (sIdx: number, pIdx: number) => boolean = (sIdx, pIdx) => {
    return p[pIdx - 2] === s[sIdx - 1] || p[pIdx - 2] === ".";
  };

  // 初始化 dp
  dp[0][0] = true;
  for (let j = 2; j <= pLen; j += 2) {
    //当s为空时，p必须满足a*b*.*这样的结构才能匹配成空串
    //当s不为空，p为空为false
    dp[0][j] = dp[0][j - 2] && p[j - 1] == "*";
  }

  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 0; j < pLen + 1; j++) {
      if (p[j - 1] === "*") {
        if (isMatchIdx(i, j)) {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      } else {
        if (isMatchIdx(i, j + 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = false;
        }
      }
    }
  }

  return dp[sLen][pLen];
}
