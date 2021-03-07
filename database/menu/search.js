const search = (prefix, botName, ownerName) => {
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
┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Enviar Nome Anime e Cena Curta
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <consulta>
   ┃ *Desc* : Pesquisar vídeo no YouTube
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Vídeo de tendências de pesquisa no Twitter
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.search = search
