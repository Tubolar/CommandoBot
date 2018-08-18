const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
            let member = msg.mentions.members.first() || msg.member;
            if(!member) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не указаны параметры").setColor(colors.err));
             var e = new Discord.RichEmbed()
             .setDescription(":id: пользователя " + member + " = " + member.id)
             .setColor(colors.ok)
             msg.channel.send(e)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "uid"
}
