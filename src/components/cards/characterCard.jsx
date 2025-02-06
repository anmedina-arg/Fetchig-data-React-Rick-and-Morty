const CharacterCard = ({ name, imagen }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={imagen} alt={`foto del personaje ${name}`} />
    </>
  );
};

export default CharacterCard;
