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
- [MongoDB Compass](https://www.mongodb.com/try/download/compass). MongoDB is a free MongoDB database GUI; you can see the dataset in the MongoDB via MongoDB Compass, and you can also do some simple updating jobs in it.

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
        pointToLayer: convert_point_to_symbol
    }).addTo(mymap);
}

function convert_point_to_symbol(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    });
}
```

This is surely the longest code we ever add to this map! Let's break it down.

First line does two things: 
- It uses `$.get(url, callback)` function in jQuery to retrieve the geoJSON data from the URL of GitHub page (in this case, it's in my repo so it's under the `luyuliu.github.io` domain).
- It sets the function `visualize_geojson` as the function to handle the returned data.

Remember that it is not recommended to "procrastinate" here: you should not retrieve the data and leave it for later; instead, you should immediately indicate what you are going to do with the data, which is the exact purpose of the callback function (`visualize_geojson`). In this sense, getting the data and the handling of the data are declared in a same clause.

The second part of the code defines the callback function `visualize_geojson`. There is only one long clause in this function, let's break down too.

First, we use a `L.geoJSON` function to define a geoJSON layer. Inside this function, there are two basic parameters:
- First and of course, it is the geoJSON data we retrieved from the URL;
- Second is a object structure of all the settings of this layer:
  - We actually only have one parameter to set, which is `pointToLayer`. The value of `pointToLayer` is a function `convert_point_to_symbol`. The function will define a projection FROM **each point in this point geoJSON layer** TO a **corresponding symbol on the map**, which is the reason we call this function `convert_point_to_symbol`.

The last part defines the `convert_point_to_symbol` function. 
- The funciton has two parameters: *feature* and *latlng*. You can imagine *feature* as the attribute table in GIS software and *latlng* as the coordinate of this point. This is the part that is pre-defined, although you can still name the two variables with different names, but the role, position and structure of the parameters are predefined.
- The result returned by this function is a `L.circleMarker` object; this defines a point symbol. Similarly, this object is also defined by two parameters:
  - Of course, you need to tell it where it is, which is the latlng parameter defined in the function
  - Similar to the defining function of the `L.geoJSON` object, second parameter is also a structure of different parameters. We introduced these parameters when we added the red circle in the map, so we won't repeat here.

Now, save your code and refresh your webpage, you should be able to see a lot of UFO witness (orange points) on your map!

## Add an Click Event

We talked about JS can act and react; so here we want to use try the reaction feature. A very convenient feature is to show a popup about the location you click on. How to do this? Try following code:

```javascript
var popup = L.popup();

function onMapClick(event) {
    popup.setLatLng(event.latlng)
        .setContent("You clicked the map at " + event.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
```

Let's break down:
- First line defines an empty popup, which will be the popup showing up when we click on the map;
- Second part defines a "reaction function", or event callback function if describing it in a more professional way. The function will be the action after we detect the event happening, which will be the *reaction*. This function actually has only one clause, but with three steps defined in the chaining manner:
  - First, `setLatlng`, which will move the popup to the place you set. The location will be the location the user will click on, which hasn't happen as we speak. However, you can tell the code to wait for that, and capture and return the event data when the event happens. In that sense, the parameter of the callback function is `event`, which contains the latlng of the future clicking. So you want to set the 
  - Second, `setContent`, which will write the content on the popup. Here we want to write the latlng we click on, but that will be a dynamic string. So we use `+ event.latlng.toString()` to attach it to the `You clicked the map at ` string.
  - Finally, you should open the popup on our map so show it. Or you will never see it.
 - Finally, `mymap.on('click', onMapClick);` sets the trigger condition. In natural language, this clause can be translated into: for `mymap`, on a user clicking anywhere, trigger the `onMapClick` function.


Save, refresh, and explore!

## Go online!

Now since we have a working local version of your website, you can now push the changes to your GitHub repository and update the GitHub Pages to make it online! 

To do this, go to GitHub Desktop and you will find that you will find you are making a lot of changes compared to the original version of the GitHub repo, which you just cloned from mine. There are two steps you need to do:
- Commit your changes. In the sidebar you will see there are several changed files and there are two empty things you need to fill in: Summary and Description (optional). Summary basically tell the future yourself about what this change is for. Therefore, it is recommended that you write down: Finish the Frontend part. Of course, you can write down anything! Then, click *commit to main* to commit the changes. 
- And then, click on **push origin** to push your committed changes online
- Wait several minutes and visit `https://[yourusername].github.io/UCGIS-Fullstack-Geovisualization-Workshop/code` to see your final product. You are now officially online!

## Conclusion
This is the end of the frontend part. You should be able to reproduce the same webmap I have in here:  `https://luyuliu.github.io/UCGIS-Fullstack-Geovisualization-Workshop/demo`. Ask anything!

# Backend Part

Sometimes we refer the website we made in the last part as **static website**: yes, you can still interact with it, you can still see animation, you can even change the data sources once a while. But the idea is that: there are not a lot of things a user can do dynamically. For example, you need to physically update the dataset whenever you need to change anything. 

The primary reason is that there is no server and database support for the website. Notice that we do not actually rent a server in the frontend part and we use GitHub Pages to host our website, which can only support static website.

In this part, we will set up a backend environment for our website we just made. We will use MongoDB as our database and Python-eve as our API support.

## Prepare the environment

You will need administrator privilege for the backend part.
- [Python 3](https://www.python.org/downloads/). You can use any python 3 version. Therefore, if you have an older version, you do not have to reinstall your python. 
- EVE library in Python 3. 
Right click on the Start button and open Windows Powershell. Type in `pip3 install eve` or `python3 -m pip install eve` to install the library. 
- [MongoDB database](https://www.mongodb.com/try/download/community). MongoDB is a database, a very special one that we call it noSQL to distinguish it from traditional SQL databases such as postgreSQL. It is more flexible and faster for real-time data and naturally more suitable for web service. 
- [MongoDB Compass](https://www.mongodb.com/try/download/compass). MongoDB is a free MongoDB database GUI; you can see the dataset in the MongoDB via MongoDB Compass, and you can also do some simple updating jobs in it.

The MongoDB part is the most tricky part among the three. To test if you successfully install MongoDB, there are several ways to confirm:
- Test it with your MongoDB Compass. Open MongoDB Compass and you should be seeing an *New Connection* window. DO NOT enter any address, directly click Connect button. If you can see *admin, config, and local* databases showing up, then you are in! 
- See the process with the task manager. Find whether there is a *MongoDB Database Server* background processes. If there is one, then you should be okay.
- You can always uninstall and reinstall if it suddenly does not work!

## Import the UFO Data in MongoDB
We need to import the data to the MongoDB. Follow the instruction below:
- Connect to the localhost connection with your MongoDB Compass
- Click on the *CREATE DATABASE* button
- Enter `UFO_witness` in *Database Nmae* and enter `2019_03` in *Collection Name*. This is the database and collection (a table) we will be working in. You should be seeing `UFO_witness` database showing up. 
- Open it and click `2019_03` to enter the collection. Click on `ADD DATA` and choose *Import File*.
- Import `/data/UFO.json` file (NOT UFO.geojson!) and choose JSON type.
- You should be seeing 265 records imported.

## Set Up an API to Serve the Data

API is the bridge between frontend and the database. I already wrote a template for MongoDB databases with Python and Python eve, a very simple and efficient library. We do not want to go deep into the implementation, since even I have not touch it since I wrote it back in 2018, and it is working fine! Instead, I want to tell you how to set up the API and change the parameter.

First, we would like to change the API's setting. You need to open `/api/run.py` in VSCode. We will have two parameters to change: *database name*, which will be the database you want to serve to the front end, and a port number, which can be any number as long as your other programs are not using that port. 

In our case, our database will be `UFO_witness` and port number can be `13579`. You can use other numbers you like too.

Second, after saving your `run.py` file, let's run it! Open a Windows Powershell (right click start button and you can find it) or a command prompt (search for "command"). Then, right click the run.py **tab** and select **"Copy Path"**. Then type `py X:\[your folder location]\UCGIS_2020\UCGIS-Fullstack-Geovisualization-Workshop\api\run.py`. You already copy the path, so you can just type `py ` (with a space) and ctrl+v.

You should seeing something like this showing up in your console:
```
Setting files generated.
 * Serving Flask app "eve" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:13579/ (Press CTRL+C to quit)
```
This means your API is running! To see what the data look like, you can try to access `http://127.0.0.1:13579/2019_03` (which will also be how we use the data in our webmap) in your browser and it will show a XML like structure to show your records in the `2019_03` table.

## Change frontend to incorporate the backend

The data feeded by the backend cannot be directly shown on the map yet. We need to convert the feeded data to a data structure with geoJSON format. 
- First, copy and back up your HTML and JS files. Change the names of the copied files to `index_backend.html` and `main_backend.js` and change the clause that adds the JS file to HTML file to `<script src="main_backend.js"></script>`. Next, we will change the settings in the `main_backend.js` file.
- Second, change the URL of the data to `http://127.0.0.1:13579/2019_03`.
- Add `data = format_data(data);` to the front of the function `visualize_geojson`. After the change, the function should look like this:

```javascript
function visualize_geojson(data) {
    data = format_data(data);
    L.geoJSON(data, {
        pointToLayer: convert_point_to_symbol
    }).addTo(mymap);
}
```

- Define function `format_data`. This function will transform the data in the database into a geoJSON structure so that the `L.geoJSON` can recognize the data. Add following code after the function `visualize_geojson` in `main_backend.js`.
```javascript
function format_data(data) {
    var items = data._items;
    var geoJSON = {
        "type": "FeatureCollection",
        "name": "UFO",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": null
    }
    geoJSON["features"] = items;
    return geoJSON
}
```

## See the Local Webmap 

You may find that if you open the `index_backend.html` is not working in your normal browser. This is when we use Firefox developer edition. Because of [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) restriction, we cannot directly access from the website (a local file) to the API URL (localhost). So, we need to open the [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) plugin to enable a cross-domain request.

To do this, simply click on the plugin, which should be red in default. After you click it, it should be green now. Fresh and you should be able to see the same UFO witness layer showing up!

## Conclusion

We finish our backend part. The purpose of this part is to let you familiarize the database and how to set up an API to connect the database and the webmap. 

There are a lot of potential applications for your own research:
- You can build your research on MongoDB, which many people joke about it being literally an excel-equivalent. 
- After you have a dynamic MongoDB database, which will be updated during your research, you can use the connection to visualize the data in real time. I use this feature a lot and I benefit a lot from it. If you are going to do a lot of visualization/ESDA, this will definitely save you a lot of time compared with using traditional GIS software.
- If you have funding, you can build an online version of this website to promote your research results or your product. Of course, this will not be free since you will need a server and a database, but it could be worth the price.
- It is very fast to deploy once you have your own template. If you have more than one project or you have a lot of similar projects, you can reuse your code.

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