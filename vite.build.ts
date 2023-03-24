import type { BuildOptions } from 'vite'

const getBuild = (VITE_APP_DIST: string): BuildOptions => {
  const output: BuildOptions['rollupOptions']['output'] = {
    manualChunks: (id) => {
      if (VITE_APP_DIST === 'SMC') {
        if (id.includes('lunar'))
          return 'lunar-vendor'
        else if (id.includes('node_modules'))
          return 'vendor'
      }
    },
  }

  return {
    rollupOptions: {
      output,
    },
  }
}

export default getBuild
