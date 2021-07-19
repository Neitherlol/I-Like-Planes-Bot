module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){

        if(message.member.roles.cache.has('866022941203103809')){
            message.channel.send('pong');

        } else {
            message.channel.send('You dont have the permitions to do that');
            
        }
        
    }
}