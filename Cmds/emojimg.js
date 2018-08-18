const Discord = require("discord.js");
const { colors }= require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    let emoji = args.join(" ");
    if(!emoji) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задано emoji.").setColor(colors.err));
    let finalEmoji = bot.emojis.find("name", emoji)
    msg.channel.send(`**Имя**: ${finalEmoji.name}\n**Объект**: ${finalEmoji}\n**Ссылка**: ${finalEmoji.url}`)
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    console.error(error)
}
}

module.exports.help = {
    name: "emojimg"
}
