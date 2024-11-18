import { equipment } from "../data/equipment";
import {useDispatch} from 'react-redux';
import { addToCart } from "./redux/cartSlice";

const CoffeeEquipment = () => {
    const dispatcher = useDispatch();

    const handleAdd = (e) => {
        const data = equipment.find(eachitem=> eachitem.id === e)
        if (data) {
            dispatcher(addToCart(data));
        } else {
            console.warn("Item not found for id:", e);
        }
        
    }
    return(
        <>
        <h1 className="center">Coffee Equipment</h1>
        <div className="instacoffee">
            {
                equipment.map((items)=>{
                    return(
                        <div className="instaitem">
                            <div className="instaimg">
                                <img src={items.image} alt="" />
                            </div>
                            <div className="instaitems">
                                <div>{items.brand}</div>
                                <div>{items.price}</div>
                                <button onClick={()=>handleAdd(items.id)}>Add To Cart</button>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
        </>
    )
};

export default CoffeeEquipment;