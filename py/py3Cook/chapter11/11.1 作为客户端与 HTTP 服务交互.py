from urllib import request, parse

url = 'http://httpbin.org/get'

params = {
    'name1': 'value1',
    'name2': 'value2'
}

querystring = parse.urlencode(params)
u = request.urlopen(url + '?' + querystring)
resp = u.read()
print(resp)