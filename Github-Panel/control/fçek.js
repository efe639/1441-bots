const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")

module.exports = {
    name: "çek",
    aliases: ["çek"],
    ktriacım: async ( client, message, args) => {
        if (!message.member.roles.cache.some(ktria => [""].includes(ktria.id)) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({content: `${message.author} yeterli yetkiye sahip değilsiniz!`})
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply({content: `bir kullanıcı belirtin!`})
        if (!message.member.voice.channel) return message.channel.send({content: `${message.member}, Önce bir ses kanalına girmelisin!`})
        if (!member.voice.channel) return message.channel.send({content: `${message.member} belirtilen kullanıcı herhangi bir ses kanalında bulunmuyor!`})
        member.voice.setChannel(message.member.voice.channel.id)
        message.reply({content: `${member} kullanıcısının yanınıza çektiniz.`}).then(x => x.delete({ timeout: 100000 }));
}};




