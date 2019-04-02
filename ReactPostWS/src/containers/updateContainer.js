import { connect } from 'react-redux';
import Update from '../components/updatePost';
import { updateExistingPost } from '../actions/thunks';

const mapStateToProps = (state) => {
    return {
        user: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateExistingPost: () => dispatch(updateExistingPost())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);