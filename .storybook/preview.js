export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (story, context) => ({
    component: { story },
    template: `
      <story />
    `
  })
]

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Language',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'circlehollow',
//       items: [
//         { value: 'en', icon: 'circlehollow', title: 'Hello' },
//         { value: 'pt-br', icon: 'circle', title: 'Olá' },
//         { value: 'fr', icon: 'circle', title: 'Bonjour' }
//       ]
//     }
//   }
// }
