const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        let member = msg.mentions.members.first() || msg.member
        if(!member) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Вы не указали участника").setColor(colors.err))
        const status = {
            online: "В сети",
            dnd: "Не беспокоить", 
            idle: "Неактивен",
            offline: "Не в сети"
        }
        if (member.user.bot === true) {
            bot = "Да";
          } else {
            bot = "Нет";
          }
          
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .addField("Полное имя", member.user.tag, true)
        .addField("Никнейм", `${member.nickname !== null ? `${member.nickname}` : "Нету."}`, true)
        .addField("ID", member.id, true)
        .addField("Создан", member.user.createdAt.toDateString(), true)       
        .addField("Приглашён", member.joinedAt.toDateString(), true)
        .addField("Статус", `${status[member.user.presence.status]}`, true)
        .addField("Игры", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Игр не обнаружено."}`, true)
        .addField("Роли на сервере", `${member.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Без ролей."}`, true)
        .addField("Бот", `${bot}`, true)
        //.addField("Права на данном канале", msg.channel.permissionsFor(msg.member), true)
        .setFooter(`Запросил ${msg.author.username}`, msg.author.displayAvatarURL)
        .setTimestamp()
        .setColor(member.displayHexColor);
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "userinfo"
}
