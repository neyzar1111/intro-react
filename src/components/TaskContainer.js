import PropTypes from 'prop-types';

const TaskContainer = (props) =>{
    return(

        <div id="taskContainer">
            <h1>{props.title}</h1>
        </div>

    )
}
TaskContainer.defaultProps ={
    title: "Task Tracker", // default properties
}
TaskContainer.propTypes = {
    title: PropTypes.string.isRequired, // if here is string you can not pass numbers
}
export default TaskContainer;