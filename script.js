const btn=document.querySelector('.check');
const info=document.querySelector('.info');
var sc=document.getElementById('exampleInputEmail1');
var cityname=document.querySelector('.cityname');
const s0=document.querySelector('.s0');
const s1=document.querySelector('.s1');
const s2=document.querySelector('.s2');
const s3=document.querySelector('.s3');
const s4=document.querySelector('.s4');
const s5=document.querySelector('.s5');
const s6=document.querySelector('.s7');
const s8=document.querySelector('.s8');
const s9=document.querySelector('.s9');
	// cityname.textContent=" ";

	cityname.textContent=sc.value;

btn.addEventListener('click',function(){
		if(sc.value!=""){
			info.classList.toggle('info2');
		}
		
			console.log(sc.value);

		const config={
	params:{city:`${sc.value}`},
	headers:{'X-RapidAPI-Key':'c2818b7040msh9f02b0ddd3617bep199960jsncdf06b9ea30a'}
};

const res=axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?',config)

.then((response)=>{
    // console.log(response.data);
	// console.log(response.data.feels_like);
	s0.textContent=response.data.temp;
	s1.textContent=response.data.max_temp;
	s2.textContent=response.data.min_temp;
	s3.textContent=response.data.feels_like;
	s4.textContent=response.data.humidity;
	s5.textContent=response.data.wind_speed;
	s6.textContent=response.data.wind_degrees;
	s7.textContent=response.data.sunrise;
	s8.textContent=response.data.sunset;
	s9.textContent=response.data.cloud_pct;
	
})
.catch((err)=>{
    console.log(err);
})
		
		// s0.textContent=




})


