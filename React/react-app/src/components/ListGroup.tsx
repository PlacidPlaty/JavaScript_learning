import { MouseEvent } from "react";

function ListGroup() {
    let items = [
        "New York",
        "Tokyo",
        "Stockholm",
        "Taipei"
    ];

    // items = [];
    
    // event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1> List</h1>

            {/* check if items is empty
                result of AND operator returns the second condition if true,
                in this case if the No item found message.
                If result is false, false is returned and nothing is rendered.
            */}
            {items.length === 0 && <p>No item found</p>}

            <ul className = "list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" 
                    key={item} 
                    onClick={handleClick}> {item} </li>
                ))}
            </ul>
        </>
    ) 
}

export default ListGroup;