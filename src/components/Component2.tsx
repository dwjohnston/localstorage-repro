"use client"
import React from "react";

import {hri} from "human-readable-ids";
import useLocalStorageState from "use-local-storage-state";

export function Component2() {
    // const [value, setValue] = useState("hello world!");
    const [value, setValue] = useLocalStorageState<string>("localstorage-1", {
        defaultValue: "hello world!"
    }); 

    return <div>
        <h2>Component 2</h2>
        <button onClick={() => setValue(hri.random())}>Click to change value</button>
        Value: <span>{value}</span>
    </div>
} 