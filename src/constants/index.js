import lavash from "../assets/armenian-lavash.jpg";
import kitchenImage from "../assets/lavash1.jpg";
import bathroomImage from "../assets/lavash_1.jpg";
import livingRoomImage from "../assets/lavash4.jpg";

import portfolio1 from "../assets/lavash5.jpg";
import portfolio2 from "../assets/lavash6.jpg";
import portfolio3 from "../assets/lavash7.jpg";
import portfolio4 from "../assets/lavash8.jpg";
import portfolio5 from "../assets/lavash9.jpg";
import portfolio6 from "../assets/lavash10.jpg";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "VastuSpaze",
  subtitle: "Reimagine Your Space with Expert Renovation Services",
  image: lavash,
};

export const SERVICES_CONTENT = [
  {
    title: "Lorem Ipsum",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Lorem Ipsum",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: bathroomImage,
    alt: "Bathroom Renovation",
  },
  {
    title: "Lorem Ipsum",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: livingRoomImage,
    alt: "Living Room Renovation",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with VastuSpaze. We take pride in our work and are committed to delivering top-notch home renovation services.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Homeowner",
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Homeowner",
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Homeowner",
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Homeowner",
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "Homeowner",
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Homeowner",
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@vastuspaze.com",
  },
  address: {
    label: "Address",
    value: "1234 Renovation Ave, Suite 100, Your City, ST 56789",
  },
};
