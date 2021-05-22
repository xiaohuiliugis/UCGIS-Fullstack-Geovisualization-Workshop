# Full-stack Geo-visualization 101: How to Make Productive Webmaps


The ability to visualize large amounts of information in real time on interactive maps has never been more important for GI scientists and specialists.  Web-based and open-source platforms, such as the mapping library leaflet and the noSQL database MongoDB, are becoming more popular and useful for their real-time functionality. 

This workshop will serve as an introductory technical training on full-stack geo-visualization. The workshop will include an overview of web-based platforms, mapping libraries, and the backend infrastructure. During this interactive and hands-on session, all participants will have a chance to build a small web map project with a provided data pack. The whole process of programming and debugging will be demonstrated. There will be time for both development and answering questions that participants may have.

This workshop is organized by UCGIS on **Friday June 11, 2021, 2:00 - 4:00 pm EDT (11:00 am - 1:00 pm PDT)**.

# Prerequisites
## Skill Requirement
- You should know the basic ideas of GIS, such as map, layer, and point/polyline/polygon.
- You should have basic PC and Internet knowledge.
- Some programming experiences are preferred, but not limited to a specific language or web programming. You are also welcomed to attend the workshop even if you have zero programming experience.
- Some database knowledge is necessary if you want to continue the back-end section, such as database, database management system, and database GUI.

## Hardware Requirement
- A PC with Windows 10 operating system is preferred.
- Internet is necessary.
- If you want to finish the back-end part, you will need a PC with the administrator privilege.

## Software Requirement
You can find [a full software checklist walkthrough video here](https://www.youtube.com/watch?v=Ii1PSJVzwNo).

### Frontend Part
- [Visual Studio Code](https://code.visualstudio.com/download)
- [GitHub Desktop](https://desktop.github.com/) and a GitHub account which can be created from [here](https://github.com/)
- [Firefox Browser Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- Add [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) plugin to your firefox developer edition

After you register and confirm your GitHub account, we need to fork [this repository](https://github.com/luyuliu/UCGIS-Fullstack-Geovisualization-Workshop) and click on the "fork" button to the right. Now you should have a repository with the same name but under your username. We will do everything in **your own forked repository**. Your own repo's URL should look like `https://github.com/[yourusername]/UCGIS-Fullstack-Geovisualization-Workshop`

After cloned your repo, go to GitHub desktop and log in with your credential. We will need to add your repo to your local machine. To do this:
- Click on *file* in the banner menu.
- Click *clone repository*.
- Find the repo .`UCGIS-Fullstack-Geovisualization-Workshop` in the list, or, search in the search bar.
- Specify the location. You can also just leave to the default.
- Click *clone* button. Then the software will clone your repo to the local disk.
- The GitHub Desktop will ask you *"how are you planning to use this fork?"*. You should answer *"For my own purposes"*.

We also need to set up your **GitHub page**. Go to your own repo's URL (should look like `https://github.com/[insert your username]/UCGIS-Fullstack-Geovisualization-Workshop/settings/pages`). You should see the GitHub Pages setting. If not, you can also go to the main page of your repo and click *"Settings"* and go to "*Pages*". 

Now under "*Source*", choose branch as main, and click "*Save*" button.

A few minutes later, you should be able to access the content in your repo. For example, try the two things below:
- You can try to download the UFO witness data with a URL like this `https://[insert your username].github.io/UCGIS-Fullstack-Geovisualization-Workshop/data/UFO.geojson`. Your browser should be able to download as a file.
- You can try to access `https://[insert your username].github.io/UCGIS-Fullstack-Geovisualization-Workshop/demo/` to try a demo map I made. We will host your final product in a similar manner.

### Backend Part
You will need administrator privilege for the backend part.
- [Python 3](https://www.python.org/downloads/). You can use any python 3 version. Therefore, if you have an older version, you do not have to reinstall your python. 
- EVE library in Python 3. 
Right click on the Start button and open Windows Powershell. Type in `pip3 install eve` or `python3 -m pip install eve` to install the library. 
- [MongoDB database](https://www.mongodb.com/try/download/community). MongoDB is a database, a very special one that we call it noSQL to distinguish it from traditional SQL databases such as postgreSQL. It is more flexible and faster for real-time data and naturally more suitable for web service. 
- [Robo3T](https://robomongo.org/download). Robo3T is a free MongoDB database GUI; you can see the dataset in the MongoDB via Robo3T, and you can also do some simple updating jobs in it.

# Frontend Lab Instruction

After learning about the basics of a webpage and a webmap, we will start to actually build a simple webmap from scratch. 

You can first open your GitHub Desktop and choose your cloned repo. Click on *"Open in Visual Studio Code"* and *"Show in explorer"* to open the repo in your VSCode and the file explorer.

## Create files
### Create HTML
First, we would like to create a new empty HTML file. To do this, we need to do:
- First, open the *explorer* sidebar in VSCode. You should be seeing several sections such as *"OPEN EDITORS"* and *the name of the folder you just set* ( if set default, it will be *"UCGIS-FULLSTACK-GEOVISUALIZATION-WORKSHOP"*). 
- Find the *code* folder under the second section, right click on the *code* folder and select *new file*. An input will show for you to enter the name of the new file.
- Type in *"index.html"*. You should see the file showing up in the sidebar. 

HTML files all start with a `<html>` tag to indicate this is indeed a HTML file. Therefore, we will first need to add:

```html
<html>
</html>
```

Most HTML files usually have two major sections: **head** and **body**, just like a human. Head section usually defines different libraries, important settings, and metadata. Body part is the actual part most HTML elements will be in.

To add a head and a body, copy/type in following codes between the `<html>` tags:

```html
<head>
</head>

<body>
</body>
```
We now have an empty HTML file.

### Create JavaScript and CSS
Likewise, right click on *code* and select *new file*. An input will show for you to enter the name of the new file. 

Type *"main.js"* and *"style.css"*. The names of the files are not important, therefore, you can choose the name you like, but remember to change accordingly later. 

## Populate HTML
As we discussed in the minilecture, HTML is like *the bone* and the foundation of a webmap. When we are opening a webmap, we are actually opening a HTML file. 

An HTML also holds the responsibilities of adding JavaScript and CSS libraries and your own scripts, which is the main focus of this section.



### Populate the head section
Then we will first populate the head section. First, we will need to set some metadata for the webpage. Copy the code bolow in the `<head>` section.

```html
<title>First web-map by [insert your name]</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#000000">
<meta name="description" content="[insert your description]">
<meta name="author" content="[insert your name]">
```
This is a large chunk! Let's break it down a little bit. See the comments for each clause, which is indicated by a `<!-- -->` tag. Notice that you can also copy the code below to your code 

```html
<title>First web-map by [insert your name]</title> <!-- This defines the title name of the web page -->
<meta charset="utf-8"> <!-- This defines your name -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes"><!-- These defines compatiability setting for different platform -->
<meta name="theme-color" content="#000000"> <!-- This defines the theme color -->
<meta name="description" content="[insert your description]">
<meta name="author" content="[insert your name]"> <!-- These two define your name and description -->
```

The metadata are ready! Next we want to add all the necessary libraries, including JavaScript and CSS. We will use several libraries in this webmap:
- Leaflet. As we discussed in the lecture, Leaflet is the major mapping library in the JS environment. Leaflet contains two parts: the JS library and CSS library. We will add both of them to the `<head>` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin="" />

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
```
- jQuery. Again, like what we discussed about in our lecture, jQuery is a very useful library in the JS environment. You can use it to easily select elements according to their *id* and *class*. You can add it by typing the code below in the the `<head>` tag:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```

### Populate the body section
In the next part we will discuss about how to populate the body section. The body section is the main part of the HTML file and the place to contain most HTML elements to be visualized on the web page; therefore, the body section usually can take the absolute majority of a HTML file. 

However, since we are only building a very simple webmap, we will have very few HTML elements in this file.

First, as we introduced in the lecture, leaflet needs an HTML element to contain the map object. Therefore, we will add a `<div>` tag to serve this purpose:

```html
<div id="mapid" style="width: 100%; height: 100%; position: relative"></div>
```

The *id* attribute defines the id of the element. The style attribute defines the CSS properties of this specific HTML element. You can also define this in your CSS file. For the sake of saving space, we will just define CSS in the *style* attribute.

Second, remember that only create the two JS and CSS file, but do not actually connect to the HTML file. (Yes, in other words, you cannot just create a JS or CSS file and wait some magics to happen so that they can be automatically applied to the HTML file)

Therefore, we will need connect the two files to the HTML file. To do this, we will use the example code we show on the powerpoint:

```html
<script src="main.js"></script>
	
<link rel="stylesheet" href="style.css" />
```
The first line connect the main.js in the same folder to the HTML file. The second line connect the style.css file to the html. Remember the location may vary if you decide to put the file in a folder.

Also remember that we talked about the dependencies between your JS code and different libraries you added to the HTML file. Always make sure your file comes lastly.

Until here, we almost finish populating the main structures of the HTML file. 

## Set up JavaScript Code
JavaScript is like the *muscles* and *senses*: it can act and react. So, next part and the most important part will be how to write the JS code.

First thing first, we need to implement our Leaflet map object. First add this code to the *main.js* file.

```javascript
var mymap = L.map('mapid').setView([40, -97], 5);
```

The JS variable *mymap* will be the Leaflet map object. We will conduct most operations on it. 

Next, we will first add a base layer to the map. There are a lot of base layer to select, but we will choose a mapbox OSM base layer. 

```javascript
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
```

This is clearly a long clause! But you do not really need digest all of them in one take. But let's just break it down:
- `L.tileLayer` is the function to define a tile layer for Leaflet, which is indicated by *"L"*. Inside this function, there are two parameters:
  - First is the URL of the base layer. You do not have to understand this.
  - Second is a parameter object structure that contains many other parameters. Again, you do not have understand all of them.
    - maxZoom sets the maximum zoom level.
    - attribution sets the attribution information.
    - id sets the id of the layer.
    - tileSize sets the tile size.
    - zoomOffset sets the zoom number used in tile URLs will be offset with this value.
- `addTo(mymap)` will add the layer to the Leaflet map object so that the layer can show on the map.

Till here, we already have a webmap with base layer that you can play with! You should open the HTML file we just created in the Firefox browser developer edition. To do this, right click on the *index.html* file and select *"open with"* Firefox browser developer edition. Try zooming in, out, and panning!

## Adding three basic symbologies
Base layer is definitely not enough. A very important job for webmap is to visualize vector symbologies and show relevant attributes. Next. we are going to show you how to add three basic symbologies to the map.

### Point marker
Let's continue our JS file by typing code below the existing codes.

```javascript
L.marker([41, -100]).addTo(mymap)
    .bindPopup("<b>Hello world!</b><br />I am an alone popup.").openPopup();
```
JavaScript supports *"function chaining"*, which means you can call multiple methods consecuitively. We are going to break down this long chain a little bit:
- We first define our marker by using `L.marker` at `[41, -100]`
- Then, like the base layer, we can directly add the newly created object to the `mymap` object. 
- Later, `bindPopup` will bind a popup to this marker, with the content `"<b>Hello world!</b><br />I am an alone popup."`. A popup is a very useful information box; it will literally pop up when you click on the object which you bind the popup to.
- The last function `openPopup()` will automatically activate the popup once you open the webpage, without clicking the object.

### Polygon and circle

Likewise, you can also call create polygon and circle function in a similar manner.

```javascript
L.circle([42, -90], 50000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am an alone circle.");

L.polygon([
    [45, -90],
    [51.503, -85],
    [40, -75]
]).addTo(mymap).bindPopup("I am an alone polygon.");
```

Only the circle is kind of special if you noticed. `L.circle` has three parameters in this function: center (organized in a list of [lat, lon] or [y, x]), radius (in meters), and other options. Let's break down again:

- color is the **border color**. You can also use HEX color code.
- fillColor is the **fill color**, literally. 
- fillOpacity is the transparency of the fill color.

There are more options available that you can change; check [here](https://leafletjs.com/reference-1.7.1.html#circle).

## Adding a geoJSON layer

Clearly, it is not sustainable to add every symbology manually or direcly in the JS code. We will need a more efficient way to add data. geoJSON is a very readable (relatively) and accessible geodata format. It is essentially a [JSON file](https://en.wikipedia.org/wiki/JSON), but for geographic information; therefore, you can directly visualize it in most (especially open-source) GIS software.

### Preparing your dataset
First let's talk about data. I already prepared a point geoJSON in the */data* folder in your repo, which shows the UFO witness data in the US during 2019/03. 

However, a local dataset is not accessible for online users. We will need move this local dataset to online so that our website can use this. Also remember that **CORS restrition** that will not allow us to access to a different domain, so we will need host the dataset in our own domain, which is the same domain where we will host our website. Clearly, GitHub page is a good choice.

### Setting your GitHub page
If you have not done this, you should go to your own repo's URL (should look like `https://github.com/[insert your username]/UCGIS-Fullstack-Geovisualization-Workshop/settings/pages`). You should see the GitHub Pages setting. If not, you can also go to the main page of your repo and click *"Settings"* and go to "*Pages*". 

Now under "*Source*", choose branch as main, and click "*Save*" button.

A few minutes later, you should be able to access the content in your repo. For example, try the two things below:
- You can try to download the UFO witness data with a URL like this `https://[insert your username].github.io/UCGIS-Fullstack-Geovisualization-Workshop/data/UFO.geojson`. Your browser should be able to download as a file.
- You can try to access `https://[insert your username].github.io/UCGIS-Fullstack-Geovisualization-Workshop/demo/` to try a demo map I made. We will host your final product in a similar manner.

You can access your dataset by using `https://[insert your username].github.io/UCGIS-Fullstack-Geovisualization-Workshop/data/UFO.geojson`

### Using your data
Since you hosted the data in your repo, you can use it! Add this code to your main.js file.

```javascript
$.get("https://luyuliu.github.io/UCGIS-Fullstack-Geovisualization-Workshop/data/UFO.geojson", visualize_geojson)

function visualize_geojson(data) {
    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    }).addTo(mymap);
}
```

# Data reference

The UFO witness data are downloaded from [here](https://data.world/timothyrenner/ufo-sightings). The geoJSON is visualized and exported by QGIS; only data in the US and during 2019/03 were selected.

<style>
h1 { counter-reset: h2counter; }
h2 { counter-reset: h3counter; }
h3 { counter-reset: h4counter; }
h4 { counter-reset: h5counter; }
h5 { counter-reset: h6counter; }
h6 {}

h2:before {
    counter-increment: h2counter;
    content: counter(h2counter) ".\0000a0\0000a0";
}

h3:before {
    counter-increment: h3counter;
    content: counter(h2counter) "." counter(h3counter) ".\0000a0\0000a0";
}

h4:before {
    counter-increment: h4counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) ".\0000a0\0000a0";
}

h5:before {
    counter-increment: h5counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "." counter(h5counter) ".\0000a0\0000a0";
}

h6:before {
    counter-increment: h6counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "." counter(h5counter) "." counter(h6counter) ".\0000a0\0000a0";
}
</style>