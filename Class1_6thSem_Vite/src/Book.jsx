import React from 'react';
function Book({data}){
    return (
        <>
        <div>
            <h3>{data.title}</h3>
            <h3>{data.author}</h3>
            <h3>{data.isbn}</h3>
            <h3>{data.price}</h3>
         
        </div>7
        <div>
            <h3>{data.title}</h3>
            <h3>{data.author}</h3>
            <h3>{data.isbn}</h3>
            <h3>{data.price}</h3>
         
        </div>
        <div>
            <h3>{data.title}</h3>
            <h3>{data.author}</h3>
            <h3>{data.isbn}</h3>
            <h3>{data.price}</h3>
         
        </div>
        </>
    )
}
export default Book;