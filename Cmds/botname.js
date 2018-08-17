const Discord = require("discord.js");
const {colors, owner} = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    if(msg.author.id == owner) {
    var name = args.join(" ");
    if(!name) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задано имя.").setColor(colors.err));
    bot.user.setUsername(name)
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Новое имя").setDescription(name))
    }
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "botname"
}
