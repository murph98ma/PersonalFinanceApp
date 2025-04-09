import React, { useEffect , useState} from "react";
import {BarChart} from "@mui/x-charts"
import axios from "axios";
import "./GrowthGraph.css"


function GrowthChart(props){

  const[chartData, setChartData] = useState({months: [], values: []});

  useEffect(() => {
    axios.get("http://localhost:5000/growthTable") 
    .then((response) =>{
      console.log(response.data);
      setChartData({
        months: response.data.months,
        values: response.data.values
      });
    })
    .catch((error) => {
      console.error("Error fetching growth data: ", error);
    });
  }, []);


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