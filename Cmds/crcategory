const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    let categoryName = args.join(" ");
    if(!categoryName) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задано название категории.").setColor(colors.err))
    if(msg.member.hasPermission("MANAGE_CHANNELS")) {
        msg.guild.createChannel(categoryName, "category", [{id: msg.guild.id}], `By ${msg.author.tag}`)
        var embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
        .setTitle("Успешно создана категория.")
        .setDescription(`Имя: ${categoryName}`)
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
    name: "crcategory"
}
