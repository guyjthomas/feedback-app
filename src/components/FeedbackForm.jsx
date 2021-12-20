import Card from "./shared/Card";
import { useState, useEffect } from 'react'
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from 'react';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if (feedbackEdit.edit !== false) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true)
            setMessage('Please add at least 10 characters')
        } else {
            setbtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }

            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder='Write a Review' value={text} onChange={handleTextChange} />
                    <Button type='submit' isDisabled={btnDisabled}>SEND</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
