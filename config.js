const fs = require("fs")
const chalk = require("chalk")

//Others
global.owner = ['60105081734','60105081734']
global.nomerowner = "60105081734"
global.ownername = "Yss*hasif"
global.namebot = "REM SANN"
global.sessionName = "session"
global.log0 = fs.readFileSync("./media/image/thumb.png")
global.qris = fs.readFileSync("./media/image/qris.png")
global.fonts = "© Created By Yss*Hasif

//Exif
global.packname = "REM SANN"
global.author = "By Yss*Hasif"

//Message
global.mess = {
success: '*Success!*',
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
bot: '*Fitur Khusus Pengguna Nomor Bot*',
wait: '*Silahkan Menunggu!*',
ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}

//Pengguna
global.rkyt = []

//Limit
global.limitawal = {
premium: "Infinity",
free: 20
}

//Pembatas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})