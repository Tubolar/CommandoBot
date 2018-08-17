const Discord = require("discord.js");
const {colors} = require("../utils.json");
module.exports.run = async (bot, msg, args) => {
    try {
        let name = args.join(" ");
        let channel = msg.guild.channels.find("name", name) || msg.channel
        const day_placeholders = {
            Mon: "Пн.",
            Tue: "Вт.",
            Wen: "Ср.",
            Thu: "Чт.",
            Fri: "Пт.",
            Sat: "Суб.",
            Sun: "Вс."
        }
        const month_placeholders = {
            Jan: "Янв.", 
            Feb: "Фев",
            Mar: "Март.",
            Apr: "Апр.",
            May: "Май.",
            Jun: "Июн.",
            Jul: "Июл.",
            Aug: "Авг.",
            Sep: "Сен.",
            Oct: "Окт.",
            Nov: "Ноя.",
            Dec: "Дек."
        };
        const channel_types = {
            text: "Текстовый",
            voice: "Голосовой"
        };
        var finalNsfw = [];
        let nsfw = channel.nsfw;
        if(nsfw == true) {
            finalNsfw = "Да"
        } else {
            finalNsfw = "Нет"
        };
        var date = channel.createdAt
        let d = date.toString().split(" ")[0]
        let m = date.toString().split(" ")[1]
        let c = date.toString().split(" ")[2]
        let y = date.toString().split(" ")[3]
        let t = date.toString().split(" ")[4]
        var embed = new Discord.RichEmbed()
        .setTitle("Информация о канале.")
        .addField("Тема", `${channel.topic ? channel.topic : "Тема не задана"}`)
        .addField("Дата создания", `${day_placeholders[d]},${c},${month_placeholders[m]},${y},${t}`)
        .setColor(colors.ok)
        .addField("Тип", `${channel_types[channel.type]}`)
        .addField("NSFW?", `${finalNsfw}`)
        msg.channel.send(embed)
    } catch (error) {
        msg.channel.send(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
  
}

module.exports.help = {
    name: "channelinfo"
}
