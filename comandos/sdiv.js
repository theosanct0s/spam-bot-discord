const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  if (
    message.author.id !== "id do dono 1" &&
    message.author.id !== "id do dono 2"
  )
    return message.reply(
      ":x: | você não possui permissão para usar esse comando."
    );

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let todos = client.users.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let off = client.users.filter(m => m.presence.status === "offline");
  let servidores = client.guilds.size;

  let mensagem = args.join(" ");

  message.channel.send(
    `_**\`Mensagem sendo enviada para:\`**_\n\n Online: **${on.size}**\n Não Perturbe: **${npertube.size}**\n Ausente: **${ausente.size}**\n\n Offline: __**${off.size}**__ **serão ignorados em um total de** __**${servidores}**__ **servidores.**`
  );

  npertube.forEach(f1 => {
    f1.send(mensagem);
  });

  on.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  message.channel.forEach(f4 => {
    message.channel.send(
      `_**\`A mensagem foi divulgada para:\`**_\n\n Online: **${on.size}**\n Não Perturbe: **${npertube.size}**\n Ausente: **${ausente.size}**\n\n Offline: __**${off.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`
    );
  });
};
