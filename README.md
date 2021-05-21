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
- Demo package: The relevant demo and data files can be found in this GitHub Repo. All files will be updated before the workshop.

### Backend Part
You will need administrator privilege for the backend part.
- [Python 3](https://www.python.org/downloads/). You can use any python 3 version. Therefore, if you have an older version, you do not have to reinstall your python. 
- EVE library in Python 3. 
Right click on the Start button and open Windows Powershell. Type in `pip3 install eve` or `python3 -m pip install eve` to install the library. 
- [MongoDB database](https://www.mongodb.com/try/download/community). MongoDB is a database, a very special one that we call it noSQL to distinguish it from traditional SQL databases such as postgreSQL. It is more flexible and faster for real-time data and naturally more suitable for web service. 
- [Robo3T](https://robomongo.org/download). Robo3T is a free MongoDB database GUI; you can see the dataset in the MongoDB via Robo3T, and you can also do some simple updating jobs in it.

# Frontend Lab Instruction

After learning about the basics of a webpage and a webmap, we will start to actually build a simple webmap from scratch. 

But before everything, we need to fork [this repository](https://github.com/luyuliu/UCGIS-Fullstack-Geovisualization-Workshop) and click on the "fork" button to the right. Now you should have a repository with the same name but under your username. We will do everything in **your own forked repository**. Your own repo's URL should look like `https://github.com/[yourusername]/UCGIS-Fullstack-Geovisualization-Workshop`

## Prepare HTML
As we discussed in the minilecture, HTML is like *the bone* and the foundation of a webmap. When we are opening a webmap, we are actually opening a HTML file. An HTML also holds the responsibilities of adding JavaScript and CSS libraries and your own scripts, which is the main focus of this section.

First, we would like to create a new empty HTML file. 
