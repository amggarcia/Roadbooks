import React from 'react';
import RoadBookCardList from './RoadBookCardList';
import { Route } from 'react-router-dom';
import RoadBookEditor from './RoadBookEditor';

export default function RoadBookManager() {

    return (
        <div>
            <Route exact path="/RoadBookManager" render={() => <RoadBookCardList />}></Route>
            <Route exact path="/RoadBookManager/Edit/:objectId" render={(props) => <RoadBookEditor IsEdit={true} />}></Route>
            <Route exact path="/RoadBookManager/Create" render={(props) => <RoadBookEditor IsEdit={false} />}></Route>
        </div >
    )
}



        //Another way to theme Components can be used to make an "extension" of Button component and then used instead of Button where needed
// const ToolBarButton = withStyles({
//     root: {marginRight : 10},
// })(Button);