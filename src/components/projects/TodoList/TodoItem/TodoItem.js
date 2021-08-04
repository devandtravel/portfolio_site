import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Context } from '../../../models/context/context'
import { useContext } from 'react'

export const TodoItem = ({ todo, index, onChange }) => {
    const { removeTodo } = useContext(Context)
    return (
        <li className={styles.TodoItem}>
            <span className={todo.completed && styles.done}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <IconButton aria-label='delete' onClick={() => removeTodo(todo.id)}>
                <DeleteIcon />
            </IconButton>
        </li>
    )}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
