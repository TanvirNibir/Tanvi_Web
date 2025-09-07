// function List() {
//   const fruits = ["apple", "banana", "cherry", "cherry", "cocunut", "Dates"];
//   const listItems = fruits.map(fruits => <li> {fruits}</li>);
  
//   return (<ul> {listItems}</ul>)
                                                             // Order list 
// }

// export default List



// arraystrings to array of objects

function List() {
  const fruits = [{ name: "apple", calories: 90 },
    
  {
    name: "banana", calories: 100
  }
  ,{ name: "cherry", calories: 120 },
  { name: "cocunUR", calories: 90 },
  { name: "Dates", calories: 90 }];
    
  const listItems = fruits.map(fruits => <li> {fruits.name}</li>);
  
  return (<ul> {listItems}</ul>)
                                                             //Order list 
}

export default List

