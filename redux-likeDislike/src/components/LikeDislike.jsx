import { useDispatch, useSelector } from "react-redux";
import {increaseDislike, increaseLike, resets } from "../Redux/features/LikeDislikeSlice/LikeDislikeSlice";

const LikeDislike = () => {
    const {likes, dislikes} = useSelector((state)=> state.likeDislikes)
    // const data = useSelector((state)=> state.likeDislike)

    const dispatch = useDispatch()

    const handleIncreaseLike = () => {
        dispatch(increaseLike())
    }
    const handleDecreaseLike = () => {
         dispatch(increaseDislike())
    }
    const handleReset = () => {
         dispatch(resets())
    }
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className=" bg-white shadow-md max-w-md rounded-lg p-8 space-y-6">
                <h2 className=" text-3xl font-bold mb-5">Like Dislike App</h2>
                <div>
                    <p>Likes : <span className=" text-green-500">{likes}</span></p>
                    <p>Dislike : <span className=" text-red-500">{dislikes}</span></p>
                </div>
                <div className=" space-x-3"> 
                    <button onClick={handleIncreaseLike} className=" px-4 py-2 text-white bg-blue-500 hover:bg-blue-500 rounded">Like</button>
                    <button onClick={handleDecreaseLike} className=" px-4 py-2 text-white bg-red-500 hover:bg-blue-500 rounded">Dislike</button>
                    <button onClick={handleReset} className=" px-4 py-2 text-white bg-orange-500 hover:bg-blue-500 rounded">Reset</button>
                </div>

            </div>
            
        </div>
    );
};

export default LikeDislike;