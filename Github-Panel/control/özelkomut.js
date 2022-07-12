const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")

module.exports = {
    name: "özelperm",
    aliases: ["özelperm"],
    ktriacım: async ( client, message, args) => {
        if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTRATOR")) return;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({content: `bir kullanıcı belirtiniz!`})
        let obje = args[0]; 

        //DATAYLA YAPICAN ALLAN ENAYİSİ.
}}
