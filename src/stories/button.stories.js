import MyButton from '../components/button'

export default {
  title: 'Components/Button',
  component: MyButton,
  decorators: [
    () => `<div>
      <story/>
    </div>`
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary Button'
}
Primary.decorators = [
  () => `<div>
    <story/>
  </div>`
]

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
