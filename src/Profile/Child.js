import React from 'react'
import Profile from './Profile'


const Child = () => {
const handleAlert =(fullName)=>{
    alert( `Hi, I am ${fullName}`)
}
const stylish = {color:"red", textAlign:'center'}
            
    return (
        <div style ={stylish} className="child.js">
            <Profile fullName='mounir zogomo'
                    bio='main mid' 
                    profession='proplayer'
                    
                    handleName={handleAlert}
                    />
        </div>
        )
}


export default Child
