const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    let roleName = args.join(" ");
    if(!roleName) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задано название роли.").setColor(colors.err))
    if(msg.member.hasPermission("MANAGE_ROLES")) {
        let role = msg.guild.roles.find("name", roleName)
        role.delete()
        var embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
        .setTitle("Успешно удалена роль.")
        .setDescription(`Имя: ${roleName}`)
        .setColor(colors.ok);
        msg.channel.send(embed)
    } else {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("У Вас недостаточно прав.").setColor(colors.err))
    }
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "delrole"
}
