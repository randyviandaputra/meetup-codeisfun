
const todos = [{
    text: 'Todo 1',
    completed: true
}, {
    text: 'Makan siang',
    completed: false
}, {
    text: 'Ngoding',
    completed: true
}, {
    text: 'Tidur',
    completed: false
}];

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    const filterTodos = todos.filter(function(todo) {
        const searchText = todo.text.toLocaleLowerCase().includes(filters.searchText.toLocaleLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        
        return searchText && hideCompleted
    })
    
    const incompletedTodos = filterTodos.filter(function(todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = '';
    
    const summary = document.createElement('h2')
    summary.textContent = `sisa todo ${incompletedTodos.length} lagi`
    document.querySelector('#todos').appendChild(summary)
    
    filterTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}


renderTodos(todos, filters)

// document.querySelector('button').addEventListener('click', function(e) {
//     const p = document.createElement('p')
//     p.textContent = 'new todo'
//     document.querySelector('body').appendChild(p)
//     console.log('add new todo')
// })

// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    console.log(e.target.checked)
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})