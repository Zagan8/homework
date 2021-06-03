import React from "react"
import LoadingImg from '../../assets/images/loading.gif'
export default function Loader():JSX.Element{
    return(
        <div className="loader" >
            please wait....
            <img src={LoadingImg} alt="" />
        </div>
    )
}