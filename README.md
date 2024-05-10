
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
The table I made is to show different commercial product info. For the data used in the table, I put some dummy data in `data.json`.

Each row shows all the details for a specific product and I wrote a reusable React component, `ProductRow` for it. Then I render the product data with the JS `map()` method into `ProductRow`.

### Responsiveness and Readability
I was thinking to hide some product details on small screens. In the end, I decided to show all the product info regardless of the screen sizes. Fascom's business is to sell construction materials, and I guess Fascom's customers prefer to see all product ino even on small screens. 

I chose to use HTML `<table>` element to make this table due to accessibility concern (screen reader can handle `<table>` element well). However, I would love to try to build the table again through  `<div>` with flex and see the difference between using `<table>` and `<div>` with flex!

The table aligns center on large screens. All the even rows are coloured to make the table easy to read.

The column width changes automatically based on screen sizes. The product images appear on large screens. The user can only see the product links when it's on mobile or tablet screen. Once a link is clicked, the browser opens the image in a new tab.

### Dark Mode
A clickable button to switch dark/light theme is placed it on the buttom right of the screen regardless of screen sizes.

I tried to handle dark mode without 3rd party library at the beginning (you can check what I did in the commit `ffaded4`) but it didn't work well.

