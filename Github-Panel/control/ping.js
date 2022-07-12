
const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton, Message  } = require("discord.js")
const serverset = require('../serverset.json')
module.exports = {
    name: "ping",
    aliases: ["ping"],
    ktriacım: async ( client, message, args) => {
        if(message.author.id != serverset.botowner) return message.reply('müsliman kardeşim benim kullanamazsın yetersiz bakiye')
        message.channel.send({content: `${client.ws.ping} 🛰`})
    }
}
 