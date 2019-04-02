import { connect } from 'react-redux';
import Delete from '../components/deletePost';
import { deleteExistingPost } from '../actions/thunks';
import { resetPostDELETE } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        user: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteExistingPost: () => dispatch(deleteExistingPost()),
        resetPostDELETE: () => dispatch(resetPostDELETE())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Delete);