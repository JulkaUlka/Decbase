# Decbase
This is a landing page of interior design studio Decbase.


## Technologies:

- HTML;
- SASS(SCSS);
- JavaScript;
- BEM methodology;
- Parcel;

## API:

+ **[SWAPI](https://swapi.dev/) - Used to create Services section which shows us information about Star Wars World. The buttons act as filters to switch to the topic with the required name**
+ **[Pixabay](https://pixabay.com/) - Used to create the Gallery section to imitate interior design works of the Decbase**

## Libraries:

+ **[Swiper.js](https://swiperjs.com/) - Used to create the carousel in Testimonial section**
+ **[Confetti.js](https://www.npmjs.com/package/confetti-js) - Used to create the confetti animation when a user with the name "Sigma" submits the form**


## Features:

- Loading animation;
- Sticky header with progress bar indicating the user's position on the page;
- Testimonial carousel with smooth transitions;
- SVG animations in Works section;
- Smooth appearance animation for each news entry;
- Form with data validation for Name, Surname, and Email fields. Saving form data in local storage. Highlight incorrect fields and provide feedback to the user. Greeting animation with a special discount message when "Sigma" is entered in the name field.
- Current year displayed for the copyright section;
- A modal window appears if the user is inactive on the page for 1 minute. If the user does not confirm their presence, a farewell message appears, and the window closes.

## Getting started:
1.Make sure that you have the latest version of Node.js. 

2. Clone the repository:

```git clone https://github.com/JulkaUlka/decbase```

3. Install packages:

```npm i```

4. Open live server:

```npm start```

5. Open in web browser:

```http://localhost:1234```