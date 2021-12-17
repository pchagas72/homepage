function abrirSite(site){
	window.open(site);
	let aviso = "Abrindo " + site;
	console.log(aviso);
	return 0;
}

	//Relógio -- inicio
        setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min + ":" + sec
  
            document.getElementById("clock")
                .innerHTML = currentTime;

            if (hour >= 5 && hour < 12){
            	document.getElementById("horas").textContent = "Bom Dia";
            }
            else if (hour >= 12 && hour < 19){
            	document.getElementById("horas").textContent = "Boa Tarde";
            }
            else if (hour >= 19 && hour < 23){
            	document.getElementById("horas").textContent = "Boa Noite";
            }
            else if (hour >= 0 && hour < 5){
            	document.getElementById("horas").textContent = "É madrugada";
            }
        }
  
        showTime();
     //Relógio -- fim