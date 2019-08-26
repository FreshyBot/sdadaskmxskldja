const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nie mogę znaleźć takiego użytkownika :/");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#15f153")
    .addField("Zreportowany", `${rUser} z ID: ${rUser.id}`)
    .addField("Zreportował", `${message.author} z ID: ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Data", message.createdAt)
    .addField("Powód", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reporty");
    if(!reportschannel) return message.channel.send("Nie ma kanału reporty.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
