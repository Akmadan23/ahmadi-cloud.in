function show(x){
	switch (x) {
		case 0:
			document.getElementById("main-home").style="display: block;";
			document.getElementById("main1").style="display: none;";
			document.getElementById("main2").style="display: none;";
			document.getElementById("main3").style="display: none;";

			document.getElementById("menu-home").style="display: block;";
			document.getElementById("menu1").style="display: none;";
			document.getElementById("menu2").style="display: none;";
			document.getElementById("menu3").style="display: none;";
			break;

		case 1:
			document.getElementById("main-home").style="display: none;";
			document.getElementById("main1").style="display: block;";
			document.getElementById("main2").style="display: none;";
			document.getElementById("main3").style="display: none;";
			document.getElementById("menu-home").style="display: none;";
			document.getElementById("menu1").style="display: block;";
			document.getElementById("menu2").style="display: none;";
			document.getElementById("menu3").style="display: none;";
			break;

		case 2:
			document.getElementById("main-home").style="display: none;";
			document.getElementById("main1").style="display: none;";
			document.getElementById("main2").style="display: block;";
			document.getElementById("main3").style="display: none;";

			document.getElementById("menu-home").style="display: none;";
			document.getElementById("menu1").style="display: none;";
			document.getElementById("menu2").style="display: block;";
			document.getElementById("menu3").style="display: none;";
			break;

		case 3:
			document.getElementById("main-home").style="display: none;";
			document.getElementById("main1").style="display: none;";
			document.getElementById("main2").style="display: none;";
			document.getElementById("main3").style="display: block;";

			document.getElementById("menu-home").style="display: none;";
			document.getElementById("menu1").style="display: none;";
			document.getElementById("menu2").style="display: none;";
			document.getElementById("menu3").style="display: block;";
			break;
	}
}
