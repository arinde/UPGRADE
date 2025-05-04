import React, { useState, useEffect } from 'react'; 


export default function Counter () { 
    const [count, setCount] = useState(1); 
    
    useEffect(() => { 
        const interval = setInterval(() => { 
            setCount((prevCount) => { 
                if (prevCount < 90) { 
                    return prevCount + 1; 
                } else { 
                    clearInterval(interval); 
                    return prevCount; 
                } 
            }); 
        }, 30); 
        return () => clearInterval(interval); 
    }, []); 
    
    const scale = count / 90; 
    const circleSize = 100 + scale * 10; 
    const barWidth = 100 + scale * 200; 
    
    return ( 
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}> 
            <div 
                style={{ 
                    width: circleSize, 
                    height: circleSize, 
                    backgroundColor: 'purple', 
                    borderRadius: '50%', 
                    color: 'white', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    fontSize: 32, 
                    transition: 'all 0.3s ease', 
                    zIndex: 2, 
                }} 
            > 
            
                {count} 
            </div> 

            <div 
                style={{ 
                    width: barWidth, 
                    height: 50, 
                    backgroundColor: 'black', 
                    borderRadius: 25, 
                    marginLeft: -55, 
                    transition: 'all 0.3s ease', 
                    zIndex: 1, 
                    border: '5 solid, white',
                }} 
            /> 
        </div> 
    ); 
}; 


/*  */