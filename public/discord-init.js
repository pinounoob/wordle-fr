// On initialise le SDK avec l'ID de ton application (qu'on va créer juste après)
const discordSdk = new DiscordSDK.DiscordSDK({
    client_id: 1509261843536019477 // Tu remplaceras ceci à l'Étape 2
});

async function setupDiscord() {
    try {
        await discordSdk.ready();
        console.log("Jeu Wordle synchronisé avec l'Activité Discord !");
    } catch (error) {
        console.error("Erreur d'initialisation Discord :", error);
    }
}

// Lancement au démarrage de la page
setupDiscord();
