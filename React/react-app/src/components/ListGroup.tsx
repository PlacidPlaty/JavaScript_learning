import { useState } from "react";

// Props are treated as read only (immutable). 
// Props are the input passed to a component, similar to function arguments
// { items: [], heading: string }
interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void; //similar to onClick event
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    
    // Hook: Function to allow you to tap into build in functions in react.
    const [selectedIndex, setSelectedIndex] = useState(-1)
    // first element of array is variable (selectedIndex)
    // second element of array is an updater function to update the first element

    // items = [];

    return (
        <>
            <h1> {heading} </h1>

            {/* check if items is empty
                result of AND operator returns the second condition if true,
                in this case if the No item found message.
                If result is false, false is returned and nothing is rendered.
            */}
            {items.length === 0 && <p>No item found</p>}

            <ul className = "list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index 
                            ? 'list-group-item active' : 'list-group-item' // active: highlights an element of your table
                        }
                        key={item} 
                        onClick={() => { 
                            setSelectedIndex(index); // high lights an element
                            onSelectItem(item); // does something when item is pressed
                         }}
                    > 
                        {item} 
                    </li>
                ))}
            </ul>
        </>
    ) 
}

export default ListGroup;