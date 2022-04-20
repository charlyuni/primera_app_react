
function Card({children}) {

    return (

        <div style={{border:'solid 2px blue'}}>
            <h1>Empieza una card</h1>
                {children}
            <h1>Termina una card</h1>

        </div>

    )
}
export default Card