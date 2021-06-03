import React,{useState} from "react"


export default function Products(): JSX.Element{
    const [amount,setAmount] = useState<number>(50);
function buyShoe():void{
setAmount(amount-1);
}
    return(
        <div className="Home">
           Amount of shoes is :{amount}
           <button onClick={buyShoe} >Buy</button>
        </div>
    )
}