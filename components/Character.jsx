export default function Character({ name, species, image }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{species}</p>

      <img
        src={image}
        alt={name}
        width={300}
        height={300}
      />
    </>
  );
}