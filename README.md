# Songbad Sonkolon

![IMG](https://lh3.googleusercontent.com/-iBQN2ZBDq6s/YTCIffQYXPI/AAAAAAAAAAM/ZzoTo2xtiDIbTUKfUqp2yNXmzGocpC2pgCLcBGAsYHQ/localhost_3000_%2B%25282%2529.png)


![IMG](https://lh3.googleusercontent.com/-50XB7uSTMqs/YTCIfvYtdkI/AAAAAAAAAAQ/V1Ry6_pU43YJ8ke6MMczQMVBnoezGhfQQCLcBGAsYHQ/localhost_3000_%2528Moto%2BG4%2529.png)

***Songbad Sonkolon*** is a **NEWS APP** which fetces _Latest News_ from the web and show it in the page. Read the *Top Headlines* and news from different categories like _Business, Entertainment, General, Health, Science, Sports, Technology_  . You can scroll through all  of the news easily and efficiently, with only one click you can read your favourite news, goto to your favourite category.Feeling irritating with the color! Change the theme between Light mode and Dark Mode according to your comfortability from the top right corner. Are you have scrolled too many down to page? Don't worry, You can Scorll to top with just only one click on the bottom right arrow . Songbad Sonkolon is here to provide news according according to your wish. No matter you are using it in your Mobile, Tablet or PC. We are always there

<!-- ## Images


***Full Page in Dark Mode***<br/>
![IMG](https://lh3.googleusercontent.com/-BaC2gegumt4/YTCIfmI4mFI/AAAAAAAAAAY/mO0vS4mBsCcNRJs--nDsM8P337n7ee_pwCLcBGAsYHQ/localhost_3000_.png)

***Full Page in Light Mode***<br/>
![IMG](https://lh3.googleusercontent.com/-FRMQ2TOrE94/YTCIfozskoI/AAAAAAAAAAU/K64Z8Y8m_AMGVX5rk_sOzqi2I-rwk3sZwCLcBGAsYHQ/localhost_3000_%2B%25281%2529.png) -->

# Developer Guide

This is a *single page web app* which is created using [React JS](https://reactjs.org). It uses `fetch API` for making api request from [News API](https://newsapi.org) server. This project uses [Bootstrap](https://getbootstrap.com) as _CSS_ library and also uses [Google Material Icons](https://fonts.google.com/icons)
for _UI icons_. For dark theme _React `useContext` hook_ is used. The project also uses 3 React packages

- React-Router
- React-Top-Loading-Bar
- React-Infinite-Scroll-Component

This is a public repository so you are open to contribute in my project to make it better.

# Project Setup

## Get your API key

1. Goto [NewsApi Official website](https://newsapi.org "newsapi.org") 
2. Click on ***Get API Key***
3. Fill up the credentials.
4. Select your plan.
> Select Developer as it is free of cost
Hurrrah! you got your api key. Now copy it  for your further usage.

## Install Node JS

Though many of you already have Node JS installed, some of you,specially the beginners, may not have installed
in their computers. So for them to install Node Js

1. Goto [NodeJS official website](https://nodejs.org/en/ "nodejs.org")
2. Download the nodejs installer for your computer whatever device you are using
3. Install the software and follow the on screen instructions.

## Clone this repository

There are two ways to clone this repo to your computer

### First: Download this code as .zip file

[Click Here](https://github.com/Soumodip-Paul/ReactWeb/zipball/main) to download the code in a single zip file.
Then unzip it in your desired folder

### Using git cloning

1. Create an empty folder 
2. Goto the folder and  open <br/> `Powershell` for windows and <br/> `Terminal` for MacOS or Linux
3. Paste the code below 

```bash
git clone https://github.com/Soumodip-Paul/Songbad-Sonkolon.git --single-branch 
```
4. Press enter 

Now the code is successfully copied to your desired folder

> To use git command you need to download from `Git` from [Git-Scm Official website](https://git-scm.com/downloads)

## Install dependencies

Goto your project directory and open
`PowerShell` for Windows or <br/> `Terminal` for MacOs an Linux and just copy and paste the folowing code
and Press enter

```bash
npm i
```

> Make sure that you have downloaded ***NodeJS*** to use `npm`

## Setup your api key

To set up your api key you generated 
1. Create a file named `.env` in root directory of your project.
2. Copy the following code to your `.env` file and repalce the `$your-api-key` by Your api key you genereted before.
```js

REACT_APP_API_KEY = "$your-api-key"

```

Hurrah! you are almost there to use the project.

## Run the projet

To run the Project 
1. Go to the project directory
2. Open `Powershell` for windows and <br/> `Terminal` for MacOS or Linux
3. Paste the following command 
```bash
npm start
```
4. Wait for time till development server starts
5. Ohhh, the project start working on `localhost:3000`
6. Go to browser and paste 
```js
localhost:3000
```
to view your app
> Note: According to Documentation, News API supports requests only from localhost for Developer mode. So don't use the default ip of react or deploy it. It will be meaningless. To deploy the app in production mode you need to purchase the prememium plan of News API. Also it has only 100 requests per day for developer mode.. So use it very carefully

## Make a optimized build

To make an optimized build of the app just run the following command 
```bash
npm run build
```
and react will create the optimized build in `%Your Project%/build/` folder.
