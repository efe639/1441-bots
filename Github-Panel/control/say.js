const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js")

module.exports = {
    
    name: "say",
    aliases: ["say"],
    ktriacım: async (client, message, args) => {

if (!message.member.roles.cache.some(ktria => [""].includes(ktria.id)) && !message.member.permissions.has("MANAGE_MESSAGES")) return;

const etiket = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "ETİKET").size; //NOT ETİKETİ 1441 ŞEKLİNDEN GİRİN.    
const tag = message.guild.members.cache.filter(ktria => ktria.user.username.includes("TAG")).size;
let toplamtag = tag+etiket; 
const url = await message.guild.fetchVanityData();

const boost = message.guild.premiumSubscriptionCount;
const sestekikullanıcılar = message.guild.members.cache.filter((ktria) => ktria.voice.channel).size;
let toplamuser = message.guild.members.cache.size

const embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor("RANDOM").setDescription(`
\`❯\` Sunucumuzda toplam **${sestekikullanıcılar}** üye ses kanallarında bulunmaktadır.
\`❯\` Tagımızda toplam **${toplamtag}** üye bulunmaktadır.
\`❯\` Sunucumuzda toplam **${toplamuser}** üye bulunmaktadır. (Url: **${url.uses}**)
\`❯\` Sunucumuzda toplam **${boost}** üye sunucumuza boost basmış.`)
message.reply({ embeds: [embed]}).then(x => x.delete({ timeout: 10000 }));
}}
