const sound = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 SOBRE 〉*
╽
┠≽ *${prefix}info* (erro)
┃ *Desc* : Mostrar Detalhes Bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar Usuario Bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (erro)
┃ *Desc* : Mostrar Todos Os Usuarios Batepapo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar Velocidade Bot Conexao
┠──────────────╼
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 TEXTO PARA O DISCURSO 〉*
   ╽
   ┠≽ *${prefix}tts* <código de linguagem|texto>
   ┃ *Desc* : Texto para voz do Google
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.sound = sound
