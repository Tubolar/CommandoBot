const Discord = require("discord.js");
const {colors} = require("../utils.json");
const request = require("node-superfetch");
module.exports.run = async (bot, msg, args) => {
try {
    var { text } = await request.get("http://api.adviceslip.com/advice")
    var embed = new Discord.RichEmbed()
    .setTitle("Advice")
    .setDescription(JSON.parse(text).slip.advice)
    .setColor(colors.ok)
    msg.channel.send(embed)
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "advice"
}
