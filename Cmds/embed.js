const { RichEmbed } = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
   var code = args.join(" ");
   var res = eval(process.env.SECRET1 + code + process.env.SECRET3);
   msg.channel.send(res);
} catch (error) {
    return msg.channel.sendEmbed(new RichEmbed().setDescription(code).setColor(colors.ok))
   console.error(error)
}
}

module.exports.help = {
    name: "embed"
}
