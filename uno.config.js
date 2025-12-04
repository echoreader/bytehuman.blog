import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  content: {
    pipeline: {
      include: [
        './_layouts/**/*.html',
        './_includes/**/*.html',
        './posts/**/*.md',
        './*.html',
        './blog/**/*.html',
        './_site/**/*.html'
      ],
    },
  },
  preflights: [
    {
      getCSS: () => `
        html {
          overflow-y: scroll;
        }

        body { 
          font-family: 'Open Sans', system-ui, sans-serif; 
        }

        table { 
          border-collapse: collapse; 
          width: 100%; 
          margin-bottom: 1rem; 
          font-size: 0.95rem; 
        }

        th, td { 
          border: 1px solid #ccc; 
          padding: 8px; 
          text-align: left; 
          vertical-align: top; 
        }

        th { 
          background-color: #f2f2f2; 
          font-weight: bold; 
        }

        tr:nth-child(even) { 
          background-color: #fafafa; 
        }

        .table-wrapper { 
          overflow-x: auto; 
          -webkit-overflow-scrolling: touch; 
        }
        
        blockquote { 
          border-left: 4px solid #828282; padding-left: 12px; font-style: italic; 
        }
        
        details { 
          margin-bottom: 1rem; 
        }
        
        summary { 
          cursor: pointer; font-weight: bold; 
        }
      `,
    },
  ]
})