const Discord = require("discord.js");
const serverset = require('../serverset.json')
module.exports = {
    name: "rl",
    aliases: ["rl"],
    ktriacım: async ( client, message, args) => {
        if(message.author.id != serverset.botowner) return message.reply('müsliman kardeşim benim kullanamazsın yetersiz bakiye')
        message.channel.send({content:`**__Bot__ yeniden başlatılıyor.**`}).then(msg => {
            console.log(`${message.author.tag} --> [YENİDEN BAŞLATMA]`)
            process.exit(0);
  })}};

