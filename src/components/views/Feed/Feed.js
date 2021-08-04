import { TodoList } from '../../projects/TodoList/TodoList'
import styles from './Feed.module.scss'
import { Post } from './Post/Post'
import { useState } from 'react'
import { Context } from '../../models/context/context'
import { AddTodo } from '../../projects/TodoList/AddTodo/AddTodo'

export const Feed = () => {
    const [todos, setTodos] = useState([
        { id: 1, completed: true, title: 'todo item 1' },
        { id: 2, completed: false, title: 'todo item 2' },
        { id: 3, completed: false, title: 'todo item 3' }
    ])
    const toggleTodo = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <section className={styles.Feed}>
            <h1>feed component</h1>
            <Post title={'Todo List'} date={'01.05.2021'}>
                <Context.Provider value={{ removeTodo }}>
                    <AddTodo/>
                    {todos.length?<TodoList todos={todos} onToggle={toggleTodo} />:<p>no todos items</p>}
                </Context.Provider>
            </Post>
            <Post title={'sample post title 2'} date={'02.05.2021'}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>
            </Post>
            <Post title={'sample post title 3'} date={'03.05.2021'}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>
            </Post>
        </section>
    )
}
