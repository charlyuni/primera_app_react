import { HiOutlineShoppingCart } from "react-icons/hi";

function CartWidget() {
    return (

        <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
        <div className="h-6 "><HiOutlineShoppingCart size={32}/></div>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    
    )
}
export default CartWidget