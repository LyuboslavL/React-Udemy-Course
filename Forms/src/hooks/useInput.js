import { useState } from "react";

export function useInput(defaultValue) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const handleInputChange = (event) => {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    };

    const handleInputBlur = (identifier) => {
        setDidEdit(true);
    };

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange
    }
} 