import { connect } from 'react-redux';
import Read from '../components/readPost';
import { resetPostGET } from '../actions/actions';
import { getPostInfo } from '../actions/thunks';

const mapStateToProps = (state) => {
    return {
        post: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        readPost: () => dispatch(getPostInfo()),
        resetPostGET: () => dispatch(resetPostGET())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Read);