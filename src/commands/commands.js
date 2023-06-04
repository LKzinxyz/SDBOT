const handleCommands = (bot, channel, username, message) => {
  if (message.content.startsWith(`+restart`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      channel.send(`Reiniciando: ${username}`)
      bot.quit()
      return;
    }
  }

  // envia mensagem ou comandos no chat **não utilize all** 
  else if (message.content.startsWith(`+chat`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} Não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        bot.chat(split)
        channel.send(`${username} Mensagem enviada com sucesso.`)
      }
    }
  }

  // Verifica quantidade de money de uma conta especifica.
  else if (message.content.startsWith(`+moneyother`)) {
    let split = message.content.split(' ');
    if (split.length !== 3) {
      return;
    }
    let username = split[1];
    let target = split[2];
    if (bot.username.toLowerCase() !== username.toLowerCase()) {
      return;
    }
    if (bot.location !== 'home') {
      channel.send(`${username} Não está na home, aguarde um momento`);
      return;
    }
    bot.chat(`/money other ${target}`);
    bot.once('message', (message) => {
      if (message.toString().startsWith('[Money] ')) {
        const moneyMessage = message.toString().substring(8);
        channel.send(`[Money] ${moneyMessage}`);
      }
    });
  }

  // verifica money de suas contas no txt
  else if (message.content.startsWith(`+xmoney`)) {
    let split = message.content.split(' ');
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} Não está na home, aguarde um momento`);
        return;
      } else {
        let index = split.length - 2;
        split = split.splice(2, index);
        split = split.join(' ');
        bot.chat('/money balance');
        bot.once('message', (message) => {
          if (message.toString().startsWith('[Money] ')) {
            const moneyMessage = message.toString().substring(8);
            channel.send(`[Money] ${username} ${moneyMessage}`);
          }
        });
      }
    }
  }

  // verifica money top atual
  else if (message.content.startsWith(`+mtop`)) {
    let split = message.content.split(' ');
    if (split.length !== 3) {
      return;
    }
    let username = split[1];
    let target = split[2];
    if (bot.username.toLowerCase() !== username.toLowerCase()) {
      return;
    }
    if (bot.location !== 'home') {
      channel.send(`${username} Não está na home, aguarde um momento`);
      return;
    }
    bot.chat(`/money top ${target}`);
    bot.once('message', (message) => {
      if (message.toString().startsWith('=====[TOP Dinheiro]===== ')) {
        const moneytopMessage = message.toString().substring(23);
        let fullMessage = `${moneytopMessage}\n`;
        let previousMessage = message;
        const messageHandler = (newMessage) => {
          if (newMessage.toString().startsWith('[Money]')) {
            fullMessage += newMessage.toString() + '\n';
          }
          if (newMessage.toString().startsWith('=====[TOP Dinheiro]===== ')) {
            channel.send(` [TOP Dinheiro] ${fullMessage} ===== [TOP Dinheiro] ===== `);
            bot.off('message', messageHandler);
          }
        };
        bot.on('message', messageHandler);
      }
    });
  }

  // Compra boost de cacto 12%
  else if (message.content.startsWith(`+cactus`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        channel.send(`${username} Comprou Boost de 12% para cactus.`)
        bot.chat('/boost')
        bot.on('windowOpen', function () {
          bot.clickWindow(10, 0, 0);
        });
      }
    }
  }

  // Compra boost de cana de açucar 12%
  else if (message.content.startsWith(`+cana`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        channel.send(`${username} Comprou Boost de 12% para cana.`)
        bot.chat('/boost')
        bot.on('windowOpen', function () {
          bot.clickWindow(12, 0, 0);
        });
      }
    }
  }

  // Compra boost de melancia 12%
  else if (message.content.startsWith(`+melancia`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        channel.send(`${username} Comprou Boost de 12% para melancia.`)
        bot.chat('/boost')
        bot.on('windowOpen', function () {
          bot.clickWindow(14, 0, 0);
        });
      }
    }
  }
  
  // Compra boost de abobora 12%
  else if (message.content.startsWith(`+abobora`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        channel.send(`${username} Comprou Boost de 12% para abobora.`)
        bot.chat('/boost')
        bot.on('windowOpen', function () {
          bot.clickWindow(16, 0, 0);
        });
      }
    }
  }

  // Anuncia a cada 25 minutos 
  else if (message.content.startsWith(`+anunciar`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} Não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        setInterval(_ => bot.chat(split), 1500000)
        setInterval(_ => channel.send(`${username} Anuncio Enviado! `), 1500000)   // A cada 25 Minutos  
      }
    }
  }

  // Pega Kit Mensal
  else if (message.content.startsWith(`+mensal`)) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (bot.location !== 'home') {
        channel.send(`${username} não está na home, aguarde um momento`)
        return;
      }
      else {
        let index = split.length - 2
        split = split.splice(2, index)
        split = split.join(' ')
        channel.send(`${username}: Pegando o kit mensal.`)
        bot.chat('/kit')
        bot.on('windowOpen', function () {
          bot.clickWindow(13, 0, 0);
          bot.clickWindow(15, 0, 0);
        });
      }
    }
  }

  // Desliga uma conta
  else if (message.content.startsWith('+stop')) {
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      channel.send(`Desligando: ${username}`)
      bot.disconnected = true
      bot.quit()
      return;
    }
  }

  // Inicia Uma conta
  else if (message.content.startsWith('+start')) {
    console.log('test')
    let split = message.content.split(' ')
    if (split[1] == bot.username || split[1] == 'all') {
      if (!bot.disconnected) return
      channel.send(`Iniciando: ${username}`)
      bot.disconnected = false
      client.removeAllListeners()
      bot.removeAllListeners()
      bot._client.removeAllListeners()
      bot_creator({ username, pass, home, auth });
      return
    }
  }

  // mais comandos aqui

};

module.exports = handleCommands;
