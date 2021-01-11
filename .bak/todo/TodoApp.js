import React, { useState } from 'react'
import TodoAddForm from './todos/TodoAddForm'
import TodoList from './todos/TodoList'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  // 0=all, 1= (view completed = true), 2=(view completed =false)
  const [viewFilter, setViewFilter] = useState(0)
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone 12', completed: false, edited: false },
    { id: 2, text: '學好react', completed: true, edited: false },
    { id: 3, text: '買ps5', completed: false, edited: false },
    { id: 4, text: '買牛奶', completed: true, edited: false },
  ])
  // 利用id值尋找對應的item的索引值，然後改變edited值
  const handleEditedToggle = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }
  // 利用id值尋找對應的item的索引值，然後改變text值
  const handleEditedSave = (id, newText) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // text 更改為新的 newText
      newTodos[todoItemIndex].text = newText

      // 設定回原本的todos
      setTodos(newTodos)

      // 切換回原本的狀態
      handleEditedToggle(id)
    }
  }
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值, findIndex回傳index
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }
  // 利用id值尋找對應的item的索引值，然後移出陣列
  const handleDelete = (id) => {
    //建立一個新的陣列，其中不包含要被移除的項目(用filter)
    const newTodos = todos.filter((item, index) => item.id !== id)

    // 設定回原本的todos
    setTodos(newTodos)
  }

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>
      {/* <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
              edited: false,
            }
            const newTodos = [newItem, ...todos]
            setTodos(newTodos)
            setTodoInput('')
          }
        }}
      />*/}

      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <button
        onClick={() => {
          if (todoInput) {
            const newItem = {
              id: +new Date(),
              text: todoInput,
              completed: false,
              edited: false,
            }
            const newTodos = [newItem, ...todos]
            setTodos(newTodos)
            setTodoInput('')
          }
        }}
      >
        confirm
      </button>
      <hr />
      <button onClick={() => setViewFilter(0)}>全部</button>
      <button onClick={() => setViewFilter(1)}>完成</button>
      <button onClick={() => setViewFilter(2)}>未完成</button>
      <hr />
      <TodoList
        todos={todos}
        handleEditedToggle={handleEditedToggle}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedSave={handleEditedSave}
        viewFilter={viewFilter}
      />

      {/* <ul>
        map使用時通常子元素會要求唯一key值(id值) 
        這裡用id作為key值 
        依照每個項目的completed來控制呈現的樣子 
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              <del>{item.text}</del>
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          ) : (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              {item.text}
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          )
        )}
      </ul> */}
    </>
  )
}

export default TodoApp
