const Discord = require("discord.js");
const { colors } = require("../utils.json");
const request = require("node-superfetch");
module.exports.run = async (bot, msg, args) => {
    try {
        var game = args.join(" ")
        if(!game) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription("Вы не указали игру.").setColor(colors.err))
        const search = await request
        .get('https://store.steampowered.com/api/storesearch')
        .query({
            cc: 'ru',
            l: 'ru',
            term: args[0]
        });
    if (!search.body.items.length) return msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Ничего не найдено."));
    const { id, tiny_image } = search.body.items[0];
    const { body } = await request
        .get('https://store.steampowered.com/api/appdetails')
        .query({ appids: id });
    const { data } = body[id.toString()];
    const current = data.price_overview ? `$${data.price_overview.final / 100}` : "Бесплатно";
    const original = data.price_overview ? `$${data.price_overview.initial / 100}` : "Бесплатно";
    const price = current === original ? current : `~~${original}~~ ${current}`;
    const platforms = [];
    if (data.platforms) {
        if (data.platforms.windows) platforms.push('Windows');
        if (data.platforms.mac) platforms.push('Mac');
        if (data.platforms.linux) platforms.push('Linux');
    }
    const embed = new Discord.RichEmbed()
        .setColor(colors.ok)
        .setAuthor('Steam', 'https://i.imgur.com/xxr2UBZ.png', 'http://store.steampowered.com/')
        .setTitle(data.name)
        .setURL(`http://store.steampowered.com/app/${data.steam_appid}`)
        .setThumbnail(tiny_image)
        .addField("Цена", price, true)
        .addField("Средняя оценка", data.metacritic ? data.metacritic.score : "Неизвестно", true)
        .addField("Рекомендации", data.recommendations ? data.recommendations.total : "Неизвестно", true)
        .addField("Платформы", platforms.join(', ') || 'Нету O,o', true)
        .addField("Дата выпуска", data.release_date ? data.release_date.date : "Неизвестно", true)
        .addField("Количество DLC", data.dlc ? data.dlc.length : 0, true)
        .addField("Разработчики", data.developers ? data.developers.join(', ') || "???" : "???")
        .addField("Идатели", data.publishers ? data.publishers.join(', ') || "???" : "???");
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
}

module.exports.help = {
    name: "steam"
}
