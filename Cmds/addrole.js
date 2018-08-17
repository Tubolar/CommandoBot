const Discord = require("discord.js");
const { colors } = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        var member = msg.mentions.members.first() || msg.member;
        if(msg.member.hasPermission("MANAGE_ROLES")) {
            let ctx = args.join(" ")
            let roles = ctx.match(/{r: ?(.*?)}/gi)
            if(roles !== null) {
            roles.forEach((role) => {
                if(role[1] == null) return msg.channel.send("Вы не указали имя роли.");
                let params = role.match(/{r: ?(.*?)}/i)
                let target = params[1]
                let thisrole = msg.guild.roles.find("name", target)
              member.addRole(thisrole.id)
          });
        };
    };
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "addrole"
}
