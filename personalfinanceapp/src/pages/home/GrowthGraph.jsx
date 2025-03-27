import React from "react";
import {BarChart} from "@mui/x-charts"
import axios from "axios";
import "./GrowthGraph.css"


function GrowthChart(props){

  const[chartData, setChartData] = useState({months: [], values: []});

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