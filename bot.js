const Discord = require("discord.js");
const { colors } = require("./utils.json");
var HashMap = require('hashmap');
var map = new HashMap();
const { VK } = require('vk-io');
const vk = new VK({token: process.env.VK_TOKEN});
const fs = require("fs");
require("colors");
const bot = new Discord.Client({
    disabledEvents: ["TYPING_START"]
});


bot.commands = new Discord.Collection()
require("colors")
fs.readdir("./Cmds/", (err,files) =>{


    if(err) console.error(err);



let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0) {
    console.log("Команд не найдено.".red);
    return;
}

jsfile.forEach((f, i) =>{
    let props = require(`./Cmds/${f}`);
    console.log(`${f} загружен.`.magenta);
    bot.commands.set("}" + props.help.name, props);
});


bot.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    let coor = msg.content.split(" ");
    let cmd = coor[0];
    let args = coor.slice(1);
    let cmdfile = bot.commands.get(cmd);
    if(cmdfile) cmdfile.run(bot, msg, args, vk);
});

});

bot.on("ready", () => {
   
    console.log("Ready!".blue)
    
});

bot.on("disconnect", () => {
    console.log("Попытка запуска.".yellow)
    bot.login(process.env.BOT_TOKEN)
});

bot.on("warn", () => {
    console.warn()
});


bot.login(process.env.BOT_TOKEN)
