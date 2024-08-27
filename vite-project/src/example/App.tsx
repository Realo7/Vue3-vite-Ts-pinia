import { defineComponent } from 'vue'

const A = (_, { slots }) => (
  <>
    <div>{slots.default ? slots.default() : '默认值'} </div>
  </>
)
export default defineComponent({
  props: { name: String },
  emits: ['on-click'],

  setup(props, { emit, slots }) {
    const flag = false
    function fuckname(params: string) {
      console.log('触发了', params)
      emit('on-click', params)
    }
    const slot = {
      default: () => <div>我是默认插槽</div>,
    }
    return () => {
      return (
        <div>
          <A v-slots={slot}></A>
          <div v-show={flag}>yes</div>
          <button onClick={() => fuckname('12312')}>按你</button>
        </div>
      )
    }
  },
})
