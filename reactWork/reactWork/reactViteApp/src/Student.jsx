import React from "react";

function Student({data}) {
    return (
        <div className="main">

            <div className="icard">

                <img src={data.image} alt="image" />
                <h1>Student Details</h1>
                <p>Name: {data.name}</p>
                <p>DOB: {data.dob}</p>
                <p>Roll No:{data.roll_no}</p>
                <p>Course: {data.course}</p>
            </div>
        </div>
    );
}
export default Student;

