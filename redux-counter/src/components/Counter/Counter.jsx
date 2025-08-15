
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../Redux/features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
         dispatch(decrement())
    }
    const handleIncrementFive = (num) => {
         dispatch(incrementByAmount(num))
    }


    return (
        <div className=" flex items-center flex-col justify-center min-h-screen bg-gray-100">
            <h2 className=" text-3xl font-bold mb-6">Redux Counter App</h2>
            <div className=" flex items-center gap-6">
                <button onClick={handleIncrement} className=" bg-blue-400 px-9 py-2 hover:bg-red-300 text-white text-xl rounded-md">+</button>
                <span>{count}</span>
                <button onClick={handleDecrement} className=" bg-blue-400 px-9 py-2 hover:bg-red-300 text-white text-xl rounded-md">-</button>
                <button onClick={()=>handleIncrementFive(5)} className=" bg-red-400 px-9 py-2 hover:bg-red-300 text-white text-xl rounded-md"> + 5</button>
            </div>
            
        </div>
    );
};

export default Counter;