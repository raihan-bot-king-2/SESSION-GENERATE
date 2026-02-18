const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function INOCENT_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_INOCENT_MD.sendMessage(Pair_Code_By_INOCENT_MD.user.id, { text: "" + b64data });

               let INOCENT_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃𝕴𝖓𝖔𝖈𝖊𝖓𝖙 𝕸𝖉☠︎︎✔ SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𝕴𝖓𝖔𝖈𝖊𝖓𝖙 𝕸𝖉☠︎︎✔_👨🏻‍💻
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || SUPPORT GC = https://chat.whatsapp.com/DX19f0xUiCeGbt4a4PtJnm?mode=gi_t
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029Vb6vValEwEjvc6wde41P
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/+919749366957
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || INSTAGRAM = https://www.instagram.com/r_a_i_h_a_n__k_i_n_g__2?igsh=cjdybDlrZ3Y5eHlk==
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || FaceBook = https://www.facebook.com/share/16peCLwomf/
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || GITHUB REPO = https://github.com/raihan-bot-king-2/INOCENT-MD
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝕴𝖓𝖔𝖈𝖊𝖓𝖙 𝕸𝖉☠︎︎✔`
 await Pair_Code_By_INOCENT_MD.sendMessage(Pair_Code_By_INOCENT_MD.user.id,{text:INOCENT_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    INOCENT_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await INOCENT_MD_PAIR_CODE()
});
module.exports = router
