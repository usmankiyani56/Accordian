import { useState } from "react";
import styles from './accordian.module.css';


const Accordion = () => {
    const data = [
        {
            id: '1',
            question: "Can I write an accordion component with different frameworks?",
            answer: "Yes, of course. It is very possible to create an accordion with different frameworks."
        },
        {
            id: '2',
            question: "What are some popular JavaScript frameworks for building accordion components?",
            answer: "Some popular JavaScript frameworks for building accordion components include React, Vue.js, and Angular."
        },
        {
            id: '3',
            question: "How do I make my accordion accessible?",
            answer: "To make your accordion accessible, ensure that it can be navigated using keyboard controls, and provide."
        },
        {
            id: '4',
            question: "Can I customize the appearance of my accordion?",
            answer: "Yes, you can customize the appearance of your accordion using CSS or framework-specific styling techniques."
        }
    ];
   
    const [selectedItems, setSelectedItems] = useState([]); // Keep track of selected item IDs
    const [multipleSelectionEnabled, setMultipleSelectionEnabled] = useState(false); // State to track multiple selection

    const toggleAccordion = (id) => {
        if (multipleSelectionEnabled) {
            // Toggle selected items for multiple selection
            if (selectedItems.includes(id)) {
                setSelectedItems(selectedItems.filter(itemId => itemId !== id));
            } else {
                setSelectedItems([...selectedItems, id]);
            }
        } else {
            // Enable single selection mode
            setSelectedItems([id]);
        }
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setMultipleSelectionEnabled(!multipleSelectionEnabled)}>
                {multipleSelectionEnabled ? "Enable Single Selection" : "Enable Multiple Selection"}
            </button> {/* Button to toggle multiple/single selection */}
            <div className={`${styles.accordion} accordion`}>
                {data && data.length > 0 ? (
                    data.map(dataItem => (
                        <div className={`${styles.item} item`} key={dataItem.id}>
                            <div className={`${styles.title}`} onClick={() => toggleAccordion(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>{selectedItems.includes(dataItem.id) ? '-' : '+'}</span> {/* Check if item is selected */}
                            </div>
                            {selectedItems.includes(dataItem.id) && <div className={`${styles.content} content`}>{dataItem.answer}</div>}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
