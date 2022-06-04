function numUniqueEmails(emails: string[]): number {
  const emailsMap = new Map();
  for (let i = 0; i < emails.length; i++) {
    const formatedStr = formatEmailStr(emails[i]);
    if (!emailsMap.has(formatedStr)) {
      emailsMap.set(formatedStr, 1);
    }
  }
  return emailsMap.size
}

const formatEmailStr = (str: string) => {
  console.log("in");
  const atIndex = str.indexOf("@");
  let ans = "";
  for (let i = 0; i < atIndex; i++) {
    const alpha = str[i];
    if (alpha === ".") continue;
    if (alpha === "+") break;
    ans += alpha;
  }
  ans += str.slice(atIndex);
  return ans;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
