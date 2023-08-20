import db from '../../lib/database.js'
import { isNumber } from '../../lib/func.js'

let handler = async (m, { command, usedPrefix, args }) => {
	let user = db.data.users[m.sender]
	let info = `الاستعمال : *${usedPrefix + command} [العنصر] [العدد]*\n`
	info += `مثال : *${usedPrefix}${command} مطعم 2*\n\n`
	info += `*━━━[ قائمة المباني ]━━━*\n`
	info += `%| 🏥 مستشفى%\n`
	info += `%| 🏭 مطعم%\n`
	info += `%| 🏯 مصنع%\n`
	info += `%| ⚒️ منجم%\n`
	info += `%| 🛳️ مرفأ%`
	
	const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (item == 'rumahsakit') {
	if (user.مستشفى == 0) {
		if (total > 1) return m.reply(`ليس لديك *🏥 مستشفى*، يمكنك بناء مبنى واحد فقط`)
		if (user.جيني < 900000 * total || user.رمل < 600 * total) return m.reply(`مطلوب ${900000 * total} من المال، ${600 * total} من الرمل.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} من المال\n━ ${global.rpg.emoticon('رمل')} ${user.رمل} من الرمل`)
		user.جيني -= 900000 * total
		user.رمل -= 600 * total
		user.مستشفى += total
		user.rumahsakitlvl += 1
		m.reply(`تم بناء *${total} 🏥 مستشفى* بمستوى ${user.rumahsakitlvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات المرافق والحيوانات .`)
	} else {
		if (user.مستشفى + total > 2 * user.rumahsakitlvl) return m.reply(`يرجى ترقية 🏥 المستشفى إلى المستوى ${2 * user.rumahsakitlvl} أولاً.`)
		if (user.جيني < 900000 * total * user.rumahsakitlvl || user.رمل < 600 * total * user.rumahsakitlvl) return m.reply(`مطلوب ${900000 * total * user.rumahsakitlvl} من المال، ${600 * total * user.rumahsakitlvl} من الرمل.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} من المال\n━ ${global.rpg.emoticon('رمل')} ${user.رمل} من الرمل`)
		user.جيني -= 900000 * total * user.rumahsakitlvl
		user.رمل -= 600 * total * user.rumahsakitlvl
		user.مستشفى += total
		m.reply(`تم بناء *${total} 🏥 مستشفى* بمستوى ${user.rumahsakitlvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات المرافق والحيوانات .`)
	}
} else if (item == 'مطعم') {
	if (user.مطعم == 0) {
		if (total > 1) return m.reply(`ليس لديك *🏭 مطعم*، يمكنك بناء مبنى واحد فقط`)
		if (user.جيني < 1000000 * total || user.رمل < 333 * total || user.فولاذ < 50 * total || user.masakcount < 50 * total) return m.reply(`مطلوب ${1000000 * total} من المال، ${333 * total} من الرمل، ${50 * total} من الفولاذ، وخبرة طهي ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} من المال\n━ ${global.rpg.emoticon('رمل')} ${user.رمل} من الرمل\n━ ${global.rpg.emoticon('فولاذ')} ${user.فولاذ} من الفولاذ\n━ خبرة الطهي: ${user.masakcount} مرة`)
		user.جيني -= 1000000 * total
		user.رمل -= 333 * total
		user.فولاذ -= 50 * total
		user.مطعم += 1 * total
		user.restoranlvl += 1
			m.reply(`تم بناء *${total} 🏭 مطعم* بمستوى ${user.restoranlvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات الحيوانات  / المباني.`)
		}
	} else if (item == 'مصنع') {
if (user.مصنع == 0) {
if (total > 1) return m.reply(`ليس لديك *🏯 مصنع*, يمكنك بناء مبنى واحد فقط`)
if (user.جيني \< 500000 * total || user.رمل \< 166 * total || user.فولاذ \< 25 * total || user.craftcount \< 50 * total) return m.reply(`مطلوب ${500000 * total} جيني, ${166 * total} رمل, ${25 * total} فولاذ, وتجربة صنع ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} جيني\n━ ${global.rpg.emoticon('رمل')} ${user.رمل} رمل\n━ ${global.rpg.emoticon('فولاذ')} ${user.فولاذ} فولاذ\n━ خبرة الصنع: ${user.craftcount} مرة`)
user.جيني -= 500000 * total
user.رمل -= 166 * total
user.فولاذ -= 25 * total
user.مصنع += 1 * total
user.pabriklvl += 1
m.reply(`تم بناء *${total} 🏯 مصنع* بمستوى ${user.pabriklvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}stat* للتحقق من إحصائيات الحيوانات  / المباني`)
} else {
			if (user.مصنع + total > 2 * user.pabriklvl) return m.reply(`يجب ترقية 🏯 المصنع إلى المستوى ${2 * user.pabriklvl} أولاً.`)
if (user.جيني \< 500000 * total || user.رمل \< 166 * total || user.فولاذ \< 25 * total || user.craftcount \< 50 * total) return m.reply(`مطلوب ${500000 * total} جيني, ${166 * total} رمل, ${25 * total} فولاذ, وتجربة صنع ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} جيني\n━ ${global.rpg.emoticon('رمل')} ${user.رمل} رمل\n━ ${global.rpg.emoticon('فولاذ')} ${user.فولاذ} فولاذ\n━ تجربة الصنع: ${user.craftcount} مرة`)
user.جيني -= 500000 * total
user.رمل -= 166 * total
user.فولاذ -= 25 * total
user.مصنع += 1 * total
m.reply(`تم بناء *${total} 🏯 مصنع* بمستوى ${user.pabriklvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات الحيوانات / المباني`)
	} else if (item == 'منجم') {
if (user.منجم == 0) {
if (total > 1) return m.reply(`ليس لديك *⚒️ منجم*, يمكنك بناء مبنى واحد فقط`)
if (user.جيني \< 1000000 * total || user.حديد \< 166 * total || user.فولاذ \< 30 * total || user.adventurecount \< 50 * total) return m.reply(`مطلوب ${1000000 * total} جيني, ${166 * total} حديد, ${30 * total} فولاذ, وتجربة مغامرة ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} جيني\n━ ${global.rpg.emoticon('حديد')} ${user.حديد} حديد\n━ ${global.rpg.emoticon('فولاذ')} ${user.فولاذ} فولاذ\n━ تجربة المغامرة: ${user.adventurecount} مرة`)
user.جيني -= 1000000 * total
user.حديد -= 166 * total
user.فولاذ -= 30 * total
user.منجم += 1 * total
user.tambanglvl += 1
m.reply(`تم بناء *${total} ⚒️ منجم* بمستوى ${user.tambanglvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات الحيوانات  / المباني`)
} else {
			if (user.منجم + total > 2 * user.tambanglvl) return m.reply(`يجب ترقية ⚒️ المنجم إلى المستوى ${2 * user.tambanglvl} أولاً.`)
if (user.جيني \< 1000000 * total || user.حديد \< 166 * total || user.فولاذ \< 30 * total || user.adventurecount \< 50 * total) return m.reply(`مطلوب ${1000000 * total} جيني, ${166 * total} حديد, ${30 * total} فولاذ, وتجربة المغامرة ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} جيني\n━ ${global.rpg.emoticon('حديد')} ${user.حديد} حديد\n━ ${global.rpg.emoticon('فولاذ')} ${user.فولاذ} فولاذ\n━ تجربة المغامرة: ${user.adventurecount} مرة`)
user.جيني -= 1000000 * total
user.حديد -= 166 * total
user.فولاذ -= 30 * total
user.منجم += 1 * total
m.reply(`تم بناء *${total} ⚒️ منجم* بمستوى ${user.tambanglvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات الحيوانات  / المباني`)
	} else if (item == 'مرفأ') {
		if (user.مرفأ == 0) {
		if (total > 1) return m.reply(`ليس لديك *🛳️ ميناء*, يمكنك بناء مبنى واحد فقط`)
if (user.جيني \< 500000 * total || user.بضاعة \< 6 * total || user.قارب \< 6 * total || user.mancingcount \< 50 * total) return m.reply(`مطلوب ${500000 * total} جيني, ${6 * total} بضاعة, ${6 * total} قارب, وتجربة الصيد ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} جيني\n━ ${global.rpg.emoticon('بضاعة')} ${user.بضاعة} بضاعة\n━ ${global.rpg.emoticon('قارب')} ${user.قارب} قارب\n━ تجربة الصيد: ${user.mancingcount} مرة`)
user.جيني -= 500000 * total
user.بضاعة -= 6 * total
user.قارب -= 6 * total
user.مرفأ += 1 * total
user.pelabuhanlvl += 1
m.reply(`تم بناء *${total} 🛳️ ميناء* بمستوى ${user.pelabuhanlvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}املاك* للتحقق من إحصائيات الحيوانات / المباني`) else {
			if (user.مرفأ + total > 2 * user.pelabuhanlvl) return m.reply(`يجب ترقية 🛳️ المرفأ إلى المستوى ${2 * user.pelabuhanlvl} أولاً.`)
if (user.جيني \< 500000 * total || user.بضاعة \< 6 * total || user.قارب \< 6 * total || user.mancingcount \< 50 * total) return m.reply(`مطلوب ${500000 * total} جيني, ${6 * total} بضاعة, ${6 * total} قارب, وتجربة الصيد ${50 * total} مرة.\n\nلديك :\n━ ${global.rpg.emoticon('جيني')} ${user.جيني} جيني\n━ ${global.rpg.emoticon('بضاعة')} ${user.بضاعة} بضاعة\n━ ${global.rpg.emoticon('قارب')} ${user.قارب} قارب\n━ تجربة الصيد: ${user.mancingcount} مرة`)
user.جيني -= 500000 * total
user.بضاعة -= 6 * total
user.قارب -= 6 * total
user.مرفأ += 1 * total
m.reply(`تم بناء *${total} 🛳️ مرفأ* بمستوى ${user.pelabuhanlvl} بنجاح.\n\nاستخدم الأمر *${usedPrefix}stat* للتحقق من إحصائيات الحيوانات / المباني`)
	else {
		m.reply(info.replaceAll('%', '```'))
	}
}

handler.menufun = ['بناء'].map(v => v + ' [العنصر] [العدد]')
handler.tagsfun = ['rpg']
handler.command = /^(بناء(ing)?)$/i

handler.premium = true

export default handler
