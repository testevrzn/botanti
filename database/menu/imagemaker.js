const imagemaker = (prefix, botName, ownerName) => {
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
┷┯ *〈 IMAGE MAKER 〉*
   ╽
   ┠≽ *${prefix}bpink* <texto>
   ┃ *Desc* : Faça uma imagem BlackPink
   ┠──────────────╼
   ┠≽ *${prefix}snowwrite* <texto|texto>
   ┃ *Desc* : Faça a imagem do Snowwrite
   ┠──────────────╼
   ┠≽ *${prefix}3dtext* <texto>
   ┃ *Desc* : Criar imagem de texto 3D
   ┠──────────────╼
   ┠≽ *${prefix}firetext* <texto>
   ┃ *Desc* :  Cria Imagem de Texto Fire
   ┠──────────────╼
   ┠≽ *${prefix}glitch* <texto|texto>
   ┃ *Desc* : Criar Imagem Glitch
   ┠──────────────╼
   ┠≽ *${prefix}shadow* <texto>
   ┃ *Desc* : Criar Imagem Shadow 
   ┠──────────────╼
   ┠≽ *${prefix}burnpaper* <text>
   ┃ *Desc* : Faca Imagem de Queimar Papel 
   ┠──────────────╼
   ┠≽ *${prefix}coffee* <texto>
   ┃ *Desc* : Imagem de fazer café
   ┠──────────────╼
   ┠≽ *${prefix}lovepaper* <texto>
   ┃ *Desc* : Imagem de Make Love Papper
   ┠──────────────╼
   ┠≽ *${prefix}woodblock* <texto>
   ┃ *Desc* : Imagem de Bloco de Madeira
   ┠──────────────╼
   ┠≽ *${prefix}qowheart* <texto>
   ┃ *Desc* : Faça imagem dos corações de madeira
   ┠──────────────╼
   ┠≽ *${prefix}mutgrass* <texto>
   ┃ *Desc* : Faça uma mensagem sob a imagem da grama
   ┠──────────────╼
   ┠≽ *${prefix}undergocean* <texto>
   ┃ *Desc* : Faça Imagem Underground Ocean
   ┠──────────────╼
   ┠≽ *${prefix}woodenboards* <texto>
   ┃ *Desc* : Imagem de Tábuas de Madeira
   ┠──────────────╼
   ┠≽ *${prefix}wolfmetal* <texto>
   ┃ *Desc* : Imagem de fazer Wolf Metal
   ┠──────────────╼
   ┠≽ *${prefix}metalictglow* <texto>
   ┃ *Desc* : Imagem de tornar o texto metálico brilhante
   ┠──────────────╼
   ┠≽ *${prefix}8bit* <texto|texto>
   ┃ *Desc* : Imagem de 8 bits
   ┠──────────────╼
   ┠≽ *${prefix}herrypotter* <texto>
   ┃ *Desc* : Faça a imagem de Harry Potter
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.imagemaker = imagemaker
