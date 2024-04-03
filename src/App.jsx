import React, { useEffect, useState } from 'react'
import Note from './components/Note'
import NoteForm from './components/NoteForm'

const App = () => {

  const [notes, setNotes] = useState([])


  useEffect(() => {
    getNotes(
      'http://localhost:3001/notes',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }, [])

  const getNotes = (url = '', options = {}) => {
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        setNotes(responseJson)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const postNote = (url = '', options = {}) => {
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        getNotes(
          'http://localhost:3001/notes',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const deleteNote = (url = '', options = {}, id = null) => {
    fetch(`${url}/${id}`, options)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        getNotes(
          'http://localhost:3001/notes',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSubmit = (e, datos) => {
    e.preventDefault()
    console.log(datos)
    const url = 'http://localhost:3001/notes'
    const options = {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    postNote(url, options)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <NoteForm handleSubmit={handleSubmit} />
        </div>
        <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-12 mt-5">
          {
            notes.length > 0 &&
            notes.map((note) => {
              return (
                <Note key={note.id} {...note} deleteNote={deleteNote} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App