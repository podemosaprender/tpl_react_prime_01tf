import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BasePath= (process.env.GITHUB_REPOSITORY||'').replace(/^[^\/]*/,'') 
const esGlitch= (process.env.API_SERVER_EXTERNAL!=null)

//SEE: https://vitejs.dev/config/
const config= defineConfig({
	base: BasePath,
  plugins: [react()],
})

if (esGlitch) {
  config.server= {
    host:"0.0.0.0",
    port:3000,
    strictPort: true,
    hmr: {
      clientPort: 443 // Run the websocket server on the SSL port
    }
  }
}

export default config;

