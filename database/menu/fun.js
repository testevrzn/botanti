const fun = (prefix, botName, ownerName) => {
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
┃ *Desc* : Show Bot Details
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
┷┯ *〈 DIVERSÃO 〉*
   ╽
   ┠≽ *${prefix}alay* <texto>
   ┃ *Desc* : Mudando Palavras em Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Envie um Escravo do Amor Aleatório
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Envie uma verdade aleatória
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Envie um desafio aleatório
   ┠──────────────╼
   ┠≽ *${prefix}simi* <texto>
   ┃ *Desc* : Fale com Simi
   ┠──────────────╼
   ┠≽ *${prefix}say* <texto>
   ┃ *Desc* : Ditado:v
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.fun = fun
