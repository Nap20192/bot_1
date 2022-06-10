const TelegramBot = require("node-telegram-bot-api")

const token = '5362894527:AAGZpTjDwjkLW4qYgi7GJYMcAo98A1694NI'
const bot = new TelegramBot(token, {polling: true})
const chats = {}
bot.setMyCommands([
    {command: '/start',description:'ddd'},
    {command:'/info', description:'aaa'},
    {command:'/game', description:'game'}
])
const gO = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'1',callback_data:'1'},{text:'0',callback_data:'0'}],
            [{text:'2',callback_data:'2'}],
            [{text:'3',callback_data:'3'}],
            [{text:'4',callback_data:'4'}],
            [{text:'5',callback_data:'5'}],
            [{text:'6',callback_data:'6'}],
            [{text:'7',callback_data:'7'}],
            [{text:'8',callback_data:'8'}],
            [{text:'9',callback_data:'9'}],
            [{text:'10',callback_data:'10'}]
        ]
    })
}

bot.on('message', async msg=>{
const text = msg.text
const chatId = msg.chat.id
try{
    if(text==='/start'){
  await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/dc7/a36/dc7a3659-1457-4506-9294-0d28f529bb0a/1.webp')
   await bot.sendMessage(chatId,'hello')
}
if (text==='/info') {
    return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
}
if (text==='/game') {
    const a = Math.floor(Math.random()*10)
    chats[chatId] = a
    return bot.sendMessage(chatId, `hgf`,gO);
}
return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)');
}catch(e){
    await bot.sendMessage(chatId,'ffff')
}
})
bot.on('callback_query', async msg=>{
    const data = msg.data
    const chatId = msg.message.chat.id
    if(data === chats[chatId]){ 
        return bot.sendMessage(chatId,`${data}`)
    }else{
        return bot.sendMessage(chatId,`dddd${data}`)
    }

})


