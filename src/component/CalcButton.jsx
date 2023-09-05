import PropTypes from 'prop-types';

export default function CalcButton ({value, calcClick, cssClass}) {

    return (<button className={cssClass} onClick={() => calcClick(value)}>{value}</button>)

}

CalcButton.propTypes = {
    value: PropTypes.string.isRequired,
    calcClick: PropTypes.func.isRequired,
    cssClass: PropTypes.string.isRequired
}