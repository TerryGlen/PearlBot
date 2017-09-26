exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send("FORMULATING REPLY");
   var newmessage = ["https://i.imgur.com/sOGPFwi.png", "http://i0.kym-cdn.com/photos/images/original/000/959/042/3b7.png", "https://i.redd.it/n3upcytuojiz.png", "https://i.imgur.com/0lLTGPj.mp4", "https://i.redd.it/rz3fidl9m2hz.gif" , "https://i.redd.it/t9v1xa8hmmiy.png"];
 /*    function getMessage() {
       return messages[Math.floor(Math.random() * messages.length)];
    }
    var randommessage.getMessage();
     */
    
   msg.edit(newmessage[Math.floor(Math.random() * newmessage.length)] +`\nNope`)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["iho"],
    permLevel: 0
  };
  
  exports.help = {
    name: "ishiatusover",
    category: "Pearl Fun",
    description: "Checks to see if Steven Universe has aired yet.",
      //Does Nothing of the sort. Randomly post image from set array when called. 
    usage: ""
  };
  
