const logomaker = (prefix, botName, ownerName) => {
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
┷┯ *〈 LOGO MAKER 〉*
   ╽
   ┠≽ *${prefix}ninjalogo* <texto|texto>
   ┃ *Desc* : Criar Ninja Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf* <texto|texto>
   ┃ *Desc* : Criar Wolf Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf2* <texto|texto>
   ┃ *Desc* : Criar Wolf Logo2
   ┠──────────────╼
   ┠≽ *${prefix}phlogo* <texto|texto>
   ┃ *Desc* : Criar PornHub Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo* <texto>
   ┃ *Desc* : Criar Neon Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo2* <texto>
   ┃ *Desc* : Criar Neon Logo2
   ┠──────────────╼
   ┠≽ *${prefix}lionlogo* <texto|texto>
   ┃ *Desc* : Criar Lion Logo
   ┠──────────────╼
   ┠≽ *${prefix}jokerlogo* <texto>
   ┃ *Desc* : Criar Joker Logo
   ┠──────────────╼
   ┠≽ *${prefix}pubglogo* <texto|texto>
   ┃ *Desc* : Criar PUBG Logo
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.logomaker = logomaker
