const Discord = require("discord.js");
const { colors } = require("../utils.json");
const request = require("node-superfetch");
module.exports.run = async (bot, msg, args) => {
try {
    var query = args.join(" ");
    const { body } = await request
				.get('https://images-api.nasa.gov/search')
				.query({
					q: query,
					media_type: 'image'
                });
                const images = body.collection.items;
			    if (!images.length) return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription("Результатов нет."));
			    const data = images[Math.floor(Math.random() * images.length)];
			    return msg.channel.send((data.data[0].description), { files: [data.links[0].href] });
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "nasa"
}
