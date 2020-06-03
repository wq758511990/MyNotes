import pickle
import json
data = {'a': 1, 'b': 2}
fs1 = open('json3.txt', 'wb')
pickle.dump(data, fs1)

with open('json1.txt', 'wt') as fs :
    json.dump(data, fs)