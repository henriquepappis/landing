function salvar(){
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
					// $(location).attr({target: '_blank', href: response});
					var a = $("<a>")
    					.attr("href", response)
    					.attr("download", "placaCirio.png")
    					.appendTo("body");

					a[0].click();

					a.remove();
				}
			});
		}
	})
}