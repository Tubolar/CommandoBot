const Discord = require("discord.js");
const { colors, owner } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        function changeRoleColor() {
            let ctx = args.join(" ")
            let roles = ctx.match(/{r: ?(.*?)}/gi)
            let random = `${process.env.RANDOM}`
            if(roles !== null) {
            roles.forEach((role) => {
                if(role[1] == null) return msg.channel.send("Вы не указали имя роли.");
                let params = role.match(/{r: ?(.*?)}/i)
                let target = params[1]
                let thisrole = msg.guild.roles.find("name", target)
              thisrole.edit({color: random});
            });
          }
        } 
        if(msg.author.id == owner) {
            if(msg.guild.member(bot.user).hasPermission("MANAGE_ROLES"))
            if(!msg.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return msg.reply("нету права на управления правами.");
            let interval = args.join(" ").match(/\[interval: ?(.*?)\]/i)
        setInterval(() => { changeRoleColor(); }, interval[1])
      } 
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
   
}

module.exports.help = {
    name: "rainbow"
}
