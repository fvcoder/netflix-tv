import { existsSync, writeFileSync } from 'fs'
import { join } from 'path'

if(!existsSync('.env')) {
  writeFileSync(join(__dirname, 'env'), `VITE_TMDB_API_KEY=${process.env.VITE_TMDB_API_KEY}`)
}
