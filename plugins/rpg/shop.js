import db from '../../lib/database.js'
import { isNumber, readMore, somematch } from '../../lib/func.js'

const items = {
	شراء: {
		الحد: {
			جيني: 1000
		},
		جرعة: {
			جيني: 1250,
		},
		خشب: {
			جيني: 2000,
		},
		حجر: {
			جيني: 2000,
		},
		خيط: {
			جيني: 2500,
		},
		حديد: {
			جيني: 3000,
		},
		رمل: {
			جيني: 1500,
		},
		زمرد: {
			جيني: 200000,
		},
		الماس: {
			جيني: 300000,
		},
		ذهب: {
			جيني: 100000,
		},
		طعام: {
			جيني: 2500,
		},
		بصل: {
			جيني: 150,
		},
		فلفل: {
			جيني: 250,
		},
		
		زنجبيل: {
			جيني: 100,
		},
		صلصة: {
			جيني: 70,
		},
		ليمون: {
			جيني: 50,
		},
		بذورتفاح: {
			جيني: 150,
		},
		بذورعنب: {
			جيني: 200,
		},
		بذورمانجو: {
			جيني: 250,
		},
		بذورموز: {
			جيني: 50,
		},
		بذوربرتقال: {
			جيني: 300,
		},
		شائع: {
			جيني: 10000,
		},
		غيرشائع: {
			جيني: 15000,
		},
		غامض: {
			جيني: 25000,
		},
		اسطوري: {
			جيني: 40000,
		},
		ثور: {
			جيني: 11000,
		},
		نمر: {
			جيني: 18000,
		},
		فيل: {
			جيني: 16000,
		},
		ماعز: {
			جيني: 12000,
		},
		باندا: {
			جيني: 20000,
		},
		تمساح: {
			جيني: 5000,
		},
		جاموس: {
			جيني: 9000,
		},
		بقرة: {
			جيني: 10000,
		},
		قرد: {
			جيني: 5000,
		},
		ضب: {
			جيني: 4000,
		},
		خنزير: {
			جيني: 8000,
		},
		دجاجة: {
			جيني: 3000,
		},
		سلمون: {
			جيني: 3800,
		},
		حوت: {
			جيني: 45000,
		},
		دولفين: {
			جيني: 5000,
		},
		قرش: {
			جيني: 4500,
		},
		سمكة: {
			جيني: 2500,
		},
		سلور: {
			جيني: 3000,
		},
		زبيدي: {
			جيني: 3500,
		},
		نيلي: {
			جيني: 3000,
		},
		سلطعون: {
			جيني: 7000,
		},
		سرطان: {
			جيني: 15000,
		},
		اخطبوط: {
			جيني: 3000,
		},
		حبار: {
			جيني: 5000,
		},
		جمبري: {
			جيني: 7500,
		},
		حصان: {
			جيني: 500000,
		},
		قطة: {
			جيني: 500000,
		},
		ثعلب: {
			جيني: 500000,
		},
		كلب: {
			جيني: 500000,
		},
		ذئب: {
			جيني: 1000000,
		},
		قنطور: {
			gold: 15,
		},
		عنقاء: {
			emerald: 10,
		},
		تنين: {
			diamond: 10,
		},
		مستشفى: {
			جيني: 2000000,
		},
		مطعم: {
			جيني: 2500000,
		},
		مصنع: {
			جيني: 1000000,
		},
		منجم: {
			جيني: 2000000,
		},
		مرفأ: {
			جيني: 2500000,
		}
	},
	بيع: {
		جرعة: {
			جيني: 125,
		},
		طعام: {
			جيني: 125,
		},
		قمامة: {
			جيني: 20,
		},
		ثور: {
			جيني: 9900,
		},
		نمر: {
			جيني: 16200,
		},
		فيل: {
			جيني: 14400,
		},
		ماعز: {
			جيني: 10800,
		},
		باندا: {
			جيني: 18000,
		},
		تمساح: {
			جيني: 4500,
		},
		جاموس: {
			جيني: 8100,
		},
		بقرة: {
			جيني: 9000,
		},
		قرد: {
			جيني: 4500,
		},
		ضب: {
			جيني: 3600,
		},
		خنزير: {
			جيني: 7200,
		},
		دجاجة: {
			جيني: 2700,
		},
		سلمون: {
			جيني: 3150,
		},
		paus: {
			جيني: 40500,
		},
		lumba: {
			جيني: 4500,
		},
		hiu: {
			جيني: 4050,
		},
		سمكة: {
			جيني: 2250,
		},
		سلور: {
			جيني: 2700,
		},
		زبيدي: {
			جيني: 3150,
		},
		نيلي: {
			جيني: 2700,
		},
		سلطعون: {
			جيني: 6300,
		},
		سرطان: {
			جيني: 13500,
		},
		اخطبوط: {
			جيني: 2700,
		},
		حبار: {
			جيني: 4500,
		},
		جمبري: {
			جيني: 6750,
		},
		مانجو: {
			جيني: 400,
		},
		عنب: {
			جيني: 300,
		},
		برتقال: {
			جيني: 450,
		},
		موز: {
			جيني: 200,
		},
		تفاح: {
			جيني: 300,
		},
		ستيك: {
			جيني: 35000,
		},
		كباب: {
			جيني: 45000,
		},
		حميس: {
			جيني: 31000,
		},
		لحم: {
			جيني: 27000,
		},
		ناغت: {
			جيني: 32000,
		},
		تونه: {
			جيني: 65000,
		},
		seafood: {
			جيني: 65000,
		},
		سوشي: {
			جيني: 54500,
		},
		محار: {
			جيني: 65000,
		},
		روبيان: {
			جيني: 60500,
		},
		حصان: {
			جيني: 450000,
		},
		قطة: {
			جيني: 450000,
		},
		ثعلب: {
			جيني: 450000,
		},
		كلب: {
			جيني: 450000,
		},
		ذئب: {
			جيني: 900000,
		},
		قنطور: {
			جيني: 1350000,
		},
		عنقاء: {
			جيني: 1800000,
		},
		تنين: {
			جيني: 2700000,
		},
		مستشفى: {
			جيني: 1800000,
		},
		مطعم: {
			جيني: 2250000,
		},
		مصنع: {
			جيني: 900000,
		},
		منجم: {
			جيني: 1800000,
		},
		مرفأ: {
			جيني: 2250000,
		}
	}
}

let handler = async (m, { command, usedPrefix, args, isPrems }) => {
	let user = db.data.users[m.sender]
	const listItems = Object.fromEntries(Object.entries(items[`${somematch(['شراء','متجر','beli'], command) ? 'شراء' : 'بيع'}`]).filter(([v]) => v && v in user))
	let info = `الاستخدام : *${usedPrefix + command} [العنصر] [العدد]*\n`
	info += `مثال : *${usedPrefix}${command} خشب 10*\n\n`
	info += `*━━━[ العناصر اليومية ]━━━*\n%🌌 الحد%\n%🥤 جرعة%\n%🍖 طعام%\n\n`
	info += `*━━━[ مواد الصناعة ]━━━*\n`
	info += `%| 🪵 خشب	 | 🪨 حجر%\n`
	info += `%| 🕸️ خيط   | ⛓️ حديد%\n`
	info += `%| 🪵 رمل	 | 💚 زمرد%\n`
	info += `%| 💎 الماس  | 👑 ذهب%\n\n`
	info += `*━━━[ عناصر الطبخ ]━━━*${readMore}\n`
	info += `%| بصل	  | فلفل%\n`
	info += `%| شمعة	  | زنجبيل%\n`
	info += `%| صلصة		| ليمون%\n\n`
	info += `*━━━[ عناصر الزراعة ]━━━*\n`
	info += `%| 🌾 بذورمانجو%\n`
	info += `%| 🌾 بذورتفاح%\n`
	info += `%| 🌾 بذورموز%\n`
	info += `%| 🌾 بذوربرتقال%\n`
	info += `%| 🌾 بذورعنب%\n\n`
	info += `*━━━[ صناديق الحظ ]━━━*\n`
	info += `%| 📦 شائع%\n`
	info += `%| 🎁 غيرشائع%\n`
	info += `%| 🗳️ غامض%\n`
	info += `%| 🗃️ اسطوري%\n\n`
	info += `*━━━[ الحيوانات ]━━━*\n`
	info += `%| 🐂 ثور | 🐅 نمر%\n`
	info += `%| 🐘 فيل   | 🐐 ماعز%\n`
	info += `%| 🐼 باندا   | 🐊 تمساح%\n`
	info += `%| 🐃 جاموس  | 🐄 بقرة%\n`
	info += `%| 🐒 قرد  | 🐗 ضب%\n`
	info += `%| 🐖 خنزير	| 🐔 دجاجة%\n\n`
	info += `*━━━[ البحريات ]━━━*\n`
	info += `%| 🐋 orca	| 🐳 paus%\n`
	info += `%| 🐬 lumba   | 🦈 hiu%\n`
	info += `%| 🐟 سمكة	| 🐟 سلور%\n`
	info += `%| 🐡 زبيدي   | 🐠 نيلي%\n`
	info += `%| 🦀 سلطعون| 🦞 سرطان%\n`
	info += `%| 🐙 اخطبوط  | 🦑 حبار%\n`
	info += `%| 🦐 جمبري%\n\n`
	info += `*━━━[ الحيوانات الأليفة ]━━━*\n`
	info += `%| 🐎 حصان   | 🐈 قطة%\n`
	info += `%| 🦊 ثعلب	 | 🐕 كلب%\n`
	info += `%| 🐺 ذئب	| 🐎 قنطور%\n`
	info += `%| 🦜 عنقاء | 🐉 تنين%\n\n`
	info += `*━━━[ المباني ]━━━*\n`
	info += `%| 🏥 مستشفى%\n`
	info += `%| 🏭 مطعم%\n`
	info += `%| 🏯 مصنع%\n`
	info += `%| ⚒️ منجم%\n`
	info += `%| 🛳️ مرفأ%`

	let infos = `الاستخدام : *${usedPrefix + command} [العنصر] [العدد]*\n`
	infos += `مثال : *${usedPrefix}${command} جرعة 10*\n\n`
	infos += `*━━━[ العناصر اليومية ]━━━*\n%🥤 جرعة%\n%🍖 طعام%\n%🌌 قمامة%\n\n`
	infos += `*━━━[ بيع الحيوانات ]━━━*\n`
	infos += `%| 🐂 ثور | 🐅 نمر%\n`
	infos += `%| 🐘 فيل   | 🐐 ماعز%\n`
	infos += `%| 🐼 باندا   | 🐊 تمساح%\n`
	infos += `%| 🐃 جاموس  | 🐄 بقرة%\n`
	infos += `%| 🐒 قرد  | 🐗 ضب%\n`
	infos += `%| 🐖 خنزير	| 🐔 دجاجة%\n\n`
	infos += `*━━━[ الحيوانات البحرية]━━━*${readMore}\n`
	infos += `%| 🐟 سلمون	| 🐳 حوت%\n`
	infos += `%| 🐬 دلفين   | 🦈 قرش%\n`
	infos += `%| 🐟 سمكة	| 🐟 سلور%\n`
	infos += `%| 🐡 زبيدي   | 🐠 نيلي%\n`
	infos += `%| 🦀 سلطعون| 🦞 سرطان%\n`
	infos += `%| 🐙 اخطبوط  | 🦑 حبار%\n`
	infos += `%| 🦐 جمبري%\n\n`
	infos += `*━━━[ الفواكه ]━━━*\n`
	infos += `%| 🥭 مانجو%\n`
	infos += `%| 🍇 عنب%\n`
	infos += `%| 🍊 برتقال%\n`
	infos += `%| 🍌 موز%\n`
	infos += `%| 🍎 تفاح%\n\n`
	infos += `*━━━[ الحيوانات الأليفة ]━━━*\n`
	infos += `%| 🐎 حصان   | 🐈 قطة%\n`
	infos += `%| 🦊 ثعلب	 | 🐕 كلب%\n`
	infos += `%| 🐺 ذئب	| 🐎 قنطور%\n`
	infos += `%| 🦜 عنقاء | 🐉 تنين%\n\n`
	infos += `*━━━[ المباني ]━━━*\n`
	infos += `%| 🏥 مستشفى%\n`
	infos += `%| 🏭 مطعم%\n`
	infos += `%| 🏯 مصنع%\n`
	infos += `%| ⚒️ منجم%\n`
	infos += `%| 🛳️ مرفأ%`
	
	const item = (args[0] || '').toLowerCase()
	const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if (!listItems[item] && somematch(['شراء','متجر','beli'], command)) return m.reply(info.replaceAll('%', '```'))
	if (!listItems[item] && somematch(['بيع','jual'], command)) return m.reply(infos.replaceAll('%', '```'))
	let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
	if (somematch(['شراء','متجر','beli'], command)) {
		if (isPrems && item == 'الحد') throw `[!] مستخدمي البريميوم لايحتاجون حدود..`
		if (somematch(['حصان', 'قطة', 'ثعلب', 'كلب', 'ذئب', 'قنطور', 'عنقاء', 'تنين', 'مستشفى', 'مطعم', 'مصنع', 'منجم', 'مرفأ'], args[0].toLowerCase())) {
			if (user[`${item}`] == 0) {
				if (total > 1) return m.reply(`ليس لديك الكمية الكافية من *${global.rpg.emoticon(item)}${item}*, يمكنك شراء 1 فقط`)
if (user\[paymentMethod\] \< listItems\[item\]\[paymentMethod\] * total) return m.reply(`ليس لديك ما يكفي من ${paymentMethod} لشراء *${total} ${global.rpg.emoticon(item)}${item}*.\nتحتاج *${(listItems[item][paymentMethod] * total) - user[paymentMethod]} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}* لشراءها.`)
user\[paymentMethod\] -= listItems\[item\]\[paymentMethod\] * total
user\[item\] += total
user\[`${item}lvl`\] += 1
return m.reply(`تم شراء *${total} ${global.rpg.emoticon(item)}${item}* بقيمة *${listItems[item][paymentMethod] * total} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}*`)
			
			} else {
				if (user\[`${item}`\] + total > 2 * user\[`${item}lvl`\]) return m.reply(`يجب ترقية ${global.rpg.emoticon(item)} ${item} إلى المستوى ${2 * user[`${item}lvl`]} أولاً.`)
let harga = listItems\[item\]\[paymentMethod\] * total * user\[`${item}`\] * user\[`${item}lvl`\]
if (user\[paymentMethod\] \< listItems\[item\]\[paymentMethod\] * total) return m.reply(`ليس لديك ما يكفي من ${paymentMethod} لشراء *${total} ${global.rpg.emoticon(item)}${item} المستوى ${user[`${item}lvl`]}*.\nتحتاج *${(listItems[item][paymentMethod] * total) - user[paymentMethod]} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}* لشراءها.`)
user\[paymentMethod\] -= harga
user\[item\] += total
return m.reply(`تم شراء *${total} ${global.rpg.emoticon(item)}${item}* بقيمة *${harga} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}*`)}
		} else {
			if (user\[paymentMethod\] \< listItems\[item\]\[paymentMethod\] * total) return m.reply(`ليس لديك ما يكفي من ${paymentMethod} لشراء *${total}* ${global.rpg.emoticon(item)}${item}.\nتحتاج ${global.rpg.emoticon(paymentMethod)} *${(listItems[item][paymentMethod] * total) - user[paymentMethod]} ${paymentMethod}* لشراءها.`)
user\[paymentMethod\] -= listItems\[item\]\[paymentMethod\] * total
user\[item\] += total
return m.reply(`تم شراء *${total} ${global.rpg.emoticon(item)}${item}* بقيمة *${listItems[item][paymentMethod] * total} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}*`)}
	} else {
		if (somematch(['حصان', 'قطة', 'ثعلب', 'كلب', 'ذئب', 'قنطور', 'عنقاء', 'تنين', 'مستشفى', 'مطعم', 'مصنع', 'منجم', 'مرفأ'], args[0].toLowerCase())) {
			let harga = listItems[item][paymentMethod] * total * user[`${item}lvl`]
			if (user\[item\] == 0) return m.reply(`ماعندك *${global.rpg.emoticon(item)}${item}* عشان تبيعه.`))
			if (user\[item\] \< total) return m.reply(`لديك فقط *${user[item]} ${global.rpg.emoticon(item)}${item}* للبيع.`)
			user[item] -= total
			user.جيني += harga
			let meh = user[`${item}lvl`]
			if (user[item] == 0) user[`${item}lvl`] = 0
			return m.reply(`بيع *${total} ${global.rpg.emoticon(item)}${item} المستوى ${meh}* بسعر *${global.rpg.emoticon(paymentMethod)} ${harga} ${paymentMethod}*`)
		} else {
			if (user\[item\] == 0) return m.reply(`ماعندك*${global.rpg.emoticon(item)}${item}* عشان تبيعه.`)
			if (user\[item\] \< total) return m.reply(`لديك فقط *${user[item]} ${global.rpg.emoticon(item)}${item}* للبيع.`)
			user[item] -= total
			user.جيني += listItems[item].جيني * total
			return m.reply(`بيع *${total} ${global.rpg.emoticon(item)}${item}* بسعر *${global.rpg.emoticon(paymentMethod)} ${listItems[item].جيني * total} ${paymentMethod}*`)
}
	}
}

handler.menufun = ['شراء', 'بيع'].map(v => v + ' [العنصر] [العدد]')
handler.tagsfun = ['rpg']
handler.command = /^(شراء|beli|متجر|بيع|jual)$/i

handler.disabled = false

export default handler
