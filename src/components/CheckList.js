// Checklist.js
import React, {useState} from 'react';

const Checklist = ({items}) => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event, item) => {
        if (event.target.checked) {
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter((i) => i.text !== item.text));
        }
    };

    const renderItem = (category, color) => {
        return items
            .filter((item) => item.category === category)
            .map((item, index) => (
                <ul key={index} className={`item ${color}`}>
                    <input
                        type="checkbox"
                        onChange={(event) => handleCheckboxChange(event, item)}
                    />
                    <span
                        className={
                            checkedItems.some((i) => i.text === item.text)
                                ? 'strikethrough'
                                : ''
                        }
                    >
            {item.text}
          </span>
                </ul>
            ));
    };

    return (
        <div className="checklist">
            <div>
                <ul>
                    <strong>Very important category</strong><br/>
                    {renderItem('very important', 'white')}
                    <strong>Important category</strong> <br/>
                    {renderItem('important', 'white')}
                    <strong>Optional category</strong> <br/>
                    {renderItem('optional', 'white')}
                </ul>
            </div>
        </div>
    );
};

export default Checklist;
