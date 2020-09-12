import {bot, tg} from "../../server";


export async function get(req, res, next) {
    // у нас есть доступ к параметру `slug`, потому что
    // файл называется [slug].json.js
    const { userId, score, inlineMessageId, chatId, messageId } = req.query;

    if (userId) {
        tg.setGameScore(userId, score, inlineMessageId, chatId, messageId, true, true)
            .catch(e => console.log(e))
            .then(e => console.log(e))
        res.end('200')
    } else {
        res.end('500')
    }

    next()
}