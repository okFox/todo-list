import Component from '../Component.js';

class TodoItem extends Component {

    onRender(list) {
        const todo = this.props.todo;
        //const onUpdate = this.props.onUpdate;
        //const onRemove = this.props.onRemove;

        
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <li class='todo-item'>
                <div>checkbox</div>
                <div class='task-container'>
                    <p>"${todo.task}"</p>
                </div>
                <div>delete button</div>
            </li>
        `;
    }
}

export default TodoItem;