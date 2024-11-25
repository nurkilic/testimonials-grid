const Card = ({ img, name, header, text }) => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <img src={img} />
        <div className="">
          <h1 className="font-[400] leading-4 text-[11px]">{name}</h1>
          <h3 className=" text-[10px] opacity-50">Verified Graduate</h3>
        </div>
      </div>
      <h2 className="text-base font-semibold mb-4">{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
