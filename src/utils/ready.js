const config = require('../../config.json');

module.exports = (client, username) => {
  client.on('ready', () => {
    channel = client.channels.cache.get(config.channelId);
    channel.send(`Iniciando: ${username}`);
    console.log(`Iniciando: ${username}`);
    return;
  });
}
