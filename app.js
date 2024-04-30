let select = document.querySelectorAll("select");

select.forEach(function (val) {
	for (const key in countryList) {
		let option = document.createElement("option");
		option.innerText = key;
		val.appendChild(option);
	}
});

let flag1 = document.querySelector(".flag1");
let flag2 = document.querySelector(".flag2");

let select1 = document.querySelector("#from");
let select2 = document.querySelector("#to");

select1.addEventListener("change", function () {
	flag1.setAttribute(
		`src`,
		"https://flagsapi.com/" + countryList[select1.value] + "/flat/64.png"
	);
});

select2.addEventListener("change", function () {
	flag2.setAttribute(
		`src`,
		"https://flagsapi.com/" + countryList[select2.value] + "/flat/64.png"
	);
});

currencyApi =
	"https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LSNqPvSNhetO2fVgzMmR4M5GxSZZ30U79SOyos8a&base_currency=";



	select2.addEventListener("change", async function  () {
		firstselect = select1.value;
		newapi = currencyApi + firstselect;
		response = await fetch(newapi);
		data = await response.json();
		console.log(data);
        to = data.data[select2.value];
		console.log(to);
	});


	select1.addEventListener("change", async function () {
		firstselect = select1.value;
		newapi = currencyApi + firstselect;
		response = await fetch(newapi);
		data = await response.json();
		to = data.data[select2.value];
		console.log(to);
	});


	btn = document.querySelector("button");
	btn.addEventListener("click", function () {
		result = document.querySelector(".result");
		amount = document.querySelector("#amount");
		result.innerText =
			amount.value +
			" " +
			select1.value +
			" " +
			"=" +
			" " +
			to * amount.value +
			" " +
			select2.value;
	});

