//const cooldown = 1000 // 1 detik
//const cooldown = 60000 // 1 menit
//const cooldown = 3600000 // 1 jam
//const cooldown = 86400000 // 1 hari
//const cooldown = 2592000000 // 1 bulan
import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'

const cooldown = 900000

let handler = async (m, { usedPrefix, command }) => {
	let user = db.data.users\[m.sender\]
let timers = (cooldown - (new Date() - user.lastadventure))
if (user.صحة \< 80) return m.reply(`تحتاج إلى *❤️ صحة 80* على الأقل لـ ${command}!!\n\nاكتب *${usedPrefix}heal* لزيادة الصحة.\nأو اكتب *${usedPrefix}استخدام جرعة* لاستخدام الجرعة.`)
if (new Date() - user.lastadventure \<= cooldown) return m.reply(`لقد قمت بالمغامرة بالفعل، يرجى الانتظار\n*🕐${timers.toTimeString()}*`)
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
	if (user.adventurecount % 25  == 0) user.شائع  += common
	if (user.adventurecount % 50  == 0) user.ذهب	+= gold
	if (user.adventurecount % 150 == 0) user.زمرد += emerald
	if (user.adventurecount % 400 == 0) user.الماس += diamond

	let txt = `[ *Selesai ${command}* ]\n\n`;
txt += `*❤️ الصحة : -${health}*\nغامرت وحصلت :\n`;
txt += `*💵 المال:* ${money}\n`;
txt += `*✉️ الخبرة:* ${exp}\n`;
txt += `*🗑 القمامة:* ${trash}\n`;
txt += `*🪨 الصخور:* ${rock}\n`;
txt += `*🪵 الخشب:* ${wood}\n`;
txt += `*🕸️ الخيوط:* ${string}`;
if (user.adventurecount % 25 == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*📦 شائع:* ${common}`;
if (user.adventurecount % 50 == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*👑 ذهب:* ${gold}`;
if (user.adventurecount % 150 == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*💚 زمرد:* ${emerald}`;
if (user.adventurecount % 400 == 0) txt += `\n\nمكافأة المغامرة ${user.adventurecount} مرة\n*💎 الماس:* ${diamond}`;
m.reply(txt);
user.lastadventure = new Date * 1
}

handler.menufun = ['مغامرة', 'غامر', 'berpetualang', 'mulung']
handler.tagsfun = ['rpg']
handler.command = /^(مغامرة|(ber)?petualang(ang)?|غامر)$/i

handler.cooldown = cooldown

export default handler
