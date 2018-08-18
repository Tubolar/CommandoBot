const Discord = require("discord.js");
const { colors, botstats,owner } = require("../utils.json") ;
module.exports.run = async (bot, msg, args) => {
try {
    let us = (bot.uptime / 1000);
    let uh = Math.floor(us / 3600);
    us %= 3600;
    let um = Math.floor(us / 60);
    let uss = us % 60;
    var embed = new Discord.RichEmbed()
    .setAuthor("Commando", bot.user.displayAvatarURL)
    .setTitle("Информация о боте")
    .addField("Владелец", `<@${owner}>`, true)
    .addField("Время работы", `${uh} ч.\n${um} м.\n${uss} с.`, true)
    .addField("Память", `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
    .addField("Использование ЦП", Math.round(process.cpuUsage().system / 100 / 100 / 10) + "%", true)
    .addField("Версия", `${botstats.version} ${botstats.type}`, true)
    .addField("Библиотека", "[discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)", true)
    .setFooter("Commando ©2018|Все права защищены.")
    .setColor(colors.ok)
    msg.channel.send(embed)
    
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "stats"
}
