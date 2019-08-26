const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

  if(!message.member.voiceChannel) return message.channel.send('Najpierw połącz się z kanałem!');

  if (message.guild.me.voiceChannel) return message.channel.send('Sory ale już jestem połączony z innym kanałem :P');

  if(!args[0]) return message.channel.send('Ale daj linka do tego co mam puścić :/');

  let validate = await ytdl.validateURL(args[0]);

  if(!validate) return message.channel.send('Podaj poprawny link do tego co mam puścić -_-');

  let info = await ytdl.getInfo(args[0]);

  let connection = await message.member.voiceChannel.join();

  let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));

  message.channel.send(`Teraz leci: ${info.title}`);
}

module.exports.help = {
  name: "play"
}
