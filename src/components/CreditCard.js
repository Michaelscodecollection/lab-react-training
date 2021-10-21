function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div>{type}</div>
      <div>{number}</div>
      <div>{expirationMonth}</div>
      <div>{expirationYear}</div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
