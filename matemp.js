   let celsius = document.getElementById('celsius');
	let fahrenheit = document.getElementById('fahrenheit');
	let kelvin = document.getElementById('kelvin');
    let Rankine = document.getElementById('Rankine');
	celsius.oninput = function () {
		let f = (parseFloat(celsius.value) * 9) / 5 + 32;
		fahrenheit.value = parseFloat(f.toFixed(2));
	
		let k = (parseFloat(celsius.value) + 273.15);
		kelvin.value = parseFloat(k.toFixed(2));

        let r = (parseFloat(kelvin.value) + 273.15) * 9 / 5;
		Rankine.value = parseFloat(c.toFixed(2));
	}
	fahrenheit.oninput = function () {
		let c = ((parseFloat(
			fahrenheit.value) - 32) * 5) / 9;
		celsius.value = parseFloat(c.toFixed(2));
	
		let k = (parseFloat(
			fahrenheit.value) - 32) * 5 / 9 + 273.15;
		kelvin.value = parseFloat(k.toFixed(2));

        let r = (parseFloat(kelvin.value) + 459.67 );
		Rankine.value = parseFloat(c.toFixed(2));
	}
	kelvin.oninput = function () {
		let f = (parseFloat(
			kelvin.value) - 273.15) * 9 / 5 + 32;
		fahrenheit.value = parseFloat(f.toFixed(2));
	
		let c = (parseFloat(kelvin.value) - 273.15);
		celsius.value = parseFloat(c.toFixed(2));

        let r = (parseFloat(kelvin.value)* 9 / 5);
		Rankine.value = parseFloat(c.toFixed(2));
	}
    Rankine.oninput = function () {
		let c = (parseFloat(
			Rankine.value) - 459.75);
		celsius.value = parseFloat(c.toFixed(2));
	
		let f = (parseFloat(
			Rankine.value) - 491.67) * 5 / 9;
		fahrenheit.value = parseFloat(k.toFixed(2));
       
        let k = (parseFloat(
			Rankine.value) * 5 / 9) ;
		kelvin.value = parseFloat(k.toFixed(2));    
    }