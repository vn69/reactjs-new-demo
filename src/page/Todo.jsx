import { Col, Row, Input, Button, Checkbox, Space, Radio } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function TodoList() {
  const [name, setName] = useState("")
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo-list")) || [])
  const [filterShow, setFilterShow] = useState("All")
  const [todoListFilter, setTodoListFilter] = useState([])

  const inputRef = useRef()

  const onChangeCheckBox = (id) => {
    const newTodoList = [...todoList]
    const findTodo = newTodoList.find(e => e.id === id)
    findTodo.isDone = !findTodo.isDone
    setTodoList(newTodoList);
  };

  const onPressKeyInput = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
    }
  }
  const handleAddTodo = () => {
    const todoName = name.trim()
    if (todoName) {
      setTodoList([...todoList,
      { id: uuidv4(), name: todoName, isDone: false }
      ]);
      setName("");
      inputRef.current.focus()
    }
  }
  const handleCheckAll = () => {
    setTodoList(todoList.map(e => {
      e.isDone = true;
      return e
    }))
  }
  const handleClear = () => {
    setTodoList(todoList.filter(e => !e.isDone))
  }

  const optionsFilter = [
    { label: 'All', value: 'All' },
    { label: 'Complete', value: 'Complete' },
    { label: 'Uncomplete', value: 'Uncomplete' },
  ];

  useEffect(() => {
    switch (filterShow) {
      case "All":
        setTodoListFilter(todoList)
        break;
      case "Complete":
        setTodoListFilter(todoList.filter(e => e.isDone))
        break;
      case "Uncomplete":
        setTodoListFilter(todoList.filter(e => !e.isDone))
        break;

      default:
        console.log("WTF")
    }
  }, [filterShow, todoList]);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoList))
  }, [todoList]);

  const ListTodo = todoListFilter.map((todo, index) =>
    <div key={index}><Checkbox checked={todo.isDone} onChange={() => onChangeCheckBox(todo.id)}>{todo.name}</Checkbox></div>
  );
  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <Space direction="vertical" style={{ display: 'flex' }}>
            <h3>TodoList</h3>
            <Input.Group compact>
              <Input
                ref={inputRef}
                style={{
                  width: 'calc(100% - 200px)',
                }}
                placeholder="input..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={onPressKeyInput}
              />
              <Button disabled={!name.length} onClick={handleAddTodo} type="primary">Add</Button>
            </Input.Group>
            <div>{ListTodo}</div>
            {!!todoList.length && <Space>
              <Radio.Group
                options={optionsFilter}
                onChange={(e) => setFilterShow(e.target.value)}
                value={filterShow}
                optionType="button"
                buttonStyle="solid"
              />
              <Button onClick={handleCheckAll} type="primary">CheckAll</Button>
              <Button disabled={!todoList.find(e => e.isDone)} onClick={handleClear} type="primary">Clear</Button>
            </Space>}
          </Space>
        </Col>
      </Row>
    </div>
  );
}