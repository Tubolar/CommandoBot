const Discord = require("discord.js");
const { colors } = require("../utils.json");
const request = require("node-superfetch");
module.exports.run = async (bot, msg, args) => {
    try {
        let word = args.join(" ");
        let type;
            let { body } = await request
            .get("http://api.urbandictionary.com/v0/define")
            .query({ term: word })
            let data = body.list[type === 'top' ? 0 : Math.floor(Math.random() * body.list.length)];
            if (!body.list.length) return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription("Ничего не найдено.").setColor(colors.err))
            var embed = new Discord.RichEmbed()
            .setAuthor("Словарь городского сленга.", "https://i.imgur.com/Fo0nRTe.png", "https://www.urbandictionary.com/")
            .setTitle(data.word)
            .setURL(data.permalink)
            .setDescription(data.definition)
            .setColor(colors.ok)
            if(data.example || data.example < 1024) embed.addField("Пример использования", data.example)
            
            msg.channel.send(embed)
    } catch (error) {
        msg.channel.sendEmbed(new Discord.RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
    }
    
}

module.exports.help = {
    name: "urb"
}
