exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("FORMULATING REPLY");
  msg.edit(`https://www.sideshowtoy.com/wp-content/uploads/2016/06/breaking-bad-walter-white-life-size-bust-supacraft-feature-902754.jpg\nI am the one who knocks!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "pong",
  category: "Miscelaneous",
  description: "Pearl is a smartass",
  usage: "pong"
};
