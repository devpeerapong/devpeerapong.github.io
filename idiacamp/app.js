angular.module('idiacamp', [])
	.controller('MainController', function(Project, $scope) {
		$scope.projects =  Project.getAllProjects();
		
		$scope.chooseProject = function (project) {
			project.isSelected = !project.isSelected;
		}

	})
	.factory('Project', function() {
		var projects = [
			{
				name: 'Renting Book Library',
				platform: 'Hardware',
				picture: 'http://kawaii.kawaii.at/img/library-books-fabric-by-Timeless-Treasures-USA-171942-1.jpg',
				team: '',
				isSelected: true
			},
			{
				name: 'BTS/MRT Ticket',
				platform: 'Hardware',
				picture: 'http://www.mysticplacebkk.com/web/images/MRT.png',
				team: '',
				isSelected: false
			},
			{
				name: 'SmartHome',
				platform: 'Hardware',
				picture: 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpt1/v/t34.0-12/11297731_891411547619713_1269339475_n.jpg?oh=0d06b2041ad8196e16e1ccbbca39c4dc&oe=557E10BB&__gda__=1434274504_f59ca0d56b0e7d2ed07131a00bae7f7e',
				team: '',
				isSelected: false
			},
			{
				name: 'Police i lert u',
				platform: 'iOS',
				picture: 'https://lh6.ggpht.com/1eScB4YtKrl9NKfmsA5WJPrWY1IR7_D5vynEkSZdAUadFOB_AxouYk56TT_4E8cwbO8=w170',
				team: '',
				isSelected: false
			},
			{
				name: 'Kaidee',
				platform: 'iOS',
				picture: 'https://lh6.ggpht.com/WiuOiRaygzjV5wY8N_NYc28M3GNNH0XTSXPyl-KPNZII4-gzu64_B86pOZ6-wpIg9tk=w300',
				team: '',
				isSelected: false
			},
			{
				name: 'SCB Easy',
				platform: 'iOS',
				picture: 'https://www.scbeasy.com/v1.4/site/presignon/mtrl/Image/Mobile%20App/SCB12_SCB_EASY_512x512px.png',
				team: '',
				isSelected: false
			},
			{
				name: 'Builk TH',
				platform: 'Website',
				picture: 'https://yt3.ggpht.com/-CT85jez_Lbw/AAAAAAAAAAI/AAAAAAAAAAA/9H5rO0rUJzc/s900-c-k-no/photo.jpg',
				team: '',
				isSelected: false
			},
			{
				name: 'Kasikorn Bank',
				platform: 'Website',
				picture: 'http://www.thaiware.com/upload_misc/software/2012_05/thumbnails/911_1205211258481l.png',
				team: '',
				isSelected: false
			},
			{
				name: 'MTA KMUTT',
				platform: 'Website',
				picture: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10398096_607525319354460_1381658915171759542_n.png?oh=c8c16d17b9e735f1580076c7ad2d92f7&oe=55E6B757&__gda__=1441313502_d7f095de057c92905006320261a14277',
				team: '',
				isSelected: false
			},
			{
				name: 'Thai Vans',
				platform: 'Android',
				picture: 'http://i.imgur.com/4nysDGN.png',
				team: '',
				isSelected: false
			},
			{
				name: 'GrabTaxi',
				platform: 'Android',
				picture: 'https://lh3.ggpht.com/p-_Ps57RHIkd6Ifjzwr7aqlkgFK75muQYheOxk_iCE2NBLOT-xOeHHxobX_T8lH60SQ=w300',
				team: '',
				isSelected: false
			},
			{
				name: 'Claim Di',
				platform: 'Android',
				picture: 'https://lh3.googleusercontent.com/BAslfvBZQbOF4PnoUxGYnzPH5zXD5e_n2Gs0f-iGXXYTbZliLue0mbSdBFRiRQ5fc1bo=w300',
				team: '',
				isSelected: false
			}

		];

		return {
			getAllProjects: function() {
				return projects;
			}
		}
	})