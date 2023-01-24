from flask import Flask, request
import openai

# Récupération de la clé API
openai.api_key = "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"

"""# Demande des entrées de l'utilisateur
content_type = input("Quel type de contenu souhaitez-vous générer? (ex: article, publicité, ...)")
objective = input("Quel est l'objectif de ce contenu? (ex: informer, vendre, ...)")
subject = input("De quoi souhaitez-vous parler dans ce contenu? (ex: voitures électriques, ...)")
target = input("A qui s'adresse ce contenu? (ex: femmes de 25 à 35 ans, ...)")
keywords = input("Quelques mots clés svp? (ex: écologie, économie, ...)")
writing_style = input("Quel style d'écriture souhaitez-vous adopter? (ex: formel, décontracté, ...)")
language = input("Quel langue souhaitez-vous(français, anglais, italien, ...)")
length = int(input("Quelle longueur souhaitez-vous pour ce contenu? (ex: 500 mots, 2 pages, ...)"))
frequency_penalty = float(input("Quelle valeur souhaitez-vous utiliser pour le paramètre frequency-penalty? (ex: 0.2)"))
temperature = float(input("Quelle valeur souhaitez-vous utiliser pour le paramètre temperature? (ex: 0.7)"))
top_p = float(input("Quelle valeur souhaitez-vous utiliser pour le paramètre top-p? (ex: 0.9)"))
"""

app = Flask(__name__)

@app.route("/generate_content", methods=["POST"])
def generate_content():
    # Récupération des données de la requête
    data = request.form
    content_type = data["content_type"]
    objective = data["objective"]
    subject = data["subject"]
    target = data["target"]
    keywords = data["keywords"]
    writing_style = data["writing_style"]
    language = data["language"]
    try:
        length = int(data["length"])
    except ValueError:
        return "Error: Length must be an integer"
    try :
        frequency_penalty = float(data["frequency_penalty"])
    except ValueError:
        return "Error: Length must be an integer"
    try :
        temperature = float(data["temperature"])
    except ValueError:
        return "Error: Length must be an integer"
    try :
        top_p = float(data["top_p"])
    except ValueError:
        return "Error: top_p must be an integer"
        

    # Préparation de la demande pour l'API
    prompt = (f"Générer un {content_type} ayant pour objectif {objective} et parlant de {subject}. "
              f"Ce contenu s'adresse à {target} et doit contenir les mots clés {keywords}. "
              f"Il doit être écrit dans un style {writing_style} avec une bonne mise en page en {language}")

    # Appel à l'API GPT-3
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=length,
        frequency_penalty=frequency_penalty,
        temperature=temperature,
        top_p=top_p
    )

    # Affichage du contenu généré
    print(response["choices"][0]["text"])
    with open("example.txt", "w") as file:
        file.write(response["choices"][0]["text"])


    # Renvoi de la réponse
    return response["choices"][0]["text"]

if __name__ == "__main__":
    app.run(debug=True)

