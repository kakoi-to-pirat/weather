import React, { Component } from "react";
import './App.css';
import {fetchData} from './utils/Api'
import {parsToTemperature} from './utils/Tools'
import {
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  Line,
  Label
} from "recharts";

const getWeather = async () =>  await parsToTemperature(await fetchData());

class Weather extends Component 
{
    constructor(){
        super();
        this.state = {dataWeather: [{name : "0", temperature : 15},{name : "1", temperature : 15}]};
    }
    async buttonGetWeather() {
        this.setState({dataWeather : await getWeather()})
    }
    graphDraw(){
         return(
            <div>
                <LineChart width={1100} height={300} data={this.state.dataWeather}>
                    <XAxis dataKey="name" stroke="#000" angle={45} position="insideBottom">
                    <Label value="дата" offset={-3} position="insideBottom" />
                    </XAxis>
                    <YAxis  unit = "°" dataKey="temperature" stroke="#000">
                        <Label value="Температура" offset={5} position="insideLeft" angle = {-90}/>
                    </YAxis>
                    <CartesianGrid stroke="#eee"/>
                    <Line type="monotone" dataKey="temperature" stroke="#12b202" /><br></br>
                </LineChart>
            </div> 
        )   
    }
    render() {
        
        return (
        <div>
            <button onClick = { 
                async () => {
                await this.buttonGetWeather();
                }
            }> Получить погоду </button><br></br><br></br><br></br><br></br>
           {this.graphDraw()}
        </div>
        );
    }
}   

export {Weather};
