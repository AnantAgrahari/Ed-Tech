


function Filter({filterData}){
    return(
        <div className="fill">
         {filterData.map((data)=>{
             return( <button key={data.id}>
                {data.title}
              </button>)
         })}
        </div>
    )
}
export default Filter;
