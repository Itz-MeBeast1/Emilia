const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'bgmlist', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
r_text[0] = "https://i.imgur.com/6fTLw6U.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔═════════════════❍
║-ʙᴀᴅʙᴏᴛᴢ 亗!!
║╾ ɴᴜᴍʙᴇʀ : @918593079460
║▬▭▬▭▬▭▬▭▬▭
║╾ ᴄʀᴇᴀᴛᴏʀ : wa.me/918593079460
║
║╾ ᴏᴡɴᴇʀ : BADBMODER亗!!
║
║╾ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : wa.me/918593079460
║
║╾ sᴛᴀᴛᴜs : Public
║
║    ᴇɴᴛʜᴀᴅᴀ ɴᴇ ғᴇᴀʀ ᴀʏᴏ
║▬▭▬▭▬▭▬▭▬▭
╠══════════════════⎉
║-ᴀsᴋ ᴍʏ ᴏᴡɴᴇʀ
╠══════════════════⎉
╠═════⊱「ᴍᴇᴅɪᴀ ᴄᴏᴍᴍᴇɴᴅꜱ」 
║┏━━⊱
║┣❏ alive
║┣❏
║┣❏ Aliya
║┣❏
║┣❏ Aliyo
║┣❏
║┣❏ alone
║┣❏
║┣❏ Althaf
║┣❏
║┣❏ ano
║┣❏
║┣❏ ara
║┣❏
║┣❏ Ardra
║┣❏
║┣❏ ayilla
║┣❏
║┣❏ ayn
║┣❏ 
║┣❏ aysheri
║┣❏ 
║┣❏ Ayyo
║┣❏ 
║┣❏ baby
║┣❏ 
║┣❏ Back
║┣❏ 
║┣❏ bad boy
║┣❏ 
║┣❏ Bad
║┣❏ 
║┣❏ bgm
║┣❏ 
║┣❏ Bgm
║┣❏ 
║┣❏ Bhasi
║┣❏ 
║┣❏ bie
║┣❏ 
║┣❏ big fan
║┣❏ 
║┣❏ Blackzue
║┣❏ 
║┣❏ Boss
║┣❏ 
║┣❏ bot
║┣❏ 
║┣❏ Bot
║┣❏ 
║┣❏ broken
║┣❏ 
║┣❏ brokenlove
║┣❏ 
║┣❏ Bye
║┣❏ 
║┣❏ care
║┣❏ 
║┣❏ Chathi
║┣❏ 
║┣❏ chatho
║┣❏ 
║┣❏ Chathy
║┣❏ 
║┣❏ Chetta
║┣❏ 
║┣❏ Chiri
║┣❏ 
║┣❏ Chunk
║┣❏ 
║┣❏ chunke
║┣❏ 
║┣❏ chunks
║┣❏ 
║┣❏ comedy
║┣❏ 
║┣❏ cr7
║┣❏ 
║┣❏ Cr7
║┣❏ 
║┣❏ Cristiano
║┣❏ 
║┣❏ Cry
║┣❏ 
║┣❏ da
║┣❏ 
║┣❏ Dai
║┣❏ 
║┣❏ DD
║┣❏ 
║┣❏ die
║┣❏ 
║┣❏ Dora
║┣❏ 
║┣❏ Eda
║┣❏ 
║┣❏ ee
║┣❏ 
║┣❏ ekk
║┣❏ 
║┣❏ Ellarum ede
║┣❏ 
║┣❏ ennitt
║┣❏ 
║┣❏ enth
║┣❏ 
║┣❏ Entha cheyya
║┣❏ 
║┣❏ entha
║┣❏ 
║┣❏ Enthada
║┣❏ 
║┣❏ evde
║┣❏ 
║┣❏ Fan
║┣❏ 
║┣❏ fd
║┣❏ 
║┣❏ Feel aayi
║┣❏ 
║┣❏ Fek
║┣❏ 
║┣❏ ff
║┣❏ 
║┣❏ free
║┣❏ 
║┣❏ fresh
║┣❏ 
║┣❏ Frnd
║┣❏ 
║┣❏ Fsq
║┣❏ 
║┣❏ Gd mng
║┣❏ 
║┣❏ gd n8
║┣❏ 
║┣❏ Gd ngt
║┣❏ 
║┣❏ gdmng
║┣❏ 
║┣❏ gdngt
║┣❏ 
║┣❏ good bye
║┣❏ 
║┣❏ group
║┣❏ 
║┣❏ grp
║┣❏ 
║┣❏ Ha
║┣❏ 
║┣❏ hate
║┣❏ 
║┣❏ Haters
║┣❏ 
║┣❏ Hbd
║┣❏ 
║┣❏ Hbday
║┣❏ 
║┣❏ He
║┣❏ 
║┣❏ Hello
║┣❏ 
║┣❏ Hi
║┣❏ 
║┣❏ Hlo
║┣❏ 
║┣❏ Hloo
║┣❏ 
║┣❏ Hoi
║┣❏ 
║┣❏ Hy
║┣❏ 
║┣❏ i am back
║┣❏ 
║┣❏ ijathi
║┣❏ 
║┣❏ jd
║┣❏ 
║┣❏ kadhal
║┣❏ 
║┣❏ kali
║┣❏ 
║┣❏ Kanapi
║┣❏ 
║┣❏ Kanaran
║┣❏ 
║┣❏ Kanjan
║┣❏ 
║┣❏ Kanjav
║┣❏ 
║┣❏ kar98
║┣❏ 
║┣❏ Kemam
║┣❏ 
║┣❏ kenzo
║┣❏ 
║┣❏ Kenzoo
║┣❏ 
║┣❏ kerivaa
║┣❏ 
║┣❏ Kevin
║┣❏ 
║┣❏ Kgf
║┣❏ 
║┣❏ killadi
║┣❏ 
║┣❏ king
║┣❏ 
║┣❏ kiss
║┣❏ 
║┣❏ Kk
║┣❏ 
║┣❏ Koi
║┣❏ 
║┣❏ kozhi
║┣❏ 
║┣❏ Kukku
║┣❏ 
║┣❏ kundan
║┣❏ 
║┣❏ Kundan
║┣❏ 
║┣❏ Kunju
║┣❏ 
║┣❏ kunna
║┣❏ 
║┣❏ Kurup
║┣❏ 
║┣❏ Kutty
║┣❏ 
║┣❏ La be
║┣❏ 
║┣❏ Lala
║┣❏ 
║┣❏ left
║┣❏ 
║┣❏ Legend
║┣❏ 
║┣❏ Leopucha
║┣❏ 
║┣❏ life
║┣❏ 
║┣❏ line
║┣❏ 
║┣❏ Lo
║┣❏ 
║┣❏ Loo
║┣❏ 
║┣❏ Love tune
║┣❏ 
║┣❏ love u
║┣❏ 
║┣❏ Love
║┣❏ 
║┣❏ lover
║┣❏ 
║┣❏ Loveu
║┣❏ 
║┣❏ Lub u
║┣❏ 
║┣❏ lucifer
║┣❏ 
║┣❏ machan
║┣❏ 
║┣❏ Mad
║┣❏ 
║┣❏ Malang
║┣❏ 
║┣❏ mindalle
║┣❏ 
║┣❏ mindathe
║┣❏ 
║┣❏ Mohanlal
║┣❏ 
║┣❏ Mood
║┣❏ 
║┣❏ moodesh
║┣❏ 
║┣❏ moonji
║┣❏ 
║┣❏ Music pranthan
║┣❏ 
║┣❏ music
║┣❏ 
║┣❏ Muth
║┣❏ 
║┣❏ muthe
║┣❏ 
║┣❏ my area
║┣❏ 
║┣❏ My god
║┣❏ 
║┣❏ My love
║┣❏ 
║┣❏ mybos
║┣❏ 
║┣❏ mylove
║┣❏ 
║┣❏ myr
║┣❏ 
║┣❏ myre
║┣❏ 
║┣❏ Nalla kutty
║┣❏ 
║┣❏ Nallakutti
║┣❏ 
║┣❏ nallath
║┣❏ 
║┣❏ Name entha
║┣❏ 
║┣❏ Name
║┣❏ 
║┣❏ nanban
║┣❏ 
║┣❏ Nanbiye
║┣❏  
║┣❏ Nanni
║┣❏  
║┣❏ neymar
║┣❏ 
║┣❏ Neymar
║┣❏ 
║┣❏ Neymer
║┣❏ 
║┣❏ Nirthada
║┣❏ 
║┣❏ nirthada
║┣❏ 
║┣❏ Nirtheda
║┣❏ 
║┣❏ Nishal
║┣❏ 
║┣❏ njan
║┣❏ 
║┣❏ Njn vera
║┣❏ 
║┣❏ njn
║┣❏ 
║┣❏ Njr
║┣❏ 
║┣❏ noob
║┣❏ 
║┣❏ Oh no
║┣❏ 
║┣❏ Oh
║┣❏ 
║┣❏ ok bei
║┣❏ 
║┣❏ Ok bye
║┣❏ 
║┣❏ ok da
║┣❏ 
║┣❏ ok
║┣❏ 
║┣❏ oombi
║┣❏ 
║┣❏ oompi
║┣❏ 
║┣❏ over
║┣❏ 
║┣❏ Paat
║┣❏ 
║┣❏ paatt
║┣❏ 
║┣❏ Paavam
║┣❏ 
║┣❏ padicho
║┣❏ 
║┣❏ pani
║┣❏ 
║┣❏ Panni
║┣❏ 
║┣❏ parayatte
║┣❏ 
║┣❏ patti
║┣❏ 
║┣❏ perfect ok
║┣❏ 
║┣❏ Pever
║┣❏ 
║┣❏ pewer
║┣❏ 
║┣❏ photo
║┣❏ 
║┣❏ Pinnallah
║┣❏ 
║┣❏ Place
║┣❏ 
║┣❏ Poda
║┣❏ 
║┣❏ Podai
║┣❏ 
║┣❏ Poli
║┣❏ 
║┣❏ polika
║┣❏ 
║┣❏ Pooda
║┣❏ 
║┣❏ poora
║┣❏ 
║┣❏ Poote
║┣❏ 
║┣❏ Pora
║┣❏ 
║┣❏ Potta
║┣❏ 
║┣❏ Potte
║┣❏ 
║┣❏ Power varate
║┣❏ 
║┣❏ power
║┣❏ 
║┣❏ Poweresh
║┣❏ 
║┣❏ Poyeda
║┣❏ 
║┣❏ Pranayam
║┣❏ 
║┣❏ Psycho
║┣❏ 
║┣❏ Ramos
║┣❏ 
║┣❏ rascal
║┣❏ 
║┣❏ rashmika
║┣❏ 
║┣❏ rasool
║┣❏ 
║┣❏ return
║┣❏ 
║┣❏ Rose
║┣❏ 
║┣❏ sad
║┣❏ 
║┣❏ Sad
║┣❏ 
║┣❏ Sahva
║┣❏ 
║┣❏ saji
║┣❏ 
║┣❏ Sayip
║┣❏ 
║┣❏ scene
║┣❏ 
║┣❏ Sed aayi
║┣❏ 
║┣❏ Messi
║┣❏ 
║┣❏ messi
║┣❏ 
║┣❏ sed bgm
║┣❏ 
║┣❏ Sed tune
║┣❏ 
║┣❏ sed
║┣❏ 
║┣❏ Senior
║┣❏ 
║┣❏ Serious
║┣❏ 
║┣❏ set aano
║┣❏ 
║┣❏ Set
║┣❏ 
║┣❏ Seth po
║┣❏ 
║┣❏ Singapenne
║┣❏ 
║┣❏ single
║┣❏ 
║┣❏ sis
║┣❏ 
║┣❏ sketched
║┣❏ 
║┣❏ Smile
║┣❏ 
║┣❏ sneham
║┣❏ 
║┣❏ Soldier
║┣❏ 
║┣❏ song,
║┣❏ 
║┣❏ sorry
║┣❏ 
║┣❏ Sry
║┣❏ 
║┣❏ Subscribe
║┣❏ 
║┣❏ Suhail
║┣❏ 
║┣❏ sulthan
║┣❏ 
║┣❏ Super
║┣❏ 
║┣❏ T
║┣❏ 
║┣❏ Tentacion
║┣❏ 
║┣❏ Thalapathy
║┣❏ 
║┣❏ thall
║┣❏ 
║┣❏ thamasha
║┣❏ 
║┣❏ Thantha
║┣❏ 
║┣❏ thayoli
║┣❏ 
║┣❏ theri
║┣❏ 
║┣❏ thot
║┣❏ 
║┣❏ thottu
║┣❏ 
║┣❏ thug
║┣❏ 
║┣❏ Thyr
║┣❏ 
║┣❏ Town
║┣❏ 
║┣❏ Track maat
║┣❏ 
║┣❏ trance
║┣❏ 
║┣❏ Uff
║┣❏ 
║┣❏ Umbi
║┣❏ 
║┣❏ umma
║┣❏ 
║┣❏ uyir
║┣❏ 
║┣❏ Va
║┣❏ 
║┣❏ Vaa
║┣❏ 
║┣❏ vada
║┣❏ 
║┣❏ Vava
║┣❏ 
║┣❏ Veeran
║┣❏ 
║┣❏ venda
║┣❏ 
║┣❏ verithanam
║┣❏ 
║┣❏ Vidhi
║┣❏ 
║┣❏ Wait
║┣❏ 
║┣❏ waiting
║┣❏ 
║┣❏ welcome
║┣❏ 
║┣❏ why
║┣❏ 
║┣❏ wow
║┣❏ 
║┣❏ Yaar
║┣❏ 
║┣❏ Z aayi
║┣❏ 
║┣❏ 2
║┣❏ 
║┣❏ aara
║┣❏ 
║┣❏ Aarulle
║┣❏ 
║┣❏ adi
║┣❏ 
║┣❏ adima
║┣❏ 
║┣❏ Adipoli
║┣❏ 
║┣❏ breakup
║┣❏ 
║┣❏ Chunks
║┣❏ 
║┣❏ Clg
║┣❏ 
║┣❏ dance
║┣❏ 
║┣❏ Di?
║┣❏ 
║┣❏ don
║┣❏ 
║┣❏ Ee
║┣❏ 
║┣❏ enjoy
║┣❏ 
║┣❏ Fen
║┣❏ 
║┣❏ Gd
║┣❏ 
║┣❏ Hacker 
║┣❏ 
║┣❏ help
║┣❏ 
║┣❏ I love you
║┣❏ 
║┣❏ Kali
║┣❏ 
║┣❏ Kenzo
║┣❏ 
║┣❏ Kk gaming
║┣❏ 
║┣❏ KL LUTTAP 007
║┣❏ 
║┣❏ Kl luttapi 007
║┣❏ 
║┣❏ kozhi
║┣❏ 
║┣❏ lair
║┣❏ 
║┣❏ love
║┣❏ 
║┣❏ Men
║┣❏ 
║┣❏ Mm
║┣❏ 
║┣❏ myr
║┣❏ 
║┣❏ Myre
║┣❏ 
║┣❏ Nanbaa
║┣❏ 
║┣❏ nanban
║┣❏ 
║┣❏ Nirth
║┣❏ 
║┣❏ Njan vannu
║┣❏
║┣❏ Njan
║┣❏
║┣❏ No love
║┣❏
║┣❏ paatt
║┣❏
║┣❏ Penn
║┣❏
║┣❏ Pinnalla
║┣❏
║┣❏ poda
║┣❏
║┣❏ Pooda
║┣❏
║┣❏ prandh
║┣❏
║┣❏ putt
║┣❏
║┣❏ Rashmika
║┣❏ 
║┣❏ Rashu fans
║┣❏ 
║┣❏ Rashu
║┣❏ 
║┣❏ Ringtone
║┣❏ 
║┣❏ rip
║┣❏ 
║┣❏ Sarassu
║┣❏ 
║┣❏ Sarasu
║┣❏ 
║┣❏ Sed
║┣❏ 
║┣❏ Set aaka
║┣❏ 
║┣❏ Sfi
║┣❏ 
║┣❏ shibil
║┣❏ 
║┣❏ Single
║┣❏ 
║┣❏ sopnam
║┣❏ 
║┣❏ Tholvi
║┣❏ 
║┣❏ Uyr
║┣❏ 
║┣❏ Waiting
║┣❏ 
║┣❏ wcm
║┣❏ 
║┣❏ Araa
║┣❏ 
║┣❏ junaid
║┣❏ 
║┣❏ junu
║┣❏ 
║┣❏ morning
║┣❏ 
║┣❏ Junaid
║┣❏ 
║┣❏ Bajwa
║┣❏ 
║┣❏ funny
║┣❏ 
║┣❏ hi
║┣❏ 
║┣❏ Malik
║┣❏ 
║┣❏ Rizwan
║┣❏ 
║┣❏ Sad
║┣❏ 
║┣❏ Shabi
║┣❏ 
║┣❏ Shahzaib
║┣❏  
║┣❏ Sho
║┣❏  
║┣❏ Welcome
║┗━━━━《ʙᴀᴅʙᴏᴛᴢ》
╚═════════════════❍ 
║┣❏ ʙᴀᴅʙᴏᴛᴢ
║┣❏
║┣❏ ✆ ʀᴇᴘᴏʀᴛ ʙᴜɢ?
║┣❏
║┣❏ https://wa.me/+918593079460
║┣❏
║┣❏ ✆ ᴄʀᴇᴅɪᴛs ɢᴏᴇs ᴛᴏ!
║┣❏
║┗━━━━ 《ʙᴀᴅʙᴏᴛᴢ》
╚═════════════════❍

`}) 

}));
