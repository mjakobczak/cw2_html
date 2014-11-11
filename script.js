$(document).ready(function() {
	$('#navbar ul li a').mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
		$(this).text("• " + $(this).text());
	});
	$('#navbar ul li a').mouseleave(function() {
		$(this).fadeTo('fast', 1);
		$(this).text($(this).text().replace("• ", ""));
	});

	$("#shoto").mouseenter(function() {
		$(this).hide(4000);
	});

	$("#shoto").mouseleave(function() {
		$(this).show(4000);
	});

	$('#logo').mouseenter(function() {
		$(this).animate({
			width : "150px",
			height : "150px"
		}, 1500);
		$(this).fadeTo('slow', 0.85);
	});
	$('#logo').mouseleave(function() {
		$(this).animate({
			width : "128px",
			height : "128px"
		}, 1500);
		$(this).fadeTo('fast', 1);
	});

	$('img.pht').fadeIn();

	$('#btt_prev').click(function() {
		var current = $('img.pht');
		if (current.prev('img').length == 1) {
			var prev = current.prev('img');
		} else {
			var prev = current.siblings('img').last();
		}

		current.hide().removeClass('pht');
		prev.fadeIn().addClass('pht');

	});

	$('#btt_next').click(function() {

		var current = $('img.pht');

		if (current.next('img').length == 1) {
			var next = current.next('img');
		} else {
			var next = current.siblings('img').first();
		}

		current.hide().removeClass('pht');

		next.fadeIn().addClass('pht');

	});

	$("#historia_btt").click(function() {
		$("#textfield").load("historia.html");
	});

	$("#zasady_btt").click(function() {
		$("#textfield").load("zasady.html");
	});
	$("#techniki_btt").click(function() {
		$("#textfield").load("techniki.html");
	});
	$("#wymagania_btt").click(function() {
		$("#textfield").load("wymagania_egzaminacyjne.html");
	});
	$("#galeria_btt").click(function() {
		$("#textfield").load("galeria.html");
	});

	$("#btt_wyslij").click(function() {
		$("#imie").css('background-color', '#FFFFFF');
		if ($("#imie").val().length == 0) {
			$("#imie").css('background-color', '#FF0000');

		}
	});
	$("#btt_wyslij").click(function() {
		$("#nazwisko").css('background-color', '#FFFFFF');
		if ($("#nazwisko").val().length == 0) {
			$("#nazwisko").css('background-color', '#FF0000');

		}
	});
	$("#btt_wyslij").click(function() {
		$("#email").css('background-color', '#FFFFFF');
		if ($("#email").val().length == 0) {
			$("#email").css('background-color', '#FF0000');

		}
	});
	$("#btt_wyslij").click(function() {
		$("#email").css('background-color', '#FFFFFF');


		var mail = /\S+@\S+\.\S+/;
		if (!mail.test($("#email").val())) {
			alert("Niepoprawny adres mailowy!");
			$("#email").css('background-color', '#FF0000');

		}
	});

});

