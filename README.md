
# aic-exhibitions-viewer
A simple application that uses Next.js and React to fetch exhibition data from the Art Institute of Chicago's API and display it in a web application.

Created for the Eames Institute take-home Technical Exercise

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run this application:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.


## About this application

This application uses the [Art Institute of Chicago's REST API ](https://api.artic.edu/docs/). It pulls the first 10 entries from the `GET /exhibitions` endpoint (sorted by last updated date in descending order). The request uses the `include=artworks` parameter to also source a list of artworks included in the exhibition.

The url used for this demo is `https://api.artic.edu/api/v1/exhibitions?limit=10&include=artworks`

I opted for this version of the application to use the first 10 entries because they happen to provide a range of data completeness. While it is possible for an exhibition entry to include a list of artworks, a link to the AIC website, a preview image, and a short description, few exhibitions fit all of this criteria. This application uses Typescript to normalize the API data for both Exhibitions and Artworks.

This data is then passed into a single page application that lists the available information for each exhibition. For exhibitions with Artworks available in their API data, it shows a list of that artwork with the display date provided.

## Possible Improvements and Extensions

The exhibition query does not sort or filter to any meaningful degree, nor does it include pagination. An obvious first step improvement would be to include sorting and pagination.

Additionally, the artworks list in the current display only list the title and artist. I have pulled additional metadata, such as medium, but many fields are missing. An API call for images must be done with the `artworks/` endpoint. If I had more time, I would include a detail view for available artworks where a user could click on the artwork title and it would open a modal that shows that artwork. I would do this using a server-side component with cacheing and some form of lazy loading. 

## Use of AI
For this assignment, I used Claude Sonnet 4.5 as an assistant. I asked Claude to help use Tailwind CSS to style the application, to create `exhibitions-loading.tsx`, and to provide feedback and code review.
