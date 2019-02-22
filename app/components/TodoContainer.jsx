import { connect } from 'react-redux';
import TodoApp from './TodoApp.jsx';

const mapStateToProps = state => {
  return {
    value: state
  };
};

//const mapDispatchToProps = {};

const TodoContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(TodoApp);

export default TodoContainer;
