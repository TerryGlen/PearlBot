exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send("CALCULATING GUILT");
    msg.edit(`Bubbagump is GUILTY`)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "judge",
    category: "Miscelaneous",
    description: "The jury is rigged.",
    usage: "No praticle use. "
  };
  