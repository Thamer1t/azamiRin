import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'

const cooldown = 7200000

let handler = async (m, { conn, text }) => {
	let who = m.mentionedJid[0]
	if (!who) return m.reply('تاغ شخص ترغب في التجارة معه')
	if (typeof db.data.users[who] == 'undefined') return m.reply('المستخدم غير موجود في قاعدة البيانات')
	let user = db.data.users[m.sender]
	let user2 = db.data.users[who]
	if (new Date - user.lastdagang <= cooldown) return m.reply(`لقد قمت بالفعل بالتجارة، انتظر 🕖 *${((user.lastdagang + cooldown) - new Date()).toTimeString()}* ثانية . . .`)
	if (10000 > user.جيني) return m.reply('يتطلب رأس المال !!\nليس لديك 💵 10000 من المال')
	if (new Date - user2.lastdagang <= cooldown) return m.reply(`صديقك مشغول في التجارة، ابحث عن شريك آخر أو انتظر 🕖 *${((user2.lastdagang + cooldown) - new Date()).toTimeString()}* ثانية . . .`)
	if (10000 > user2.جيني) return m.reply('يتطلب رأس المال !!\nصديقك ليس لديه 💵 10000 من المال')
	let dapat
	user.جيني -= 10000
	user2.جيني -= 10000
	user.lastdagang = new Date * 1
	user2.lastdagang = new Date * 1
	conn.reply(m.chat, `الرجاء الانتظار..\nأنت و${conn.getName(who)} في عملية تجارة.. 😅\n\nرأس المال لكل منكما = 💵 10000`, m)
	setTimeout(() => {
		dapat = ranNumb(7000, 12000)
		user.جيني  += dapat
		user2.جيني += dapat
		conn.reply(m.chat, `[دخل التجارة]\n\n💵 +${dapat} لك ول${conn.getName(who)}`, m)
	}, 1800000)
	setTimeout(() => {
		dapat = ranNumb(7000, 12000)
		user.جيني  += dapat
		user2.جيني += dapat
		conn.reply(m.chat, `[دخل التجارة]\n\n💵 +${dapat} لك ول${conn.getName(who)}`, m)
	}, 3600000)
	setTimeout(() => {
		dapat = ranNumb(7000, 12000)
		user.جيني  += dapat
		user2.جيني += dapat
		conn.reply(m.chat, `[دخل التجارة]\n\n💵 +${dapat} لك ول${conn.getName(who)}`, m)
	}, 5400000)
	setTimeout(() => {
		dapat = ranNumb(7000, 12000)
		user.جيني  += dapat
		user2.جيني += dapat
		conn.reply(m.chat, `[دخل التجارة]\n\n💵 +${dapat} لك ول${conn.getName(who)}`, m)
	}, 72000000)
}

handler.menufun = ['تجارة']
handler.tagsfun = ['rpg']
handler.command = /^((ber)?تجارة)$/i

handler.cooldown = cooldown
handler.group = true
handler.limit = true

export default handler
