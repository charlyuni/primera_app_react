import ShopList from "./ShopList"

const ShopContainer= ({titulo}) => {
  return (
    <>
    <div className="text-4xl text-left text-white bg-accent border-solid border-gray-200 p-2 m-2">
    <h1 className="text-center">{titulo}</h1>
    </div>
    <div><ShopList/></div>
    </>

  )
}
export default ShopContainer