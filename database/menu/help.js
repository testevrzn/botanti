const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 USER INFO 〉*
   ╽
   ┠≽ *Nome* : ${pushname}
   ┠≽ *XP* : ${reqXp}
   ┠≽ *Grana* : ${uangku}
   ┠≽ *Registrado : ✔️
   ╿
┯┷ *〈 BOT INFO 〉*
╽
┠≽ *Prefix* : 「  ${prefix}  」
┠≽ *Criador* : ${ownerName}
┠≽ *Version* : 0.0.5
╿
┷┯ *〈 MENU 〉*
   ┠≽ *${prefix}logomakermenu*
   ┠≽ *${prefix}imagemakermenu*
   ┠≽ *${prefix}stickermakermenu*
   ┠≽ *${prefix}searchmenu*
   ┠≽ *${prefix}educationmenu*
   ┠≽ *${prefix}kerangmenu*
   ┠≽ *${prefix}downloadermenu*
   ┠≽ *${prefix}mememenu*
   ┠≽ *${prefix}groupmenu*
   ┠≽ *${prefix}soundmenu*
   ┠≽ *${prefix}musicmenu*
   ┠≽ *${prefix}islammenu*
   ┠≽ *${prefix}stalkmenu*
   ┠≽ *${prefix}wibumenu*
   ┠≽ *${prefix}18+menu*
   ┠≽ *${prefix}funmenu*
   ┠≽ *${prefix}todmenu*
   ┠≽ *${prefix}informationmenu*
   ┠≽ *${prefix}stayonscreenmenu*
   ┠≽ *${prefix}xpmenu*
   ┠≽ *${prefix}limitmenu*
   ┠≽ *${prefix}ownermenu*
   ┠≽ *${prefix}othermenu*
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.help = help
