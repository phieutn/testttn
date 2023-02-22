const PhoneBookItem = ({item}) => {
    return <div className="row">
      <div className="col-6">
        <input type="checkbox"/>
        {item.name}
        </div>
      
    </div>;
  };
  
  export default PhoneBookItem;