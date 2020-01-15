import { render } from '@testing-library/react';
import { Action, RoadBookEditorContext } from '../../RoadBookManager/RoadBookEditor';
import React, { useContext, useReducer } from 'react';
import { Button } from '@material-ui/core';

type State = {
    test: string;
}

function reducer(state: State, action: Action) {
    return { test: test + 'cenas' };
}

export default function QuestionList() {
    const editorContext = useContext(RoadBookEditorContext);
    const [state, dispatch] = useReducer(reducer, { test: "" });

    return (
        <div></div>
    );
}