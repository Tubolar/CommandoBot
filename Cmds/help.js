const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        var embed = new Discord.RichEmbed()
        .addField("Информация о команде", "}command `<Имя команды>`")
        .addField("Список модулей", "}modules")
        .addField("Список команд модуля", "}mcommand `<Имя модуля>`")
        .setColor(colors.ok)
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "help"
}
