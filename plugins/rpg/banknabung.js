import db from '../../lib/database.js'
import { isNumber } from '../../lib/func.js'

let handler = async (m, { conn, command, usedPrefix, args }) => {
	let user = db.data.users[m.sender]
	if (user.بطاقة == 0) return m.reply(`[!] ليس لديك حساب بنكي بعد.\n\nاستخدم الأمر *${usedPrefix}صناعة بطاقة* لإنشاء حساب بنكي.`)
	let total = Math.floor(isNumber(args[0]) ? Math.min(Math.max(parseInt(args[0]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if (command.includes('الكل')) total = user.جيني
	if ((user.جيني - total) > 0) {
		user.جيني -= total
		user.بطاقة += total
		m.reply(`تم الادخار بنجاح بمبلغ ${total} جيني 💹`)
	} else {
		m.reply(`[❗] ليس لديك ما يكفي من المال للادخار ${total} جيني 💹`)
	}
}

handler.menufun = ['ادخار <المبلغ>']
handler.tagsfun = ['rpg']
handler.command = /^(ادخار(الكل)?)$/i

export default handler
