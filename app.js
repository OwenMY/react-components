class GroceryListItem extends React.Component {
  constructor(props) {
    super(props); //React.Component.call(this, GroceryListItem)  This adds all properties

    //this is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
        <GroceryListItem item={item} />
      )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Chicken', 'Rice']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
//=================================