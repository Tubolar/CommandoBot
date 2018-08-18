const Discord = require("discord.js");
const { colors } = require("../utils.json");
const api = require("superagent");
module.exports.run = async (bot, msg, args) => {
try {
    let { body } = await api
    .get("https://random.dog/woof.json")
    var embed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor(colors.ok);
    msg.channel.send(embed)
} catch (error) {
    message.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "dog"
}
