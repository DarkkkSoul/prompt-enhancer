import React, { useState } from 'react'
import { generateEnhancedPrompt } from "../utils/generate";

function Enhance() {
    const [userPrompt, setUserPrompt] = useState("");
    const [promptGenerated, setPromptGenerated] = useState("")

    const handleGenerate = async () => {
        try {
            const response = await generateEnhancedPrompt(userPrompt);
            setPromptGenerated(response);
        } catch (error) {
            console.error("Error generating prompt:", error);
            setPromptGenerated("Error generating prompt. Please try again.");
        }
    };
    return (
        <>
            <div>
                <label htmlFor="text">Enter your prompt</label>
                <input
                    type="text"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                />
            </div>
            <button onClick={handleGenerate}>Generate</button>
            <div>{promptGenerated}</div>
        </>
    )
}

export default Enhance