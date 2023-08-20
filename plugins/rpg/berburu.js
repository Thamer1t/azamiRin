import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'

const cooldown = 259200000
const cooldownn = 180000

let handler = async (m, { conn, usedPrefix }) => {
	let user = db.data.users[m.sender]
	if (new Date - user.lasthunt <= cooldown) return m.reply(`📍 لقد انتهت جلسة الصيد الحالية\استغل الوقت المتاح للاستراحة، يمكن بدء جلسة صيد جديدة بعد . . .\n🕖 *${((user.lasthunt + cooldown) - new Date()).toTimeString()}*`)
	if (user.درع == 0 || user.سيف == 0 || user.قوس == 0) return m.reply(`يجب صنع دروع وسيوف وأقواس أولاً باستخدام *${usedPrefix}صناعة*\n\nلديك :\n━ 🥼 ${user.درع} درع\n━ ⚔️ ${user.سيف} سيف\n━ 🏹 ${user.قوس} قوس`)
	let buruan = [
		{"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0},
		{"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}, {"حيوان": 0}
	]

	for (let x of buruan) {
		let random = ranNumb(0, 6)
		x.حيوان += random
	}

	let gmbrt = 'https://telegra.ph/file/295a6d5105771875e1797.jpg'
	let hsl = `[ *انتهت جلسة الصيد* ]\nنتائج الصيد اليوم:

 *🐂 = [ ${buruan[0].حيوان} ]*			 *🐃 = [ ${buruan[6].حيوان} ]*
 *🐅 = [ ${buruan[1].حيوان} ]*			 *🐮 = [ ${buruan[7].حيوان} ]*
 *🐘 = [ ${buruan[2].حيوان} ]*			 *🐒 = [ ${buruan[8].حيوان} ]*
 *🐐 = [ ${buruan[3].حيوان} ]*			 *🐗 = [ ${buruan[9].حيوان} ]*
 *🐼 = [ ${buruan[4].حيوان} ]*			 *🐖 = [ ${buruan[10].حيوان} ]*
 *🐊 = [ ${buruan[5].حيوان} ]*			 *🐓 = [ ${buruan[11].حيوان} ]*`

 	user.armordurability -= ranNumb(80, 120)
 	user.sworddurability -= ranNumb(80, 120)
 	user.bowdurability -= ranNumb(80, 120)
 	if (user.armordurability <= 0) {
 		user.armordurability = 0
 		user.درع = 0
 	}
 	if (user.sworddurability <= 0) {
 		user.sworddurability = 0
 		user.سيف = 0
 	}
 	if (user.bowdurability <= 0) {
 		user.bowdurability = 0
 		user.قوس = 0
 	}

	setTimeout(() => {
		user.ثور	+= buruan[0].حيوان
		user.نمر	+= buruan[1].حيوان
		user.فيل		+= buruan[2].حيوان
		user.ماعز	+= buruan[3].حيوان
		user.باندا		+= buruan[4].حيوان
		user.تمساح		+= buruan[5].حيوان
		user.جاموس		+= buruan[6].حيوان
		user.بقرة		+= buruan[7].حيوان
		user.قرد		+= buruan[8].حيوان
		user.ضب	+= buruan[9].حيوان
		user.خنزير		+= buruan[10].حيوان
		user.دجاجة		+= buruan[11].حيوان 
			
		
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
