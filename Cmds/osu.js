const { colors } = require("../utils.json");
const request = require("node-superfetch");
const { RichEmbed } = require("discord.js");
module.exports.run = async (bot, msg, args) => {
try {
    let user = args.join(" ");
    const { body } = await request
				.get('https://osu.ppy.sh/api/get_user')
				.query({
					k: process.env.API_OSU_KEY,
					u: user,
					type: 'string'
                });
                if (!body.length) return msg.channel.sendEmbed(new RichEmbed().setDescription("Участник не найден."));
                const data = body[0];
                var embed= new RichEmbed()
                .setAuthor("osu!", "https://i.imgur.com/hWrw2Sv.png", "https://osu.ppy.sh/")
				        .addField("Имя", data.username, true)
				        .addField("ID", data.user_id, true)
				        .addField("Уровень", data.level || "Нету", true)
				        .addField("Точность", data.accuracy || "Нету", true)
				        .addField("Ранг", data.pp_rank || "Нету", true)
				        .addField("Количество воспроизведения", data.playcount || "Нету", true)
				        .addField("Страна", data.country || "Нету", true)
				        .addField("Рейтинг", data.ranked_score || "Нету", true)
				        .addField("Общий счет", data.total_score || "Нету", true)
				        .addField("SS", data.count_rank_ss || "Нету", true)
				        .addField("S", data.count_rank_s || "Нету", true)
                .addField("A", data.count_rank_a || "Нету", true)
                .setColor(colors.ok);
                msg.channel.send(embed)
} catch (error) {
    msg.channel.sendEmbed(new RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "osu"
}
