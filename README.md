# Tailwind Table

A practice to learn Tailwind by making a table with responsiveness and dark mode.

This is a practice project to learn Tailwind by making a table with responsiveness and dark mode. It's built with Next.js, Tailwind and TypeScript.


## Run the project

You can see the project in this deployed site: https://regan-tailwind-table.vercel.app/

If you want to run the project locally, please follow the commands below:

```bash
# To have the project repo in your computer.
$ git clone https://github.com/hens-virtuella-varld/table.git

# To install all the dependencies.
$ npm install

# To run the development server.
$ npm run dev
```
After the above three steps, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How I made the project.

### Data source and `ProductRow` component
Fascom sells stuff so I decided to show commercial product info in the table. I put my dummy data in `data.json`.

Each row shows all the details for a specific product and I wrote a reusable React component, `ProductRow` for it. Then I render the product data with the JS `map()` method into `ProductRow`.

### Responsiveness and Readability
I was thinking to hide some product details on small screens. In the end, I decided to show all the product info regardless of the screen sizes. Fascom's business is to sell construction materials, and I guess Fascom's customers prefer to see all product ino even on small screens. 

I chose to use HTML `<table>` element to make this table due to accessibility concern (screen reader can handle `<table>` element well). However, I would love to try to build the table again through  `<div>` with flex and see the difference between using `<table>` and `<div>` with flex!

The table aligns center on large screens. All the even rows are colored to make the table easy to read.

The column width changes automatically based on screen sizes. The product images appear on large screens. The user can only see the product links when it's on mobile or tablet screens. Once a link is clicked, the browser opens the image in a new tab.

### Dark Mode
A button, theme toggler, to switch dark/light theme is placed on the buttom right of the screen regardless of screen sizes.

#### Successful Method: `next-themes`
I made the dark mode with the 3rd party library, `next-themes`.

#### Failed Method: `document.body.className`
I tried the other method without 3rd party library at the beginning to handle dark mode but it didn't work well. This method is to change `document.body.className` between `dark` and `light` with the theme toggler button. When the theme toggler is clicked, `setIsDarkTheme` will switch `isDarkTheme`'s boolean value, then `document.body.className` will be switched to the other theme.

However, with this method in dark mode, it seems like I couldn't render DOM body's background color successfully. I guess that's why many people decided to use the 3rd party library, `next-themes`.

You can check what I did in the commit `ffaded4`. The image below is how my failed dark mode looks like:

![Failed dark mode](https://github.com/hens-virtuella-varld/table/assets/47247794/c21a08b4-29ed-4281-9112-11757e213c5f)
