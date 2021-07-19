module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been banned`)
            
        }else{
            message.channel.send('No member tagged')
        }

        }
    }
