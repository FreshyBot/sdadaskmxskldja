const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nie mogę znaleźć nikogo takiego!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sory byqu, nie masz permisji :/");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ej, ej! Go nie można kicknąć!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("Zbanowano", `${bUser} jego ID ${bUser.id}`)
    .addField("Zbanowany przez", `<@${message.author.id}> `)
    .addField("Zbanowany na kanale", message.channel)
    .addField("Data bana", message.createdAt)
    .addField("Powód bana", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "wam podziękujemy");
    if(!incidentchannel) return message.channel.send("Nie moge znalezc kanalu wam podziękujemy.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
