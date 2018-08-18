const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        if(msg.member.hasPermission("MANAGE_ROLES")) {
            let target = args.join(" ")
            if(!target) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задана роль.").setColor(colors.err))
            let role = msg.guild.roles.find("name", target)
            msg.channel.send(`<@&${role.id}>`)
        } else {
            msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("У Вас недостаточно прав.").setColor(colors.err))
        }
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "menrole"
}
