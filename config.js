const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2330537808128";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_27_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpXNjcrRnhHL3drM2N0M2Y1MUc5MExHM05DVi92ZUg1bngxNVdmdWI0TVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTM3ODA4MTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMzhCNUMwNjFBNkI3MzM2NjBCODc5RTUxNjk3N0E0NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMTU2MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZUhwYjB5dHlTQktWYWtSSEhCczNHQVwiLFxuICBcInBob25lSWRcIjogXCIyMDJjNDUyYi05Y2E3LTQyZjQtYjQzYy0xOGQ1N2MxZTVlMTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNDgsXG4gICAgICA2LFxuICAgICAgNTEsXG4gICAgICAxNzgsXG4gICAgICA0MCxcbiAgICAgIDEyNixcbiAgICAgIDEyLFxuICAgICAgMzAsXG4gICAgICAxNTksXG4gICAgICA2NixcbiAgICAgIDIwMCxcbiAgICAgIDE1LFxuICAgICAgMjI4LFxuICAgICAgNjEsXG4gICAgICAxMzksXG4gICAgICAwLFxuICAgICAgMTM0LFxuICAgICAgNzcsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMjMyLFxuICAgICAgMTc1LFxuICAgICAgNzksXG4gICAgICAxMzcsXG4gICAgICAzOCxcbiAgICAgIDEwOSxcbiAgICAgIDMyLFxuICAgICAgNzQsXG4gICAgICAyMDEsXG4gICAgICAyNDQsXG4gICAgICA1OCxcbiAgICAgIDE4MSxcbiAgICAgIDYsXG4gICAgICAyNDQsXG4gICAgICAxNzUsXG4gICAgICAxOTYsXG4gICAgICA5OCxcbiAgICAgIDI1MCxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzN0c5Wk1MQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM3ODA4MTI4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1NjIzMjc1MTIyOTE5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhELy9VRUVPRGRwN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWdXk5SitlQTlRTURJbmFvQkQyLzdaTEdNRE9vaFVkTzFXNUF1blBmMVNvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZCdWx0aC95cHhIdTJHaDBXUnk5SWpLMDFCR09oekU1YjlyTjBRTTNQei9RclR3VXhWRUVPWjg1Sis1c1gvMXdwU1phbnF5ZGo3WGtTdWsyQmdOeENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNKekpEOHRtWUMrV1B4SVJkc0tFL3M1WDl6WDkzS3JOc3p4RmRqYnZBMEJ4UnA2OGZLb1QxSTM3QmgzUlRWNXIzQ1Y0V0YzUDZXQi9sU2FkWWVWWGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNzgwODEyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMTU2MTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
