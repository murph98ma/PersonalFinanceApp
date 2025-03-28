import React from "react";
import {BarChart} from "@mui/x-charts"
import "./GrowthGraph.css"


function GrowthChart(props){

    return (
        <div className="bar-chart-container">
    
          <BarChart 
                xAxis={[
                    {
                      id: 'barCategories',
                      data: ['Jan', 'Feb', 'March '],
                      scaleType: 'band',
                    },
                  ]}
                  series={[
                    {
                      data: [2, 100, 3],
                    },
                  ]}
            
            />
        </div>
    )
}

export default GrowthChart;