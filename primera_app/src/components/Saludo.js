
/* const Saludo = ({name, edad}) => { */
const Saludo = (props) => {
  return (
    <div>Saludos {props.name} tienes {props.edad}</div>
  )
}
export default Saludo