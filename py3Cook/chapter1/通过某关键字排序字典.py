rows = [{'fname': 'Brian', 'lname': 'Jones', 'uid': 1003},
        {'fname': 'David', 'lname': 'Beazley', 'uid': 1002},
        {'fname': 'John', 'lname': 'Cleese', 'uid': 1001},
        {'fname': 'Big', 'lname': 'Jones', 'uid': 1004}]

# rows.sort(key=lambda x: x['uid'])
# rows.sort(key=lambda x: (x['fname'], x['lname']))
# print(rows)
# 以上为原生的

# 使用itemgetter 会更快一些
from operator import itemgetter
# rows_by_fname = sorted(rows, key=itemgetter('fname'))
# print(rows_by_fname)
# rows_by_uid = sorted(rows, key=itemgetter('uid'))
# print(rows_by_uid)
rows_by_flname = sorted(rows, key=itemgetter('fname', 'lname'))
print(rows_by_flname)