var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    // $(document).ready(function(){
    //     $('.owl-carousel').owlCarousel();
    //     autoPlay: 3000;
    //   });

    $scope.mySlides = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
    var abc = _.times(100, function (n) {
        return n;
    });

    var i = 0;
    $scope.buttonClick = function () {
        i++;
        console.log("This is a button Click");
    };
    $scope.mySlides1 = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    ]

    $timeout(function () {
        mySwiper = new Swiper('.swiper-container1', {
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 1200,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, 300);

    $scope.homeSlide = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    ]
$scope.timeline = [{
        "year": "2015",
        "description": "The VJ Cafe was founded. ",
        "img": "timeline1.jpg"
    }, {
        "year": "2016",
        "description": "opened an outlet at linking road, bandra",
        "img": "timeline2.jpg"
    }, {
        "year": "2017",
        "description": "opening of another outlet at king's circle, matunga . Also, VJ Cafe got into franchising.",
        "img": "timeline3.jpg"
    }];
    $scope.testimonials=[{
        "content": "we are very glad to be a part of the vj cafe family. the support from the team is overwhelming. VJ cafe's team is always ready to help whenever we need it. #weloveyoutoo.",
        "name": "Jinal Shah",
        "country": "Franchise Owner Ghatkopar "
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    },{
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    },{
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    },{
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }, {
        "content": "Negative feedback is better none. I would rather have a man hate me than overlook me.",
        "name": "Mahfuz Riad",
        "country": "Germany"
    }]
    
})