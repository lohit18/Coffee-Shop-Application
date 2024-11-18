import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";


const Cart = () => {
    
    const dispatcher = useDispatch()



    const result = useSelector((state)=>state.cart.value)

    const handleRemove = (e) => {
        const data = result.find((item)=>item.id === e)
        if(data){
            dispatcher(removeFromCart(data))
        }else{
            dispatcher(removeData("Data not found for id:",e))
        }
    }
    return(
        <>
        <div className="maincartflex">
            
            {
                result.length === 0 ? <div className="noData">No items to Display</div> :result.map((item)=>{
                    return(
                        <div className="cartflex">
                            <div className="cartimg">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cartitems">
                                <div>Brand: {item.brand}</div>
                                <div>Price: {item.price}</div>
                                <button onClick={()=>handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
};

export default Cart;