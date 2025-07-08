import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import DoLogo from './asset/DoLogo'

export default defineConfig({
  name: 'default',
  title: 'DOSTUDIO',

  projectId: '0hjyj1bs',
  dataset: 'production',

studio: {
  components: {
    logo: DoLogo,
  },
},

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({ type: 'branding', title: 'Branding', S, context }),
            orderableDocumentListDeskItem({ type: 'motion', title: 'Motion', S, context }),
            orderableDocumentListDeskItem({ type: 'packageDesign', title: 'Package Design', S, context }),
            orderableDocumentListDeskItem({ type: 'poster', title: 'Poster', S, context }),
            orderableDocumentListDeskItem({ type: 'printDesign', title: 'Print Design', S, context }),
            orderableDocumentListDeskItem({ type: 'production', title: 'Production', S, context }),
            orderableDocumentListDeskItem({ type: 'webDesign', title: 'Web Design', S, context }),
            orderableDocumentListDeskItem({ type: 'client', title: 'Client', S, context }),

            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'branding',
                  'motion',
                  'packageDesign',
                  'poster',
                  'printDesign',
                  'production',
                  'webDesign',
                  'client',
                ].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
