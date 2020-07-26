class RedPrint :
    def __init__(self, name) :
        self.name = name
        self.mounds = []

    def route(self, rule, **options):
        def decorator(f):
            self.mounds.append((f, rule, options))
            return f
        return decorator

    def register(self, bp, url_prefix=None) :
        if not url_prefix :
            url_prefix = '/' + self.name
        for f, rule, options in self.mounds :
            endpoint = self.name + '+' + options.pop('endpoint', f.__name__)
            bp.add_url_rule(url_prefix + rule, endpoint, f, **options)