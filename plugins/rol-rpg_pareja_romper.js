
let handler = async (m, { conn }) => {
  var ayg = global.db.data.users[m.sender]
  var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`No tienes pareja.`,m)
  }
  if (typeof beb == "undefined"){
    conn.reply(m.chat,`rompió con éxito con @${global.db.data.users[m.sender].pasangan.split('@')[0]} ${conn.getName(m.beb)}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    conn.reply(m.chat,`rompió con éxito con @${global.db.data.users[m.sender].pasangan.split('@')[0]} ${conn.getName(m.beb)}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`No tienes pareja.`,m)
  }
}

handler.command = /^(romper)$/i
handler.group = true

export default handler