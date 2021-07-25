import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList/index';
import queryString from 'query-string';
import TodoForm from './../../components/TodoForm/index';

ListPage.propTypes = {

};


function ListPage(props) {

    const initodoList = [
        {
            id: '1',
            title: 'Eat',
            status: 'new'
        },

        {
            id: '2',
            title: 'Sleep',
            status: 'completed'
        },

        {
            id: '3',
            title: 'Code',
            status: 'new'
        }
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);

        console.log(params)

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');

    }, [location.search])


    const handleTodoClick = (todo, index) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo, index);
        //toggle state
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[index] = newTodo;
        //update todo
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const handleShowCompleted = () => {
        // setFilterStatus('completed');

        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const handleShowNewClick = () => {
        // setFilterStatus('new');

        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const renderTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus])

    const handleTodoFormSubmit = (values) => {
        console.log(values)
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        }

        const newTodoList = [...todoList, newTodo];


        setTodoList(newTodoList)
    }

    return (
        <div>
            <h3>What to do?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>

        </div>


    );
}

export default ListPage;