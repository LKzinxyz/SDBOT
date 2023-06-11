const mineflayer = require('mineflayer');
const { Client } = require('discord.js');
const client = new Client({ intents: 3276799 });
const fs = require('fs');
const utils = require('./src/utils/utils');
const ready = require('./src/utils/ready');
const handleCommands = require('./src/commands/commands');
const config = require('./config.json');

var colors = require('colors');

client.login(config.discordToken);

mineflayer.multiple = async (bots, constructor) => {
  const { Worker, isMainThread, workerData } = require('worker_threads');
  if (isMainThread) {
    const threads = [];
    for (const i in bots) {
      await utils.sleep(13000);
      threads.push(new Worker(__filename, { workerData: bots[i] }));
    }
  } else {
    constructor(workerData);
  }
};

const accounts = [];
const accountFile = 'accounts.txt';
const accountsFileData = fs.readFileSync(accountFile, 'utf8');
for (const account of accountsFileData.split('\r\n')) {
  const splitted = account.split(':');
  if (splitted.length === 4) {
    accounts.push({ username: splitted[0], pass: splitted[1], home: splitted[2], auth: splitted[3] });
  }
}

const bot_creator = ({ username, pass, home, auth }) => {
  let bot = mineflayer.createBot({
    username,
    host: 'stardix.com',
    port: 25565,
    checkTimeoutInterval: 62000,
    version: '1.8.9',
    auth,
    pass,
    home
  });

  ready(client, username);

  client.on('messageCreate', async (message) => {
    if (message.channel.id !== channel.id) return;
    if (!(message.content.startsWith('+'))) return;

    handleCommands(bot, channel, username, message);
  });

  // Variable
  bot.location = 'unknown';
  bot.isRestarting = false;
  bot.disconnected = false;

  // Events
  bot.once('login', async () => console.log("Conectando > ".brightMagenta + username));

  bot.on('spawn', async () => {
    await utils.sleep(1500);
    await utils.getLocation(bot, home, async () => {
      if (bot.location === 'home') {
        channel.send(`${username} chegou na home (/pw${home})`);
      } else {
        return;
      }
    });
  });

  bot.on('message', async (message) => {
    console.log(message.toAnsi());
    if (message.toString().includes('Por favor, faça o login')) bot.chat(`/login ${pass}`);
    else if (message.toString().startsWith('Servidor está reiniciando')) {
      console.log(`Servidor reiniciando, desconectando: ${bot.username}`.cyan);
      bot.isRestarting = true;
      bot.quit();
    }
  });

  bot.on('end', async (reason) => {
    if (reason.includes('quitting') && bot.isRestarting) {
      client.removeAllListeners();
      bot.removeAllListeners();
      bot._client.removeAllListeners();

      utils.log(`${username} aguardando 5 min para reconectar`, 'brightMagenta');
      await utils.sleep(60000 * 5);
      bot.isRestarting = false;

      bot_creator({ username, pass, home, auth });
    } else if (reason.includes('quitting') && bot.disconnected) {
      console.log('disconnected');
    } else {
      client.removeAllListeners();
      bot.removeAllListeners();
      bot._client.removeAllListeners();
      utils.log(`${username} foi desconectado, reconectando...`, 'brightRed');
      await utils.sleep(7500);
      bot_creator({ username, pass, home, auth });
    }
  });
};

mineflayer.multiple(accounts, bot_creator);