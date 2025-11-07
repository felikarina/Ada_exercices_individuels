cailloutotal = 50
nombredecaillou = 0


#JEU 1 JOUEUR
def demandernombredecaillou():
    global nombredecaillou
    if cailloutotal > 0:
        nombredecaillou = input("Combien de cailloux voulez-vous retirer ? (entre 1 et 6)")
        nombredecaillou = int(nombredecaillou)
        if nombredecaillou > cailloutotal:
            print("Il ne reste pas autant de cailloux !")
            demandernombredecaillou()
        else:
            if nombredecaillou < 7 and nombredecaillou > 0:
                retirercaillou(nombredecaillou)
            else:
                demandernombredecaillou()
    else:
        return "null"

def retirercaillou(nombredecaillou):
    global cailloutotal
    if cailloutotal > 0:
        cailloutotal = cailloutotal - nombredecaillou
        if cailloutotal <= 0:
            print("Bravo vous avez gagné !")
        else:
            print("Il reste " + str(cailloutotal) + " cailloux.")
            demandernombredecaillou()
    else:
        return "null"
    
#JEU 2 JOUEURS
def demandernombredecaillouA():
    global nombredecaillou
    if cailloutotal > 0:
        nombredecaillou = input("Joueur 1 combien de cailloux voulez-vous retirer ? (entre 1 et 6)")
        nombredecaillou = int(nombredecaillou)
        if nombredecaillou > cailloutotal:
            print("Il ne reste pas autant de cailloux !")
            demandernombredecaillouA()
        else:
            if nombredecaillou < 7 and nombredecaillou > 0:
                retirercaillouA(nombredecaillou)
            else:
                demandernombredecaillouA()
    else:
        return "null"
    
def retirercaillouA(nombredecaillou):
    global cailloutotal
    if cailloutotal > 0:
        cailloutotal = cailloutotal - nombredecaillou
        if cailloutotal <= 0:
            print("Bravo Joueur 1 vous avez gagné !")
        else:
            print("Il reste " + str(cailloutotal) + " cailloux.")
            demandernombredecaillouB()
    else:
        return "null"

def demandernombredecaillouB():
    global nombredecaillou
    if cailloutotal > 0:
        nombredecaillou = input("Joueur 2 combien de cailloux voulez-vous retirer ? (entre 1 et 6)")
        nombredecaillou = int(nombredecaillou)
        if nombredecaillou > cailloutotal:
            print("Il ne reste pas autant de cailloux !")
            demandernombredecaillouB()
        else:
            if nombredecaillou < 7 and nombredecaillou > 0:
                retirercaillouB(nombredecaillou)
            else:
                demandernombredecaillouB()
    else:
        return "null"
    
def retirercaillouB(nombredecaillou):
    global cailloutotal
    if cailloutotal > 0:
        cailloutotal = cailloutotal - nombredecaillou
        if cailloutotal <= 0:
            print("Bravo Joueur 2 vous avez gagné !")
        else:
            print("Il reste " + str(cailloutotal) + " cailloux.")
            demandernombredecaillouA()
    else:
        return "null"
    
#MENU
def demandernombrejoueurs():
    nombredejoueurs = input("A combien de joueurs voulez-vous jouer ? 1 ou 2")
    nombredejoueurs = int(nombredejoueurs)
    print(nombredejoueurs)
    if nombredejoueurs == 1:
        demandernombredecaillou()
    if nombredejoueurs == 2:
        demandernombredecaillouA()
    else:
        print("Vous devez taper 1 ou 2 pour le nombre de joueurs")
        demandernombrejoueurs()

demandernombrejoueurs()

