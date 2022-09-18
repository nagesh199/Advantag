import React from "react";
import {CanvasJSChart} from 'canvasjs-react-charts';
import styles from "./main.module.css"

export const Graph= ()=>{
    const options = {
        animationEnabled: true,
        // title:{
        //     text: "Monthly Sales"
        // },
        axisX: {
            valueFormatString: "DDD"
        },
        axisY: {
            title: "Sales (in USD)",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$#,##K",
            xValueFormatString: "Week",
            type: "spline",
            dataPoints: [
                { x: new Date(2022, 0), y: 25060 },
                { x: new Date(2022, 1), y: 27980 },
                { x: new Date(2022, 2), y: 42800 },
                { x: new Date(2022, 3), y: 32400 },
                { x: new Date(2022, 4), y: 35260 },
                { x: new Date(2022, 5), y: 33900 },
                { x: new Date(2022, 6), y: 40000 },
                { x: new Date(2022, 7), y: 52500 },
                { x: new Date(2022, 8), y: 32300 },
                { x: new Date(2022, 9), y: 42000 },
                { x: new Date(2022, 10), y: 37160 },
                { x: new Date(2022, 11), y: 38400 }
            ]
        }]
    }

    return <div className={styles.main_overview}>
                <div className={styles.sales_overiew}>
                    <div className={styles.total_sales}>
                        <label>Total Sales Overview <p>7-13 Agust,2020 </p></label>
                    </div>
                    <div className={styles.total_sales1}>
                        
                        <span>Filter by | </span>
                        <span>This Week</span>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>$74,729.00</h3>
                        <span><img src=""/>+21% form last week</span>
                    </div>
                    <div>
                        <span>Highest revenue since 2 weeks ago</span>
                    </div>
                </div>
               
                <div style={{marginTop:"30px", width:"75%"}}>
                    <CanvasJSChart options = {options}/>
                </div>
                
    </div>
}