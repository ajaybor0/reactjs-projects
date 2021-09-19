import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

const getTodoItems = () => {
	let list = localStorage.getItem("lists");

	if (list) {
		return JSON.parse(localStorage.getItem("lists"));
	} else {
		return [];
	}
};

function App() {
	const [items, setItems] = useState(getTodoItems());

	function addItem(inputText) {
		setItems(prevItems => {
			if (inputText === "") {
				return [...prevItems];
			} else {
				return [...prevItems, inputText];
			}
		});
	}

	function deleteItem(id) {
		setItems(prevItems => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(items));
	}, [items]);

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<InputArea onAdd={addItem} />
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<ToDoItem
							key={index}
							id={index}
							text={todoItem}
							onChecked={deleteItem}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
