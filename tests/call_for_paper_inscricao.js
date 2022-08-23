const { openBrowser, goto, click, near, link } = require("taiko");

step("Verificar botão cadastro palestras", async function() {
	//throw 'Unimplemented Step';
	await openBrowser();

});

step("Acessar o link de inscrição da cidade e verificar o status <table>", async function(table) {
	
	//for (var row of table.rows) {
        await goto("https://thedevconf.com/tdc/2022/future/");
        await click('Call4Papers');

		let data = new Date();
		let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + (data.getFullYear()); 
		let dataFormatadaDate = new Date();

		let dataStringExpired = "25/09/2022";
		let datasplited = dataStringExpired.split("/");
		let dataString = new Date(datasplited[2]+"/"+datasplited[1]+"/"+datasplited[0])
		
		if (dataFormatadaDate < dataString) {
			await link("SUBMETA SUA PALESTRA", near("End: 25/09/2022")).exists();
			console.log("submeta")
		} else {
			console.log("encerrado")
			await link("CFP ENCERRADO", near("End: 25/09/2022")).exists();

    	}
});