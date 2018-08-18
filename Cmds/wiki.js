const Discord = require("discord.js");
const { colors } = require("../utils.json");
const request = require('node-superfetch');

module.exports.run = async (bot, msg, args) => {
    try {
        var query = args.join(" ");
        if(!query) msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Вы не указали параметры").setColor(colors.err))
        var  { body } = await request
        .get('https://en.wikipedia.org/w/api.php')
        .query({
            action: 'query',
            prop: 'extracts|pageimages',
            format: 'json',
            titles: query,
            exintro: '',
            explaintext: '',
            pithumbsize: 150,
            redirects: '',
            formatversion: 2
        })

       var data = body.query.pages[0];
			if (data.missing) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Результатов не найдено."))
			var embed = new Discord.RichEmbed()
				.setTitle(data.title)
				.setAuthor("Wikipedia", "https://i.imgur.com/Z7NJBK2.png", "https://www.wikipedia.org/")
				.setThumbnail(data.thumbnail ? data.thumbnail.source : null)
				.setURL(`https://en.wikipedia.org/wiki/${encodeURIComponent(query).replace(/\)/g, "%29")}`)
                .setDescription(data.extract.replace(/\n/g, '\n\n'))
                .setColor(colors.ok);
                msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "wiki"
}
