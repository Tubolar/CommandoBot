const Discord = require("discord.js");
const { colors, owner } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        if(msg.author.id == owner) {
            let ctx = args.join(" ")
            let url = ctx.match(/\[url:(.*?)\]/i)
            if(!url) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не указана ссылка.").setColor(colors.err))
            let name = ctx.match(/\[name:(.*?)\]/i)
            if(!url) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не задана тема.").setColor(colors.err))
            bot.user.setGame(name[1], url[1])
            var embed = new Discord.RichEmbed()
            .setTitle("Новый стрим установлен.")
            .setColor(colors.ok)
            .addField("Тема", name[1], true)
            .addField("Ссылка", url[1]);
            msg.channel.send(embed)
        } else {
                msg.reply("а кто ты такой,чтобы я тебе подчинялся?")
            }
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "setstream"
}
