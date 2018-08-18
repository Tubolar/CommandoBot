const { RichEmbed } = require("discord.js");
const { colors } = require("../utils.json")
module.exports.run = async (bot, msg, args) => {
try {
    let ctx = args.join(` `)
    .replace(/%user%/gi, msg.author)
    .replace(/%user.id%/gi, msg.author.id)
    .replace(/%user.createdDate%/gi, msg.author.createdAt.toDateString())
    .replace(/%user.joinedDate/gi, msg.member.joinedAt.toDateString())
    .replace(/%user.createdTime%/gi, msg.author.createdAt.toString().split(" ")[4])
    .replace(/%user.joinedTime%/gi, msg.member.joinedAt.toString().split(" ")[4])
    .replace(/%user.avatar%/gi, msg.member.displayAvatarURL)
    .replace(/%bot.status%/gi, bot.status.toString())
    .replace(/%bot.ping%/gi, Math.round(bot.ping))
    .replace(/%bot.name%/gi, bot.user.username)
    .replace(/%bot.id%/gi, bot.user.id)
    .replace(/%bot.tag%/gi, bot.user.tag)
    .replace(/%mention%/gi, `<@${bot.user.id}>`)
    .replace(/%bot.avatar%/gi, bot.user.displayAvatarURL)
    .replace(/%server.name%/gi, msg.guild.name)
    .replace(/%guild.id%/, msg.guild.id)
    .replace(/%server.membercount%/gi, msg.guild.memberCount)
    .replace(/%channel.mention%/gi, `<#${msg.chanel.id}>`)
    .replace(/%channel.topic%/gi, msg.channel.topic ? msg.channel.topic : "Тема не задана.")
    .replace(/%channel.name%/gi, msg.channel.name)
    .replace(/%channel.id%/gi, msg.channel.id)
    
            let builder = new RichEmbed()
            let builder_footer = ctx.match(/\[footer:(.*?)( \+ icon_url: ?(.*?))?\]/i);
            if (builder_footer !== null) {
                builder.setFooter(builder_footer[1], builder_footer[3])
            }
            let builder_img = ctx.match(/\[image: ?(.*?)\]/i);
            if (builder_img !== null) {
                builder.setImage(builder_img[1]);
                
            }
            let builder_thumbnail = ctx.match(/\[thumbnail: ?(.*?)\]/i);
            if (builder_thumbnail !== null) {
                builder.setThumbnail(builder_thumbnail[1]);
            }
            let builder_author = ctx.match(/\[author:(.*?)( \+ icon_url: ?(.*?))?( \+ url: ?(.*?))?\]/i);
            if (builder_author !== null) {
                builder.setAuthor(builder_author[1], builder_author[3], builder_author[5])
            }
            let builder_title = ctx.match(/\[title:(.*?)\]/i);
            if (builder_title !== null) {
                builder.setTitle(builder_title[1])
            }
            let builder_url = ctx.match(/\[url: ?(.*?)\]/i);
            if (builder_url !== null) {
                builder.setURL(builder_url[1])
            }
            let builder_desc = ctx.match(/\[description: ?(.*?)\]/i)
            if (builder_desc !== null) {
                builder.setDescription(builder_desc[1])
            }
            let builder_color = ctx.match(/\[color: ?(.*?)\]/i);
            if (builder_color !== null) {
                builder.setColor(builder_color[1])
            }
            let builder_date = ctx.match(/\[timestamp(: ?(.*?))?}\]/i);
            if (builder_date !== null) {
                if (builder_date[2] === undefined || builder_date[2] === null)
                builder.setTimestamp(new Date());
                else
                builder.setTimestamp(new Date(builder_date[2]));
            }
            let builder_fields = ctx.match(/\[field: ?(.*?) \+ value: ?(.*?)( \+ true)\]/gi)
            if (builder_fields !== null) {
                builder_fields.forEach((params) => {
                if (params[1] == null || params[2] == null || typeof params[1] === undefined || typeof params[2] === undefined) return msg.reply("неправильная форма построения поля(field)");
                let values = params.match(/\[field: ?(.*?) \+ value: ?(.*?)( \+ true)?\]/i);
                builder.addField(values[1], values[2], (values[3] != null));
                
            });}
            msg.channel.send(builder).then(msg.delete())
} catch (error) {
    msg.channel.sendEmbed(new RichEmbed().setTitle("Произошла ошибка").setDescription(error).setColor(colors.err))
}
}

module.exports.help = {
    name: "embed"
}
