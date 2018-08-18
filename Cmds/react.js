const Discord = require("discord.js");
const { colors } = require("../utils.json")
module.exports.run = async (bot, msg, args) => {
try {
                let emoji = args.join(" ");
                let emojis = emoji.match(/{emoji: ?(.*?)}/gi)
                if(emojis !== null) {
                emojis.forEach((values) => {
                if(values[1] == null) return msg.channel.send("Вы не указали имя emoji");
                let params = values.match(/{emoji: ?(.*?)}/i)
                let target = params[1]
                let emoji = bot.emojis.find("name", target)
                msg.react(emoji)
            })
        }
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "react"
}
