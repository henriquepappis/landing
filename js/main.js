function salvar(social = null){	
	switch (social){
		case 'facebook':
			var a = $("<a>").attr("href", "http://henriquepappis.com/cirio/saves/");
			alert('vai gerar face');
			break;
		case 'twitter':
			$("meta[name='twitter\\:image']").attr("content", "http://henriquepappis.com/cirio/img/youtube.png");
			var a = $("<a>").attr("href", 
				"https://twitter.com/intent/tweet?text=Acabei%20de%20criar%20minha%20'Placa do Cirio'%2E%20Crie%20a%20sua%20também%2E%20http://henriquepappis.com/cirio/").appendTo("body");
			
			break;
		case 'download':
			var a = $("<a>").attr("href", response).attr("download", "placaCirio.png").appendTo("body");
			alert('vai gerar download');
			break;
		default:
			var a = $("<a>").attr("href", response).attr("download", "placaCirio.png").appendTo("body");
			alert('vai gerar download default');
			break;
	}

	html2canvas($('.image-textarea'), {
		onrendered: function (canvas) {
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpg);base64,/, "");
			//ajax call to save image inside folder
			$.ajax({
				url: 'salvarImagem.php',
				data: {
					imgdata:imgdata
				},
				type: 'post',
				success: function (response) {
					a[0].click();
					a.remove();
				}
			});
		}
	})
}