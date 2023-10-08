//const cooldown = 1000 // 1 ثانية
//const cooldown = 60000 // 1 دقيقة
//const cooldown = 3600000 // 1 ساعة
//const cooldown = 86400000 // 1 يوم
//const cooldown = 2592000000 // 1 شهر
import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'

const cooldown = 900000

let handler = async (m, { usedPrefix, command }) => {
	let user = db.data.users[m.sender]
	let timers = (cooldown - (new Date - user.lastadventure))
	if (user.health < 80) return m.reply(`تحتاج على الأقل *❤️ 80 صحة* لـ ${command}!!\n\nاكتب *${usedPrefix}heal* لإضافة الصحة.\nأو *${usedPrefix}use potion* لاستخدام الجرعة.`)
	if (new Date - user.lastadventure <= cooldown) return m.reply(`لقد قمت بالمغامرة بالفعل, الرجاء الانتظار\n*🕐${timers.toTimeString()}*`)

	user.adventurecount += 1

	const health = ranNumb(3, 6)
	const money = ranNumb(1000, 3000)
	const exp = ranNumb(500, 1000)
	const trash = ranNumb(10, 50)
	const rock = ranNumb(1, 4)
	const wood = ranNumb(1, 4)
	const string = ranNumb(1, 3)
	const common = ranNumb(1, 2)
	const gold = 1
	const emerald = 1
	const diamond = 1

	user.صحة -= health
	user.جيني += money
	user.خبرة += exp
	user.قمامة += trash
	user.حجر += rock
	user.خشب += wood
	user.خيط += string
	if (user.adventurecount % 25  == 0) user.common  += common
	if (user.adventurecount % 50  == 0) user.gold	+= gold
	if (user.adventurecount % 150 == 0) user.emerald += emerald
	if (user.adventurecount % 400 == 0) user.diamond += diamond

	let txt = `[ *أنهيت ${command}* ]\n\n`
	txt += `*❤️ الصحة : -${health}*\nالغنائم :\n`
	txt += `*💵 المال :* ${money}\n`
	txt += `*✉️ الخبرة :* ${exp}\n`
	txt += `*🗑 القمامة :* ${trash}\n`
	txt += `*🪨 الصخور :* ${rock}\n`
	txt += `*🪵 الخشب :* ${wood}\n`
	txt += `*🕸️ الخيوط :* ${string}`
	if (user.adventurecount % 25  == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*📦 صندوق عادي :* ${common}`
	if (user.adventurecount % 50  == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*👑 الذهب :* ${gold}`
	if (user.adventurecount % 150 == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*💚 الزمرد :* ${emerald}`
	if (user.adventurecount % 400 == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*💎 الماس :* ${diamond}`
	m.reply(txt)
	user.lastadventure = new Date *1
}

handler.menufun = ['مغامرة', 'غامر', 'berpetualang', 'mulung']
handler.tagsfun = ['rpg']
handler.command = /^(مغامرة|(ber)?petualang(ang)?|mulung)$/i

handler.cooldown = cooldown

export default handler
