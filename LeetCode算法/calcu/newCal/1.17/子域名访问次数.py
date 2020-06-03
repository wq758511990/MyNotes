def subdomainVisits(cpdomains) :
    dic = {}
    resArr = []
    for arr in cpdomains :

        num = arr.split(' ')[0]
        domain = arr.split(' ')[1]
        pointCount = domain.count('.')
        if domain in dic :
            dic[domain] += int(num)
        else :
            dic[domain] = 0
            dic[domain] += int(num)

        startInd = 0

        while pointCount :
            pointCount -= 1
            lIndex = domain.find('.', startInd)
            domain = domain[lIndex + 1:]
            if domain in dic :
                dic[domain] += int(num)
            else :
                dic[domain] = 0
                dic[domain] += int(num)
    for key, value in dic.items() :
        resStr = str(value) + ' ' + key
        resArr.append(resStr)
    return resArr

print(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))