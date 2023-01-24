import openai

# Récupération de la clé API
openai.api_key = "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"

prompt = input("text")
response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens= 3700
)
print(response["choices"][0]["text"])
with open("example.txt", "w") as file:
    file.write(response["choices"][0]["text"])
