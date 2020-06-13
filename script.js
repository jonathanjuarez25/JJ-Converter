//temperature conversion functions//
function fahrenheitConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputCelsius").value = (valNum-32) / 1.8;
  document.getElementById("inputKelvin").value = ((valNum-32) / 1.8) + 273.15;
}

function celsiusConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputFahrenheit").value = (valNum * 1.8)+ 32;
  document.getElementById("inputKelvin").value = valNum + 273.15;
}

function kelvinConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputFahrenheit").value = ((valNum-273.15)*1.8)+ 32;
  document.getElementById("inputCelsius").value = valNum-273.15;
}
//<--General Reset Function-->
function resetTemp(){
	document.getElementById("inputFahrenheit").value="";
	document.getElementById("inputCelsius").value="";
	document.getElementById("inputKelvin").value="";
}

//Weight Converter functions
function kiloConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputGrams").value = valNum*1000;
  document.getElementById("inputPounds").value = valNum*2.2046;
  document.getElementById("inputOunces").value = valNum*35.274;
}
function gramConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilograms").value = valNum/1000;
  document.getElementById("inputPounds").value = valNum*0.0022046;
  document.getElementById("inputOunces").value = valNum*0.035274;
}
function poundConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilograms").value = valNum/2.2046;
  document.getElementById("inputGrams").value = valNum/0.0022046;
  document.getElementById("inputOunces").value = valNum*16;
}
function ounceConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilograms").value = valNum/35.274;
  document.getElementById("inputGrams").value = valNum/0.035274;
  document.getElementById("inputPounds").value = valNum*0.0625;
}
function resetWeight() {
  document.getElementById("inputKilograms").value ="";
  document.getElementById("inputGrams").value ="";
  document.getElementById("inputPounds").value ="";
  document.getElementById("inputOunces").value ="";
}
//Length Converter Functions
function kilomConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputMiles").value = valNum*0.62137;
  document.getElementById("inputMeters").value = valNum*1000;
  document.getElementById("inputCm").value = valNum*100000;
  document.getElementById("inputInches").value = valNum*39370;
  document.getElementById("inputFeet").value = valNum*3280.8;
  document.getElementById("inputYards").value = valNum*1093.6;
}

function meterConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilometers").value = valNum/1000;
  document.getElementById("inputMiles").value = valNum*0.00062137;
  document.getElementById("inputCm").value = valNum/0.01;
  document.getElementById("inputInches").value = valNum*39.370;
  document.getElementById("inputFeet").value = valNum*3.2808;
  document.getElementById("inputYards").value = valNum*1.0936;
}

function cmConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilometers").value = valNum/100000;
  document.getElementById("inputMiles").value = valNum*0.0000062137;
  document.getElementById("inputMeters").value = valNum/100;
  document.getElementById("inputInches").value = valNum*0.39370;
  document.getElementById("inputFeet").value = valNum*0.032808;
  document.getElementById("inputYards").value = valNum*0.010936;
}

function inchConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilometers").value = valNum/39370;
  document.getElementById("inputMiles").value = valNum*0.000015783;
  document.getElementById("inputMeters").value = valNum/39.370;
  document.getElementById("inputCm").value = valNum/0.39370;
  document.getElementById("inputFeet").value = valNum*0.083333;
  document.getElementById("inputYards").value = valNum*0.027778;
}

function feetConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilometers").value = valNum/3280.8;
  document.getElementById("inputMiles").value = valNum*0.00018939;
  document.getElementById("inputMeters").value = valNum/3.2808;
  document.getElementById("inputCm").value = valNum/0.032808;
  document.getElementById("inputInches").value = valNum*12;
  document.getElementById("inputYards").value = valNum*0.33333;
}

function yardConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilometers").value = valNum/1093.6;
  document.getElementById("inputMiles").value = valNum*0.00056818;
  document.getElementById("inputMeters").value = valNum/1.0936;
  document.getElementById("inputCm").value = valNum/0.010936;
  document.getElementById("inputInches").value = valNum*36;
  document.getElementById("inputFeet").value = valNum*3;
}

function mileConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputKilometers").value = valNum/0.62137;
  document.getElementById("inputYards").value = valNum*1760;
  document.getElementById("inputMeters").value = valNum/0.00062137;
  document.getElementById("inputCm").value = valNum/0.0000062137;
  document.getElementById("inputInches").value = valNum*63360;
  document.getElementById("inputFeet").value = valNum*5280;
}

function resetLength() {
  document.getElementById("inputKilometers").value = "";
  document.getElementById("inputYards").value = "";
  document.getElementById("inputMeters").value = "";
  document.getElementById("inputCm").value = "";
  document.getElementById("inputInches").value = "";
  document.getElementById("inputFeet").value = "";
  document.getElementById("inputMiles").value = "";
}

//Time Converter Functions
function hourConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputMinutes").value = valNum*60;
  document.getElementById("inputSeconds").value = valNum*3600;
  document.getElementById("inputDays").value = valNum/24;
  document.getElementById("inputWeeks").value = valNum/168;
  document.getElementById("inputMonths").value = valNum/720;
  document.getElementById("inputYears").value = valNum/8760;
}
function minConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputHours").value = valNum/60;
  document.getElementById("inputSeconds").value = valNum*60;
  document.getElementById("inputDays").value = valNum/1440;
  document.getElementById("inputWeeks").value = valNum/10080;
  document.getElementById("inputMonths").value = valNum/43200;
  document.getElementById("inputYears").value = valNum/518400;
}

function secConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputHours").value = valNum/3600;
  document.getElementById("inputMinutes").value = valNum/60;
  document.getElementById("inputDays").value = valNum/86400;
  document.getElementById("inputWeeks").value = valNum/604800;
  document.getElementById("inputMonths").value = valNum/2592000;
  document.getElementById("inputYears").value = valNum/31536000;
}

function dayConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputHours").value = valNum*24;
  document.getElementById("inputMinutes").value = valNum*1440;
  document.getElementById("inputSeconds").value = valNum*86400;
  document.getElementById("inputWeeks").value = valNum/7;
  document.getElementById("inputMonths").value = valNum/30;
  document.getElementById("inputYears").value = valNum/365;
}

function weekConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputHours").value = valNum*168;
  document.getElementById("inputMinutes").value = valNum*10080;
  document.getElementById("inputSeconds").value = valNum*604800;
  document.getElementById("inputDays").value = valNum*7;
  document.getElementById("inputMonths").value = valNum/4.2857;
  document.getElementById("inputYears").value = valNum/52.142857;
}

function monthConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputHours").value = valNum*720;
  document.getElementById("inputMinutes").value = valNum*43200;
  document.getElementById("inputSeconds").value = valNum*2592000;
  document.getElementById("inputDays").value = valNum*30;
  document.getElementById("inputWeeks").value = valNum*4.2857;
  document.getElementById("inputYears").value = valNum/12;
}

function yearConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("inputHours").value = valNum*8760;
  document.getElementById("inputMinutes").value = valNum*525600;
  document.getElementById("inputSeconds").value = valNum*31536000;
  document.getElementById("inputDays").value = valNum*365;
  document.getElementById("inputWeeks").value = valNum*52.142857;
  document.getElementById("inputMonths").value = valNum*12;
}

function resetTime() {
  document.getElementById("inputHours").value = "";
  document.getElementById("inputMinutes").value = "";
  document.getElementById("inputSeconds").value = "";
  document.getElementById("inputDays").value = "";
  document.getElementById("inputWeeks").value = "";
  document.getElementById("inputMonths").value = "";
   document.getElementById("inputYears").value = "";
}

