# CS628-PE02-Likhitha
## PE02-MovieList

## Input
- **Movie Data**: An array of movie objects has been imported into the application. The following properties apply to every movie object:
  - Title
  - Genre
  - Release Year
- **User Selection**: Users can filter the movie list by choosing a genre from a dropdown menu.
## Process
1. **Rendering Movie List**:
   - The `MovieList` component uses JSX to dynamically render a list of movies.
   - The title, genre, and year of release of each film are shown as a card or list item.

2. **Filtering Movies**:
   - From the movie array, a dropdown menu dynamically creates multiple genres.
   - When you choose a genre, only films from that genre are shown in the movie list.
   - When "All Genres" is selected, the list is reset to show every movie.

3. **User Interaction**:
   - The movie title appears as an alert when a movie is clicked.
   - React's state and event handlers are used to manage user interactions.

## Output
- movie titles, genres, and release years are shown in a styled movie list.
- a dropdown filter that updates the list that is shown according on the genre that is selected.
- The title of a clicked movie is displayed in an alert box.
- Dynamically updated interactions and filtered results do not require a page reload.

### Features
- **Functional Components**: React functional components and hooks are used in the app to manage state.
- **Dynamic UI**: Using user input, the app dynamically filters and shows movies.
