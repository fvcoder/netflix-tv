const fs = require('fs')
const path = require('path')

if(!fs.existsSync('.env')) {
  fs.writeFileSync(path.join(__dirname, 'env'), `VITE_TMDB_API_KEY=${process.env.VITE_TMDB_API_KEY}`)
}
