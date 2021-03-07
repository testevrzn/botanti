const limit = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar velocidade do bot de conexao
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 LIMITE 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Verifique Seus Limites
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Verifique Seu Dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Limite Compra
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}
--------------------------------
Note: Voce pode comprar limites coletando dinheiro primeiro. Verifique seu dinheiro digitando comandos *${prefix}bal* , harga 1 limit = 1000 uang.
Note2: Voce pode arrecadar dinheiro de uma maneira chat com amigos em um grupo ou voce pode subir level.`
}
exports.limit = limit
