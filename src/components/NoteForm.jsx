import React, { useState } from 'react'

const NoteForm = ({ handleSubmit }) => {

    const [title, setTitle] = useState('Example Title')
    const [note, setNote] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab accusantium magnam iure officia vitae ad, distinctio rerum quas')
    const [author, setAuthor] = useState('lrodriguez')
    const [date, setDate] = useState('2024-04-03')
    return (
        <div>
            <h4>Register Note</h4>
            <form onSubmit={(e) => handleSubmit(e, { title, note, author, date })}>
                <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder='Insert Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="note" className="form-label">Note</label>
                    <textarea name="note" id="note" cols="30" rows="3" className="form-control" placeholder='Insert note'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" name="author" id="author" className="form-control" placeholder='Insert author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="author" className="form-label">Date</label>
                    <input type="date" name="author" id="author" className="form-control" placeholder='Insert author'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <button className="btn btn-primary w-100">Save Note</button>
                </div>
            </form>
        </div>
    )
}

export default NoteForm