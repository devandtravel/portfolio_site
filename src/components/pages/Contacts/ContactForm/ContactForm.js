import axios from 'axios'
import { useState } from 'react'

export const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = event => {
        event.preventDefault()
        axios({
            method: 'POST',
            url: 'http://localhost:3000/send',
            data: state
        }).then(response => {
            if (response.data.status === 'success') {
                alert('Message Sent.')
                resetForm()
            } else if (response.data.status === 'fail') {
                alert('Message failed to send.')
            }
        })
    }

    const resetForm = () => {
        setState({ name: '', email: '', message: '' })
    }

    const onNameChange = event => {
        setState({ name: event.target.value })
    }

    const onEmailChange = event => {
        setState({ email: event.target.value })
    }

    const onMessageChange = event => {
        setState({ message: event.target.value })
    }

    return (
        <form id='contact-form' onSubmit={handleSubmit} method='POST'>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={state.name}
                    onChange={onNameChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                    type='email'
                    className='form-control'
                    id='email'
                    aria-describedby='emailHelp'
                    value={state.email}
                    onChange={onEmailChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                    className='form-control'
                    rows='5'
                    id='message'
                    value={state.message}
                    onChange={onMessageChange}
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    )
}
