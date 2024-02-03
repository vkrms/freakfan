import React, { useState } from "react";
import "./PollPage.css";

const PollPage = () => {
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceChange = (event) => {
        setSelectedChoice(event.target.value);
    };

    const submitPoll = () => {
        if (selectedChoice) {
            alert(`You selected: ${selectedChoice}`);

            // Here, you can send the selected choice to the server for processing
            // You may use Fetch API, Axios, or any other method to send data to the server
        } else {
            alert('Please select an option before submitting.');
        }
    };

    return (
        <div className="poll-container">
            <div className="question">What is your favorite programming language?</div>
            <form>
                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="python"
                        onChange={handleChoiceChange}
                        checked={selectedChoice === "python"}
                    />
                    Python
                </label>

                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="javascript"
                        onChange={handleChoiceChange}
                        checked={selectedChoice === "javascript"}
                    />
                    JavaScript
                </label>

                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="java"
                        onChange={handleChoiceChange}
                        checked={selectedChoice === "java"}
                    />
                    Java
                </label>

                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="csharp"
                        onChange={handleChoiceChange}
                        checked={selectedChoice === "csharp"}
                    />
                    C#
                </label>

                <button type="button" onClick={submitPoll}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PollPage;
