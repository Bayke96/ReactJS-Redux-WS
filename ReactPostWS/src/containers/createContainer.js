import { connect } from 'react-redux';
import Create from '../components/createPost';
import { createNewPost } from '../actions/thunks';

const mapStateToProps = (state) => {
    return {
        user: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => dispatch(createNewPost())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);