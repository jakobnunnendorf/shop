import React, { useContext } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';

export default function ProductPicture() {
    const { dispatch } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;

    const expand = () => {
        dispatch({ type: 'toggleExpanded', payload: true });
    };

    return <figure onClick={expand}>CollapsedPicture</figure>;
}
