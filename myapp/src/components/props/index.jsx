import Button from "../../component/Button"
function StudentCard({name="guest",age=18,isStudent=true}){
     //const{name,age,isStudent}=props //destructing
     const handleClick = () => alert(`clicked!`);
  const handleAdd = () => alert(`Added`);
  const handleViewMore = () => alert(`view`);
    return(
        <div>
             {/* <h1>Name:{props.name}</h1>
            <h2>Age:{props.age}</h2>
            <h2>isStudent:{props.isStudent?"yes":"no"}</h2> */ }
            <h1>Name:{name}</h1>
            <h2>Age:{age}</h2>
            <h2>isStudent:{isStudent?"yes":"no"}</h2>

            <Button
        onClick={handleClick}
        onAdd={handleAdd}
        onViewMore={handleViewMore}
      />
        </div>
    )
}

export default StudentCard