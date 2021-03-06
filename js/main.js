function salvar(social = null){
	trataTexto($('#caixa-texto').val());
	switch (social){
		case 'facebook':
			html2canvas($('.image-textarea'), {
				onrendered: function (canvas) {
					var imagedata = canvas.toDataURL('image/png');
					var imgdata = imagedata.replace(/^data:image\/(png|jpg);base64,/, "");

					$.ajax({
						url: 'salvarImagem.php',
						data: {
							imgdata:imgdata
						},
						type: 'post',
						success: function (response) {
							$("meta[property='og\\:image']").attr("content", "http://henriquepappis.com/cirio/saves/23-08-2017-14:23:15");
							// var a = $("<a>").attr("href", "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fhenriquepappis.com%2Fcirio%2F&amp;src=sdkpreparse");
							var a = $("<a>").attr("href", "https://www.facebook.com/sharer/sharer.php?app_id=141826299743153&u=http%3A%2F%2Fhenriquepappis.com%2Fcirio%2F&amp;src=sdkpreparse&image=http%3A%2F%2Fhenriquepappis.com%2Fcirio%2F"+response+"&display=popup&ref=plugin&src=share_button");
 							a[0].click();
							a.remove();
						}
					});
				}
			});
			break;

		case 'twitter':
			html2canvas($('.image-textarea'), {
				onrendered: function (canvas) {
					var imagedata = canvas.toDataURL('image/png');
					var imgdata = imagedata.replace(/^data:image\/(png|jpg);base64,/, "");

					$.ajax({
						url: 'salvarImagem.php',
						data: {
							imgdata:imgdata
						},
						type: 'post',
						success: function (response) {
							console.log("Resposta: "+response);
							// var a = $("<a>").attr("href","https://twitter.com/intent/tweet?text=Acabei%20de%20criar%20minha%20'Placa%20do%20Cirio'%2E%20Crie%20a%20sua%20também%2E%20http://henriquepappis.com/cirio/placaPage.php").appendTo("body");
							// a[0].click();
							// a.remove();
						}
					});
				}
			});
			break;

		case 'download':
			html2canvas($('.image-textarea'), {
				onrendered: function (canvas) {
					var imagedata = canvas.toDataURL('image/png');
					var imgdata = imagedata.replace(/^data:image\/(png|jpg);base64,/, "");
					$.ajax({
						url: 'salvarImagem.php',
						data: {
							imgdata:imgdata
						},
						type: 'post',
						success: function (response) {
							console.log("Resposta: "+response);
							var a = $("<a>").attr("href", response).attr("download", "placaCirio.png").appendTo("body");
							a[0].click();
							a.remove();
						}
					});
				},
				background: undefined,
				letterRendering: true,
			});
			break;

		default:
			alert('Erro na solicitação.');
			break;
	}
}

var textarea = document.getElementById("caixa-texto");

textarea.addEventListener("paste", function() {
    if (this.value !== "")
    {
        this.value = this.value + "\n";
    }

}, false);

function trataTexto(texto){
	texto = texto.replace(/\n\r?/g, '<br />');
	return false;
}