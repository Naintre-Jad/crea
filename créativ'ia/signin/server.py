from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'

mysql = MySQL(app)

@app.route('/save', methods=['POST'])
def save_form():
    # Récupération des données du formulaire
    form_data = request.form

    # Enregistrement des données dans la base de données MySQL
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO users (nom, prenom, email, tel, date_naissance, sexe, pays, entreprise, utilisations) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (form_data['nom'], form_data['prenom'], form_data['email'], form_data['tel'], form_data['date'], form_data['sexe'], form_data['pays'], form_data['entreprise'], form_data['utilisations']))
    mysql.connection.commit()

    print(jsonify(success=True))
    # Retourne un message de succès
    return jsonify(success=True)

@app.route('/user_data')
def get_user_data():
    # Récupération des données de l'utilisateur à partir de la base de données MySQL
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    user_data = cur.fetchone()

    return jsonify(user_data)

if __name__ == '__main__':
    app.run(debug=True)
