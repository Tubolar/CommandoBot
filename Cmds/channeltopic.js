const Discord = require("discord.js");
const { colors } = require("../utils.json")
module.exports.run = async (bot, msg, args) => {
    try {
        var embed = new Discord.RichEmbed()
        .setTitle("Тема канала")
        .setDescription(`${msg.channel.topic ? `${msg.channel.topic}` : "Темы нету."}`)
        .setColor(colors.ok)
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "channeltopic"
}
