import React from "react";

// Define props type for better TypeScript support
interface ChildProps {
    name: string;
    age: number;
    profession: string;
}

const Child: React.FC<ChildProps> = ({ name, age, profession }) => {
    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-3">Child Component</h2>
            <p className="text-lg">
                <strong>Name:</strong> {name}
            </p>
            <p className="text-lg">
                <strong>Age:</strong> {age}
            </p>
            <p className="text-lg">
                <strong>Profession:</strong> {profession}
            </p>
        </div>
    );
};

export default Child;
