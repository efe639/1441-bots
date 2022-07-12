const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")

module.exports = {
    name: "avatar",
    aliases: ["av","pp"],
    ktriacım: async ( client, message, args) => {
        let member = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author
        message.reply({content: `${member} kullanıcısının avatarı ${member.displayAvatarURL({ dynamic: true, size: 4096 })}`})
    }
}
