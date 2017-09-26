exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if (args.length < 1) return message.reply("Invalid input detected! Must provide an amount of Pearl Points and user to apply points to.\nRefer to -help, for more information.");


    var value = Math.floor(args[0]); //points to add
    if (isNaN(value)) return message.reply("Invalid input detected! Please use an acutal number."); //Check if valid integer
    if (value <= 0) return message.reply("Invalid input detected! AWARDING OF NEGATIVE POINTS IS STRICTLY PROHIBITED!");
    if (message.mentions.users.size === 0) return message.reply("Invalid input detected! Please use link a user with @ .");
    if (message.author.id === message.mentions.users.first().id) return message.reply("Public masturbation is frowned upon in polite society.");
    if (client.cangivepoints(client, message, value) === true) {
        var pearlscore = client.pearlpoints.get(message.mentions.users.first().id) || { points: 0, level: 0 };
        //Add value to current points
        pearlscore.points += value;
        //apply newscore to PearlPoints Enmap
        client.pearlpoints.set(message.mentions.users.first().id, pearlscore)
        const pearlface = client.emojis.find("name", "pearlpoint")
        message.channel.send(`${pearlface} Awarded ` + value + ' Pearl-Points to ' + message.mentions.users.first().username);

    } else {
        return
    }

    //if(!client.cangivepoints(client,message,value)) return message.reply("False");

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pearlpoints", "pearlpoints"],
    permLevel: "User"
};

exports.help = {
    name: "pp",
    category: "Pearl Points",
    description: "Awards points to selected user.",
    usage: "pp [Amount] [@User]"
};
