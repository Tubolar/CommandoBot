const Discord = require("discord.js");
const { colors, owner } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
            if(msg.author.id == owner) {
                var status = args.join(" ").toLowerCase()
                if(!status) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Не указан статус.").setColor(colors.err))
                var statuses = {
                    "o": "online",
                    "d": "dnd",
                    "i": "idle",
                    "off": "offline",
                    "online": "online",
                    "dnd": "dnd",
                    "offline": "offline",
                    "idle": "idle",
                    "invisible": "offline"
}
bot.user.setStatus(statuses[status])
            } else {
                msg.reply("а кто ты такой,чтобы я тебе подчинялся?")
            }
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "setstatus"
}
