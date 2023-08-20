import db from '../../lib/database.js'
import fs from 'fs'

let handler = async (m, { conn, args }) => {
	let who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.isGroup ? m.sender : m.chat
	let user = db.data.users[m.sender]
	let target = db.data.users[who]
	if (args[0] == 'create') {
		if (user.بطاقة > 0) {
			m.reply(`[!] لقد انشأت الحساب بنجاح`)
		} else if (user.جيني < 50000) {
			m.reply(`[!] الحد الأدنى للإيداع هو 💵 50000 `)
		} else {
			user.جيني -= 50000
			user.بطاقة += 50000
			m.reply(`*🫡تم*`)
		}
	} else {
		if (!target) return m.reply('[!] ماحصلت ببيانات الشخص بقاعدة البيانات، شكله جديد')
		if (user.level < target.level) return m.reply('[!] مستوى الهدف أعلى منك.')
		let name = await conn.getName(who)
		let thumb = fs.readFileSync('./media/bank.jpg')
		let anu = `🏦 أصول *${name.replaceAll('\n','')}*\n\n`;
anu += `*💰 البنك:* ${target.بطاقة}\n`;
anu += `*💵 المال:* ${target.جيني}\n\n`;
anu += `*👑 الذهب:* ${target.ذهب}\n`;
anu += `*💎 الماس:* ${target.الماس}\n`;
anu += `*💚 الزمرد:* ${target.زمرد}`;
		await conn.sendMsg(m.chat, { image: thumb, caption: anu }, { quoted: m })
	}
}

handler.menufun = ['بنك <opts>']
handler.tagsfun = ['rpg']
handler.command = /^(بنك|رصيد)$/i

export default handler
