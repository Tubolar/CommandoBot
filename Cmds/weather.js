const Discord = require("discord.js");
const { colors } = require("../utils.json")
const request = require("node-superfetch")
module.exports.run = async (bot, msg, args) => {
try {
    let loc = args.join(" ")
    let { body } = await request
    .get('https://query.yahooapis.com/v1/public/yql')
    .query({
        q: `${loc}`,
        format: 'json'
    });
           
            if (!body.query.count) return msg.say('Ничего не найдено.');
			var data = body.query.results.channel;
                var embed = new Discord.RichEmbed()
                .setColor(colors.ok)
				.setAuthor(data.title, 'https://i.imgur.com/IYF2Pfa.jpg', 'https://www.yahoo.com/news/weather')
				.setURL(data.link)
				.setTimestamp()
				.addField("Город", data.location.city, true)
				.addField("Страна", data.location.country, true)
				.addField("Регион", data.location.region, true)
				.addField("Состояние", data.item.condition.text, true)
				.addField("Температура", `${data.item.condition.temp}°F`, true)
				.addField("Влажность", data.atmosphere.humidity, true)
				.addField("Давление", data.atmosphere.pressure, true)
				.addField("Восход", data.atmosphere.rising, true)
				.addField("Видимость", data.atmosphere.visibility, true)
				.addField("Холодный ветер", data.wind.chill, true)
				.addField("Направление ветра", data.wind.direction, true)
                .addField("Скорость ветра", data.wind.speed, true);
                msg.channel.send(embed)
} catch (error) {
    msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "weather"
}
