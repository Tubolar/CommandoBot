const Discord = require("discord.js");
const {colors} = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    var member = msg.mentions.members.first() || msg.member
    if(!member) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Вы не указали участника.").setColor(colors.err))
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL, member.user.displayAvatarURL)
    .setColor("RANDOM")
    .setImage(member.user.displayAvatarURL)
    .setFooter(`Запрошено от  ${msg.author.username}`, msg.member.displayAvatarURL)
    .setTimestamp();
    msg.channel.send(embed)

} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "avatar"
}
