from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    response = requests.get('https://api.openf1.org/v1/drivers?session_key=latest')

    print (response.status_code)

    if response.status_code == 200:
        drivers = response.json()
        return render_template('index.html', drivers=drivers)
    else:
        return render_template('index.html', error='Error fetching data')

if __name__ == '__main__':
    app.run(debug=True)