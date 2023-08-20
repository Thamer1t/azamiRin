import db from '../../lib/database.js'

let handler = async (m, { conn, usedPrefix }) => {
	let user = db.data.users[m.sender]
	let gmbrt = 'https://telegra.ph/file/295a6d5105771875e1797.jpg'
	let hsl = `*━━━━━ [ الصيد ] ━━━━━*

*🐂 = [ ${user.ثور} ] ثور*
*🐅 = [ ${user.نمر} ] نمر*
*🐘 = [ ${user.فيل} ] فيل*
*🐐 = [ ${user.ماعز} ] ماعز*
*🐼 = [ ${user.باندا} ] باندا*
*🐊 = [ ${user.تمساح} ] تمساح*
*🐃 = [ ${user.جاموس} ] جاموس*
*🐮 = [ ${user.بقرة} ] بققرة*
*🐒 = [ ${user.قرد} ] قرد*
*🦎 = [ ${user.ضب} ] ضب*
*🐖 = [ ${user.خنزير} ] خنزير*
*🐓 = [ ${user.دجاجة} ] دجاجة*

Gunakan *${usedPrefix}sell* untuk dijual atau *${usedPrefix}cook* untuk dijadikan bahan masakan.`

	await conn.sendMsg(m.chat, { image: { url: gmbrt }, caption: hsl }, { quoted: m })
}

handler.menufun = ['صيد']
handler.tagsfun = ['rpg']
handler.command = /^(صيد)$/i

export default handler
