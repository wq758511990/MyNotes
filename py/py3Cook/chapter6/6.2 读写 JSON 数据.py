import json
data = {
    'name': 'lilei',
    'age': True,
    'sex': None
}
json_str = json.dumps(data)
# print(json_str)
# data1 = json.loads(json_str)
# print(data1)

# with open('json', 'wt') as fs :
#     json.dump(data, fs)


# with open('json', 'rt') as fs :
#     loadData = json.load(fs)
#     print(loadData)
from urllib.request import urlopen
u = urlopen('http://www.python.org')
# with open('python.html', 'wb') as fs :
#     fs.write(web.read())
resp = json.loads(json_str)
from pprint import pprint
pprint(resp)