const List = ({ listOfNames }) => {
    return (
        <>
       <ul>
          {listOfNames.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        </>
    );
}
export default List;