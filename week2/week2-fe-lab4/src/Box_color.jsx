
function BoxColor(props) {

    const myStyle = {
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            padding: "20px",
            width: "45%",
            textAlign: "center",
            border: "2px solid black",
            margin: "5px",
            fontFamily:"Arial"
    }

    

    const hexCode = (i) => {
        return ("0" + parseInt(i).toString(16)).slice(-2);
    }  

    return(
        <div style={myStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>#{hexCode(props.r)}{hexCode(props.g)}{hexCode(props.b)}</p>
        </div>
        

    );
}

export default BoxColor