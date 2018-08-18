const Discord = require("discord.js");
const { colors } = require("../utils.json");
const request = require("node-superfetch");
module.exports.run = async (bot, msg, args) => {
    try {
        const query = args.join(" ");
        const { body } = await request
				.get('https://api.imgur.com/3/gallery/search')
				.query({ q: query })
				.set({ Authorization: `Client-ID ${process.env.API_IMGUR_KEY}` });
	    var images = body.data.filter(image => image.images && (msg.channel.nsfw ? true : !image.nsfw));
            if (!images.length) return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription("Ничего не найдено"));
            var attachment =`${images[Math.floor(Math.random() * images.length)].images[0].link}`
            msg.channel.send({file: attachment})
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "imgur"
}
