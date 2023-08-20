import db from '../../lib/database.js'
import { isNumber, somematch } from '../../lib/func.js'

let handler = async (m, { conn, command, usedPrefix, args }) => {
	let user = db.data.users[m.sender]
	if (user.بطاقة == 0) return m.reply(`[!] ليس لديك حساب بنكي بعد.\n\nاستخدم الأمر *${usedPrefix}صناعة بطاقة* لإنشاء حساب بنكي.`)
	if (somematch(['الكل', 'الجميع'], args[0])) args[0] = user.بطاقة - 50000
	let total = Math.floor(isNumber(args[0]) ? Math.min(Math.max(parseInt(args[0]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if ((user.بطاقة - total) >= 50000) {
		user.بطاقة -= total
		user.جيني += total
		m.reply(`تم سحب مبلغ ${total} جيني بنجاح 💹`)
	} else m.reply(`[❗] رصيد حسابك غير كافٍ لسحب ${total} جيني 💹`)
}
handler.menufun = ['ادخار <المبلغ>']
handler.tagsfun = ['rpg']
handler.command = /^(دخار(الكل)?)$/i

export default handler
