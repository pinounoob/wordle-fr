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

async function envoyerScoreDansChat(pseudo, essais, grilleVisuelle) {
    const webhookUrl = "https://discord.com/api/webhooks/1509600182965243904/DoJZYzUl5ulGWSYIZKjOt7LId7aQStHrmdZILOihTWB_nZiyJylk0_APpC2M62D8CWej";
    
    // Le message que le "bot" va envoyer dans le salon textuel
    const payload = {
        username: "Le Mot FR", // Nom du bot virtuel
        avatar_url: "public/apple-touch-icon.png",
        content: `**${pseudo}** vient de terminer Le Mot en **${essais}/6** essais !\n\n${grilleVisuelle}`
    };

    try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        console.log("Score envoyé dans Discord !");
    } catch (error) {
        console.error("Erreur lors de l'envoi du score :", error);
    }
}
