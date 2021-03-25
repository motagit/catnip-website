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

