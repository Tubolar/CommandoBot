const Discord = require("discord.js");
const { modules, colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    var embed = new Discord.RichEmbed()
    .setDescription(modules)
    .setColor(colors.ok)
    msg.channel.send(embed)
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "modules"
}
