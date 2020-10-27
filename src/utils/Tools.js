const averageValue = (min, max) => Math.round((min + max) / 2);

const parsToTemperature = (data) =>{
const result = data.list.map((item) =>  { 
  return {
    name : item.dt_txt.slice(8, 10),
    temperature : averageValue(item.main.temp_min, item.main.temp_max)}

});
return result;
}

export {parsToTemperature};