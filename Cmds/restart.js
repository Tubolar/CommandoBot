const Discord = require("discord.js");
const { colors,owner } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
          if(msg.author.id == owner) {
              msg.channel.sendMessage("Перезапускаюсь...");
           setTimeout(() => { console.log(process.exit(0)); }, 300).then(bot.login(process.env.BOT_TOKEN))
           } else {
              msg.reply(`у Вас недостаточно прав.`);
             }
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "restart"
}
