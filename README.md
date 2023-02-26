[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10190893&assignment_repo_type=AssignmentRepo)
# FED Javascript 1 - Course Assignment

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Design](https://www.figma.com/file/XUCFuqlxp5UBEp1uUU2n1F/PokeDex-Icon?node-id=0%3A1&t=lvFSpI9I0CMrPCLG-0)
- [Production deploy](https://visionary-zabaione-92271a.netlify.app/)
- [Deployment CI](?)
- [API Docs](https://pokeapi.co/)

## Report

The Javascript code implements a Pokedex that allows users to search for Pokemon by name, type, and sort order.

The first part of the code hides the loader after the page is fully loaded. 
The second part of the code gets the Pokemon box element and fetches Pokemon data from the PokeAPI. The getPokemon() function gets Pokemon data from the API, filters the data by search term or type, and displays the resulting Pokemon on the page using the displayPokemon() function. The sortPokemon() function sorts the Pokemon displayed on the page by name and toggles the sort order.

The capitalizeFirstLetter() and lowerCaseName() functions are utility functions used to format Pokemon names. The toggleSortOrder() function updates the sort button text based on the sort order. The getPokemonByType() function fetches Pokemon by type and filters the results based on the type and slot.

The Design I made is inspired by the red/blue look of Pokemon and the colors appeals to a younger target audience. Its simple, easy to understand and catches the eye. 

The Header Image is taken from (https://www.pokemon.com/us/pokedex) but the logo next to it I made in Figma. It is the back of a pokedex that the main character uses in the anime. I thought it was fitting and colorful.

The pokedex character on the side that takes you to the contact page I wouldnt necessary use him for that for an actual website but I like the idea of him being a kind of guide to the user that maybe gives informaton about the website as they click through it. The Picture of him I also got from (https://www.pokemon.com/us/pokedex).



## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://127.0.0.1:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [ ] End-user can see a list of items of the home page.
- [ ] When the End-user clicks on an item in the list they are navigated to the details page.
- [ ] End-user can view atleast three properties of an item in a list.
- [ ] End-user can view atleast three properties of an item on the details page.
- [ ] A error message is present when the End-user encounters a error while viewing the index page.
- [ ] A error message is present when the End-user encounters a error while viewing the details page.
- [ ] End-user can view the title of the item on the browser tab for a details page.
- [ ] End-user can view validation message when they input an incorrect name.
- [ ] End-user can view validation message when they input an incorrect subject that is less than 10 characters.
- [ ] End-user can view validation message when they input an incorrect Email address.
- [ ] End-user can view a validation message when they input an incorrect physical address that is less than 25 characters long.

## End-user success criteria (Optional - 100%)

- [ ] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [ ] Confirmation modal after custumer submits a successful contact form.
- [ ] End-user can auto-fill the contact form using the browser auto-fill.
- [ ] End-user can auto-fill the contact form using a password manager.
- [ ] Validation still works when End-user uses copy and pastes into input fields.
- [ ] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
  - [ ] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [ ] End-user can view a custom favicon.
- [ ] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [ ] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] COlour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [ ] Contrast
    - [ ] Balance and alignment
    - [ ] Emphasis
    - [ ] Proportion
    - [ ] Hiearchy
    - [ ] Repetition
    - [ ] Ryhthem
    - [ ] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [ ] All pages have a meta description.
- [ ] All pages have a valid title.
- [ ] All pages import the correct css files.
- [ ] All pages import the correct JS file.
- [ ] Details page URL includes a query param.
- [ ] My website makes a GET request to an API to get a list of results.
- [ ] My website makes a GET request to an API to get details of one result.
- [ ] Input fields have the following attributes;
- [ ] All images have an alt tag;
  - [ ] A name,
  - [ ] A placeholder,
  - [ ] A aria-describedby,
  - [ ] Required
- [ ] I have not copied Javascript code.
- [ ] I have not used a Javascript library.
- [ ] Removed all unused files.
- [ ] Named all images properly.
- [ ] Committed all my code to github.
- [ ] My repo is publically viewable.
- [ ] I've submitted/ written a report.
- [ ] I've removed all todo notes in code.
- [ ] I've removed all console logs in code.
- [ ] Code is formatted correctly.
- [ ] There are no red underlines in VSCode.
- [ ] There are no error messages in the terminal when I run the project.
- [ ] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Petter Martin (@PetterMartin)
- Monde Sineke (@S3ak)
