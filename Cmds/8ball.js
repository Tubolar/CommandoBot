const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        let q = args.join(" ")
        if(!q) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не указан вопрос").setColor(colors.err))
        let responses = ["Да", "Нет", "Возможно", "Скорее всего", "Сомневаюсь", "Спроси позже", "Глупый вопрос", "Скорее нет"]
        let result = Math.floor(Math.random() * responses.length)
        var embed = new Discord.RichEmbed()
        .setTitle(":8ball:")
        .addField("Вопрос", q)
        .addField("Ответ", responses[result])
        .setColor(colors.ok)
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "8ball"
}
