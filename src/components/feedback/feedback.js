import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postFeedback } from '../../modules/feedbackApi';
import '../../css/styleSheet.css';

function Feedback() {
    const [feedback, setFeedback ] = useState({mood: '', otherMood: '', comments: ''});
    const {handleSubmit} = useForm();

    const sendFeedback = () => {
        console.log(feedback);
        return postFeedback(feedback);
    };

    const handleChange = (event) => {
        if(event.otherMood) { 
            setFeedback({...feedback, otherMood: event.otherMood});
        }
        if(event.mood) {
            setFeedback({...feedback, mood: event.mood, otherMood: ''});
        }
        if(event.comments) {
            setFeedback({...feedback, comments: event.comments});
        }
    }

    return (
        <div>
            <div className="col">
                <form onSubmit={handleSubmit(sendFeedback)}>
                    <div className="row">
                        <h1>Feedback Form</h1>
                    </div>
                    <div className="row">
                        <div className="radio-check">
                            <label className="label-75">
                                <input
                                    id="happy"
                                    type="radio"
                                    name="mood"
                                    className="radio-check-input"
                                    onClick={() => handleChange({mood: 'happy'})}
                                />
                                Happy
                            </label>
                        </div>
                        <div className="radio-check">
                            <label className="label-75">
                                <input
                                    id="sad"
                                    type="radio"
                                    name="mood"
                                    className="radio-check-input"
                                    onClick={() => handleChange({mood: 'sad'})}
                                />
                                Sad
                            </label>
                        </div>
                        <div className="radio-check">
                            <label className="label-75">
                                <input
                                    id="other"
                                    type="radio"
                                    name="mood"
                                    className="radio-check-input"
                                    onClick={() => handleChange({mood: 'other'})}
                                />
                                Other
                            </label> 
                        </div>
                        { document.querySelector('#other:checked')  ? <textarea id="other-mood" value={feedback.otherMood} onChange={(input) => handleChange({otherMood: input.target.value})}></textarea> : null }
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <label className="label" htmlFor="comments">Comments:</label>
                        </div>
                        <div className="col-75">
                            <textarea id="comments" placeholder="Enter your comments here." style={{height:"200px"}} value={feedback.comments} onChange={(input) => handleChange({comments: input.target.value})} /> 
                        </div> 
                    </div>
                    <div className="row-25">
                        <div className="col-25">
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Feedback;