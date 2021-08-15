// import vue from "vue";
import MyButton from './button.vue'

export default { title: 'Button' }

export const withText = () => '<my-button>with text</my-button>'
export const withEmoji = () => '<my-button>😀 😎 👍 💯</my-button>'

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button :rounded="true">rounded</my-button>'
})
