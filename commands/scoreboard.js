exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  var scoreboard;
  var size_array;
  var stringis = ('= Leaderboard =\n');


  //Turns PearlPoints Enmap to Array then sorts in Descending order. 
  scoreboard = Array.from(client.pearlpoints).sort(function (a, b) { return a[1].points < b[1].points });
  size_array = scoreboard.length;


  for (i = 0; i < size_array; i++) {
    var currentuser = client.users.get(scoreboard[i][0]);
    stringis += (`•${i + 1}# :: ${currentuser.username} with ${client.pearlpoints.get(currentuser.id).points}\n`)

  }

  message.channel.send(stringis, { code: "asciidoc" });
}
exports.conf = {
  hidden: false,
  guildOnly: true,
  aliases: ["score",],
  permLevel: "User"
};

exports.help = {
  name: 'scoreboard',
  description: 'Displays current PearlPoints Standings',
  usage: 'sp <',
  category: 'Pearl Points',
  extended: ''
}
