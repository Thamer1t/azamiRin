import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'

const cooldown = 4500000
const cooldownn = 120000

const need = 100

let handler = async (m, { conn, usedPrefix, command, text }) => {
	let user = db.data.users[m.sender]
	if (new Date - user.lastberkebon <= cooldown) return m.reply(`لقد قمت بالفعل بـ ${command}، يرجى الانتظار لبعض الوقت لأداء ${command} مرة أخرى.\n\nالوقت المتبقي: 🕖 *${((user.lastberkebon + cooldown) - new Date()).toTimeString()}*`)
	if (user.معول == 0) return m.reply(`يجب عليك صنع معول أولاً باستخدام *${usedPrefix}craft*.\n\nلديك:\n━ ⛏️ ${user.معول} معول`)
	let ran = [{"فاكهة": 0}, {"فاكهة": 0}, {"فاكهة": 0}, {"فاكهة": 0}, {"فاكهة": 0}]
	for (let x of ran) {
		let random = ranNumb(80, 100)
		x.فاكهة += random
	}
	let gmkeb = `https://i.ibb.co/XpyTNc6/pickebon.jpg`
	if (user.بذورمانجو > need - 1 && user.بذورتفاح > need - 1 && user.بذورموز > need - 1 && user.بذوربرتقال > need - 1 && user.بذورعنب > need - 1) {
		user.بذورمانجو -= need
		user.بذورتفاح   -= need
		user.بذورموز -= need
		user.بذوربرتقال  -= need
		user.بذورعنب -= need

		user.pickaxedurability -= ranNumb(80, 120)
	 	if (user.pickaxedurability <= 0) {
	 		user.pickaxedurability = 0
	 		user.معول = 0
	 	}

		setTimeout(() => {
			user.مانجو += ran[0].فاكهة
			user.تفاح   += ran[1].فاكهة
			user.موز += ran[2].فاكهة
			user.برتقال  += ran[3].فاكهة
			user.عنب += ran[4].فاكهة
			conn.sendFile(m.chat, gmkeb, '', `*[ اكتمال ]*\n\nلقد حصلت على:\n🥭 +${ran[0].فاكهة} من المانجو\n🍎 +${ran[1].فاكهة} من التفاح\n🍌 +${ran[2].فاكهة} من الموز\n🍊 +${ran[3].فاكهة} من البرتقال\n🍇 +${ran[4].فاكهة} من العنب`, m)
		}, cooldownn)
		m.reply('_جاري الزراعة..._')
		user.lastberkebon = new Date * 1
	} else {
		return m.reply(`المطلوب *${need}* من كل نبتة، بما في ذلك المانجو، التفاح، الموز، البرتقال، العنب\n\nلديك:\n━ 🌾 ${user.بذورمانجو} نبتة مانجو\n━ 🌾 ${user.بذورتفاح} نبتة تفاح\n━ 🌾 ${user.بذورموز} نبتة موز\n━ 🌾 ${user.بذوربرتقال} نبتة برتقال\n━ 🌾 ${user.بذورعنب} نبتة عنب`)
	}
}

handler.menufun = ['زراعة']
handler.tagsfun = ['rpg']
handler.command = /^(زراعة)$/i

handler.cooldown = cooldown
handler.premium = true

export default handler
