from flask import Flask, escape, url_for
from flask import request
app = Flask(__name__)

@app.route('/')
def index():
    return 'index'

@app.route('/login')
def login():
    return 'login'

@app.route('/user/<string:username>') # 这样可以达到类似fastapi的路径参数功能，并且参数类型为int
def profile(username):
    return '{}\'s profile'.format(escape(username))


with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))

@app.route('/login_tog', methods=['GET', 'POST'])
def login_tog() :
    if request.method == 'GET' :
        return 'this is a get method'
    else :
        return 'post method'
    

app.run(host='127.0.0.1', port='8872', debug=True)