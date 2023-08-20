import db from '../../lib/database.js'

let handler = async (m, { conn, usedPrefix, text }) => {
	let user = db.data.users[m.sender]
	let txt = `[ *قائمة الفواكه* ]\n\n`
	txt += `🍌 ${user.موز} موز\n`
	txt += `🍇 ${user.عنب} عنب\n`
	txt += `🥭 ${user.مانجو} مانجو\n`
	txt += `🍊 ${user.برتقال} برتقال\n`
	txt += `🍎 ${user.تفاح} تفاح\n\n`
	txt += `استخدم *${usedPrefix}بيع* <اسم الفاكهة> عشان تبيع الفواكه`
	m.reply(txt)
}

handler.menufun = ['فواكه']
handler.tagsfun = ['rpg']
handler.command = /^((قائمة)?(الفواكه|fruits?))$/i

export default handler
