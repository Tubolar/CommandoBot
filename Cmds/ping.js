const { RichEmbed } = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async(bot, msg, args) => {
    try {
        var embed = new RichEmbed()
        .setDescription(`:ping_pong: ${Math.round(bot.ping)} ms`)
        .setColor(colors.ok);
        msg.channel.send(embed)  
    } catch (error) {
        message.channel.sendEmbed(new RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
} 

module.exports.help = {
    name: "ping"
}
