# react-product-display-app

This project is a React-based application that displays products and product categories from an external API. Users can view all products, filter products by category, and load more products using a "See More" button.

## Live: https://react-product-display-app.netlify.app/

## Features

- Display all products from the API.
- Filter products by categories displayed on the left side.
- Load more products with a "See More" button.
- Axios for API requests.
- Loading spinner during data fetching.

## Tech Stack

- **React**: For building the UI components.
- **Axios**: For making API calls to fetch data.
- **Bootstrap**: For responsive layout and design.

## API Used

This app uses the [Dummy JSON API](https://dummyjson.com/) for fetching categories and product data.

- **Get all categories**: `https://dummyjson.com/products/categories`
- **Get all products**: `https://dummyjson.com/products`
- **Get products by category**: `https://dummyjson.com/products/category/{categoryName}`

## Installation and Setup

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/react-product-display-app.git
   cd react-product-display-app
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

This will start the app at http://localhost:3000.

## Project Structure

  ```bash
  react-product-display/
  │
  ├── public/                       # Public assets
  │   └── index.html                # Root HTML file
  │
  ├── src/                          # Source files
  │   ├── components/               # Reusable components
  │   │   ├── Category.jsx          # Renders category list
  │   │   └── ProductItems.jsx      # Renders individual product cards
  │   ├── App.jsx                   # Main application logic
  │   └── index.js                  # Entry point for the React app
  |   |__ index.css                 # Custom css design code

  ```

## How It Works

- **Categories**: Categories are fetched from the API and displayed on the left-hand side. Clicking on a category filters the products displayed.
- **Products**: The right-hand side displays product cards. Initially, 9 products are shown. Users can click the "See More" button to load additional products in increments of 9.
- **Loading Spinner**: A spinner is shown while categories and products are being fetched from the API.

## Example Code

Here’s how we fetch data using Axios:

  ```bash
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products')
    .then((res) => {
      setIsLoading(false);
      setFinalProduct(res.data.products);
    })
    .catch((error) => {
      setIsLoading(false);
      console.error(error);
    });
  }, []);
  ```

## Contributions

Feel free to fork the repository and submit pull requests to contribute to this project. Any feedback or suggestions are welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
