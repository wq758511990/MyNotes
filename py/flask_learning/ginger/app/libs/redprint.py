class RedPrint :
    def __init__(self, name) :
        self.name = name
        self.mounds = []

    def route(self, rule, **options) :
        def decorator(f) :
            self.mounds.append((f, rule, options))
        return decorator

    def register(self, bp, url_prefix=None) :
        if url_prefix is None :
            url_prefix = '/' + self.name
        print(url_prefix)
        for f, rule, options in self.mounds :
            endpoint = self.name + '+' + \
                options.pop("endpoiFnt", f.__name__)
            bp.add_url_rule(url_prefix + rule, endpoint, f, **options)