const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        
        let topic = args.join(" ")
        if(!topic) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задана тема.").setColor(colors.err));
        if(topic == "null") topic = null
        if(!bot.user.hasPermission("MANAGE_CHANNELS")) return;
        if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("У Вас недостаточно прав.\nОтсутствует право: `Управление каналами`").setColor(colors.err));
        var embed = new Discord.RichEmbed()
        .setTitle("Тема канала успешно изменена")
        .setDescription(`**Новая тема**\n----------\n${topic}`)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor(colors.ok);
        msg.channel.setTopic(topic)
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }   
}

module.exports.help = {
    name: "settopic"
}
