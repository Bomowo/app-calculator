import PropTypes from 'prop-types';

export default function CalcButton ({value, calcClick}) {

    return (<button className="col" onClick={() => calcClick(value)}>{value}</button>)

}

CalcButton.propTypes = {
    value: PropTypes.string.isRequired,
    calcClick: PropTypes.func.isRequired
}