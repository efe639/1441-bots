const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")

module.exports = {
    name: "svgiriş",
    aliases: ["svgiriş"],
    ktriacım: async ( client, message, args) => {
        if (!message.member.roles.cache.some(ktria => [""].includes(ktria.id)) && !message.member.permissions.has("MANAGE_MESSAGES")) return;
        message.reply({content: `
• Toplam **${message.guild.memberCount}** kullanıcı bulunuyor.
• Son 1 saatte **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}** kullanıcı giriş yapmış.
• Son 1 günde **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}** kullanıcı giriş yapmış.
• Son 1 haftada **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}** kullanıcı giriş yapmış.`})
    }
}
