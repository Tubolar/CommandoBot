const Discord = require("discord.js");
const facts = require("../Assets/json/catfacts.json")
const { colors } = require("../utils.json")
module.exports.run = async (bot, msg, args) => {
    try {
        let result = facts[Math.floor(Math.random() * facts.length)]
        var embed = new Discord.RichEmbed()
        .setAuthor("Факты о кошках", "https://i.ytimg.com/vi/zbTdT6wkY8k/maxresdefault.jpg")
        .setDescription(result)
        .setColor(colors.ok)
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "catfact"
}
