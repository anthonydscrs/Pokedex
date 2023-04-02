import PropTypes from "prop-types";

function PokemonCard({ props }) {
  const { name, imgSrc } = props;

  return (
    <figure>
      {imgSrc != undefined ? <img src={imgSrc} alt={name}></img> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
