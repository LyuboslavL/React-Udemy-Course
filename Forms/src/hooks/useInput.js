import { useState } from "react";

export function useInput() {
    const [enteredValue, setEnteredValue] = useState();

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });
} 