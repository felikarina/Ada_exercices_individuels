dico = {'texte': '1',
        'lorem': '2',
        'qui': '3',
        'donc': '4',
        'est': '5',
        'que': '6',
        'pour': '7',
        'ceci': '8',
        'faux-texte': '9',
        'dans': '10',
        'plus': '11',
        'avec': '12'}

def dicoEchange(phrase, dictionnaire):
    for i, mot in enumerate(phrase):
        for word in dictionnaire:
            if (mot == word):
                print("yeah")
                phrase[i] = dictionnaire[word]
    print(phrase)

class Compression:
    def __init__(self, texte):
        self.texte = texte
    def coupe(self):
        return self.texte.split()
    def colle(self):
        return " ".join(self.texte)

test = Compression("qu'elle est belle ainsi teintee de bleu")
test2 = ['mais', 'ceci', 'est', 'un', 'long', 'faux-texte']
dicoEchange(test2, dico)