const { Telegraf, Telegram,  } = require('telegraf')

export const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()


bot.on('inline_query', ctx => {
    console.log(ctx)
    const {update} = ctx;
    ctx.telegram.answerInlineQuery(update.inline_query.id, [
        {
            type: 'game',
            id: 123,
            game_short_name: 'FirstTest'
        }
    ])
})

bot.action('FirstTest', async ctx => {

    await ctx.answerGameQuery('https://timur00kh.github.io/guess-the-song/game/4')
})

bot.on('callback_query', ctx => {
    const {update} = ctx;

    console.log(JSON.stringify(update, null, 2))

    if (update.callback_query.game_short_name === 'FirstTest') {
        ctx.answerGameQuery('https://timur00kh.github.io/guess-the-song/game/4')
        // ctx.answerGameQuery('http://localhost:3000/guess-the-song/game/4')
    }
})

bot.gameQuery(async (ctx, next) => {
    console.log(ctx)
    // const {update} = ctx;
    // try {
    // 	await ctx.answerGameQuery('https://timur00kh.github.io/guess-the-song/game/4/')
    // } catch (e) {
    // 	console.error(e)
    // }
    await next()
    // await ctx.telegram.answerGameQuery(update.inline_query.id, 'https://timur00kh.github.io/guess-the-song/game/4/')
})

export const tg = new Telegram(process.env.BOT_TOKEN)
console.log('---process.env.BOT_TOKEN ', process.env.BOT_TOKEN)