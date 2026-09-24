import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const apiDir = path.join(rootDir, 'app', 'api')
const tempApiDir = path.join(rootDir, 'app', '_api_temp')
const outDir = path.join(rootDir, 'out')
const htaccessSource = path.join(rootDir, 'public', '.htaccess')
const htaccessDest = path.join(outDir, '.htaccess')

console.log('🚀 Starting Hostinger Static Export Build...')

let movedApi = false

try {
  // 1. Temporarily move app/api aside since Hostinger shared hosting is static (no Node server)
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, tempApiDir)
    movedApi = true
    console.log('📦 Stashed API routes (not needed for static hosting)...')
  }

  // 2. Run Next.js build with NEXT_EXPORT=true
  console.log('⚙️  Compiling static HTML, CSS & JS for Hostinger...')
  execSync('npx next build', {
    cwd: rootDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_EXPORT: 'true',
      NEXT_PUBLIC_BASE_URL: 'https://1010computers.in',
    },
  })

  // 3. Copy .htaccess into out/
  if (fs.existsSync(htaccessSource) && fs.existsSync(outDir)) {
    fs.copyFileSync(htaccessSource, htaccessDest)
    console.log('✅ Copied .htaccess to out/ for Hostinger LiteSpeed server.')
  }

  // 4. Create hostinger-deploy.zip automatically using standard POSIX slashes (Linux/Hostinger compatible)
  const zipPath = path.join(rootDir, 'hostinger-deploy.zip')
  try {
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath)
    }
    execSync(`tar.exe -a -c -f "${zipPath}" -C "${outDir}" .`, {
      stdio: 'ignore',
    })
    console.log('📦 Created hostinger-deploy.zip with standard Linux paths ready for 1-click upload!')
  } catch (zipErr) {
    console.warn('Note: Could not auto-create zip file with tar.exe:', zipErr.message)
  }

  console.log('\n🎉 Build complete! The production files are ready in:')
  console.log('   - Folder: "out/"')
  console.log('   - Zip archive: "hostinger-deploy.zip"')
  console.log('\n👉 Quick Deploy to Hostinger:')
  console.log('   1. Log into Hostinger hPanel -> Websites -> 1010computers.in')
  console.log('   2. Open "File Manager" -> go into "public_html"')
  console.log('   3. Upload "hostinger-deploy.zip" and click "Extract"')
  console.log('   4. Make sure all extracted files are directly inside public_html')
  console.log('   5. Visit https://1010computers.in — Done! 🚀')
} catch (error) {
  console.error('❌ Build failed:', error)
  process.exitCode = 1
} finally {
  // Always restore app/api
  if (movedApi && fs.existsSync(tempApiDir)) {
    fs.renameSync(tempApiDir, apiDir)
    console.log('🔄 Restored app/api routes for standard development.')
  }
}
