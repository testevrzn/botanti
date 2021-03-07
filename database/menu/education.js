const education = (prefix, botName, ownerName) => {
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
┷┯ *〈 EDUCAÇÃO 〉*
   ╽
   ┠≽ *${prefix}wiki* <consulta>
   ┃ *Desc* : Pesquisa de acordo com a Wikipedia [indo]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <consulta>
   ┃ *Desc* : Pesquisa de acordo com a Wikipedia [inglês]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <texto>
   ┃ *Desc* : Escreva um texto no livro
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : Envie uma cotação aleatória
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : Envie uma cotação aleatória 2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <Sonhe>
   ┃ *Desc* : Envie uma interpretação do sonho
   ┠──────────────╼
   ┠≽ *${prefix}translate* <língua_código>|<texto>
   ┃ *Desc* : Traduzindo uma palavra
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <nome>
   ┃ *Desc* : Interpretar nomes
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.education = education
