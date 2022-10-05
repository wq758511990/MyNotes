function subdomainVisits(cpdomains: string[]): string[] {
  const ans: string[] = [];
  const domainMap = new Map();
  for (let key in cpdomains) {
    const [count, domain] = cpdomains[key].split(" ");
    const preDomainCount = domainMap.get(domain);
    domainMap.set(domain, (preDomainCount || 0) + Number(count));
    for (let i = 0; i < domain.length; i++) {
      if (domain[i] === ".") {
        const subDomain = domain.slice(i + 1);
        const subDomainCnt = domainMap.get(subDomain);
        domainMap.set(subDomain, (subDomainCnt || 0) + Number(count));
      }
    }
  }
  for (const [key, value] of domainMap.entries()) {
    const str = `${value} ${key}`;
    ans.push(str);
  }
  return ans;
}
console.log(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ])
);
