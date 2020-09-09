const Discord = require('discord.js')
module.exports.run = async (client, message) => {
    message.channel.send(`         ---=== ${client.user.username} ===---  \nServers: (${client.guilds.size}):\n\n${client.guilds.map(a => `- ${a.name} (${a.members.size} usuários)`).join(",\n")}`)
    console.log(`         ---=== ${client.user.username} ===---  \nServers: (${client.guilds.size}):\n\n${client.guilds.map(a => `- ${a.name} (${a.members.size} usuários)`).join(",\n")}`)  
    message.channel.send("**Mandei a lista de servidores aonde estou no seu terminal !**")
};