function ListItem(props) {
  console.log(props.items);
  return props.items.map((item) => {
    return <li>{item}</li>;
  });
}
export default ListItem;
