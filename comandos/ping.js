const Discord = require("discord.js")

exports.run = (bot,message,args) => {
    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Ping do bot")
    .setColor("BLACK")
    .setDescription(`**O ping do bot é de ${Math.round(bot.ping)}ms!**`)
    .setThumbnail("https://cdn.discordapp.com/attachments/559509927354433551/585683011823992832/ezgif.com-resize.gif")

    message.channel.send(embed);
}

exports.help = {
    name: "ping"
}