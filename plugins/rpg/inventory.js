import db from '../../lib/database.js'
import daily from './daily.js'
import weekly from './weekly.js'
import monthly from './monthly.js'
import adventure from './adventure.js'

const inventory = {
	others: {
		صحة: true,
		جيني: true,
		خبرة: true,
	},
	items: {
		جرعة: true,
		طعام: true,
		خشب: true,
		حجر: true,
		خيط: true,
		حديد: true,
		قمامة: true,
		زمرد: true,
		الماس: true,
		ذهب: true,
	},
	builds: {
		مستشفى: true,
		مطعم: true,
		مصنع: true,
		منجم: true,
		مرفأ: true,
	},
	crates: {
		شائع: true,
		غيرشائع: true,
		غامض: true,
		اسطوري: true,
	},
	pets: {
		حصان: true,
		قطة: true,
		ثعلب: true,
		كلب: true,
		ذئب: true,
		قنطور: true,
		عنقاء: true,
		تنين: true,
	},
	cooks: {
		ستيك: true,
		كباب: true,
		حميس: true,
		لحم: true,
		ناغت: true,
		تونه: true,
		seafood: true,
		سوشي: true,
		محار: true,
		روبيان: true,
	},
	fruits: {
		مانجو: true,
		تفاح: true,
		موز: true,
		برتقال: true,
	},
	cooldowns: {
		lastclaim: {
			name: 'claim',
			time: daily.cooldown
		},
		lastweekly: {
			name: 'weekly',
			time: weekly.cooldown
		},
		lastmonthly: {
			name: 'monthly',
			time: monthly.cooldown
		},
		lastadventure: {
			name: 'مغامرة',
			time: adventure.cooldown
		}
	}
}

let handler = async (m, { conn }) => {
	let user = db.data.users[m.sender]
	const others = Object.keys(inventory.others).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]}`).filter(v => v).join('\n').trim()
	const items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]}`).filter(v => v).join('\n').trim()
	const builds = Object.keys(inventory.builds).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]} ( level ${user[`${v}lvl`]} )`).filter(v => v).join('\n').trim()
	const crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]}`).filter(v => v).join('\n').trim()
	const pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]} ( level ${user[`${v}lvl`]} )`).filter(v => v).join('\n').trim()
	const cooks = Object.keys(inventory.cooks).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]}`).filter(v => v).join('\n').trim()
	const fruits = Object.keys(inventory.fruits).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v} :* ${user[v]}`).filter(v => v).join('\n').trim()
	const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*⌛${name}* : ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
	const caption = `
Inventory *${conn.getName(m.sender)}*

${Object.keys(inventory.others).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v]}`).filter(v => v).join('\n')}${items ? `

*📍 Items*
${items}
*🎒 Total Items :* ${Object.keys(inventory.items).map(v => user[v]).reduce((a, b) => a + b, 0)} Items${readMore}` : ''}${builds ? `

*📍 Building*
${builds}
*🏗️ Total Buldings :* ${Object.keys(inventory.builds).map(v => user[v]).reduce((a, b) => a + b, 0)} Buildings` : ''}${crates ? `

*📍 Crates*
${crates}
*⚗️ Total Crates :* ${Object.keys(inventory.crates).map(v => user[v]).reduce((a, b) => a + b, 0)} Boxs` : ''}${pets ? `

*📍 Pets*
${pets}
*🪸 Total Pets :* ${Object.keys(inventory.pets).map(v => user[v]).reduce((a, b) => a + b, 0)} Pets` : ''}${cooks ? `

*📍 Foods*
${cooks}
*🥡 Total Foods :* ${Object.keys(inventory.cooks).map(v => user[v]).reduce((a, b) => a + b, 0)} Dish` : ''}${fruits ? `

*📍 Fruits*
${fruits}
*🫐 Total Fruits :* ${Object.keys(inventory.fruits).map(v => user[v]).reduce((a, b) => a + b, 0)} Fruits` : ''}${cooldowns ? `

*⌚ Cooldowns*
${cooldowns}` : ''}
`.trim()
	m.reply(caption)
}

handler.menufun = ['inventory', 'inv']
handler.tagsfun = ['rpg']
handler.command = /^(حق(يبة)?|bal(ance)?|جيني|e?xp)$/i

export default handler

const more = خيط.fromCharCode(8206)
const readMore = more.repeat(4001)
