module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been kicked`)
        
        }else{
            message.channel.send('No member tagged')
        }
        
        }
    }