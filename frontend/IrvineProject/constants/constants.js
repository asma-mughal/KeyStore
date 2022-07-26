const screens = {
    main_layout: "MainLayout",
    home: "Home",
    
}
const onboarding_screens = [
    {
        id: 1,
        bannerImage: require("../assets/images/onBoarding1.png"),
        title: "Choose a Favourite Product",
        description: "When you order food product, we’ll hook you up with exclusive coupon and rewards"
    },
    {
        id: 2,
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "Get your products delivered at your doorsteps all day everyday"
        
    },
    {
        id: 3,
        bannerImage: require("../assets/images/great_food.png"),
        title: "Receive the Great Products",
        description: "You’ll receive your products within a hour according to your specifications and needs."
    }
]
const aboutUs_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/one.png"),
        title: "What Is KeyStore?",
        button: false,
        description: "KeyStore is the top convenience store franchise in Scotland and the UK. As part of the J.W. Filshill family, stores around the country receive our full support. We use our relationships with suppliers to provide fantastic wholesale deals to our stores, and this saving is passed on to YOU, the customer. This means prices your local KeyStore will always be at their lowest!"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/aboutus1.png"),
        title: "Endless Offers!",
        button:true,
        colorButton : true,
        description: "Not only do we keep prices low across all of our stores, but we bring you new, low price deals on our products every 3 weeks! Our offers are always changing to bring you the best deal at the best time, so make sure to check back and never miss any!"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/aboutus2.png"),
        title: "Find your neareststore and save now!",
        button:true,
        colorButton : false,
        description: "KeyStore is the top convenience store franchise in Scotland and the UK. As part of the J.W. Filshill family, stores around the country receive our full support. We use our relationships with suppliers to provide fantastic wholesale deals to our stores, and this saving is passed on to YOU, the customer. This means prices your local KeyStore will always be at their lowest!"
    }
]
const download_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/download1.png"),
        title: "Keystore Leaflet",
        download:1,
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/download2.png"),
        title: "Keystore Express Leaflet",
        download:2,
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/download3.png"),
        title: "Keystore More Leaflet",
        download:2,
    }
]
const competition_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/cmp.png"),
        title: "Win an XBOX Series S with KeyStore and Lucozade Energy",
        deadline: "5th June 2022"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/competition2.png"),
        title: "Win TRNSMT Tickets with Four Loko & KeyStore",
        deadline: "5th June 2022"
    },
]
const news_screens = [
    {
        id: 1,
        bannerImage: require("../assets/images/news2.png"),
        title: "KeyStore Centeral Launch Food Kitchen",
        date: '01/08/2019',
        time:'2',
        type:'Community Funds',
        detail:'Another great performance from many stores in the KeyStore family this year at the Scottish Grocer Awards 2019. The KeyStore and Filshill family have a great track record at the Scottish Grocer Awards and this year was no different. This is the opportunity for everyone to recognise the fantastic success and hard work our franchise stores put in, day in and day out. Well done to everyone who made it to the finals and congratulations to those who took home awa',
        button :false,
    },
    {
        id: 2,
        bannerImage: require("../assets/images/news2.png"),
        title: "KeyStore Centeral Launch Food Kitchen",
        date: '01/08/2019',
        time:'2',
        type:'Community Funds',
        detail:'Another great performance from many stores in the KeyStore family this year at the Scottish Grocer Awards 2019. The KeyStore and Filshill family have a great track record at the Scottish Grocer Awards and this year was no different. This is the opportunity for everyone to recognise the fantastic success and hard work our franchise stores put in, day in and day out. Well done to everyone who made it to the finals and congratulations to those who took home awards.',
        descriptionImage :'Chris Cobb from Keystore Cults – Confectionery Retailer Of The Year and also Highly Commended for Tobacco Retailer Of the Year.',
        button :false,    
    },
    {
        id: 3,
        bannerImage: require("../assets/images/news2.png"),
        title: "Score with KeyStore",
        date: '31/07/2019',
        time:'2',
        type:'Featured News',
        detail:'Congratulations to KeyStore Deveron who celebrate 30 years serving the community.',
        button :false,
    },
    {
        id: 4,
        bannerImage: require("../assets/images/news2.png"),
        title: "Scottish Grocer Awards 2019",
        date: '31/07/2019',
        time:'2',
        type:'Featured News',
        detail:'KeyStore sweep awards at the Scottish Grocer Awards 2019! ', 
        button :true

    },
]
const fund_screens =[
    {
       id:1,
       title:'Helping you gain the Keys to your Success!',
       bannerImage: require("../assets/images/fund.png"),
       detail: 'We help provide funding and supplies for ventures big and small. KeyStore have helped their franchises provide:',
       show:true,
       
    },
    {
        id:2,
        title:'How do we help?',
        detail: 'KeyStore have already funded over many programmes in local Scottish Communities. We provide monetary Grants, Funding for Goods from KeyStore, Purchased supplies for events or programmes, and get big brand suppliers involved in your community!',
        bannerImage: require("../assets/images/fund.png"),
        show:false,
    },
    {
        id:3,
        title:'Positive change in Our Communities',
        detail: 'You help make KeyStore the number 1 convenience retailer in Scotland, so we want to return in kind. We help organise and fundraise for positive, public, community wide services. This includes helping raise funds for life saving equipment and programmes for all.',
        bannerImage: require("../assets/images/fund.png"),
        show:false,
    },
]

const retailer_screens =[
    {
       id:1,
       title:'What do you need to become a KeyStore retailer?',
       detail: 'All we are looking for are retailers who we can work in partnership with. If you want to grow your business we can work with you to reach your objectives. It’s a simple proposition but it’s one that works well for over 1800 retailers across the UK.',
    },
    {
        id:2,
        title:'Benefits of becoming a KeyStore retailer?',
        detail: 'Not only do you get access to great deals, but you will also work closely with our Business Development Managers and Sales Team to ensure that changing to KeyStore makes a big difference to your business. Read more about the benefits in our brands section.',
    },
    {
        id:3,
        title:'How to become a KeyStore retailer?',
        detail: 'It’s simple. Fill in the form at the foot of this page, or call us on if you want to talk to us about how we can support you to improve your business. Robert Paton (West Scotland) 07803518591, Roy Williams (East Scotland) 07809903501, Jeanette Gordon (England) 07718486783.',
    },
]
const retailer_screens2 =[
    {
       id:1,
       title:'Chris Watson',
       company:'KeyStore Express',
       location:'Corseford',
       video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
       detail: 'Chris tells us about the Keystore brand image, and his involvement in the community, as well as the help he gets from all Filshill staff.',
    },
    {
        id:2,
        title:'Barrie Carter',
        company:'KeyStore More',
        location:'Jarrow',
        video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        detail: 'Barrie has been a Filshill customer for 11 years. Recently upgrading to a Keystore More Barrie tell us why he has been a KeyStore customer for so long.',
    },
    {
        id:3,
        title:'Tony Hewson',
        company:'KeyStore Express',
        location:'Middleham',
        video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        detail: 'Tony tells about his move to a KeyStore and how his shop refit has helped his business.',
    },
    {
        id:4,
        title:'Mo Zubair',
        company:'KeyStore',
        location:'Moorends',
        video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        detail: 'Mo tells us about being part of the Filshill Family for the past 8 years, starting off as a delivered customer and then joining Keystore after the 1st year of trading.',
    },
    {
        id:5,
        title:'Pete Singh & Pam Kaur',
        company:'KeyStore',
        location:'Dreghorn',
        video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        detail: 'Peter and Pam tell us about changing to the KeyStore Brand and the support they get in terms of marketing, customer support and the sales team.',
    },
    {
        id:6,
        title:'Wilson Rae',
        company:'KeyStore More',
        location:'Lanark',
        video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        detail: 'Wilson tells us about his 32 years in business and why he chose KeyStore More. And what he thinks of the support from Filshill.',
    },
]

const fund_Images =[
{
id:1,
bannerImage: require("../assets/images/fund2.png"),
},

{
    id:2,
    bannerImage: require("../assets/images/fund3.png"),
    },
    {
        id:3,
        bannerImage: require("../assets/images/fund4.png"),
        },
        
            

    ]
const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

export default {
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags, onboarding_screens,
    aboutUs_screens,
    download_screens,
    competition_screens,
    news_screens,
    fund_screens,
    fund_Images,
    retailer_screens,
    retailer_screens2
}