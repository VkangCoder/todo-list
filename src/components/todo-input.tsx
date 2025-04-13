import { useState } from 'react'

interface ITodo {
  id: number
  title: string
  isComplete: boolean
}

interface IProps {
  name?: string
  addNewTodo: (value: ITodo) => void
}

const TodoInput = (props: IProps) => {
  const { addNewTodo } = props

  //string
  const [todo, setTodo] = useState<string>('')

  // const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTodo(e.target.value)
  // }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = () => {
    if (!todo) {
      alert('Empty todo')
      return
    }
    addNewTodo({
      id: randomInteger(1, 100000),
      title: todo,
      isComplete: false,
    })
  }

  return (
    <div style={{ display: 'flex', gap: 15, marginBottom: 20 }}>
      <input
        value={todo}
        onChange={event => setTodo(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add todo</button>
    </div>
  )
}

export default TodoInput
