import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import 'url-search-params-polyfill';

const { PORT, NODE_ENV, BASE_PATH } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		BASE_PATH || '/',
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});


const { Telegraf, Telegram,  } = require('telegraf')

export const bot = new Telegraf('1217327060:AAGWPiPgRvlMyvxUPcpQ-cA-u6inGSFPwa0')
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

	await ctx.answerGameQuery('https://gts.timurkh.ru/game/4')
})

bot.on('callback_query', ctx => {
	const {update} = ctx;

	console.log(JSON.stringify(update, null, 2))

	if (update.callback_query.game_short_name === 'FirstTest') {
		let chatId, messageId;
		const {
			from: {id: userId},
			inline_message_id: inlineMessageId,
		} = update.callback_query;

		if (update.callback_query.message) {
			const {message_id, chat : {id: id}} = update.callback_query.message
			chatId = id
			messageId = message_id
		}


		ctx.answerGameQuery('https://gts.timurkh.ru/game/4?' + new URLSearchParams({
			userId, inlineMessageId, chatId, messageId
		}))
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

export const tg = new Telegram('1217327060:AAGWPiPgRvlMyvxUPcpQ-cA-u6inGSFPwa0')