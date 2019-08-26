const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sory byqu, ale nie masz permisji :/");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Nie mogę znaleźć tego użytkownika.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Podaj rolę!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Nie mogę znaleźć takiej roli.");

  if(rMember.roles.has(gRole.id)) return message.reply("On/a ma już tą rolę.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`poprawnie dano range ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Gratulacje dla <@${rMember.id}>, dostał rolę ${gRole.name}!`)
  }
}

module.exports.help = {
  name: "addrole"
}
