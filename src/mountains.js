import React from 'react'

export default function Mountains() {
    return (
        <div className="center">
            <div className="mountains">
            <img src={require("./images/mountain1.jpg").default} />
            <img src={require("./images/mountain2.jpg").default}/>
            <img src={require("./images/mountain3.jpg").default}/>
            <img src={require("./images/mountain4.jpg").default}/>
            <img src={require("./images/mountain5.jpg").default}/>
            <img src={require("./images/mountain6.jpg").default}/>
            </div>
        </div>
    )
}
