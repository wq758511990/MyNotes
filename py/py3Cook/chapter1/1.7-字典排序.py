from collections import OrderedDict
import json
d = OrderedDict()
d['foo'] = 1
d['bar'] = 4
d['test'] = 2

print(json.dumps(d))
