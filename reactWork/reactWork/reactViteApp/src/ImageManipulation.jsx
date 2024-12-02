import React, { useState } from 'react'
import photo from './mouse.jpg'

function ImageManipulation() {
    const[height, setHeight] = useState(150)
    const[width, setWidth] = useState(150)
    const[red, setRed] = useState(200) 
    const[green, setGreen] = useState(200)
    const[blue, setBlue] = useState(200)
function EnhanceHeight(){
    setHeight(height + 10);
}
function EnhanceWidth(){
    setWidth(width + 10);
}

function Dorotate(){
    setImageRotation()
}

function colorChange(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}
// function EnhanceHeight(){
//     alert('Hii');
// }
  return (
    <div style={{height : '400px', width:'400px', border:'2px solid black', marginLeft:'200px', marginTop:'210px'}}>
        <div  style={{paddingLeft:'100px', backgroundColor:`RGB(${(red)}, ${(green)}, ${(blue)})`}}>
            <img src={photo} height={height} width={width}/>
        </div>
        <div>
            
            <button onClick={EnhanceHeight}>EnhanceHeight</button>&nbsp;&nbsp;&nbsp;
            <button onClick={EnhanceWidth}>EnhanceWidth</button>&nbsp;&nbsp;&nbsp;
            <button onClick={Dorotate}>Rotate</button>&nbsp;&nbsp;&nbsp;
            <button onClick={colorChange}>Color</button>&nbsp;&nbsp;&nbsp;

        </div>
    </div>
  )
}

export default ImageManipulation