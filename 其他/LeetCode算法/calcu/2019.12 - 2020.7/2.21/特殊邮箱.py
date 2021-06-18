def numUniqueEmails(emails) :
    # realMails = []
    # for x in mails :
    #     atInd = x.find('@')
    #     realMail = ''
    #     for j in range(0, atInd) :
    #         if x[j] == '.' :
    #             continue
    #         elif x[j] == '+' :
    #             break
    #         else :
    #             realMail += x[j]
    #     realMail += x[atInd: ]
    #     if realMail not in realMails :
    #         realMails.append(realMail)
    # return len(realMails)
    mails = []
    for name in emails :
        name = name.split('@')
        bef, aft = name[0], name[1]
        # bef = bef[0: bef.find('+')]
        bef = bef.split('+')
        bef = bef[0].replace('.', '')
        realStr = bef + '@' + aft
        if realStr not in mails :
            mails.append(realStr)
    return len(mails)

print(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))