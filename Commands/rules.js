module.exports = {
    name: 'rules',
    description: "embeded rules",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ccff00')
        .setTitle('RULES')
        .setDescription('Server Rules')
        .addFields(
            {name: '1) Respect Everyone', value:('Treat everyone with the same amount of respect, even if you do not agree with them or like them. This includes but is not limited to making jokes at the expense of others, disregarding peoples feelings, witch hunting, swearing at others, or personal attacks.')},
            {name: '2) No hate speech or discrimination', value: ('This includes any derogatory terms or offensive terms and slurs. As well as any targeted words at someones race, gender identity, sexuality, political views, age, religion, national origin, and disabilities')},
            {name: '3) No spam', value:('Lyric spam, character spam (including caps lock), image spam, message spam, @mention spam, or spam in VC is not allowed.')},
            {name: '4) No NSFW content', value:('No NSFW content is allowed unless in areas that specify otherwise. This means no mention or showing of gore, violence, or overly promiscuous content.')},
            {name: '5) Use the appropriate channels', value:('Use the appropriate channels or you will be warned/muted/banned accordingly.')},
            {name: '6) Comply by Discords Terms of Service and Guidelines', value:('Do not break the rules outlined by Discords official Terms of Service and/or Guidelines')},
            {name: '7) No advertising', value:('Please do NOT advertise other sites or Discord servers. The first time will be a warning.')},
            {name: '8) No begging', value:('No asking for money or items. Instant ban if reported or caught.')},
            {name: '9) HAVE FUN BEING PART OF THIS COMMUNITY', value:('HAVE FUN AND ENJOY')},
        )
        .setImage('https://th.bing.com/th/id/OIP.J7EoaEH_MR2c2XXepB9SnAHaE3?w=246&h=180&c=7&o=5&dpr=1.5&pid=1.7')

        message.channel.send(newEmbed)
    }
}   