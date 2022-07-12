const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")
const serverset = require('../serverset.json')

module.exports = {
    name: "vip",
    aliases: ["vip"],
    ktriacım: async ( client, message, args) => {
        if (!message.member.roles.cache.some(ktria => [""].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let rol = serverset.vip
           
            if(!member) return message.reply({content:`bir kullanıcı belirtmelisiniz!`}).then(x => x.delete({ timeout: 10000 }));
           await member.roles.add(rol)
           message.reply({content: `${member} kullanıcısına başarıyla **vip** permi verildi!`}).then(x => x.delete({ timeout: 10000 }));
    }
}
