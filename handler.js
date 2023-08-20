import { smsg } from './lib/simple.js'
import { plugins } from './lib/plugins.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import fs, { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import Connection from './lib/connection.js'
import printMessage from './lib/print.js'
import Helper from './lib/helper.js'
import db, { loadDatabase } from './lib/database.js'
import Queque from './lib/queque.js'

/** @type {import('@whiskeysockets/baileys')} */
const { getContentType } = (await import('@whiskeysockets/baileys')).default

const isNumber = x => typeof x === 'number' && !isNaN(x)
/**
 * Handle messages upsert
 * @this {import('./lib/connection').Socket}
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['messages.upsert']} chatUpdate
 */
export async function handler(chatUpdate) {
	this.msgqueque = this.msgqueque || new Queque()
	if (!chatUpdate)
		return
	let m = chatUpdate.messages[chatUpdate.messages.length - 1]
	if (!m)
		return
	if (m.message?.viewOnceMessageV2) m.message = m.message.viewOnceMessageV2.message
	if (m.message?.documentWithCaptionMessage) m.message = m.message.documentWithCaptionMessage.message
	if (db.data == null)
		await loadDatabase()
	try {
		m = smsg(this, m) || m
		if (!m)
			return
		m.exp = 0
		m.limit = false
		try {
			// TODO: use loop to insert data instead of this
			let user = db.data.users[m.sender]
			if (m.sender.endsWith('@s.whatsapp.net')) {
				if (typeof user !== 'object')
				db.data.users[m.sender] = {}
				if (user) {
					if (!isNumber(user.خبرة))
						user.خبرة = 0
					if (!isNumber(user.الحد))
						user.الحد = 120
					if (!isNumber(user.lastclaim))
						user.lastclaim = 0
					if (!('registered' in user))
						user.registered = true
					if (!('viewstatus' in user))
						user.viewstatus = false
					if (!user.registered) {
						if (!('name' in user))
							user.name = m.name
						if (!isNumber(user.age))
							user.age = -1
						if (!isNumber(user.regTime))
							user.regTime = -1
					}
					if (!isNumber(user.afk))
						user.afk = -1
					if (!('afkReason' in user))
						user.afkReason = ''
					if (!('banned' in user))
						user.banned = false
					if (!('permaban' in user))
						user.permaban = false
					if (!isNumber(user.lastbanned))
						user.lastbanned = 0
					if (!isNumber(user.bannedcd))
						user.bannedcd = 0
					if (!isNumber(user.warn))
						user.warn = 0
					if (!isNumber(user.level))
						user.level = 0
					if (!('role' in user))
						user.role = 'مبتدئ'
					if (!('autolevelup' in user))
						user.autolevelup = true

					if (!isNumber(user.جيني))
						user.جيني = 0
					if (!isNumber(user.بطاقة))
						user.بطاقة = 0
					if (!isNumber(user.صحة))
						user.صحة = 100
					if (!isNumber(user.جرعة))
						user.جرعة = 0
					if (!isNumber(user.قمامة))
						user.قمامة = 0
					if (!isNumber(user.خشب))
						user.خشب = 0
					if (!isNumber(user.حجر))
						user.حجر = 0
					if (!isNumber(user.خيط))
						user.خيط = 0
					if (!isNumber(user.حديد))
						user.حديد = 0
					if (!isNumber(user.رمل))
						user.رمل = 0

					if (!isNumber(user.زمرد))
						user.زمرد = 0
					if (!isNumber(user.الماس))
						user.الماس = 0
					if (!isNumber(user.ذهب))
						user.ذهب = 0
					if (!isNumber(user.فولاذ))
						user.فولاذ = 0
					if (!isNumber(user.بضاعة))
						user.بضاعة = 0
					if (!isNumber(user.قارب))
						user.قارب = 0

					if (!isNumber(user.شائع))
						user.شائع = 0
					if (!isNumber(user.commoncount))
						user.commoncount = 0
					if (!isNumber(user.غيرشائع))
						user.غيرشائع = 0
					if (!isNumber(user.uncommoncount))
						user.uncommoncount = 0
					if (!isNumber(user.غامض))
						user.غامض = 0
					if (!isNumber(user.mythiccount))
						user.mythiccount = 0
					if (!isNumber(user.اسطوري))
						user.اسطوري = 0
					if (!isNumber(user.legendarycount))
						user.legendarycount = 0
					if (!isNumber(user.حيوان))
						user.حيوان = 0
					if (!isNumber(user.petcount))
						user.petcount = 0
					if (!isNumber(user.طعام))
						user.طعام = 0

					if (!isNumber(user.حصان))
						user.حصان = 0
					if (!isNumber(user.horseexp))
						user.horseexp = 0
					if (!isNumber(user.قطة))
						user.قطة = 0
					if (!isNumber(user.catexp))
						user.catexp = 0
					if (!isNumber(user.ثعلب))
						user.ثعلب = 0
					if (!isNumber(user.foxexp))
						user.foxexp = 0
					if (!isNumber(user.كلب))
						user.كلب = 0
					if (!isNumber(user.dogexp))
						user.dogexp = 0
					if (!isNumber(user.ذئب))
						user.ذئب = 0
					if (!isNumber(user.wolfexp))
						user.wolfexp = 0
					if (!isNumber(user.قنطور))
						user.قنطور = 0
					if (!isNumber(user.centaurexp))
						user.centaurexp = 0
					if (!isNumber(user.عنقاء))
						user.عنقاء = 0
					if (!isNumber(user.phoenixexp))
						user.phoenixexp = 0
					if (!isNumber(user.تنين))
						user.تنين = 0
					if (!isNumber(user.dragonexp))
						user.dragonexp = 0
					if (!isNumber(user.horselvl))
						user.horselvl = 0
					if (!isNumber(user.catlvl))
						user.catlvl = 0
					if (!isNumber(user.foxlvl))
						user.foxlvl = 0
					if (!isNumber(user.doglvl))
						user.doglvl = 0
					if (!isNumber(user.wolflvl))
						user.wolflvl = 0
					if (!isNumber(user.centaurlvl))
						user.centaurlvl = 0
					if (!isNumber(user.phoenixlvl))
						user.phoenixlvl = 0
					if (!isNumber(user.dragonlvl))
						user.dragonlvl = 0
					if (!isNumber(user.horsehealth))
						user.horsehealth = 0
					if (!isNumber(user.cathealth))
						user.cathealth = 0
					if (!isNumber(user.foxhealth))
						user.foxhealth = 0
					if (!isNumber(user.doghealth))
						user.doghealth = 0
					if (!isNumber(user.wolfhealth))
						user.wolfhealth = 0
					if (!isNumber(user.centaurhealth))
						user.centaurhealth = 0
					if (!isNumber(user.phoenixhealth))
						user.phoenixhealth = 0
					if (!isNumber(user.dragonhealth))
						user.dragonhealth = 0

					if (!isNumber(user.horselastfeed))
						user.horselastfeed = 0
					if (!isNumber(user.catlastfeed))
						user.catlastfeed = 0
					if (!isNumber(user.foxlastfeed))
						user.foxlastfeed = 0
					if (!isNumber(user.doglastfeed))
						user.doglastfeed = 0
					if (!isNumber(user.wolflastfeed))
						user.wolflastfeed = 0
					if (!isNumber(user.centaurlastfeed))
						user.centaurlastfeed = 0
					if (!isNumber(user.phoenixlastfeed))
						user.phoenixlastfeed = 0
					if (!isNumber(user.dragonlastfeed))
						user.dragonlastfeed = 0
					if (!isNumber(user.lastadu))
						user.lastadu = 0

					if (!isNumber(user.درع))
						user.درع = 0
					if (!isNumber(user.armordurability))
						user.armordurability = 0
					if (!isNumber(user.سيف))
						user.سيف = 0
					if (!isNumber(user.sworddurability))
						user.sworddurability = 0
					if (!isNumber(user.معول))
						user.معول = 0
					if (!isNumber(user.pickaxedurability))
						user.pickaxedurability = 0
					if (!isNumber(user.سنارة))
						user.سنارة = 0
					if (!isNumber(user.fishingroddurability))
						user.fishingroddurability = 0
					if (!isNumber(user.قوس))
						user.قوس = 0
					if (!isNumber(user.bowdurability))
						user.bowdurability = 0

					if (!isNumber(user.lastclaim))
						user.lastclaim = 0
					if (!isNumber(user.lastadventure))
						user.lastadventure = 0
					if (!isNumber(user.lastfishing))
						user.lastfishing = 0
					if (!isNumber(user.lastdungeon))
						user.lastdungeon = 0
					if (!isNumber(user.lastduel))
						user.lastduel = 0
					if (!isNumber(user.lastmining))
						user.lastmining = 0
					if (!isNumber(user.lasthunt))
						user.lasthunt = 0
					if (!isNumber(user.lastlumber))
						user.lastlumber = 0
					if (!isNumber(user.lastngojek))
						user.lastngojek = 0
					if (!isNumber(user.lastweekly))
						user.lastweekly = 0
					if (!isNumber(user.lastmonthly))
						user.lastmonthly = 0
					if (!isNumber(user.lastbansos))
						user.lastbansos = 0
					if (!isNumber(user.lastdagang))
						user.lastdagang = 0
					if (!isNumber(user.lastberkebon))
						user.lastberkebon = 0
					if (!isNumber(user.lastmasak))
						user.lastmasak = 0
					if (!isNumber(user.masakcount))
						user.masakcount = 0
					if (!isNumber(user.craftcount))
						user.craftcount = 0
					if (!isNumber(user.adventurecount))
						user.adventurecount = 0
					if (!isNumber(user.mancingcount))
						user.mancingcount = 0
					if (!isNumber(user.lumbercount))
						user.lumbercount = 0
					if (!isNumber(user.ngojekcount))
						user.ngojekcount = 0

					if (!isNumber(user.بذورمانجو))
						user.بذورمانجو = 0
					if (!isNumber(user.بذورتفاح))
						user.بذورتفاح = 0
					if (!isNumber(user.بذورموز))
						user.بذورموز = 0
					if (!isNumber(user.بذوربرتقال))
						user.بذوربرتقال = 0
					if (!isNumber(user.بذورعنب))
						user.بذورعنب = 0
					if (!isNumber(user.مانجو))
						user.مانجو = 0
					if (!isNumber(user.تفاح))
						user.تفاح = 0
					if (!isNumber(user.موز))
						user.موز = 0
					if (!isNumber(user.برتقال))
						user.برتقال = 0
					if (!isNumber(user.عنب))
						user.عنب = 0

					if (!isNumber(user.ثور))
						user.ثور = 0
					if (!isNumber(user.نمر))
						user.نمر = 0
					if (!isNumber(user.فيل))
						user.فيل = 0
					if (!isNumber(user.ماعز))
						user.ماعز = 0
					if (!isNumber(user.باندا))
						user.باندا = 0
					if (!isNumber(user.تمساح))
						user.تمساح = 0
					if (!isNumber(user.جاموس))
						user.جاموس = 0
					if (!isNumber(user.بقرة))
						user.بقرة = 0
					if (!isNumber(user.قرد))
						user.قرد = 0
					if (!isNumber(user.ضب))
						user.ضب = 0
					if (!isNumber(user.خنزير))
						user.خنزير = 0
					if (!isNumber(user.دجاجة))
						user.دجاجة = 0

					if (!isNumber(user.سلمون))
						user.سلمون = 0
					if (!isNumber(user.حوت))
						user.حوت = 0
					if (!isNumber(user.دولفين))
						user.دولفين = 0
					if (!isNumber(user.قرش))
						user.قرش = 0
					if (!isNumber(user.سمكة))
						user.سمكة = 0
					if (!isNumber(user.سلور))
						user.سلور = 0
					if (!isNumber(user.زبيدي))
						user.زبيدي = 0
					if (!isNumber(user.نيلي))
						user.نيلي = 0
					if (!isNumber(user.سلطعون))
						user.سلطعون = 0
					if (!isNumber(user.سرطان))
						user.سرطان = 0
					if (!isNumber(user.اخطبوط))
						user.اخطبوط = 0
					if (!isNumber(user.حبار))
						user.حبار = 0
					if (!isNumber(user.جمبري))
						user.جمبري = 0

					if (!isNumber(user.طبخ))
						user.طبخ = 0
					if (!isNumber(user.masakrole))
						user.masakrole = 0
					if (!isNumber(user.masakexp))
						user.masakexp = 0
					if (!isNumber(user.masaklevel))
						user.masaklevel = 0

					if (!isNumber(user.بصل))
						user.بصل = 0
					if (!isNumber(user.فلفل))
						user.فلفل = 0
					if (!isNumber(user.شمعة))
						user.شمعة = 0
					if (!isNumber(user.زنجبيل))
						user.زنجبيل = 0
					if (!isNumber(user.صلصة))
						user.صلصة = 0
					if (!isNumber(user.ليمون))
						user.ليمون = 0

					if (!isNumber(user.ستيك))
						user.ستيك = 0
					if (!isNumber(user.كباب))
						user.كباب = 0
					if (!isNumber(user.حميس))
						user.حميس = 0
					if (!isNumber(user.لحم))
						user.لحم = 0
					if (!isNumber(user.ناغت))
						user.ناغت = 0
					if (!isNumber(user.تونه))
						user.تونه = 0
					if (!isNumber(user.seafood))
						user.seafood = 0
					if (!isNumber(user.سوشي))
						user.سوشي = 0
					if (!isNumber(user.محار))
						user.محار = 0
					if (!isNumber(user.روبيان))
						user.روبيان = 0

					if (!isNumber(user.مستشفى))
						user.مستشفى = 0
					if (!isNumber(user.مطعم))
						user.مطعم = 0
					if (!isNumber(user.مصنع))
						user.مصنع = 0
					if (!isNumber(user.منجم))
						user.منجم = 0
					if (!isNumber(user.مرفأ))
						user.مرفأ = 0
					if (!('اسم_المستشفى' in user))
                                                user.اسم_المستشفى = ''
					if (!('اسم_المستشفى' in user))
	       					user.اسم_المستشفى = ''
					if (!('اسم_المصنع' in user))
						user.اسم_المصنع = ''
					if (!('اسم_المنجم' in user))
						user.اسم_المنجم = ''
					if (!('اسم_المرفأ' in user))
						user.اسم_المرفأ = ''
					if (!('openaitxt' in user))
						user.openaitxt = []
					if (!isNumber(user.rumahsakitexp))
						user.rumahsakitexp = 0
					if (!isNumber(user.restoranexp))
						user.restoranexp = 0
					if (!isNumber(user.pabrikexp))
						user.pabrikexp = 0
					if (!isNumber(user.tambangexp))
						user.tambangexp = 0
					if (!isNumber(user.pelabuhanexp))
						user.pelabuhanexp = 0
					if (!isNumber(user.rumahsakitlvl))
						user.rumahsakitlvl = 0
					if (!isNumber(user.restoranlvl))
						user.restoranlvl = 0
					if (!isNumber(user.pabriklvl))
						user.pabriklvl = 0
					if (!isNumber(user.tambanglvl))
						user.tambanglvl = 0
					if (!isNumber(user.pelabuhanlvl))
						user.pelabuhanlvl = 0
					if (!isNumber(user.expired))
						user.expired = 0
					if (!isNumber(user.spamcount))
						user.spamcount = 0
				} else db.data.users[m.sender] = {
					exp: 0,
					limit: 120,
					lastclaim: 0,
					registered: true,
					viewstatus: false,
					name: m.name,
					age: -1,
					regTime: -1,
					afk: -1,
					afkReason: '',
					banned: false,
					permaban: false,
					lastbanned: 0,
					bannedcd: 0,
					warn: 0,
					level: 0,
					role: 'مبتدئ',
					autolevelup: true,

					جيني: 0,
					بطاقة: 0,
					صحة: 100,
					جرعة: 10,
					قمامة: 0,
					خشب: 0,
					حجر: 0,
					خيط: 0,
					حديد: 0,
					رمل: 0,

					زمرد: 0,
					الماس: 0,
					ذهب: 0,
					فولاذ: 0,
					بضاعة: 0,
					قارب: 0,

					شائع: 0,
					commoncount: 0,
					غيرشائع: 0,
					uncommoncount: 0,
					غامض: 0,
					mythiccount: 0,
					اسطوري: 0,
					legendarycount: 0,
					حيوان: 0,
					petcount: 0,
					طعام: 0,

					حصان: 0,
					horseexp: 0,
					قطة: 0,
					catexp: 0,
					ثعلب: 0,
					foxexp: 0,
					كلب: 0,
					dogexp: 0,
					ذئب: 0,
					wolfexp: 0,
					قنطور: 0,
					centaurexp: 0,
					عنقاء: 0,
					phoenixexp: 0,
					تنين: 0,
					dragonexp: 0,
					horselvl: 0,
					catlvl: 0,
					foxlvl: 0,
					doglvl: 0,
					wolflvl: 0,
					centaurlvl: 0,
					phoenixlvl: 0,
					dragonlvl: 0,
					horsehealth: 0,
					cathealth: 0,
					foxhealth: 0,
					doghealth: 0,
					wolfhealth: 0,
					centaurhealth: 0,
					phoenixhealth: 0,
					dragonhealth: 0,

					horselastfeed: 0,
					catlastfeed: 0,
					foxlastfeed: 0,
					doglastfeed: 0,
					wolflastfeed: 0,
					centaurlastfeed: 0,
					phoenixlastfeed: 0,
					dragonlastfeed: 0,
					lastadu: 0,

					درع: 0,
					armordurability: 0,
					سيف: 0,
					sworddurability: 0,
					معول: 0,
					pickaxedurability: 0,
					سنارة: 0,
					fishingroddurability: 0,
					قوس: 0,
					bowdurability: 0,

					lastclaim: 0,
					lastadventure: 0,
					lastfishing: 0,
					lastdungeon: 0,
					lastduel: 0,
					lastmining: 0,
					lasthunt: 0,
					lastlumber: 0,
					lastngojek: 0,
					lastweekly: 0,
					lastmonthly: 0,
					lastbansos: 0,
					lastdagang: 0,
					lastberkebon: 0,
					lastmasak: 0,
					masakcount: 0,
					craftcount: 0,
					adventurecount: 0,
					mancingcount: 0,
					lumbercount: 0,
					ngojekcount: 0,

					بذورمانجو: 0,
					بذورتفاح: 0,
					بذورموز: 0,
					بذوربرتقال: 0,
					بذورعنب: 0,
					مانجو: 0,
					تفاح: 0,
					موز: 0,
					برتقال: 0,
					عنب: 0,

					ثور: 0,
					نمر: 0,
					فيل: 0,
					باندا: 0,
					ماعز: 0,
					تمساح: 0,
					جاموس: 0,
					بقرة: 0,
					قرد: 0,
					ضب: 0,
					خنزير: 0,
					دجاجة: 0,

					سلمون: 0,
					حوت: 0,
					دولفين: 0,
					قرش: 0,
					سمكة: 0,
					سلور: 0,
					زبيدي: 0,
					نيلي: 0,
					سلطعون: 0,
					سرطان: 0,
					اخطبوط: 0,
					حبار: 0,
					جمبري: 0,

					طبخ: 0,
					masakrole: 0,
					masakexp: 0,
					masaklevel: 0,

					بصل: 0,
					فلفل: 0,
					شمعة: 0,
					زنجبيل: 0,
					صلصة: 0,
					ليمون: 0,

					ستيك: 0,
					كباب: 0,
					حميس: 0,
					لحم: 0,
					ناغت: 0,
					تونه: 0,
					seafood: 0,
					سوشي: 0,
					محار: 0,
					روبيان: 0,

					مستشفى: 0,
					مطعم: 0,
					مصنع: 0,
					منجم: 0,
					مرفأ: 0,
					اسم_المستشفى: '',
					اسم_المطعم: '',
					اسم_المصنع: '',
					اسم_المنجم: '',
					اسم_المرفأ: '',
					openaitxt: [],
					rumahsakitexp: 0,
					restoranexp: 0,
					pabrikexp: 0,
					tambangexp: 0,
					pelabuhanexp: 0,
					rumahsakitlvl: 0,
					restoranlvl: 0,
					pabriklvl: 0,
					tambanglvl: 0,
					pelabuhanlvl: 0,
					expired: 0,
					spamcount: 0,
				}
				let akinator = db.data.users[m.sender].akinator
				if (typeof akinator !== 'object')
					db.data.users[m.sender].akinator = {}
				if (akinator) {
					if (!('sesi' in akinator))
						akinator.sesi = false
					if (!('server' in akinator))
						akinator.server = null
					if (!('frontaddr' in akinator))
						akinator.frontaddr = null
					if (!('session' in akinator))
						akinator.session = null
					if (!('signature' in akinator))
						akinator.signature = null
					if (!('question' in akinator))
						akinator.question = null
					if (!('progression' in akinator))
						akinator.progression = null
					if (!('step' in akinator))
						akinator.step = null
					if (!('soal' in akinator))
						akinator.soal = null
				} else db.data.users[m.sender].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}
			}
			let chat = db.data.chats[m.chat]
			if (m.chat.endsWith('@g.us')) {
				if (typeof chat !== 'object')
					db.data.chats[m.chat] = {}
				if (chat) {
					if (!('presence' in chat))
						chat.presence = false
					if (!('isBanned' in chat))
						chat.isBanned = false
					if (!('permaBan' in chat))
						chat.permaBan = false
					if (!('welcome' in chat))
						chat.welcome = true
					if (!('detect' in chat))
						chat.detect = false
					if (!('sWelcome' in chat))
						chat.sWelcome = ''
					if (!('sBye' in chat))
						chat.sBye = ''
					if (!('sPromote' in chat))
						chat.sPromote = ''
					if (!('sDemote' in chat))
						chat.sDemote = ''
					if (!('openaitxt' in chat))
						chat.openaitxt = []
					if (!('delete' in chat))
						chat.delete = true
					if (!('antiLink' in chat))
						chat.antiLink = false
					if (!('antivirus' in chat))
						chat.antivirus = false
					if (!('nsfw' in chat))
						chat.nsfw = false
					if (!('pdf' in chat))
						chat.pdf = false
					if (!('game' in chat))
						chat.game = false
					if (!('simi' in chat))
						chat.simi = false
					if (!('lastsimi' in chat))
						chat.lastsimi = false
					if (!('viewonce' in chat))
						chat.viewonce = false
					if (!('antiToxic' in chat))
						chat.antiToxic = false
					if (!isNumber(chat.joindate))
						chat.joindate = 0
					if (!isNumber(chat.joincd))
						chat.joincd = 0
					if (!isNumber(chat.expired))
						chat.expired = 0
					if (!isNumber(chat.lastmute))
						chat.lastmute = 0
					if (!isNumber(chat.mutecd))
						chat.mutecd = 0
					if (!isNumber(chat.spamcount))
						chat.spamcount = 0
				} else db.data.chats[m.chat] = {
					presence: false,
					isBanned: false,
					permaBan: false,
					welcome: true,
					detect: false,
					sWelcome: '',
					sBye: '',
					sPromote: '',
					sDemote: '',
					openaitxt: [],
					delete: true,
					antiLink: false,
					antivirus: false,
					nsfw: false,
					pdf: false,
					game: false,
					simi: false,
					lastsimi: false,
					viewonce: false,
					antiToxic: true,
					joindate: 0,
					joincd: 0,
					expired: 0,
					lastmute: 0,
					mutecd: 0,
					spamcount: 0,
				}
				let akinator = db.data.chats[m.chat].akinator
				if (typeof akinator !== 'object')
					db.data.chats[m.chat].akinator = {}
				if (akinator) {
					if (!('sesi' in akinator))
						akinator.sesi = false
					if (!('server' in akinator))
						akinator.server = null
					if (!('frontaddr' in akinator))
						akinator.frontaddr = null
					if (!('session' in akinator))
						akinator.session = null
					if (!('signature' in akinator))
						akinator.signature = null
					if (!('question' in akinator))
						akinator.question = null
					if (!('progression' in akinator))
						akinator.progression = null
					if (!('step' in akinator))
						akinator.step = null
					if (!('soal' in akinator))
						akinator.soal = null
				} else db.data.chats[m.chat].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}	
			}
			let settings = db.data.settings[this.user.jid]
			if (typeof settings !== 'object') db.data.settings[this.user.jid] = {}
			if (settings) {
				if (!('self' in settings)) settings.self = false
				if (!('autoread' in settings)) settings.autoread = false
				if (!('restrict' in settings)) settings.restrict = false
			} else db.data.settings[this.user.jid] = {
				self: false,
				autoread: false,
				restrict: false
			}
			let datas = db.data.datas
			if (typeof datas !== 'object') db.data.datas = {}
			if (datas) {
				if (!('packname' in datas)) datas.packname = ''
				if (!('author' in datas)) datas.author = ''
				if (!('linkgc' in datas)) datas.linkgc = ''
				if (!('imgbb' in datas)) datas.imgbb = ''
				if (!('spamcountreset' in datas)) datas.spamcountreset = 0
				if (!('spamcountgcreset' in datas)) datas.spamcountgcreset = 0
				if (!('spamlistmsg' in datas)) datas.spamlistmsg = null
				if (!('spamlistgcmsg' in datas)) datas.spamlistgcmsg = null
				if (!('anticall' in datas)) datas.anticall = false
				if (!('teksdonasi' in datas)) datas.teksdonasi = ''
				if (!('tekssewa' in datas)) datas.tekssewa = ''
				if (!('teksjadibot' in datas)) datas.teksjadibot = ''
				if (!('tekstopup' in datas)) datas.tekstopup = ''
				if (!('linkgc' in datas)) datas.linkgc = ''
				if (!('prems' in datas)) datas.prems = [{user: '', date: 0}]
				if (!('api' in datas)) datas.api = []
				if (!('rowner' in datas)) datas.rowner = []
				if (!('owner' in datas)) datas.owner = []
				if (!('store' in datas)) datas.store = []
				if (!('storestatus' in datas)) datas.storestatus = {}
				if (!('menfess' in datas)) datas.menfess = {}
				if (!('listgc' in datas)) datas.listgc = []
				if (!('openaikey' in datas)) datas.openaikey = []
				if (!('menfesschat' in datas)) datas.menfesschat = {}
				if (!('menfesschatcd' in datas)) datas.menfesschatcd = 0
			} else db.data.datas = {
				packname: '',
				author: '',
				linkgc: '',
				imgbb: '',
				wgempa: '',
				spamcountreset: 0,
				spamcountgcreset: 0,
				spamlistmsg : null,
				spamlistgcmsg: null,
				anticall: false,
				teksdonasi: '',
				tekssewa: '',
				teksjadibot: '',
				tekstopup: '',
				prems: [{user: '', date: 0}],
				api: [],
				rowner: [],
				owner: [],
				store: [],
				storestatus: {},
				menfess: {},
				listgc: [],
				openaikey: [],
				menfesschat: {},
				menfesschatcd: 0,
			}
		} catch (e) {
			console.error(e)
		}

		const isMods = global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isROwner = isMods || [this.decodeJid(this.user.id), ...db.data.datas.rowner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isOwner = isROwner || m.fromMe || db.data.datas.owner.map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isPrems = isOwner || db.data.datas.prems.map(v => v.user).includes(m.sender)

		if (opts['nyimak'])
			return
		if (!isROwner && opts['self'])
			return
		if (opts['pconly'] && m.chat.endsWith('g.us'))
			return
		if (opts['gconly'] && !m.chat.endsWith('g.us') && !isPrems)
			return
		if (opts['swonly'] && m.chat !== 'status@broadcast')
			return
		if (typeof m.text !== 'string')
			m.text = ''

		if (opts['queque'] && m.text && !m.fromMe && !(isMods || isPrems)) {
			const id = m.id
			this.msgqueque.add(id)
			await this.msgqueque.waitQueue(id)
		}

		if (m.isBaileys)
			return
		m.exp += Math.ceil(Math.random() * 10)

		let usedPrefix
		let _user = db.data?.users?.[m.sender]

		const groupMetadata = (m.isGroup ? await Connection.store.fetchGroupMetadata(m.chat, this.groupMetadata) : {}) || {}
		const participants = (m.isGroup ? groupMetadata.participants : []) || []
		const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
		const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
		const isRAdmin = user?.admin == 'superadmin' || false
		const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
		const isBotAdmin = bot?.admin || false // Are you Admin?

		const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
		for (let name in plugins) {
			let plugin = plugins[name]
			if (!plugin)
				continue
			if (plugin.disabled)
				continue
			const __filename = join(___dirname, name)
			if (typeof plugin.all === 'function') {
				try {
					await plugin.all.call(this, m, {
						chatUpdate,
						__dirname: ___dirname,
						__filename
					})
				} catch (e) {
					// if (typeof e === 'string') continue
					console.error(e)
					if (db.data.datas.rowner.length > 0) {
						for (let [jid] of db.data.datas.rowner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
							let data = (await this.onWhatsApp(jid))[0] || {}
							if (data.exists)
								m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
						}
					}
				}
			}
			if (!opts['restrict'])
				if (plugin.tags && plugin.tags.includes('admin')) {
					// global.dfail('restrict', m, this)
					continue
				}
			const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
			let match = (_prefix instanceof RegExp ? // RegExp Mode?
				[[_prefix.exec(m.text), _prefix]] :
				Array.isArray(_prefix) ? // Array?
					_prefix.map(p => {
						let re = p instanceof RegExp ? // RegExp in Array?
							p :
							new RegExp(str2Regex(p))
						return [re.exec(m.text), re]
					}) :
					typeof _prefix === 'string' ? // String?
						[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
						[[[], new RegExp]]
			).find(p => p[1])
			if (typeof plugin.before === 'function') {
				if (await plugin.before.call(this, m, {
					match,
					conn: this,
					participants,
					groupMetadata,
					user,
					bot,
					isROwner,
					isOwner,
					isRAdmin,
					isAdmin,
					isBotAdmin,
					isPrems,
					chatUpdate,
					__dirname: ___dirname,
					__filename
				}))
					continue
			}
			if (typeof plugin !== 'function')
				continue
			if ((usedPrefix = (match[0] || '')[0])) {
				let noPrefix = m.text.replace(usedPrefix, '')
				let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
				args = args || []
				let _args = noPrefix.trim().split` `.slice(1)
				let text = _args.join` `
				command = (command || '').toLowerCase()
				let fail = plugin.fail || global.dfail // When failed
				let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
					plugin.command.test(command) :
					Array.isArray(plugin.command) ? // Array?
						plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
							cmd.test(command) :
							cmd === command
						) :
						typeof plugin.command === 'string' ? // String?
							plugin.command === command :
							false

				if (!isAccept)
					continue
				m.plugin = name.replace('plugins\\','')
				if (m.chat in db.data.chats || m.sender in db.data.users) {
					let chat = db.data.chats[m.chat]
					let user = db.data.users[m.sender]
					if (m.plugin != 'owner\\unbanchat.js' && chat?.isBanned)
						return // Except this
					if (m.plugin != 'owner\\unbanuser.js' && user?.banned)
						return
				}
				if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
					fail('owner', m, this)
					continue
				}
				if (plugin.rowner && !isROwner) { // Real Owner
					fail('rowner', m, this)
					continue
				}
				if (plugin.owner && !isOwner) { // Number Owner
					fail('owner', m, this)
					continue
				}
				if (plugin.mods && !isMods) { // Moderator
					fail('mods', m, this)
					continue
				}
				if (plugin.premium && !isPrems && !m.isGroup) { // Premium
					fail('premium', m, this)
					continue
				}
				if (plugin.nsfw && m.isGroup && !db.data.chats[m.chat].nsfw) {
					fail('nsfw', m, this)
					continue
				}
				if (plugin.game && m.isGroup && !db.data.chats[m.chat].game) {
					fail('game', m, this)
					continue
				}
				if (plugin.group && !m.isGroup) { // Group Only
					fail('group', m, this)
					continue
				} else if (plugin.botAdmin && !isBotAdmin) { // You Admin
					fail('botAdmin', m, this)
					continue
				} else if (plugin.admin && !isAdmin) { // User Admin
					fail('admin', m, this)
					continue
				}
				if (plugin.private && m.isGroup) { // Private Chat Only
					fail('private', m, this)
					continue
				}
				if (plugin.register == true && _user.registered == false) { // Butuh daftar?
					fail('unreg', m, this)
					continue
				}
				m.isCommand = true
				_user.spamcount += 1
				let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
				if (xp > 200)
					m.reply('Ngecit -_-') // Hehehe
				else
					m.exp += xp
				if (!isPrems && plugin.limit && db.data.users[m.sender].limit < plugin.limit * 1) {
					this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
					continue // Limit habis
				}
				if (plugin.level > _user.level) {
					this.reply(m.chat, `المستوى اللي تحتاجه عشان تستخدم الامر هو: ${plugin.level} \nمستواك الحين ${_user.level}`, m)
					continue // If the level has not been reached
				}
				let extra = {
					match,
					usedPrefix,
					noPrefix,
					_args,
					args,
					command,
					text,
					conn: this,
					participants,
					groupMetadata,
					user,
					bot,
					isROwner,
					isOwner,
					isRAdmin,
					isAdmin,
					isBotAdmin,
					isPrems,
					chatUpdate,
					__dirname: ___dirname,
					__filename
				}
				try {
					await plugin.call(this, m, extra)
					if (!isPrems)
						m.limit = m.limit || plugin.limit || false
				} catch (e) {
					// Error occured
					m.error = e
					console.error(e)
					if (e) {
						let text = format(e)
						for (let key of Object.values(global.APIKeys))
							text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
						if (e.name)
							if (db.data.datas.rowner.length > 0) {
								for (let [jid] of db.data.datas.rowner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
									let data = (await this.onWhatsApp(jid))[0] || {}
									if (data.exists)
										m.reply(`*Plugin:* ${m.plugin}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
								}
							}
						m.reply(text)
					}
				} finally {
					// m.reply(util.format(_user))
					if (typeof plugin.after === 'function') {
						try {
							await plugin.after.call(this, m, extra)
						} catch (e) {
							console.error(e)
						}
					}
				}
				break
			}
		}
	} catch (e) {
		console.error(e)
	} finally {
		if (m.isGroup) {
			//auto typing / record
			if (db.data.chats[m.chat].presence) await this.sendPresenceUpdate(['composing', 'recording'].getRandom(), m.chat) 
		}
		if (opts['queque'] && m.text) {
			const id = m.id
			this.msgqueque.unqueue(id)
		}
		//console.log(db.data.users[m.sender])
		let user, stats = db.data.stats
		if (m) {
			if (m.sender && (user = db.data.users[m.sender])) {
				user.exp += m.exp
				user.limit -= m.limit * 1
			}

			let stat
			if (m.plugin) {
				let now = +new Date
				if (m.plugin in stats) {
					stat = stats[m.plugin]
					if (!isNumber(stat.total))
						stat.total = 1
					if (!isNumber(stat.success))
						stat.success = m.error != null ? 0 : 1
					if (!isNumber(stat.last))
						stat.last = now
					if (!isNumber(stat.lastSuccess))
						stat.lastSuccess = m.error != null ? 0 : now
				} else
					stat = stats[m.plugin] = {
						total: 1,
						success: m.error != null ? 0 : 1,
						last: now,
						lastSuccess: m.error != null ? 0 : now
					}
				stat.total += 1
				stat.last = now
				if (m.error == null) {
					stat.success += 1
					stat.lastSuccess = now
				}
			}
		}

		try {
			if (!opts['noprint']) await printMessage(m, this)
		} catch (e) {
			console.log(m, m.quoted, e)
		}
		if (opts['autoread'])
			await this.readMessages([m.key]).catch(() => { }) // WARNING : easy to get banned

	}
}

/**
 * Handle groups participants update
 * @this {import('./lib/connection').Socket}
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
	if (opts['self']) return
	if (this.isInit) return
	if (db.data == null) await loadDatabase()
}

/**
 * Handle groups update
 * @this {import('./lib/connection').Socket}
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
	if (opts['self'])
		return
	for (const groupUpdate of groupsUpdate) {
		const id = groupUpdate.id
		if (!id) continue
		let chats = db.data.chats[id], text = ''
		if (!chats?.detect) continue
		if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || Connection.conn.sDesc || '```تم تغيير وصف القروب الى```\n@desc').replace('@desc', groupUpdate.desc)
		if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || Connection.conn.sSubject || '```تم تغيير اسم القروب الى```\n@subject').replace('@subject', groupUpdate.subject)
		if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || Connection.conn.sIcon || '```تم تغيير افتار القروب ```').replace('@icon', groupUpdate.icon)
		if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || Connection.conn.sRevoke || '```تم تغيير رابط القروب```\n@revoke').replace('@revoke', groupUpdate.revoke)
		if (!text) continue
		await this.sendMessage(id, { text, mentions: this.parseMention(text) })
	}
}

/**
 * @this {import('./lib/connection').Socket}
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['messages.delete']} message 
 */
export async function deleteUpdate(message) {

	if (Array.isArray(message.keys) && message.keys.length > 0) {
		const tasks = await Promise.allSettled(message.keys.map(async (key) => {
			if (key.fromMe) return
			const msg = this.loadMessage(key.remoteJid, key.id) || this.loadMessage(key.id)
			if (!msg || !msg.message) return
			let chat = db.data.chats[key.remoteJid]
			if (!chat || chat.delete) return

			// if message type is conversation, convert it to extended text message because if not, it will throw an error
			const mtype = getContentType(msg.message)
			if (mtype === 'conversation') {
				msg.message.extendedTextMessage = { text: msg.message[mtype] }
				delete msg.message[mtype]
			}

			const participant = msg.participant || msg.key.participant || msg.key.remoteJid
			await this.reply(key.remoteJid, `Terdeteksi @${participant.split`@`[0]} telah menghapus pesan\nUntuk mematikan fitur ini, ketik\n*.off antidelete*`, msg, { mentions: [participant] })
			return await this.copyNForward(key.remoteJid, msg).catch(e => console.log(e, msg))
		}))
		tasks.map(t => t.status === 'rejected' && console.error(t.reason))
	}
}


global.dfail = (type, m, conn) => {
	let msg = {
		rowner: `*「لغومونريونغ فقط」*`,
		owner: `*「لغومونريونغ فقط」*`,
		mods: `*「لغومونريونغ ومساعديه」*`,
		premium: `*「لازم تكون بريميوم」*\n\n*`,
		group: `*「خاص القروبات」*`,
		private: `*「يشتغل بالخاص فقط」*`,
		admin: `*「للمشرفين بس」*`,
		nsfw: `[ *NSFW * ]`,
		game: '```「 كلم المالك يشغل مود الالعاب 」```',
		botAdmin: `*「لازم اكون مشرف」*`,
		unreg: '',
		restrict: 'معطلة.'
	}[type]
	if (msg) return m.reply(msg)
}

let file = Helper.__filename(import.meta.url, true)
watchFile(file, async () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'handler.js'"))
	if (Connection.reload) console.log(await Connection.reload(await Connection.conn))
})
