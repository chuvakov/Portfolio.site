export const API_URL = 'https://localhost:7239/api';

export const skills = [
	{
		sectionName: 'Backend',
		countInRow: 5,
		skills: [
			{
				img: '/img/c-sharp.png',
				text: 'C#',
			},
			{
				img: '/img/Net.png',
				text: '.Net',
			},
			{
				img: '/img/ASPNetCore.jpg',
				text: 'ASP.NET Core',
			},
			{
				img: '/img/EFcore.png',
				text: 'EF Core',
			},
			{
				img: '/img/MVC.png',
				text: 'MVC',
			},
			{
				img: '/img/linq.png',
				text: 'LINQ',
			},
			{
				img: '/img/SignalR.png',
				text: 'Signal R',
			},
			{
				img: '/img/DI.jpg',
				text: 'DI',
			},
			{
				img: '/img/postgresql.png',
				text: 'Postgre SQL',
			},
			{
				img: '/img/xUnit.png',
				text: 'Unit Tests',
			},
			{
				img: '/img/swagger.png',
				text: 'Swagger',
			},
			{
				img: '/img/oop.png',
				text: 'OOP',
			},
			{
				img: '/img/automapper.png',
				text: 'AutoMapper',
			},
			{
				img: '/img/Log4Net.jpg',
				text: 'Log4Net',
			},
			{
				img: '/img/NewtonsoftJson.png',
				text: 'Newtonsoft.Json',
			},
			{
				img: '/img/api.png',
				text: 'API',
			},
			{
				img: '/img/SOLID.png',
				text: 'SOLID',
			},
			{
				img: '/img/crud.jpg',
				text: 'CRUD',
			},
			{
				img: '/img/JWTтокены.png',
				text: 'JWT токены',
			},
		],
	},
	{
		sectionName: 'Frontend',
		countInRow: 5,
		skills: [
			{
				img: '/img/HTML5.png',
				text: 'HTML',
			},
			{
				img: '/img/CSS.png',
				text: 'CSS',
			},
			{
				img: '/img/JS.png',
				text: 'JavaScript',
			},
			{
				img: '/img/Bootstrap.png',
				text: 'Bootstrap',
			},
			{
				img: '/img/SASS.png',
				text: 'SASS',
			},
			{
				img: '/img/jquery.png',
				text: 'jQuery',
			},
			{
				img: '/img/json.png',
				text: 'JSON',
			},
			{
				img: '/img/ajax.png',
				text: 'AJAX',
			},
			{
				img: '/img/axios.png',
				text: 'Axios',
			},
			{
				img: '/img/jQueryCookie.jpg',
				text: 'jQueryCookie',
			},
			{
				img: '/img/SweetAlert2.png',
				text: 'SweetAlert2',
			},
			{
				img: '/img//AnimateCSS.png',
				text: 'Animate.css',
			},
			{
				img: '/img/TOOLTIP.png',
				text: 'POPOVER',
			},
			{
				img: '/img/toastr.png',
				text: 'toastr',
			},
			{
				img: '/img/AIR_DATEPICKER.png',
				text: 'AIR DATEPICKER',
			},
			{
				img: '/img/DataTables.png',
				text: 'DataTables',
			},
			{
				img: '/img/BEM.png',
				text: 'BEM нотация',
			},
			{
				img: '/img/AdminLTE.png',
				text: 'AdminLTE',
			},
		],
	},
	{
		sectionName: 'Services',
		countInRow: 5,
		skills: [
			{
				img: '/img/github.png',
				text: 'GitHub',
			},
			{
				img: '/img/docker.png',
				text: 'Docker',
			},
			{
				img: '/img/DBeaver.png',
				text: 'DBeaver',
			},
			{
				img: '/img/vs.png',
				text: 'VisualStudio',
			},
			{
				img: '/img/vsc.png',
				text: 'VisualStudioCode',
			},
			{
				img: '/img/rd.png',
				text: 'Rider Jetbrains',
			},
			{
				img: '/img/figma.png',
				text: 'Figma',
			},
			{
				img: '/img/Photoshop.png',
				text: 'Photoshop',
			},
			{
				img: '/img/win.png',
				text: 'Windows',
			},
			{
				img: '/img/MacOS.png',
				text: 'MacOS',
			},
			{
				img: '/img/MSoffice.png',
				text: 'MS Office',
			},
			{
				img: '/img/GoogleFonts.png',
				text: 'GoogleFonts',
			},
			{
				img: '/img/flaticon.png',
				text: 'flaticon',
			},
		],
	},
];

export const projects = [
	{
		img: '/img/logo.svg',
		title: 'Defective Goods v2 beta (MVC)',
		description:
			'Учёт некондиционных товаров на складе <br /> (Позволяет вести базу данных товаров с учётом категории, номеров поступлений, мест хранения и фотографий)',
		linkGithub: 'https://github.com/chuvakov/DefectiveGoods.v2-MVC',
	},
	{
		img: '/img/XOgame-logo.png',
		title: 'онлайн игра XO-game (front)',
		description:
			'Крестики - Нолики, но с онлайн игрой + с чатом и эмоджи + с настройками + с учетными записями + с хранением всего этого в БД',
		liveLink: 'http://www.xogame.ru/',
		linkGithub: 'https://github.com/chuvakov/XOgame.frontend',
	},
	{
		img: '/img/server.png',
		title: 'онлайн игра XO-game (back)',
		description:
			'Крестики - Нолики. Так же была создана библиотека "emojiPicker" для удобной работы с эмоджи для чата между игроками.',
		liveLink: 'http://www.server.xogame.ru/swagger',
		linkGithub: 'https://github.com/chuvakov/Xogame',
	},
	{
		img: '/img/IPL.png',
		title: 'Info-Panel (front)',
		description:
			'Приложение ИнфоПанель - одностраничное приложение, содержащее блок погоды, блок актуального курса валют и конвертер валют. Имеется возможность смены темы приложения между темной и светлой темой. Все 3 блока обращаются к сторонним API подтягивая необходимую информацию.',
		liveLink: 'http://www.info-panel.site/',
		linkGithub: 'https://github.com/chuvakov/InfoPanel',
	},
	{
		img: '/img/server.png',
		title: 'Info-Panel (back)',
		description:
			'Блок погоды позволяет ввести часть названия населенного пункта и при помощи запроса к API под капотом тянет варианты и их координаты, после выбора варианта по координатам прилетает результат с погодой с другого API. Блок с актуальным кусром валют тянет текущий курс валют для 3х валют, а так же динамику за предыдущий день(стрелочки) Блок конвертации дергает API с курсами выбранных валют и делает расчет согласно заданному числу для конвертации.',
		liveLink: 'http://www.info-panel.site/',
		linkGithub: 'https://github.com/chuvakov/InfoPanel.server',
	},
	{
		img: '/img/resume.png',
		title: 'Портфолио (front)',
		description: 'моя личная страничка - портфолио, на которой вы сейчас находитесь',
		liveLink: 'http://www.alex-chuvakov.ru/',
		linkGithub: 'https://github.com/chuvakov/Portfolio.site',
	},
	{
		img: '/img/server.png',
		title: 'Портфолио (back)',
		description: 'реализация БЭКА для обработки отправки сообщений по email',
		liveLink: 'http://www.alex-chuvakov.ru/',
		linkGithub: 'https://github.com/chuvakov/Portfolio.server',
	},
	{
		img: '/img/Questionnaire.png',
		title: 'Опросник (MVC)',
		description:
			'Данное приложение представляет из себя приложение опросник написанный на Asp.Net Core Mvc с возможность составления, прохождения опросника, а так же загрузки и выгрузки готового опросника.',
		linkGithub: 'https://github.com/chuvakov/QuestionnaryWebApp-MVC',
	},
	{
		img: '/img/ToDo-logo.png',
		title: 'ToDo List (front)',
		description:
			'Классический ToDoList - с двумя вариантами реализации, только на JS, HTML, CSS и вариант с серверной частью на C# + БД для хранения данных.',
		linkGithub: 'https://github.com/chuvakov/ToDoList-backAndFront',
	},
	{
		img: '/img/server.png',
		title: 'ToDo List (back)',
		description: 'ToDoList реализация БЭКА для версии приложения, когда опросник хранится в БД',
		linkGithub: 'https://github.com/chuvakov/ToDoList.server',
	},
	{
		img: '/img/calc.png',
		title: 'Калькулятор в стиле Iphone (winforms)',
		description:
			'Калькулятор на WinForms "CalculatorLikeIphone" - с стилем APPLE like (что бы добиться такого стиля кнопок была использована доп. библеотека)',
		linkGithub: 'https://github.com/chuvakov/CalculatorLikeIphone',
	},
	{
		img: '/img/snake.png',
		title: 'Игра змейка (консольная)',
		description: 'Консольная, но при этом полноценная, игра Змейка - ООП в полном виде',
		linkGithub: 'https://github.com/chuvakov/SnakeGame',
	},
	{
		img: '/img/DGv1.png',
		title: 'Defective Goods v1 alfa (winforms)',
		description:
			'Ранняя версия вспомогательного приложения для склада по обработке бракованных товаров, еще на winforms',
		linkGithub: 'https://github.com/chuvakov/DefectiveGoods.v1-winforms',
	},
];

export const works = [
	{
		isActive: true,
		siteLink: 'https://www.nipponexpress.com/',
		img: '/img/logo_nittsu_we_find_the_way.png',
		position: 'Deputy warehouse manager',
		exp: '2009г. - currently',
	},
	// {
	// 	isActive: false,
	// 	siteLink: 'https://www.nipponexpress.com/',
	// 	img: '/img/logo_nittsu_we_find_the_way.png',
	// 	position: 'qwerty',
	// 	exp: '2009г. - текущий момент',
	// },
	// {
	// 	isActive: false,
	// 	siteLink: 'https://www.nipponexpress.com/',
	// 	img: '/img/logo_nittsu_we_find_the_way.png',
	// 	position: '3',
	// 	exp: '2009г. - текущий момент',
	// },
];

export const contacts = {
	name: 'Александр Чуваков',
	location: 'Россия, Мо, Лобня',
	phone: '8 (999) 800 3252',
	email: '4yvakov@gmail.com',
};
