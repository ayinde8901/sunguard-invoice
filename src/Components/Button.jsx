import "./Button.css";


function Button({text, onClick}){


return(

<button

className="main-btn"

onClick={onClick}

>

{text}

</button>

)

}


export default Button;