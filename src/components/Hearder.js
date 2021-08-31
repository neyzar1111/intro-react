import PropTypes from 'prop-types';

const Header = (props) =>{
    return(

        <header>
            <h1>{props.title}</h1>
        </header>

    )
}
Header.defaultProps ={
    title: "Task Tracker", // default properties
}
Header.propTypes = {
    title: PropTypes.string.isRequired, // if here is string you can not pass numbers
}
export default Header;
