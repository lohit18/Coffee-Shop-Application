import {coffeeBeans} from '../data/coffeeBeans'
import {useDispatch} from 'react-redux';
import { addToCart } from "./redux/cartSlice";


const CoffeeBeans = () => {

  
    const dispatcher = useDispatch();

    const handleAdd = (e) => {
        const data = coffeeBeans.find(eachitem=> eachitem.id === e)
        if (data) {
            dispatcher(addToCart(data));
        } else {
            console.warn("Item not found for id:", e);
        }
        
    }

    return(

        <>
        <h1 className="center">Coffee Beans</h1>
        <div className="coffeeb">
            
            {
                coffeeBeans.map((items)=>{
                    return(
                        <div key={items.id}>
                            <div className="imgb"><img src={items.image} alt="" /></div>
                            <div className="coffeeitems">
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

export default CoffeeBeans;