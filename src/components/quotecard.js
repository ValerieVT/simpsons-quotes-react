import React from 'react';
import './quotecard.css';
import PropTypes from 'prop-types';

function QuoteCard(props) {
    return(
  <figure className="QuoteCard">
    <img
      src={props.image}
      alt=""/>
    <figcaption>
      <blockquote>{props.quote}
      </blockquote>
    <cite>{props.characterFirstName + ' ' + props.characterLastName}</cite>
    </figcaption>
  </figure>
    );
}

QuoteCard.propTypes = {
  characterFirstName: PropTypes.string.isRequired,
  characterLastName: PropTypes.string.isRequired,
};
export default QuoteCard;