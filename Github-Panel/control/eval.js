const Discord = require("discord.js");
const serverset = require('../serverset.json')
module.exports = {
    name: "eval",
    aliases: ["eval"],
    ktriacım: async ( client, message, args) => {
        if(message.author.id != serverset.botowner) return message.reply('müsliman kardeşim benim kullanamazsın yetersiz bakiye')
        let codein = args.slice(0).join(' ')
        if(!codein.toLowerCase().includes('token')) {  
        try {
            let code = eval(codein)
            if (codein.length < 1) return message.reply(`Kod belirtiniz.`)
            if (typeof code !== 'string')    
              code = require('util').inspect(code, { depth: 0 });
          
            if(code.includes(client.token)) return message.reply("baktoken yarramın başı")
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField('Kod', `\`\`\`js\n${codein.length > 1024 ? "karakter aşma " : codein}\`\`\``)
            .addField('Sonuç', `\`\`\`js\n${code.length > 1024 ? "karakter aşma " : code}\n\`\`\``)
            message.reply({embeds:[embed]});
        } catch(e) {
          let embed2 = new Discord.MessageEmbed()
          .setColor('RED')
          .addField('Kod', `\`\`\`js\n${codein.length > 1024 ? "karakter aşma " : codein}\`\`\``)
          .addField('Hata', `\`\`\`js\n${e.length > 1024 ? "karakter aşma " : e}\`\`\``)
          message.reply({embeds:[embed2]});
        } 
      }else{
        message.reply('allahıyın')
      }
    },
  };