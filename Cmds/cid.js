const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        var channel = msg.guild.channels.find("name", args[0]) || msg.channel
        var e = new Discord.RichEmbed()
        .setDescription(`id: канала ${channel} ${channel.id}`)
        msg.channel.send(e)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "cid"
}
