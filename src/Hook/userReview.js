import { useEffect, useState } from "react"

const useReview =()=>{
    const [productReviews, setProductReview]=useState([]);
    useEffect( ()=>{
        fetch('review.json')
        .then(res=> res.json())
        .then(data => setProductReview(data));
    },[]);
    return[productReviews, setProductReview];
}
 export default useReview;