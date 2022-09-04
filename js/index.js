import { API_URL, skills, projects, works, contacts } from './config.js';

$(function () {
	// Отрисовка мест работ
	const initWorks = () => {
		let count = 0;
		works.forEach((w) => {
			$('.carousel-inner').append(`
				<div class="carousel-item ${w.isActive == true ? 'active' : ''}">
					<div class="carousel-item-header">
						<a
							target="_blank"
							class="carousel-link"
							style="z-index: 999"
							data-bs-toggle="tooltip"
							title="Ссылка на сайт"
							href="${w.siteLink}"
						>
							<img src="/img/public_white_24dp.svg" />
						</a>
						<div class="carousel-icon--right" style="z-index: 999">
							<img
								src="/img/work_outline_white_24dp.svg"
								data-bs-toggle="tooltip"
								title="Место работы"
							/>
						</div>
					</div>

					<div class="carousel-item-content">
						<img src="${w.img}" class="d-block" alt="..." />
						<div class="carousel-caption d-none d-md-block">
							<h5 class="carousel-position">
								<img
									src="/img/badge_white_24dp.svg"
									data-bs-toggle="tooltip"
									title="Должность"
								/>
								${w.position}
							</h5>
							<p class="carousel-year">
								<img
									src="/img/update_white_24dp.svg"
									data-bs-toggle="tooltip"
									title="Стаж работы"
								/>
								${w.exp}
							</p>
						</div>
					</div>
				</div>
			`);

			$('.carousel-indicators').append(`
			<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="${count++}"
			${w.isActive ? 'class="active"' : ''}
			aria-current="true"
		></button>	
			`);
		});
	};

	// Отрисовка скилов на странице
	const initSkills = () => {
		skills.forEach((skill) => {
			let skillGroupItem = $(`
				<div class="skills__items">
					<h3 class="skills-section-name">${skill.sectionName}</h3>
				</div>
			`);

			let row = $(`<div class="row row-cols-2 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 g-4"></div>`);
			for (let index = 0; index < skill.skills.length; index++) {
				row.append(`
					<div class="col">
						<div class="skills-item">
							<img class="skills-img" src="${skill.skills[index].img}" alt="C#" />
							<h4 class="skills-name">${skill.skills[index].text}</h4>
						</div>
					</div>
				`);
			}

			skillGroupItem.append(row);
			$('#skills').append(skillGroupItem);
		});
	};

	// Отрисовка проектов
	const initProjects = () => {
		let row = $(`<div class="row row-cols-2 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 g-4"></div>`);

		for (let project of projects) {
			row.append(`
				<div class="col">
					<div class="projects__item">
						<div class="projects__img-wrapper">
							<img class="projects-img" src="${project.img}" alt="${project.title}" />
						</div>
						<h3>${project.title}</h3>
						<p class="projects__item-text">					
							${project.description}
						</p>
						<div class="projects__item-btns">
							<a class="btn-default btn-default--small" href="${project.linkGithub}">Github Repo</a>
							${
								project.liveLink != undefined
									? '<a class="btn-default btn-default--contrast btn-default--small" href="${project.liveLink}">View Live</a>'
									: ''
							}			
						</div>
					</div>
				</div>
				`);
		}

		$('.projects__items').append(row);
	};

	const initContacts = () => {
		$('#myName').text(contacts.name);
		$('#address').text(contacts.location);
		$('#phone').text(contacts.phone);
		$('#email').text(contacts.email);
	};

	initWorks();
	initSkills();
	initProjects();
	initContacts();

	//инициализируем все всплывающие подсказки (BootStrap)
	$('[data-bs-toggle="tooltip"]').tooltip({
		container: 'body',
		trigger: 'hover',
	});

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

		if (emailMessage.email == '') {
			swal({
				title: 'Предупреждение!',
				text: 'Поле "email" не заполнено!',
				icon: 'warning',
			});
			return;
		}

		if (emailMessage.message == '') {
			swal({
				title: 'Предупреждение!',
				text: 'Поле "Сообщение" не заполнено!',
				icon: 'warning',
			});
			return;
		}

		toggleDisableSendMessage();

		setTimeout(sendMessage, 1000, emailMessage);
	});

	function sendMessage(emailMessage) {
		axios
			.post(`${API_URL}/email`, emailMessage)
			.then(function (response) {
				$('.contacts__form').trigger('reset');
				toastSuccess('Сообщение успешно отправлено!');
			})
			.catch(function (error) {
				toastError('Что-то пошло не так!');
			});
		toggleDisableSendMessage();
	}

	function toggleDisableSendMessage() {
		let $btn = $('#send-message');
		$btn.toggleClass('disabled');
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
