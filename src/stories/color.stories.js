import Color from '../components/color'

export default {
  title: 'Components/Color'
}

export const toStorybook = () => ({
  components: { Color },
  template: '<Color/>'
})

toStorybook.story = {
  name: 'color'
}
