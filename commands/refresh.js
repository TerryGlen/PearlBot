exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  if (args.length < 1) return message.reply("No array to refresh detected!\nPlease rectify this.");

  switch (args[0]) {
    case 'givepoints':
    case 'givepoint':
    case 'gp':
    case 'give':
      client.givepoints.clear();
      return message.reply("All users can now distribute 100 Pearl Points.")

  }
  switch (args[0]) {
    case 'pearlpoints':
    case 'pearlpoint':
    case 'pp':
      client.pearlpoints.clear();
      // const givespearl = client.givepoints.get(message.author.id);
      // const givespearl = client.givepoints.get(message.author.id) 
      return message.reply("Pearl Points have been reset.");
  }
 return message.reply("No array " + args[0] + " found.")
};

exports.conf = {
  hidden: false,
  guildOnly: true,
  aliases: ["re" , "rr"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'refresh',
  description: 'Will reset eith Pearl Points or Give Points based on input given',
  usage: '!refresh [pp/gp]',
  category: 'Pearl Points',
  extended: 'refresh [pp/gp]'
}
