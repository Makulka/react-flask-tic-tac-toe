import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_currect_time():
    return {'time': time.time()}


#https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
# flask run --host=0.0.0.0 --port=5005
