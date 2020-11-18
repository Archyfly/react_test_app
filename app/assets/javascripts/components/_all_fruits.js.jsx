const AllFruits = (props) => {
    var fruits = props.fruits.map((fruit) =>{
        return (
            <div key={fruit.id}>
              <h1>{fruit.name}</h1>
              <h2>{fruit.description}</h2>
            </div>
        )
    })


return (
  <div>
    {fruits}
  </div>
  )
}