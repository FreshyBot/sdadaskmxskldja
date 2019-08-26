const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send('Nie jesteś połączony z kanałem');

  if(!message.guild.me.voiceChannel) return message.channel.send('Nie jestem połączony z żadnym kanałem lol');

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Nie jesteś na tym samym kanale co bot');

  message.guild.me.voiceChannel.leave();

  message.channel.send('Opuszczam kanał')
}

module.exports.help = {
  name: "leave"
}
