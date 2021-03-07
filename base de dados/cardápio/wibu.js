const wibu = (prefix, botName, ownerName) => {
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
┷┯ *〈 WEEBOO 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Pesquisar Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Imagem aleatória de Pokémon
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Imagem Random Loli
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Imagem Waifu Aleatória
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Imagem Random Anime
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Imagem Husbu Aleatória
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Imagem Husbu2 Aleatória
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Enviar nome do anime e cena curta
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Imagem Random Nekonime
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.wibu = wibu
