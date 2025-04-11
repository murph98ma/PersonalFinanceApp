import React, { useEffect , useState} from "react";
import {BarChart} from "@mui/x-charts"
import axios from "axios";
import "./GrowthGraph.css"


function GrowthChart({chartData}){

  if (!chartData.months || !chartData.values || chartData.months.length === 0 || chartData.values.length === 0) {
    return <div>Loading Growth Graph...</div>; // or return null if you prefer no placeholder
  }

    return (
        <div className="bar-chart-container">
    
          <BarChart 
                xAxis={[
                    {
                      id: 'barCategories',
                      data: chartData.months,
                      scaleType: 'band',
                    },
                  ]}
                  series={[
                    {
                      data: chartData.values
                    },
                  ]}
            
            />
        </div>
    )
}

export default GrowthChart;