import { existsSync, writeFileSync } from 'fs'
import { join } from 'path'

if(!existsSync('.env')) {
  writeFileSync(join(process.cwd(), '.env'), `VITE_TMDB_API_KEY=${process.env.VITE_TMDB_API_KEY}`)
}
