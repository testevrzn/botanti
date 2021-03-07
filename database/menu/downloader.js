const downloader = (prefix, botName, ownerName) => {
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
┷┯ *〈 DOWNLOADER 〉*
   ╽
   ┠≽ *${prefix}pinterest* <consulta>
   ┃ *Desc* : Baixar imagem do Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : Baixe vídeo do Youtube para mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linksyt>
   ┃ *Desc* : Baixe vídeo do Youtube
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : Baixe vídeo do TikTok
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.downloader = downloader
