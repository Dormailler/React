import PropTypes from "prop-types";
import styled from "./Button_module.css"

// function Button({text}){
//     return <button style={{
//         backgroundColor:"tomato",
//         color:"black",
//     }}>{text}</button>;
// }
function Button({text}){
    return <button className={styled.btn}>{text}</button>;
}
Button.propTypes = {
    text:PropTypes.string.isRequired,   
}
export default Button;