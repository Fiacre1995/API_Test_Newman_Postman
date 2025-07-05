#Commande a exécuté pour mes tests 
newman run collection.json \ -e environnement.json --reporters cli,html \ --reporter-html-export ..\rapports\rapport.html

#Plateforme pour convertir notre résultat JSON au format attendu
https://app.quicktype.io/

