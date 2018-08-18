const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    let channelName = args.join(" ");
    if(!channelName) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задано название канала.").setColor(colors.err))
    if(msg.member.hasPermission("MANAGE_CHANNELS")) {
        msg.guild.createChannel(channelName, "voice");
        var embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
        .setTitle("Успешно создан голосовой канал.")
        .setDescription(`Имя: #${channelName}`)
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
    name: "cvchannel"
}
