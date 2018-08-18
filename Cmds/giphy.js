const Discord = require("discord.js");
const { colors } = require("../utils.json");
const request = require("node-superfetch");
module.exports.run = async (bot, msg, args) => {
    try {
        let query = args.join(" ");
        const { body } = await request
				.get('http://api.giphy.com/v1/gifs/search')
				.query({
					q: query,
					api_key: process.env.API_GIPHY_KEY,
					rating: msg.channel.nsfw ? 'r' : 'pg'
                });
                if (!body.data.length) return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription("Ничего не найдено."));
                var embed = new Discord.RichEmbed()
                .setImage(body.data[Math.floor(Math.random() * body.data.length)].images.original.url)
                .setColor("RANDOM");
                msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "gif"
}
