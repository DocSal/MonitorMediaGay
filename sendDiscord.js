const Discord = require('discord.js');
const configJS = require('./configJS.json');
const webhookClient = new Discord.WebhookClient(configJS.Discord.webhookID, configJS.Discord.webhookToken);


async function sendToDiscord(token){
	const embed = new Discord.MessageEmbed()
		.setTitle("Mediaworld scheda video")
		.setURL(token)
		.setColor('#d3740d')
		.setDescription("MEDIAWORLD scheda video")
		.setTimestamp()
		.setFooter('Powered by DarkVoidSH®', 'https://media.discordapp.net/attachments/366626857967157248/827672149878898748/unknown.png?width=128&height=128');

	webhookClient.send("Scheda video", {
        username: 'DarkVoidSH.io',
        avatarURL: 'https://media.discordapp.net/attachments/366626857967157248/827672149878898748/unknown.png?width=128&height=128',
        embeds: [embed],
    });
    return;
}

async function sendToDiscordError(msg){
	const embed = new Discord.MessageEmbed()
		.setTitle("Errore")
		.setColor('#d3740d')
		.setDescription(msg+" Controllare carrello account "+configJS["Dati"].email)
		.setTimestamp()
		.setFooter('Powered by DarkVoidSH®', 'https://media.discordapp.net/attachments/366626857967157248/827672149878898748/unknown.png?width=128&height=128');

	webhookClient.send("Errore", {
        username: 'DarkVoidSH.io',
        avatarURL: 'https://media.discordapp.net/attachments/366626857967157248/827672149878898748/unknown.png?width=128&height=128',
        embeds: [embed],
    });
    return;
}


module.exports = {sendToDiscord,sendToDiscordError };