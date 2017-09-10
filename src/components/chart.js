import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type={"avg"}/>
            </Sparklines>
            <div>{(props.unit==='K')?(average(props.data)-273):average(props.data)} {(props.unit==='K')?'C':props.unit}</div>
        </div>
    );
}