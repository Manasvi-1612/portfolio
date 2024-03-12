import { defineConfig } from 'sanity/lib/exports'
import { structureTool } from 'sanity/lib/exports/structure'
import { visionTool } from './node_modules/@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'yjumbjrx',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
