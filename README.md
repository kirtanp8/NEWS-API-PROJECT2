## MONTANnews - Website Tour

https://user-images.githubusercontent.com/83728526/147847390-7d09b88b-b510-4fa6-ab8a-5173c80e135b.mp4

# Description

First pair programming project with GA.

Designed a news website aggregator where you can see the latest news, using JavaScript, ReactJS and CSS. Timeframe: 48 hours.

# Deployment
to be done
 
# Inspiration

For this project in pair programming we decided to go with a news website aggregator, where people can see the top news in the UK and read them in the place they were originally published. 

The design was inspired by "The New York Times", the website being in black and white.

# Getting Started

As we learnt through the course, it is best practice to start with a pseudocode.

So we had a wireframe to show how we wanted the website to look like, and the pseudocode with all the functionalities we wanted to add.

We used an API from where we could get the updated news.

First part was to make the homepage work with a few news and centering then in each box.

When the homepage was working just fine, we started with the other pages that we set to have, those was 'Businnes', 'Sports' and 'Entertainment'.

When the other pages were working perfectly, we decided to add a search bar.

That was the next step, when the search bar was working our job was done.

We only had 48 hours to complete the hackathon, so the website doesn't have many functionalities, but it works very well and satisfies the NVP.


# Framework used
* JavaScript
* CSS3
* ReactJS
* Google Fonts
* VS Code
* Git and GitHub

# Teamwork

As far as teamwork goes, Monia and I worked really well together, we both used the VSCode LiveShare extension from Monia's desktop and discusssed every piece of code + descision when we started working together. However, without telling each other, myself and Monia had done some homework prior to the day we started working. I simply made the request to grab all the data with the function below so we could start manipulating the data and displaying it and Monia had already worked on the `navigation bar` and had made sure we can click on a page. We both surprised each other and I think it shows that we are both willing to go the extra mile for the team.

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

# Functionality 

**Search Bar**

Below is a video displaying how our search bar works. 

https://user-images.githubusercontent.com/83728526/147846553-3a216e1c-1912-41b6-8f2f-b663a99b1222.mp4







