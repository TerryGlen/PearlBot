exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    
      var scoreboard;
      var keyarray;
      var size_array;
      var stringis = ('= Leaderboard =\n');
      //Sorts clients points in descending and saves it to a scoreboard EnMap
      scoreboard = client.pearlpoints.sort(function(a, b){return a.points < b.points}); 
      
      
  
      keyarray = scoreboard.keyArray();
      scoreboard = scoreboard.array();
      size_array = scoreboard.length

      for(i=0 ; i <size_array ; i++)
        {
          var currentuser = client.users.get(keyarray[i]) ;
          stringis += (`•${i+1}# :: ${currentuser.username} with ${scoreboard[i].points}\n`)
          //stringis +=( (i+1)+ "# "+ currentuser.username + " with " + scoreboard[i].points + "\n")
        }
        message.channel.send(stringis, {code: "asciidoc"});
}
    exports.conf = {
      hidden: false,
      guildOnly: true,
      aliases: ["score"],
      permLevel:"User"
    };
    
    exports.help = {
      name: 'scoreboard',
      description: 'Will not exeute properly',
      usage: 'sp <',
      category: 'Pearl Points',
      extended: ''
    }
    