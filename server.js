const timezone = require(moment-timezone);

bot.on('ready', () => {

    console.log

    function botStatus() {
        let waktu = bot.channels.find('id', '1023896878011646014')
        waktu.setName(`${timezone().tz("Asia/Jakarta").format("🕘 HH:mm [WIB]") + " "}`)
        let waktu1 = bot.channels.find('id', '1023896925583462441')
        waktu1.setName(`${timezone().tz("Asia/Irkutsk").format("🕘 HH.mm [WITA]") + " "}`)
        let waktu2 = bot.channels.find('id', '1023896973952163890')
        waktu2.setName(`${timezone().tz("Asia/Jayapura").format("🕘 HH.mm [WIT]") + " "}`)
    }; setInterval(botStatus, 10000)
});
