import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductList } from '../components';
import * as actions from '../actions/productlist';

const mapStateToProps = state => ({
    productlist: state.productlist,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators (
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
