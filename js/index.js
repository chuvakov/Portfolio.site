$(function () {
	//инициализируем все всплывающие подсказки (BootStrap)
	$('[data-bs-toggle="tooltip"]').tooltip();

	//Событие при клике на элемент навигации
	$('.header-nav__item').click(function () {
		$('.header-nav__item.active').removeClass('active');
		$(this).addClass('active');
	});

	//Событие при клике на ссылку навигации
	$('.header-nav__item > a').click(function (e) {
		e.preventDefault(); //Отменяет действия браузера по умолчанию (в нашем случае базовый скрол ссылки)

		let node = $(this).attr('href'); //Считывает атрибут - attr
		let nodeY = $(node).offset().top; //возвращает координту относительно верхней части страницы - offset

		let headerHeight = $('.header').outerHeight(); //Возвращает высоту элемента с учетом отступа - outerHeight

		window.scroll(0, nodeY - headerHeight); //Скролит до указанных координат - window.scroll (первое число по оси Х, вторая Y)
	});

	//Событие при скроле страницы
	/*
	$(window).scroll(function () {
		let $header = $('.header');
		let headerHeight = $header.outerHeight();

		if ($(this).scrollTop() >= headerHeight) {
			if ($header.hasClass('fixed')) return;

			$header.addClass('fixed');
		} else {
			if (!$header.hasClass('fixed')) return;

			$header.addClass('fixed-none');

			$header.removeClass('fixed');
		}
	});
	*/

	$('.navbar-toggler').click(function () {
		$(this).find('.menu-toggle').toggleClass('active');
	});

	//Обработка клавиши ОТПРАВИТЬ сообщение
	$('#send-message').click(function (e) {
		e.preventDefault();
		let emailMessage = $('.contacts__form').serializeJSON();

		toggleDisableSendMessage();

		axios
			.post('https://localhost:7239/api/email', emailMessage)
			.then(function (response) {
				toastSuccess('Сообщение успешно отправлено!');
			})
			.catch(function (error) {
				toastError('Что-то пошло не так!');
			});
	});

	function toggleDisableSendMessage() {
		let $btn = $('#send-message');
		let attrDisable = $btn.attr('disabled');

		if (attrDisable == 'disabled') {
			$btn.removeAttr('disabled');
		} else {
			$btn.attr('disabled', 'disabled');
		}
	}

	function toastSuccess(message) {
		let toastHtml = `
			<div class="toast-success position-fixed bottom-0 end-0 p-3" style="z-index: 11">
				<div
					id="send-email-success-tost"
					class="toast align-items-center text-white border-0"
					style="background-color: #7EC173;"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div class="d-flex">
						<div class="toast-body"> <img src="/img/check_circle_white_24dp.svg"> ${message}</div>
						<button
							type="button"
							class="btn-close btn-close-white me-2 m-auto"
							data-bs-dismiss="toast"
							aria-label="Close"
						></button>
					</div>
				</div>
			</div>
		`;

		$('.toast-success').remove();
		$('body').append(toastHtml);

		var toastOnPage = document.getElementById('send-email-success-tost');
		var toast = new bootstrap.Toast(toastOnPage);
		toast.show();
	}

	function toastError(message) {
		let toastHtml = `
			<div class="toast-error position-fixed bottom-0 end-0 p-3" style="z-index: 11">
				<div
					id="send-email-error-tost"
					class="toast align-items-center text-white border-0"
					style="background-color: #FF5A5A;"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div class="d-flex">
						<div class="toast-body"> <img src="/img/report_problem_white_24dp.svg"> ${message}</div>
						<button
							type="button"
							class="btn-close btn-close-white me-2 m-auto"
							data-bs-dismiss="toast"
							aria-label="Close"
						></button>
					</div>
				</div>
			</div>
		`;

		$('.toast-error').remove();
		$('body').append(toastHtml);

		var toastOnPage = document.getElementById('send-email-error-tost');
		var toast = new bootstrap.Toast(toastOnPage);
		toast.show();
	}
});
