from urllib.request import urlopen

class UrlTemplate(object) :
    def __init__(self, template) :
        self.template = template

    def open(self, **kwargs) :
        return urlopen(self.template.format_map(kwargs))


py = UrlTemplate('http://www.python.org')
for line in py.open() :
    print(line.decode())