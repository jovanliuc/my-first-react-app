import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Calculator } from '../components';
import * as actions from '../actions/calculator';

const mapStateToProps = state => ({
    calculator: state.calculator,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators (
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
