import { ReactNode } from "react"


interface Props{
    children: ReactNode;
    colour?: "primary" | "secondary" | "danger" | "success" | "warning"; // ?: declare as optional so it can be left empty
    onClick: () => void;
}

// set default colour of button to primary
const button = ({ children, colour = 'primary', onClick }: Props) => {
  return (
    <button 
      className= {'btn btn-' + colour} // concat colour to the string so that you can dynamically change it
      onClick= {onClick}
    > 
    { children } 

    </button>

  )
}

export default button