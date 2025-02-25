from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    # Faz a requisição à API
    response = requests.get('https://api.openf1.org/v1/drivers?session_key=latest')

    # Verifica se a requisição foi bem-sucedida
    if response.status_code == 200:
        # Converte os dados JSON em um dicionário Python
        drivers = response.json()

        # Renderiza o template com os dados
        return render_template('index.html', drivers=drivers)
    else:
        return 'Erro ao acessar a API'

if __name__ == '__main__':
    app.run(debug=True)