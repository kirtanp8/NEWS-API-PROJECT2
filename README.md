## MONTANnews - Website Tour

https://user-images.githubusercontent.com/83728526/147847390-7d09b88b-b510-4fa6-ab8a-5173c80e135b.mp4

# Description

First pair programming project with GA.

Designed a news website aggregator where you can see the latest news, using JavaScript, ReactJS and CSS. Timeframe: 48 hours.

# Deployment
The website can be viewed here, however, we have found out that the **api only works locally**: https://montannews2021.netlify.app/ 


 
# Inspiration

For this project in pair programming we decided to go with a news website aggregator, where people can see the latest news in the UK and read the article in the place they were originally published. 

The design was inspired by "The New York Times", the website being in black and white.

# Getting Started

As we learnt through the course, it is best practice to start with a pseudocode.

So we created a wireframe in order to have something to work off

We used an API from where we could get the updated news.

First part was to make sure to display the right amount of news.

When the homepage was working just fine, we started working on the Sports, Business and Entertainment page.

When the other pages were working perfectly, we decided to add a search bar.

We only had 48 hours to complete the hackathon, so the website doesn't have a whole load of functionality, but it works very well and satisfies the MVP.


# Framework used
* JavaScript
* CSS3
* ReactJS
* Google Fonts
* VS Code
* Git and GitHub

# Teamwork

As far as teamwork goes, Monia and I worked really well together, we both used the VSCode LiveShare extension from Monia's desktop and discussed every piece of code and decision when we started working together. However, without telling each other, myself and Monia had done some homework prior to the day we started working. I simply made the request to grab all the data with the function below so we could start manipulating the data and display it on our website whilst Monia had already worked on the `navigation bar` and had made sure each route worked. We both surprised each other and I think it shows that we are both willing to go the extra mile for the team.

```
  useEffect(() => {
    async function getNews() {
      const response = await axios.get(
      \\ We are happy to share our API KEY Below as its free to use
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=f0043f2035b34ff3b5934f9f39e51873`
      );
      console.log(response.data.articles)
      setNews(response.data.articles)
    }
    getNews()
  }, [])

``` 

# Development Process

**Search Bar**

Below is a video displaying how our search bar works (something we worked on together). I think it's the best piece of JavaScript we have running in the background. I was really proud of this. First we loop through the possible list of categories the user can possibly search through using a `for loop`, `if` the user searches for one of the possible options listed in the `dropdown menu` they will be taken to the respective page. The user can also navigate through the dropdown menu and click on a given category.

https://user-images.githubusercontent.com/83728526/147846553-3a216e1c-1912-41b6-8f2f-b663a99b1222.mp4

**Returning News Articles from the API**

To get the latest news articles we used the below function. 

```
 const [news, setNews] = useState([])

    useEffect(() => {
      async function getNews() {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=f0043f2035b34ff3b5934f9f39e51873`
        );
        console.log(response.data.articles)
        setNews(response.data.articles)
      }
      getNews()
    }, [])

```
and then mapped through the `array` using the below method 

```
    <div className='business-positioning'>
      {news.map((newspiece, i) => (
        i <= 9 ? <BusinessStories key={news[i]} {...newspiece}/> : false
       ))}
     </div>

```
the api returned thousands of results but we only wanted to display a short number of them so decided to use a `ternary operator` to prevent all of the data being returned. The latest news articles were always placed at the beginning of the array. 

# Wins

* Being able to get the data to successfully to display on each page with the power of Axios was of course a great win as this was the main source for being able to include more functionality to our website.
* Learning where data is stored and being able to manipulate it so that it looked relevant to our design of the application was another win. 

# Challenges

* Having only 48 hours to work on a project with little React knowledge was not at all easy by any stretch but deciding on which parts of the app should be finished in order to reach the MVP prior to our presentation would have been the biggest challenge for us both.

# Future Features

* Pagination and displaying more data on different pages would make the website look finished.

# Key Learnings

* The API only works locally meaning we can't deploy the website and had I of known this, I wouldn't have suggested to Monia that we should use this API.
* Communication: I had of course worked in teams for daily challenges which came as practice for an import task that goes on both mine and Monia's portfolio and both of us being able to share and discuss our different ideas added to my team work experience for industry practices.  


