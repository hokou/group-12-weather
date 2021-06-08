
const rain_url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization="

let B1 = document.querySelector(".B1");
let C4 = document.querySelector(".C4");

image(B1, "P7010089.jpg");
image(C4,"P5090484.jpg");

function image(block, img){
	block.style.backgroundImage = `url("https://github.com/motestw64631/group-12-weather/tree/master/images/${img}")`;
	block.style.backgroundSize="auto 100%";
	block.style.backgrounAttachment="scroll";
}

let area_list = ["臺北","臺中","高雄","桃園","新竹","臺南"]
let div_list = ["B2","B3","B4","C1","C2","C3"]

for (let i=0; i<area_list.length; i++) {
	rain_data(area_list[i], div_list[i]);
}

function rain_data(locationName, block) {
    fetch(rain_url + CWB_API_KEY + '&' + 'locationName=' + locationName).then((response) => {
        return response.json();
    }).then((result) => {
		let data = result.records.location[0];
		console.log(data.locationName);
		let JSON = data_get(data);
		block_render(block, JSON);
    });
}

function data_get(data) {
	let name = data.locationName;
	let obsTime = data.time.obsTime;
	let weatherElement = data.weatherElement;
	let NOW;
	let RAIN;
	let HOUR_12;
	console.log(weatherElement);
	weatherElement.forEach(element => {
		if (element.elementName === "NOW"){
			NOW = check_val(element.elementValue);
		}
		if (element.elementName === "RAIN"){
			RAIN = check_val(element.elementValue);
		}
		if (element.elementName === "HOUR_12"){
			HOUR_12 = check_val(element.elementValue);
		}
	});

	let JSON = {
		"name":name,
		"NOW":NOW,
		"RAIN":RAIN,
		"HOUR_12":HOUR_12,
		"time":obsTime
	}

	return JSON
}

function check_val(val) {
	let datavalue = Number(val);
	// 1. 雨量值小於 0.00 皆表示該時刻因故無資料。
	// 2. 雨量值為 -998.00 表示RAIN=MIN_10=HOUR_3=HOUR_6= 0.00。
	if (datavalue <= 0 ){
		datavalue = 0;
	}
	return datavalue
}

function block_render(block, JSON) {
	let blockname = document.querySelector(`.${block}`)
	let name = document.createElement("h2");
	let NOW = document.createElement("h3");
	let RAIN = document.createElement("h3");
	let HOUR_12 = document.createElement("h3");
	let time = document.createElement("p");
	time.classList.add("bodyText");
	name.textContent = JSON.name;
	NOW.textContent =`本日累積雨量：${JSON.NOW} 毫米`;
	RAIN.textContent =`60分鐘累積雨量：${JSON.RAIN} 毫米`;
	HOUR_12.textContent =`12小時累積雨量：${JSON.HOUR_12} 毫米`;
	time.textContent =JSON.time;
	blockname.appendChild(name);
	blockname.appendChild(NOW);
	blockname.appendChild(RAIN);
	blockname.appendChild(HOUR_12);
	blockname.appendChild(time);
}

// let records=null;
// fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization="+CWB_API_KEY).then((response)=>{
// 	return response.json();
// }).then((data)=>{
// 	records=data.records;
// 	renderRaining(0);
// });
// function renderRaining(page){
// 	let startIndex=page*10;
// 	let endIndex=(page+1)*10;
// 	const container=document.querySelector("#raining");
// 	for(let i=startIndex;i<endIndex;i++){
// 		const location=records.location[i];
// 		const item=document.createElement("div");
// 		item.className="location";
// 		const town=document.createElement("div");
// 		town.className="town";
// 		town.textContent=location.parameter[0].parameterValue+"、"+location.parameter[2].parameterValue;
// 		const amount=document.createElement("amount");
// 		amount.className="amount";
// 		amount.textContent=location.weatherElement[6].elementValue+" mm";
// 		item.appendChild(town);
// 		item.appendChild(amount);
// 		container.appendChild(item);
// 	}
// }