import db from '../../lib/database.js'
import { isNumber } from '../../lib/func.js'

const cooldown = 1200000 // 10 masakan
const cooldownn = 300000 // 10 masakan

let handler = async (m, { command, usedPrefix, args }) => {
	let user = db.data.users[m.sender]
	let info = `الاستدخام : *${usedPrefix + command} [العنصر] [العدد]*\n`
	info += `مثال : *${usedPrefix}${command} ستيك 2*\n\n`
	info += `*━━━[ وصفات الطبخ ]━━━*\n`
	info += `%| 🍝 ستيك   | 🍢 كباب%\n`
	info += `%| 🍜 حميس | 🥣 لحم%\n`
	info += `%| 🍱 ناغت  | 🍲 تونه%\n`
	info += `%| روبيان 🍤  |  🥘 محار%\n`
	info += `%| 🍣 سوشي    %`
	
	const item = (args[0] || '').toLowerCase()
	const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if (new Date() - user.lastmasak \<= cooldown) return m.reply(`انتظر ... 🕖 *${((user.lastmasak) - new Date()).toTimeString()}*`)
	if (item == 'ستيك') {
		if (user.باندا < 1 * total || user.دجاجة < 1 * total || user.جاموس < 1 * total || user.بصل < 33 * total || user.صلصة < 43 * total) {
			m.reply(`مطلوب ${1 * total} من الباندا، ${1 * total} من الدجاج، ${1 * total} من الثيران، ${33 * total} من البصل، ${43 * total} من الصلصة.\n\nلديك :\n━ ${global.rpg.emoticon('باندا')} ${user.باندا} باندا\n━ ${global.rpg.emoticon('دجاجة')} ${user.دجاجة} دجاج\n━ ${global.rpg.emoticon('جاموس')} ${user.جاموس} ثور\n━ ${user.بصل} بصل\n━ ${user.صلصة} صلصة`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.باندا -= 1 * total
				user.دجاجة -= 1 * total
				user.جاموس -= 1 * total
				user.بصل -= 33 * total
				user.صلصة -= 43 * total
				user.ستيك += total
				user.masakcount += 1
				m.reply(`تم طبخ*${total} ${global.rpg.emoticon('ستيك')} ستيك*.\n\nمجموع الستيك : ${user.ستيك}`)
			}, cooldownn)
		}
	} else if (item == 'كباب') {
		if (user.نمر < 1 * total || user.ضب < 1 * total || user.بقرة < 1 * total || user.بصل < 33 * total || user.صلصة < 43 * total) {
			m.reply(`مطلوب ${1 * total} نمر, ${1 * total} ضب, ${1 * total} بقرة, ${33 * total} بصل, ${43 * total} صلصة.\n\nلديك :\n━ ${global.rpg.emoticon('نمر')} ${user.نمر} نمر\n━ ${global.rpg.emoticon('ضب')} ${user.ضب} ضب\n━ ${global.rpg.emoticon('بقرة')} ${user.بقرة} بقرة\n━ ${user.بصل} بصل\n━ ${user.صلصة} صلصة`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.نمر -= 1 * total
				user.ضب -= 1 * total
				user.بقرة -= 1 * total
				user.بصل -= 33 * total
				user.صلصة -= 43 * total
				user.كباب += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('كباب')} كباب*.\n\nمجموع الكباب : ${user.كباب}`)
			}, cooldownn)
		}
	} else if (item == 'حميس') {
		if (user.فيل < 1 * total || user.تمساح < 1 * total || user.بصل < 27 * total || user.فلفل < 16 * total || user.زنجبيل < 30 * total) {
			m.reply(`مطلوب ${1 * total} فيل, ${1 * total} تمساح, ${27 * total} بصل, ${16 * total} فلفل, ${30 * total} زنجبيل.\n\nلديك :\n━ ${global.rpg.emoticon('فيل')} ${user.فيل} فيل\n━ ${global.rpg.emoticon('تمساح')} ${user.تمساح} تمساح\n━ ${user.بصل} بصل\n━ ${user.فلفل} فلفل, \n━ ${user.زنجبيل} زنجبيل`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.فيل -= 1 * total
				user.تمساح -= 1 * total
				user.بصل -= 27 * total
				user.فلفل -= 16 * total
				user.زنجبيل -= 30 * total
				user.حميس += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('حميس')} حميس*.\n\nمجموع الحميس : ${user.حميس}`)
			}, cooldownn)
		}
	} else if (item == 'لحم') {
		if (user.ماعز < 1 * total || user.قرد < 1 * total || user.صلصة < 72 * total || user.ليمون < 80 * total || user.شمعة < 40 * total) {
			m.reply(`مطلوب ${1 * total} ماعز, ${1 * total} قرد, ${72 * total} صلصة, ${80 * total} ليمون, ${40 * total} شمعة.\n\nلديك :\n━ ${global.rpg.emoticon('ماعز')} ${user.ماعز} ماعز\n━ ${global.rpg.emoticon('قرد')} ${user.قرد} قرد\n━ ${user.صلصة} صلصة\n━ ${user.ليمون} ليمون, \n━ ${user.شمعة} شمعة`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.ماعز -= 1 * total
				user.قرد -= 1 * total
				user.صلصة -= 72 * total
				user.ليمون -= 80 * total
				user.شمعة -= 40 * total
				user.لحم += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('لحم')} لحم*.\n\nمجموع اللحم : ${user.لحم}`)
			}, cooldownn)
		}
	} else if (item == 'ناغت') {
		if (user.ثور < 1 * total || user.خنزير < 1 * total || user.صلصة < 72 * total || user.بصل < 34* total || user.شمعة < 50 * total) {
			m.reply(`مطلوب ${1 * total} ثور, ${1 * total} خنزير, ${72 * total} صلصة, ${34* total} بصل, ${50 * total} شمعة.\n\nلديك :\n━ ${global.rpg.emoticon('ثور')} ${user.ثور} ثور\n━ ${global.rpg.emoticon('خنزير')} ${user.خنزير} خنزير\n━ ${user.صلصة} صلصة\n━ ${user.بصل} بصل, \n━ ${user.شمعة} شمعة`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.ثور -= 1 * total
				user.خنزير -= 1 * total
				user.صلصة -= 72 * total
				user.بصل -= 34* total
				user.شمعة -= 50 * total
				user.ناغت += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('ناغت')} ناغت*.\n\nمجموع الناغت : ${user.ناغت}`)
			}, cooldownn)
		}
	} else if (item == 'سوشي') {
		if (user.سرطان < 2 * total || user.قرش < 3 * total || user.زبيدي < 3 * total || user.ليمون < 60 * total || user.شمعة < 30 * total) {
			m.reply(`مطلوب ${2 * total} سرطان, ${3 * total} قرش, ${3 * total} زبيدي, ${60 * total} ليمون, ${30 * total} شمعة.\n\nلديك :\n━ ${global.rpg.emoticon('سرطان')} ${user.سرطان} سرطان\n━ ${global.rpg.emoticon('قرش')} ${user.قرش} قرش\n━ ${global.rpg.emoticon('زبيدي')} ${user.زبيدي} زبيدي\n━ ${user.ليمون} ليمون, \n━ ${user.شمعة} شمعة`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.سرطان -= 2 * total
				user.قرش -= 3 * total
				user.زبيدي -= 3 * total
				user.ليمون -= 60 * total
				user.شمعة -= 30 * total
				user.سوشي += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('سوشي')} سوشي*.\n\nمجموع السوشي : ${user.سوشي}`)
			}, cooldownn)
		}
	} else if (item == 'محار') {
		if (user.جمبري < 3 * total || user.حبار < 3 * total || user.سلور < 5 * total || user.صلصة < 54 * total || user.ليمون < 75 * total) {
			m.reply(`مطلوب ${3 * total} جمبري, ${3 * total} حبار, ${5 * total} سلور, ${54 * total} صلصة, ${75 * total} ليمون.\n\nلديك :\n━ ${global.rpg.emoticon('جمبري')} ${user.جمبري} جمبري\n━ ${global.rpg.emoticon('حبار')} ${user.حبار} حبار\n━ ${global.rpg.emoticon('سلور')} ${user.سلور} سلور\n━ ${user.صلصة} صلصة, \n━ ${user.ليمون} ليمون`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.جمبري -= 3 * total
				user.حبار -= 3 * total
				user.سلور -= 5 * total
				user.صلصة -= 54 * total
				user.ليمون -= 75 * total
				user.محار += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('محار')} محار*.\n\nمجموع المحار : ${user.محار}`)
			}, cooldownn)
		}
	} else if (item == 'روبيان') {
		if (user.سلطعون < 2 * total || user.دولفين < 3 * total || user.اخطبوط < 7 * total || user.بصل < 26 * total || user.ليمون < 71 * total) {
			m.reply(`مطلوب ${2 * total} سلطعون, ${3 * total} دولفين, ${7 * total} اخطبوط, ${26 * total} بصل, ${71 * total} ليمون.\n\nلديك :\n━ ${global.rpg.emoticon('سلطعون')} ${user.سلطعون} سلطعون\n━ ${global.rpg.emoticon('دولفين')} ${user.دولفين} دولفين\n━ ${global.rpg.emoticon('اخطبوط')} ${user.اخطبوط} اخطبوط\n━ ${user.بصل} بصل, \n━ ${user.ليمون} ليمون`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.سلطعون -= 2 * total
				user.دولفين -= 3 * total
				user.اخطبوط -= 7 * total
				user.بصل -= 26 * total
				user.ليمون -= 71 * total
				user.روبيان += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('روبيان')} روبيان*.\n\nمجموع الروبيان : ${user.روبيان}`)
			}, cooldownn)
		}
	} else if (item == 'تونه') {
		if (user.حوت < 1 * total || user.سمكة < 2 * total || user.شمعة < 50 * total || user.فلفل < 20 * total) {
			m.reply(`مطلوب ${1 * total} حوت, ${2 * total} سمكة, ${50 * total} شمعة, ${20 * total} فلفل.\n\nلديك :\n━ ${global.rpg.emoticon('حوت')} ${user.حوت} حوت\n━ ${global.rpg.emoticon('سمكة')} ${user.سمكة} سمكة\n━ ${user.شمعة} شمعة, \n━ ${user.فلفل} فلفل`)
		} else {
			user.lastmasak = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.حوت -= 1 * total
				user.سمكة -= 2 * total
				user.شمعة -= 50 * total
				user.فلفل -= 20 * total
				user.تونه += total
				user.masakcount += 1
				m.reply(`تم طبخ *${total} ${global.rpg.emoticon('تونه')} تونه*.\n\nمجموع التونه : ${user.تونه}`)
			}, cooldownn)
		}
	} 
	
	else {
		m.reply(info.replaceAll('%', '```'))
	}
}

handler.menufun = ['طبخ'].map(v => v + ' [العنصر] [العدد]')
handler.tagsfun = ['rpg']
handler.command = /^((طبخ(ing)?)|((me)?masak))$/i

handler.cooldown = cooldown
handler.premium = true

export default handler
