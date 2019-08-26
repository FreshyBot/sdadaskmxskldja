const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sory byq, ale nie masz permisji :/");
  if(!args[0]) return message.channel.send("A może najpierw ile wiadomości mam usunąć?");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Usunięto ${args[0]} wiadomości.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
