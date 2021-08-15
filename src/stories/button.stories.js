import Button from '../components/button'

export default {
  title: 'Button'
}

export const toStorybook = () => ({
  components: { Button },

  template: '<Button/>'
})

toStorybook.story = {
  name: 'button'
}
