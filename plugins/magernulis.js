let fetch = require('node-fetch')
let handler = async (m, { command, conn, args, usedPrefix }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} Bear Ganteng`
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/nulis?apikey=${bearkey}&text=${args[0]}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != true) throw json
conn.sendFile(m.chat, json.result, 'eror.jpg', `Ni kak udah jadi hehe:v\n${footer}`, m, 0, { thumbnail: await (await fetch(json.result)).buffer() })
}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['nulis']

handler.command = /^magernulis[1-6]?$/i

handler.limit = true

module.exports = handler
