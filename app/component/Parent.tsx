import React from "react";
import Child from "./Child";

const Parent: React.FC = () => {
    const name = "John Doe";
    const age = 25;
    const profession = "Software Developer";

    return (
        <div className="p-6 text-center ">
            <h1 className="text-3xl font-bold mb-4">Parent Component</h1>
            <p className="text-lg mb-4">
                Passing data from the parent component to the child component.
            </p>
            {/* Step 2: Pass props to the Child Component */}
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-white">
                <Child name={name} age={age} profession={profession} />
            </div>
        </div>
    );
};

export default Parent;
