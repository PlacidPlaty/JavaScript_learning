
function Message() {
    // JSX: JavaScript XML
    const name = "Gerald";
    if (name)
        return <h1> Hello World {name}</h1>;
    else
        return <h1> Hello World</h1>
}

export default Message;