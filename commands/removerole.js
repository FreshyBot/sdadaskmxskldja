const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sory byq, nie masz permisji :/");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Tu nie ma nikogo takiego");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Podaj rolę!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Nie mogę znaleźć roli.");

  if(!rMember.roles.has(gRole.id)) return message.reply("On/a nie ma tej roli.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Właśnie straciłeś rolę ${gRole.name}!`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> właśnie stracił rolę ${gRole.name}!`)
  }
}

module.exports.help = {
  name: "removerole"
}
