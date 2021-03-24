import MyIMDB from './MyIMDB.png'
import MyFirstReact from './MyFirstReact.png'
import NasaAPI from './NasaAPI.png'
import BookValidation from './BookValidation.png'
import BMICalculation from './BMICalculation.png'
import OnlineShop from './OnlineShop.png'
import NasaAPI_react from './NasaAPI_react.png'
import NewsWidget from './NewsWidget.png'
import CardPrototype from './CardPrototype.png'

const projectsData = [
  {
    imagePath: NewsWidget,
    title: 'News Widget',
    description:
      'Using an API, I created a wedget which displays news. There are 5 news on one page, and each 15 seconds, the page changes to the next one, showing other 5 news. Each 3 seconds, the page refreshes itself. Used HTML, CSS, JavaScript, Ajax & Promises.',
    url: 'https://bondastefana.github.io/news_widget_js/'
  },
  {
    imagePath: CardPrototype,
    title: 'Card Prototype',
    description:
      'Using HTML, CSS, Bootstrap and JavaScript, I created a card prototype. Regarding this project, I focused on the design and it is also responsive. ',
    url: 'https://bondastefana.github.io/card_prototype_js/'
  },
  {
    imagePath: NasaAPI,
    title: 'Nasa API',
    description:
      "Using NASA's Astronomy Picture of the Day API, the user can get the Astronomy Picture of the selected day. Used HTML, CSS, JavaScript DOM and Ajax & Promises.",
    url: 'https://bondastefana.github.io/nasa_api_js/'
  },

  {
    imagePath: BookValidation,
    title: 'Book Validation',
    description:
      'Created a simple book list which displays the book from a list, and also a form where you can add new books to the list. Used HTML, CSS and JavaScript DOM. ',
    url: 'https://bondastefana.github.io/booklist_validation/'
  },
  {
    imagePath: BMICalculation,
    title: 'BMI Calculation',
    description:
      'We’re at a nutrition center, and we have the data from our customers ( name, gender, height, weight). I wrote de JS code that prints in the name, genre, BMI and type for each customer.',
    url:
      'https://github.com/bondastefana/SIIT_Bonda_Stefana/tree/master/week5_BMI_Calculation'
  },
  {
    imagePath: OnlineShop,
    title: 'Online Shop',
    description:
      'Using HTML and CSS, I implemented the design for an Online Shop. I also used icons from Font Awesome.',
    url: 'https://bondastefana.github.io/online_shop/'
  }
]

const projectsDataReact = [
  {
    imagePath: MyIMDB,
    title: 'IMDB App ReactJS',

    description:
      'A movie application which I implemented with my colleagues from The Informal School of IT  using React JS. My tasks: Header/Footer components and the Home page - class based components.',
    url: 'https://bondastefana.github.io/imdb_app_reactjs/'
  },
  {
    imagePath: NasaAPI_react,
    title: 'Nasa API ReactJS',
    description:
      "Using NASA's Astronomy Picture of the Day API, the user can get the Astronomy Picture of the selected day. Used ReactJS, React Bootstrap and Ajax & Promises.",
    url: 'https://bondastefana.github.io/NasaAPI_ReactJS/'
  },
  {
    imagePath: MyFirstReact,
    title: 'My first React project',
    description:
      'This project will walk you through the thought process of building a searchable product table using React JS - functional based components. ',
    url: 'https://bondastefana.github.io/my_first_react_project/'
  }
]

export { projectsData, projectsDataReact }
