const group = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Versao* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (erro)
┃ *Desc* : Mostrar Detalhes Do Bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar Usuario Bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (erro)
┃ *Desc* : Mostrar Todos Os Usuarios De Batepapo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar Velocidade Bot De Conexao
┠──────────────╼
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar Bug Ao Dono Do Bot
╿
┷┯ *〈 GRUPO 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Abrir Grupo
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Fechar Grupo
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promova Pessoas ser Admins Grupo
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Rebaixar Pessoas to be Members Group
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mencione Todos Membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mencione Todos Os Membros
   ┠──────────────╼
   ┠≽ *${prefix}add* <559885018147>
   ┃ *Desc* : Add Membros
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Kick Membro Grupo
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Mostrar Administradores De Grupo De Lista
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Mostrar Link Do Grupo
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Diga ao bot para sair Deste grupo
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Ativando/ Desativando a Bemvinda Feature
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Ativando / Desativando a NSFW Feature
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Excluir Mensagem Bot
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Ativando / Desativando o Simih Feature
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mencionar Voce
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Mostra Quem Proprietario Grupo
   ┠──────────────╼
   ┠≽ *${prefix}antilinkgroup* <1/0>
   ┃ *Desc* : Ativando / Desativando a Anti Link Destaque
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.group = group
