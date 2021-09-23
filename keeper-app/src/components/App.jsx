import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const getNotes = () => {
	let list = localStorage.getItem("lists");

	if (list) {
		return JSON.parse(list);
	} else {
		return [];
	}
};

function App() {
	const [notes, setNotes] = useState(getNotes());

	function addNote(note) {
		setNotes(prevNotes => {
			if (
				note ===
				{
					title: "",
					content: "",
				}
			) {
				return [...prevNotes];
			} else {
				return [...prevNotes, note];
			}
		});
	}

	function deleteNote(id) {
		setNotes(prevNotes => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(notes));
	}, [notes]);

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
