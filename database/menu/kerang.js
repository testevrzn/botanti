const kerang = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (erro)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (erro)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 KERANG AJAIB 〉*
   ╽
   ┠≽ *${prefix}apakah* <opcional>
   ┃ *Desc* : Perguntar é
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <opcional>
   ┃ *Desc* : Ask Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <opcional>
   ┃ *Desc* : Ask When
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitindo personagens ao acaso
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Envio aleatório de hobbies
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Quão bonito
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Que bonito
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.kerang = kerang
