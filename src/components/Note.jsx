import React from 'react'
import { FaNoteSticky } from 'react-icons/fa6'
import { FaTrash } from 'react-icons/fa6'
const Note = ({ id, title, note, author, date, deleteNote }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3 col-sm-4 d-flex justify-content-center align-items-center px-3">
                    <FaNoteSticky size={120} />
                </div>
                <div className="col-md-9 col-sm-8">
                    <div className="card-body position-relative">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{note}</p>
                        <p className="card-text"><small className="text-body-secondary">Author: {author}</small></p>
                        <p className="card-text"><small className="text-body-secondary">Date: {date}</small></p>
                        <span className='position-absolute end-0 bottom-0 m-1'>
                            <FaTrash onClick={() => deleteNote(
                                'http://localhost:3001/notes',
                                {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                },
                                id
                            )} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note