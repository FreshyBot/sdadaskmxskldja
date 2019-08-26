const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nie ma tu nikogo takiego!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sory byq, nie masz permisji!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ej, ej, ale go nie można kicknąć!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Zkickowany", `${kUser} z ID ${kUser.id}`)
    .addField("Zkickowany przez", `<@${message.author.id}>`)
    .addField("Kanał", message.channel)
    .addField("Data", message.createdAt)
    .addField("Powód", kReason);

    let kickChannel = message.guild.channels.find(`name`, "wam podziękujemy");
    if(!kickChannel) return message.channel.send("Nie moge znalezc kanalu wam podziękujemy.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
