import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => (
  <div className="container">
    <div className="main-header">Home</div>
    <article className="description">
      <p>
        This is a simple, mobile-friendly demo{' '}
        <a href="https://github.com/lu4ezar/search_view">app</a> written in{' '}
        <a href="https://www.typescriptlang.org/">TypeScript</a>. It was
        bootstrapped with{' '}
        <a href="https://github.com/facebook/create-react-app">
          Create React App
        </a>
        . <a href="https://sass-lang.com/">SCSS</a> was used for styling.
        Navigation was implemented with{' '}
        <a href="https://github.com/ReactTraining/react-router">React Router</a>
        . No state management tools were involved, just{' '}
        <a href="https://reactjs.org/docs/hooks-reference.html#usestate">
          useState
        </a>{' '}
        hook. The app consists of 2 parts:
      </p>
      <ul>
        <li>
          <Link to="/search">
            <h3>part I . search </h3>
          </Link>
          <p>
            <em>
              Enter id <span>(int, [1..493])</span>, hit 'ok' and get card with
              one of "Rick and Morty"'s character. Find your favorite one!
            </em>
          </p>
          <p>
            All the data comes from{' '}
            <a href="https://rickandmortyapi.com/">Rick and Morty API</a> via{' '}
            <a href="https://graphql.org/">GraphQl</a> query. No library was
            used, bare manual{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
              fetch
            </a>{' '}
            call from custom <span title="src/hooks/useFetch.ts">useFetch</span>{' '}
            hook. It handles <em>loading</em> and <em>error</em> states and uses{' '}
            <em>async/await</em> syntax. Types were auto-generated with{' '}
            <a href="https://www.npmjs.com/package/@graphql-codegen/cli">
              @graphql-codegen/cli
            </a>
            .
          </p>
        </li>
        <li>
          <Link to="/gallery">
            <h3>part II . gallery</h3>
          </Link>
          <p>
            <em>Get some image urls and create your own gallery.</em>
          </p>
          <p>
            Also, you can use buttons placed below input to get hardcoded urls
            of hi-res images from{' '}
            <a href="https://unsplash.com">unsplash.com</a>. Click button once
            to insert link into input and submit it manually. Double-click will
            auto-submit image. Gallery layout was made with{' '}
            <code>
              display: grid;
              <br />
              grid-template-areas: 'img img img';
            </code>
          </p>
        </li>
      </ul>
    </article>
  </div>
);

export default Home;
