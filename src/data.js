const skillsList = [
    { title: "Angular", value: 75 },
    { title: "React JS", value: 75 },
    { title: "Ember JS", value: 80 },
    { title: "Python 3 / MQTT", value: 80 },
    { title: "Material UI", value: 80 },
    { title: "SQL Server", value: 80 },
    { title: "MSSMS", value: 80 },
    { title: "Merise UML", value: 75 },
    { title: "VMWare", value: 75 },
    { title: "Node JS ", value: 60 },
    { title: "PHP Symfony", value: 70 },
    { title: "Express JS ", value: 70 },
    { title: "API Platform", value: 70 },
];
const projectList = [
    {
        id: 1,
        title: "OtherHealth",
        technologies: ["Angular", "API Platform", "PHP Symfony", "mySQL"],
        backgroundImage:
            "https://media.istockphoto.com/photos/blue-light-defocused-blurred-motion-abstract-background-picture-id1212284111?k=20&m=1212284111&s=612x612&w=0&h=sYaAKVxAEmsDVmbXs_iMzZkzanRlfB4nMWp7QsULWD0=",
        frontImage: "./projects/OtherHenley.gif",
    },
    {
        id: 2,
        title: "Boulder Dash",
        technologies: ["Java", "iFrame / iPanel"],
        backgroundImage:
            "https://i.pinimg.com/originals/fe/34/7f/fe347fed2e276c79e7a7d106137746f3.jpg",
        frontImage: "./projects/dashgif.gif",
    },
    {
        id: 3,
        title: "Site Web du BDE",
        technologies: ["JS", "PHP", "HTML / CSS", "JQuery", "Ajax", "phpMyAdmin"],
        backgroundImage:
            "https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149011361.jpg?w=2000",
        frontImage: "./projects/sitebde.png",
    },
    {
        id: 4,
        title: "IntraCom Palmer & Co",
        technologies: ["Windev 25, IIS Windows Server 2012, JS, Active Directory"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/vector-soft-black-background-vector-id1090010178?k=20&m=1090010178&s=612x612&w=0&h=dR1clm2126pBjiHBbmyUmAN5Xm6ZmerFUmiIXu6yn-U=",
        frontImage: "./projects/palmer.gif",
    }
];

const experienceList = [
    {
        id: 0,
        company: "DAVID Systems GmbH",
        links: {
            website: "https://www.davidsystems.com/",
            linkedin: "https://www.linkedin.com/company/david-systems-gmbh/",
            instagram: "https://www.instagram.com/davidsystems/?hl=fr",
        },
    },
    {
        id: 1,
        company: "Henley IT",
        links: {
            website: "https://www.henley.fr/",
            linkedin: "https://www.linkedin.com/company/henley-it/",
        },
    },
    {
        id: 2,
        company: "Palmer & CO",
        links: {
            website: "https://www.champagne-palmer.fr/en/",
            facebook: "https://www.facebook.com/champagnepalmer",
            linkedin: "https://www.linkedin.com/company/champagnepalmer/",
            instagram: "https://www.instagram.com/champagnepalmer/?hl=fr",
        },
    },
];

export { skillsList, projectList, experienceList };
