const ytdl = require('ytdl-core')
const fs = require('fs')



ytdl('https://www.youtube.com/watch?v=0CmtDk-joT4').pipe(fs.createWriteStream('vnode ideo.mp4'));