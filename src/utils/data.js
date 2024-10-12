import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

export const projectExperience = [
  {
    name: "React Apps",
    projects: 16,
    icon: FaReact,
    bg: "#286F6C",
  },
  {
    name: "NextJS",
    projects: 4,
    icon: TbBrandNextjs,
    bg: "#EEC048",
  },
  {
    name: "ExpressJS",
    projects: 11 ,
    icon: SiExpress,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I specialize in software engineering, utilizing React, Next.js, and Node.js to develop innovative digital solutions.",
  "My expertise extends to enhancing overall business performance through strategic software design.",
];

export const education = [
  {
    place: "Liverpool John Moore University, UK",
    tenure: "May 2022 - June 2024",
    role: "Msc. Project Management",
    detail:
      "Ongoing through distance learning",
  },
  {
    place: "Jkuat, Nairobi",
    tenure: "Sept 2013 - Nov 2018",
    role: "Bsc. Electrical and Electronic Engineering",
    detail:
      "2nd Class Honors Upper Division",
  },
  {
    place: "Utumishi Academy, Gilgil",
    tenure: "Jan 2009 - Dec 2012",
    role: "High School Diploma",
    detail:
      "Achieved grade A",
  },
];
 
export const workExp = [
  {
    place: "Komaza, Nairobi",
    tenure: "August 2021 - October 2023",
    role: "Fullstack Software Engineer",
    detail:
      "I developed responsive and interactive web apps to streamline forestry operations",
  },
  {
    place: "Atext Digital, Remote",
    tenure: "July 2019 - July 2021",
    role: "Frontend Software Engineer",
    detail:
      "I developed SEO ready websites",
  },
  {
    place: "Bradetech, Sigona",
    tenure: "Feb 2019 - June 2019",
    role: "Junior Software Engineer",
    detail:
      "Worked in a team to develop a robust learning management system",
  },
];

export const comments = [
  {
    name: "Samuel Njubi",
    post: "Product Manager,Bradetech",
    comment:
    "As a product manager, I've seen Paul's software engineering skills firsthand. His work is meticulous, efficient, and always exceeds expectations.",
    img: "./people2.jpg",
  },
  {
    name: "Joseph Karanja",
    post: "CEO, Atext Digital",
    comment:
      "Paul's contributions as a software engineer have been invaluable. His technical expertise and dedication to quality have consistently impressed our team.",
    img: "./people1.jpg",
  },
  {
    name: "Ailean Seonag",
    post: "Product Ownwer,Freelance",
    comment:
    "Paul's expertise in software engineering is unparalleled. His innovative solutions and attention to detail make him an invaluable asset to any project.",
    img: "./people3.jpg",
  },
  {
    name: "Joseph Karanja",
    post: "CEO, Atext Digital",
    comment:
      "Paul's contributions as a software engineer have been invaluable. His technical expertise and dedication to quality have consistently impressed our team.",
    img: "./people1.jpg",
  },

  {
    name: "Samuel Njubi",
    post: "Product Manager,Bradetech",
    comment:
    "As a product manager, I've seen Paul's software engineering skills firsthand. His work is meticulous, efficient, and always exceeds expectations.",
    img: "./people2.jpg",
  },
  {
    name: "Joseph Karanja",
    post: "CEO, Atext Digital",
    comment:
      "Paul's contributions as a software engineer have been invaluable. His technical expertise and dedication to quality have consistently impressed our team.",
    img: "./people1.jpg",
  },
  {
    name: "Ailean Seonag",
    post: "Product Ownwer,Freelance",
    comment:
    "Paul's expertise in software engineering is unparalleled. His innovative solutions and attention to detail make him an invaluable asset to any project.",
    img: "./people3.jpg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
