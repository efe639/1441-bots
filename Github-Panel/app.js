const { Client, MessageEmbed, Collection, Intents } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = global.client = new Client({fetchAllMembers: true, intents: Object.keys(Intents.FLAGS)})
const { readdirSync } = require('fs');
const commangs = client.commands = new Collection();
const aliases = client.aliases = new Collection();
const moment = require('moment');
require('moment-duration-format');
require('moment-timezone');
moment.locale('tr');
const serverset = require('./serverset.json');

client.on('ready', async () => {
    
    const VoiceChannel = client.channels.cache.get(serverset.BOTSES);
    joinVoiceChannel({channelId: VoiceChannel.id, guildId: VoiceChannel.guild.id, adapterCreator: VoiceChannel.guild.voiceAdapterCreator, selfDeaf: true, selfMute: true});
    client.user.setPresence({ activity: { name: serverset.BOTSTATUS }, status: 'online'});
    client.user.setActivitty(serverset.BOTSTATUS)

});

readdirSync('./control/', { encoding: 'utf8' }).filter(file => file.endsWith('.js')).forEach((files) => {
    let command = require(`./control/${files}`);
    console.log(`Yüklenen komut: control/${files}`)
    if (!command.name) return console.log(`Hatalı Komut: [/commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
})

client.on('messageCreate', message => {
    if (!message.guild || message.author.bot || !message.content.startsWith(serverset.BOTPREFİX)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return;
    cmd.ktriacım(client, message, args);
})

client.on('guildMemberAdd', (member) => {
    let kanal = member.guild.channels.cache.get(serverset.welcome);
    kanal.send(`
  :tada: ${serverset.SVNAME}'ye hoş geldin ${member}! Hesabın __${moment(member.user.createdTimestamp).format("LLL")}__ tarihinde oluşturulmuş 
  
  Sizinle beraber sunucumuz **${member.guild.memberCount}** üyeye ulaştı.
  
  Sunucu kurallarımız <#${serverset.rules}> kanalında belirtilmiştir. Unutmayın ki sunucuya girdiğiniz an kuralları okuduğunuz kabul edilecek ve ona göre işlem yapılacaktır. İyi eğlenceler.. :tada::tada::tada:`)})

  client.on("guildMemberAdd", member => {
    let otorol = serverset.otorol
    if (member) {
        member.roles.add(otorol)
  }});

  client.login(serverset.BOTTOKEN).then(function(x) {console.log(`${client.user.tag} başarıyla giriş yapıldı!`)}).catch(function(err) {console.log(` ${err}`)})
