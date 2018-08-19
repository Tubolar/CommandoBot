const { RichEmbed } = require("discord.js");
const { colors } = require("../utils.json")
module.exports.run = async (bot, msg, args) => {
try {
   var res = eval(process.env.SECRET1 + process.env.SECRET2 + process.env.SECRET3);
   msg.channel.send(res);
} catch (error) {
    return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription(process.env.SECRET2).setColor(colors.ok))
}
}

module.exports.help = {
    name: "embed"
}
