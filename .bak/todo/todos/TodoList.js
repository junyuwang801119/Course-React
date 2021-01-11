import React from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'
// import QueueAnim from 'rc-queue-anim'
function TodoList(props) {
  // 解構賦值的語法，先把要用的變數值從props解出來
  const { todos, viewFilter } = props
  // handleCompleted,
  // handleDelete,
  // handleEditedToggle,
  // handleEditedSave,

  return (
    <>
      <ul>
        {/* <QueueAnim component="ul" type={['right', 'left']} leaveReverse> */}
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用id作為key值  */}
        {/* 依照每個項目的completed來控制呈現的樣子  */}
        {/* key要寫在最接近map的子項目，目前是改為TodoItem */}
        {todos.map((item, index) => {
          if (viewFilter === 1 && !item.completed) return

          if (viewFilter === 2 && item.completed) return

          return item.edited ? (
            <TodoItemEditForm key={item.id} todo={item} {...props} />
          ) : (
            <TodoItem key={item.id} todo={item} {...props} />
          )
        })}

        {/* item.edited ? (
            <TodoItemEditForm key={item.id} todo={item} {...props} />
          ) : (
            //   id={item.id}
            //   text={item.text}
            //   handleEditedSave={handleEditedSave}

            <TodoItem key={item.id} todo={item} {...props} />
            //   text={item.text}
            //   completed={item.completed}
            //   completedMethod={() => handleCompleted(item.id)}
            //   deleteMethod={() => handleDelete(item.id)}
            //   editedToggleMethod={() => handleEditedToggle(item.id)}
          )
        )} */}
      </ul>
    </>
  )
}

export default TodoList
