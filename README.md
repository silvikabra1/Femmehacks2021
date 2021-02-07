# Stock Tweets

# Build Instructions!

[![Build Status](https://travis-ci.org/YaleDHLab/flask-react-boilerplate.svg?branch=master)](https://travis-ci.org/YaleDHLab/flask-react-boilerplate)

Simple boilerplate for a Flask backend and React client including:

* ES6 transpiling via Webpack
* Hot module reloading via Webpack Dev Server
* State management via Redux
* Tests via Pytest and Jest
* Linting via Pylint and Eslint
* Travis CI for automatic testing and linting

## Dependencies

To install the boilerplate dependencies, you can run:

```bash
git clone https://github.com/YaleDHLab/flask-react-boilerplate
cd flask-react-boilerplate
npm install --no-optional
pip install -r requirements.txt
```

## Quickstart

Once the dependencies are installed, you can start the api with the following command:

```bash
npm run production
```

That will start the server on port 7082. To run the development server with hot module reloading, run:

```bash
npm run start
```

That will start the webpack dev server on port 7081.

# Stock Tweets Background

A web app that combines Twitter sentiment analysis on popular tweets about stocks with the stock market trends of those specific stocks, categorizing them into bearish, neutral, and negative tweets.
``
```
