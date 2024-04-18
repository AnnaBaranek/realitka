import "./Estate.css";

export const Estate = (props) => {
  return (
    <div className="property-offer">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>Price: {props.price} BTC</p>
      <p>City: {props.city}</p>
      <div className="contact-details">
        <h2>Contact:</h2>
        <p>Name: {props.contactName}</p>
        <p>Email: {props.contactEmail}</p>
        <p>Phone: {props.contactPhone}</p>
      </div>
      <img src={props.photo} alt="Property photo" />
    </div>
  );
};

