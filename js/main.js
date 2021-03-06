$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

Visibility.onVisible(function() {
	setTimeout(function() {
		$(".introduction blockquote").addClass("animate__animated animate__fadeInDown");
	}, 200);
	setTimeout(function() {
		$(".introduction .btn").addClass("animate__animated animate__fadeInDown");
	}, 600);
	setTimeout(function() {
		$(".animar").addClass("animate__animated animate__fadeInLeft");
	}, 1600);
	setTimeout(function() {
		$(".animar-port").addClass("animate__animated animate__fadeInUp");
	}, 1000);


		setTimeout(function() {
		$(".animar-interno").addClass("animate__animated animate__fadeInLeft");
	}, 1000);
		setTimeout(function() {
		$(".introduction-interna h1").addClass("animate__animated animate__fadeInDown");
	}, 200);
	setTimeout(function() {
		$(".introduction-interna p").addClass("animate__animated animate__fadeInDown");
	}, 600);
});

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "contato@catnip.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Voc?? pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com voc??. Abra??os.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Voc?? pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});
