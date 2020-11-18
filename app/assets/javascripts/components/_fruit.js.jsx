class Fruit extends React.Component {
  render(){
    return(
      <div>
        <h2>{this.props.fruit.name}</h2>
        <h2>{this.props.fruit.description}</h2>
        <button onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete fruit</button>
      </div>
    )
  }
}