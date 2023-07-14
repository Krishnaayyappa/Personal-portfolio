import banking from "../../images/banking.jpg";
import ecommerce from "../../images/ecommerce.jpg";
import food from "../../images/food.jpg";
import events from "../../images/events.jpg";

export const professional = [
  {
    id: "p1",
    image: banking,
    projName: "Banking",
    projDesc:
      `Worked on financial analysis banking application which is a web-based platform 
      designed to assist financial analysts and banking professionals in 
      analyzing and interpreting financial data. The application aims to streamline the 
      analysis process, provide insights into banking performance, and facilitate informed decision-making. 
      It allows users to import financial data, perform various analytical calculations, 
      generate reports, and visualize data through charts and graphs.`,
    overView:
      "An overview of the project description, roles and responsibilities, technologies and tools used.",
    roles: [{id:1, role:`Designing and implementing intuitive and user-friendly interfaces using HTMl, CSS, JavaScript and its framework React.js.`},
            {id:2, role:`Developing the single page applications using react-router-dom and creating various reusable components using concepts like hooks, custom hooks, Redux etc.`},
            {id:3, role: `Implementing responsive layouts, flexible grids, and adaptive components to optimize the interface for different resolutions and orientations.`},
            {id:4, role: `Utilizing charting libraries like D3.js and chart.js to display financial trends, performance metrics and developed various data visualization components in an understandable manner.`},
            {id:5, role: `Designing and maintaining the front-end architecture to ensure scalability and modularity along with following the best practices for code organizations and component reusability.`},
            {id:6, role: `Collaborating with the back-end developers to integrate to integrate the UI with API's and services to fetch financial data and also to make sure smooth data exchange and real-time updates happening between front-end and back-end.`},
            {id:7, role: `Optimizing the user experience by focusing on performance, responsiveness and accessibility.`},
            {id:8, role:`Ensuring the cross browser compatibility by checking if the application functions and displays correctly across different browsers and devices.`},
    ],
    tools: "HTML5, CSS3, SASS, Javascript, Typescript, React.js, React-Redux, React-router-dom, VSCode, D3.js, Chart.js, WebPack, Git, GitHub, Jest.",
  },
  {
    id: "p2",
    image: ecommerce,
    projName: "Ecommerce",
    projDesc: `Worked on e-commerce projects that aims to create a dynamic and interactive online shopping platform 
    that provides users with real-time updates on product availability, pricing, and inventory. 
    The project focuses on delivering a seamless and engaging shopping experience, with features 
    such as live product recommendations, personalized user interfaces, and real-time notifications. 
    The goal is to create a responsive and user-friendly interface that enhances customer satisfaction 
    and drives sales.`,
    overView: "An overview of the project description, roles and responsibilities, technologies and tools used.",
    roles: [
        {id:1, role:`Collaborating with UX designers to translate wireframes and design concepts into visually appealing and user-friendly UI designs.`},
        {id:2, role:`Implementing responsive and interactive front-end interfaces using HTML, CSS, and JavaScript frameworks like React`},
        {id:3, role:`Implementing app wide state management using Redux and Context API`},
        {id:4, role:`Handling data retrieval, authentication, and validation to provide a seamless user experience.`},
        {id:5, role:`Developing smooth transitions, animations, and interactive elements to enhance usability and engagement.`},
        {id:6, role:`Creating product listing and catalog features, including search, sorting, filtering, and pagination.`},
        {id:7, role:`Developing the shopping cart functionality, allowing users to add, update, and remove items from their cart.`},
        {id:8, role:`Performing cross-browser testing to ensure consistent performance and compatibility across various web browsers.`},
        {id:9, role:`Collaborating with UX designers, back-end developers, quality assurance testers, and other stakeholders to align on requirements, timelines, and deliverables.`},
        {id:10, role:`Actively participate in code reviews, share knowledge, and contribute to the overall success of the project.`}
    ],
    tools: `HTML5, CSS3, SASS, Javascript, Typescript, React.js, React-Redux, React-router-dom, VSCode, Node.js, RestAPI,NPM, NPX, WebPack, Git, BitBucket, Jest.`,
  },
];

export const personal = [
  {
    id: "p3",
    image: food,
    projName: "Food Ordering App",
    projDesc:`The Food Delivery App is a personal project I developed using React.js. It is a web application that allows users 
    to browse food menus, add items to cart and proceed to checkout for food delivery. This app incorporates various react concepts, including form validaions, React-redux 
    for state management, animations and other key features to enhance the user experience.`,
     overView: "An Overview of the project description, tools and technologies used",
    roles: "lorem Ipsum",
    tools: "Lorem Ipsum",
  },
  {
    id: "p4",
    image: events,
    projName: "Events App",
    projDesc:
      `It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less 
      normal distribution of letters, as opposed to using 'Content here, 
      content here`,
    overView: "Lorem Ipsum",
    roles: "lorem Ipsum",
    tools: "Lorem Ipsum",
  },
];
