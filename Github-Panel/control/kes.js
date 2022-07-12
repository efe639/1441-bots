const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")

module.exports = {
    name: "kes",
    aliases: ["kes"],
    ktriacım: async ( client, message, args) => {
        if (!message.member.roles.cache.some(ktria => [""].includes(ktria.id)) && !message.member.permissions.has("MANAGE_MESSAGES")) return;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({content: `lütfen bir kullanıcı belirtin!`})
        if (!member.voice.channel) return message.reply({content: `kullanıcı bir ses kanalında değil!`})
        member.voice.disconnect()
        message.reply({content: `${member} kullanıcısı ses kanalından atıldı!`})
        let embedlog = new MessageEmbed().setDescription(`${message.author} yetkilisi ${member} kullanıcısını ses kanalından <t:${Math.floor(Date.now() / 1000)}:R> süre önce attı!`)
        client.channels.cache.find(x => x.name == "vkick_log").send({embeds: [embedlog]})
    }}
