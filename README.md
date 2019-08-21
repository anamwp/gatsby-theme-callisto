<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://wpspark.io/">
    <img alt="WPSpark" src="./src/images/wpspark-logo.png" width="200" />
  </a>
</p>
<div align="center">
<h1>Gatsby Template - Callisto</h1>
<button>
<a target="_blank" href="http://blog1-demo.wpspark.io/"> Demo</a>
</button>
</div>


####Dependencies
_Before start development or deploy make sure our `spark-lite` WordPress plugin is installed inside your WordPress installation  [Download Spark Lite](https://github.com/wpspark/spark-lite)._

####Minimum Requirement to build
1. At least one blog post with featured Image in your WordPress site
2. One category and that category related post

#### Install gatsby CLI
To install gatsby CLI globaly.
```sh
npm install -g gatsby-cli
```

## 🚀 Quick start
1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site.

    ```sh
    # create a new Gatsby site using theme callisto
    gatsby new callisto https://github.com/wpspark/gatsby-theme-callisto.git
    ```
2.  **Create `.env` file.**

    Navigate into your new site’s directory and create a new `.env` file.

    ```sh
    cd callisto/
    touch env/.env.mysitename
    ```

    Open `.env.mysitename` file with a text editor and add below config inside `.env.mysitename` file.
    ```sh
    baseUrl = "yoursite.com" # without http/https
    protocol = "https"
    ``` 

3.  **Start developing.**

    To start development process run below command from your terminal.
    ```sh
    gatsby develop mysitename
    or 
    npm start mysitename
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. 
    This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
    <br>


5.  **Build Process.**

    To build your site run bellow command from your terminal.
    ```sh
    npm run clean
    gatsby build mysitename
    ```


## 💫 Deploy With Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wpspark/gatsby-theme-callisto)

<!-- AUTO-GENERATED-CONTENT:END -->
