import React, { useEffect, useState } from 'react';
import './difficultyDropdown.css';

function DifficultyDropdown() {
    const [options] = useState([
        { label: "Beginner", value: 1 },
        { label: "Intermediate", value: 2 },
        { label: "Advanced", value: 3 }
    ])
    const [value, setValue] = useState("Beginner")

    const handleChange = (e) => {
        setValue(e.currentTarget.value);

        localStorage.setItem('difficulty', e.currentTarget.value);
    }

    useEffect(() => {
        setValue(localStorage.getItem('difficulty'))
    }, [])

    return (
        <div className="dropdownContainer">
            <select className="dropdownSelect"
                value={value}
                onChange={handleChange}
            >
                {options.map(item => (
                    <option className="dropdownOption" key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DifficultyDropdown;