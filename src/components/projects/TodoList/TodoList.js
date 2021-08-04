import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem/TodoItem'
import styles from './TodoList.modules.scss'

export const TodoList = ({ todos, onToggle }) => (
    <ul className={styles.TodoList}>
        {todos.map((todo, index) => (
            <TodoItem todo={todo} key={todo.id} index={index} onChange={onToggle} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
