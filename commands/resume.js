exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars  
  try {
    let server = client.music[message.guild.id];
    if (server) {
      if (server.dispatcher) {
        server.dispatcher.resume()
        message.channel.send('Song resumed!');
      } else message.channel.send('There is nothing playing!');
    } else message.channel.send('There is nothing playing!');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'resume',
  category: 'Music',
  description: 'Resume\'s a song',
  usage: 'resume'
};
