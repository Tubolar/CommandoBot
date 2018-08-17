const Discord = require("discord.js");
const request = require("node-superfetch");
const {colors} = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
try {
    let { body } = await request
				.get('http://api.icndb.com/jokes/random')
				.query({
					escape: 'javascript',
					firstName: "Chuck"
                });
                var embed = new Discord.RichEmbed()
                .setDescription(body.value.joke)
                .setColor(colors.ok)
                msg.channel.send(embed)
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "norris"
}
