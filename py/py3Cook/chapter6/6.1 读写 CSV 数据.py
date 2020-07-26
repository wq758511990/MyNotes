import csv
with open('stocks.csv') as fs:
    fs_csv = csv.reader(fs)
    f_csv = csv.DictReader(fs)
    headers = next(fs_csv)  # 获取csv文件的内容头部
    # for line in fs_csv : # 这里直接遍历fs_csv， 是无法拿到头部的
    #     print(line)
    for dicLine in f_csv:
        print(dicLine)

headers = ['Symbol', 'Price', 'Date', 'Time', 'Change', 'Volume']
rows = [('AA', 39.48, '6/11/2007', '9:36am', -0.18, 181800),
        ('AIG', 71.38, '6/11/2007', '9:36am', -0.15, 195500),
        ('AXP', 62.58, '6/11/2007', '9:36am', -0.46, 935000),
        ]

with open('stocks1.csv', 'w') as fs :
    fs_csv = csv.writer(fs)
    fs_csv.writerow(headers)
    fs_csv.writerows(rows)