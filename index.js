const sujet = ['Blague', 'Inspiration', 'Astrologie']
const blague = ["Il est impossible de toucher sa lèvre inférieure avec sa langue", "Peux-tu éloigner un peu plus la bouche quand tu parles au téléphone? Merci ?"," Dans ce monde il existe plus de 25250365872056 paresseux et tu en fais partie parce que tu n'as même pas essayé de lire ces chiffres."]
const inspiration = ["Rappelez-vous que personne ne peut vous faire sentir inférieur sans votre consentement", "La vie est 10% ce qui m'arrive et 90% de comment je réagis à elle", "Croyez en vous-même et tout devient possible.", "la foi sauve"]
const astrologie = ["vous allez avoir une journée chançeuse aujourd'hui", "vous allez avoir une nuit magnifique", "tu seras riche"]
function aleatoireMessage() {
    
        const sujetAleatoire = sujet[Math.floor(Math.random() * sujet.length)];
      
        let messageAleatoire;
        if (sujetAleatoire === 'Astrologie') {
          messageAleatoire = astrologie[Math.floor(Math.random() * astrologie.length)];
        } else if (sujetAleatoire === 'Inspiration') {
          messageAleatoire = inspiration[Math.floor(Math.random() * inspiration.length)];
        } else if (sujetAleatoire === 'Blague') {
          messageAleatoire = blagues[Math.floor(Math.random() * blague.length)];
        }
      
        return `Sujet: ${sujetAleatoire}\nMessage: ${messageAleatoire}`;
      }
      
      console.log(aleatoireMessage());
