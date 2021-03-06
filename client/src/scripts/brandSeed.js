const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/projects", { useNewUrlParser: true }
);

const brandSeed = [

    {
        id: 1,
        name: "Cabela's Inc.",
        description: "Retail Store",
        logo: "../client/media/logo_images/cabelas.png",
        link: "https://www.cabelas.com",
        supporting: [
            "Human Trafficking",
            "Conflict Minerals"
        ],
        conflicting: "NRA",
        reason: "Cabela's Inc makes donations to the National Rifle Association (NRA) Foundation and is listed on the NRA website as a Friend of the NRA."
    },
{
        id: 2,
        name: "FedEx",
        description: "Shipping Solutions",
        logo: "../client/media/logo_images/fedex.jpg",
        link: "https://fedex.com",
        supporting: [
            "United Way",
            "Salvation Army"
        ],
        conflicting: [
            "NRA",
            "American Legislative Exchange Council (ALEC)"
        ],
        reason: "While FedEx is a contributor to the United Way and Salvation Army charities, they also offer discounts to members of the National Rifle Association (NRA), and contribute to the American Legislative Exchange Council (ALEC). ALEC supports Florida's Stand Your Ground law, and does not support animal rights."
    },
{
        id: 3,
        name: "Lifelock Inc.",
        description: "Identity Theft Protection",
        logo: "../client/media/logo_images/lifelock.jpg",
        link: "https://lifelock.com",
        supporting: "",
        conflicting: "NRA",
        reason: "LifeLock by Symantec Corp is listed as a benefit to NRA members."
    },
{
        id: 4,
        name: "Apple Inc.",
        description: [
            "Consumer Electronics",
            "Technology"
        ],
        logo: "../client/media/logo_images/apple.png",
        link: "https://apple.com",
        supporting: [
            "Accessibility",
            "Education",
            "Environment",
            "Inclusion & Diversity"
        ],
        conflicting: "",
        reason: "Apple Inc. lists Accessibility, Education, Environment, and Inclusion & Diversity among it's core values. By creating products with key accessibility features, supporting educational endeavors through their connectED initiative, their continued goal to leave the earth better than they found it through environmental initiatives, and their committment to inclusive hiring practices, this is a company that uses it's power for the good."
    },
{
        id: 5,
        name: "Facebook",
        description: [
            "Social Media",
            "Technology"
        ],
        logo: "../client/media/logo_images/facebook.png",
        link: "https://facebook.com",
        supporting: "",
        conflicting: "Privacy",
        reason: "Facebook has had a host of privacy breaches, including sharing user data of over 87 million users to international propoganda distributor, Cambridge Analytica in 2015."
    },
{
        id: 6,
        name: "Macy's Inc.",
        description: "Department Store",
        logo: "../client/media/logo_images/macys.png",
        link: "https://macys.com",
        supporting: [
            "United Way",
            "Salvation Army"
        ],
        conflicting: "Women's Rights, Income Equality",
        reason: "Macy's is a charitable donor for organizations such as United Way and Salvation Army. However, they do not support income equality for women, encouraging a veto of pro-women legislation in Texas in 2013."
    },
{
        id: 7,
        name: "Publix Super Markets",
        description: "Grocery Store",
        logo: "../client/media/logo_images/publix.png",
        link: "https://publix.com",
        supporting: [
            "United Way",
            "Employee-Owned Business"
        ],
        conflicting: "",
        reason: "Publix is one of the largest employee-owned companies in the country. However, while Publix does not openly support any conflicting causes, 86% of their charitible donations go to Republican politicians."
    },
{
        id: 8,
        name: "Airbnb",
        description: "Hospitality Lodging",
        logo: "../client/media/logo_images/airbnb.jpg",
        link: "https://airbnb.com",
        supporting: "",
        conflicting: "",
        reason: "Airbnb contributed 99% of their charitible donations to Democrat politicians. They are also rated a 69 out of 100 on Campaign Finance Reform, with 100 being a score indicating the company favors campaign finance reform."
    },
{
        id: 9,
        name: "Chobani, Inc.",
        description: "Yogurt Company",
        logo: "../client/media/logo_images/chobani.png",
        link: "https://chobani.com",
        supporting: "Immigration",
        conflicting: "",
        reason: "In a time of strife for immigrants living in America, Chobani's founder, Hamdi Ulukaya employs a large amount of immigrant refugees at his company, illustrating America's long-standing values of hospitality, diversity, and industry."
    },
{
        id: 10,
        name: "Google",
        description: "Technology",
        logo: "../client/media/logo_images/google.png",
        link: "https://google.com",
        supporting: [
            "Renewable Energy",
            "Environment",
            "Goodwill",
            "Equal Justice Initiative"
        ],
        conflicting: "",
        reason: "Google reached their 100% renewable energy target in 2017, and is now the largest corporate renewable energy purchaser on the planet."
    }
];

