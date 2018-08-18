const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    var finalColor = [];
    var finalMentionable = [];
    var finalPosition = [];
    let params = args.join(" ");
    let roleName = params.match(/\[name:(.*?)\]/i)
    if(!roleName) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задано название роли.").setColor(colors.err));
    let roleColor = params.match(/\[color:(.*?)\]/i)
    if(roleColor !== null) {
        finalColor = roleColor[1]
    };
    let roleMentionable = params.match(/\[mentionable\]/i)
    if(roleMentionable !== null) {
        finalMentionable = true
    } else if(roleMentionable == null) {
        finalMentionable = false
    }
    let rolePosition = params.match(/\[position:(.*?)/i)
        if(rolePosition !== null) {
            finalPosition = rolePosition[1]
        }
    if(msg.member.hasPermission("MANAGE_ROLES")) {
        msg.guild.createRole({
            name: roleName[1],
            color: finalColor,
            mentionable: finalMentionable,
            position: finalPosition
        }, `By ${msg.author.tag}`)
        var embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
        .setTitle("Успешно создана роль.")
        .setDescription(`Имя: \`${roleName[1]}\`\nЦвет: \`${finalColor ? finalColor.toString() : "Не указано"}\`\nУпоминаемая?: \`${finalMentionable || "Неупоминаемая"}\``)
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
    name: "crrole"
}
