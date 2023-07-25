import React from "react";
import CardItems from "./CardItems";

const Cards= (props)=>{
    let courses=props.courses;

    function getCourses() {
        let allCourses=[];
        Object.values(courses).forEach( array=>{
            array.forEach(courseData=>{                            //converting the entire api data into array form//
                allCourses.push(courseData);                  //to push the data into empty array// 
            })
        })
        return allCourses;
    }


    return(
        <div>
            {
       getCourses().map( (course)=>(
       <CardItems key={course.id}  course={course} />
       ))
       }
        </div>
    )
}
export default Cards;

