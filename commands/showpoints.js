exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  var scorePoints;

  if (args.length < 1) {
    if (!client.pearlpoints.get(message.author.id)) return message.reply("No Pearl Points detected!\nPlease rectify this.");
    scorePoints = client.pearlpoints.get(message.author.id).points;
    return message.channel.send(`You have ${scorePoints} points!`);
  }

  if (message.mentions.users.size === 0) return message.reply("Invalid input detected! Please link a user with @ .");
  if (!client.pearlpoints.get(message.mentions.users.first().id)) return message.channel.send("No Pearl Points detected for " + message.mentions.users.first().username + "!\nPlease rectify this.");
  scorePoints = client.pearlpoints.get(message.mentions.users.first().id).points;
  return message.channel.send(message.mentions.users.first().username + ` has ${scorePoints} points!`);
};

exports.conf = {
  hidden: false,
  guildOnly: true,
  aliases: ["sp"],
  permLevel: "User"
};

exports.help = {
  name: 'showpoints',
  description: 'Will not exeute properly',
  usage: '!sp <',
  category: 'Pearl Points',
  extended: ''
}
