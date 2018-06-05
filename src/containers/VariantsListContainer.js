import {VariantsList} from '../components';
import {connect} from 'react-redux';

import * as VariantsListActions from '../actions/VariantsListActions';

const mapStateToProps = ( state ) => {
    return ( {
        variants: state.variantsList.variants,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        fetchVariantsList: () => {
            dispatch( VariantsListActions.fetchVariants() );
       },
    };
};

const VariantsListContainer = connect( mapStateToProps,
    mapDispatchToProps )( VariantsList );

export default VariantsListContainer;
