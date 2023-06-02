const moment = require('moment')
const math = require('math');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function enterRankup(bot) {
    if (bot.currentWindow) bot.closeWindow(bot.currentWindow)
    bot.setQuickBarSlot(0)
    bot.activateItem()

    bot.once('windowOpen', async (window) => {
        if (window.title.includes('Modos de Jogo')) {
            log(`Janela identificada: 'Modos de Jogo'`, 'grey')
            await bot.clickWindow(20, 0, 0)
        }
    })

    await sleep(3000)
    if (bot.currentWindow?.title?.includes('Modos de Jogo')) {
        console.log('Não entrou no fullpvp?')
        enterRankup(bot)
    }
}

async function getLocation(bot, home, cb) {

    const onMessage = async (message) => {
        if (message.includes('Teletransportado com sucesso')) {
            log(`${bot.username} chegou na home com sucesso!`, 'brightGreen')
            bot.location = 'home'
            bot.removeListener('messagestr', onMessage)
        }

        else if (message.includes('Essa warp não')) {
            log(`${bot.username} não conseguiu chegar na home`, 'brightRed')
            bot.removeListener('messagestr', onMessage)
        }
    }

    let coords = bot.entity.position
    if (math.trunc(coords.z) === 0 && math.trunc(coords.x) === 0) {
        const block = bot.blockAt(bot.entity.position.offset(0, -1, 0))
        if (!block) return;
        if (block.name === 'double_stone_slab') {
            bot.location = 'lobby'
            console.log('Lobby identificado')
            await enterRankup(bot)
        }

        else if (block.name === 'lit_redstone_lamp') {
            bot.location = 'rankup'
            console.log('Fullpvp identificado!')
            bot.on('messagestr', onMessage)
            await sleep(500)
            log(`Indo até a home: ${home}`, 'grey')
            bot.chat(`${home}`)
        }
        cb()
    }
}

async function getCurrentTime() {
    return (new moment()).format("HH:mm:ss");
}

async function log(message, color) {
    let time = await getCurrentTime();
    console.log(`[${time}] ${message}`[color]);
}

async function logAccount(user, message) {
    log('[' + user + '] ' + message);
}

module.exports = {
    sleep,
    log,
    logAccount,
    getLocation,
    getCurrentTime
}