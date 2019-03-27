import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';

export class ShotChart extends React.Component {
   
    render() {
        return (
            <div id="shot-chart"></div>
        );
    }
}