var admin = require("firebase-admin");
var serviceAccount = require("../config/firebase-adminsdk.json");

/* COLE SEU CÓDIGO AQUI NESSE BLOCO */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "SUA DATABASE_URL",
});
/* FIM DE BLOCO */

function sendMessageSilent(token) {
  var message = {
    notification: {
      title: "Chamada enviada!",
      body: "Visite: thompson.dev.br",
    },
    token: token,
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Chamada realizada: ", response);
    })
    .catch((error) => {
      console.log("Falha ao realizar chamada: ", error);
    });
}

module.exports = sendMessageSilent;
