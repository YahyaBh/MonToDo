
import './style.scss'

export default function ToDo(params) {
    return (
        <div className="todo">
            <h3>{params.task.name}</h3>
        </div>
    )
}