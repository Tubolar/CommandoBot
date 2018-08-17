const Discord = require("discord.js");
const { colors } = require("../utils.json");
const commands = require("../Assets/json/cmds.json");
module.exports.run = async (bot, msg, args) => {
try {
    let cmd = args[0].toLowerCase();
    if(!cmd) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Вы не указали команду."))
    var embed = new Discord.RichEmbed()
    .setColor(colors.ok)
    .setTitle(commands[cmd].name)
    .addField("Описание", commands[cmd].desc)
    .addField("Использование", commands[cmd].usage)
    .setFooter(`Модуль:${commands[cmd].module}`)
    if(commands[cmd].requires !== null) {
        embed.addField("Требования", commands[cmd].requires)
    } 
    msg.channel.send(embed)
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "command"
}
