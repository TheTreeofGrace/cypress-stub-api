# Quick Start

This application uses `yarn` you are welcome to use `npm` if you wish.
Install modules needed: `yarn`
Start application: `yarn start`
Open Cypress: `yarn cypress-open`
Run all Cypress Tests: `yarn cypress-run`


# Getting Started

First fork this repository into your own GitHub account by clicking the ‘Fork’ button in the top right: https://github.com/GraceATree/playground-cypress-dashboard

![](./readme_images/fork-repo.png)
  
Once GitHub has finished copying you should now see this repository under your GitHub username with below the original repository that you Forked from.  
‘<Your_UserName>/playground-cypress-dashboard’

![](./readme_images/forked-repo.png)

 
Now click on the big green ‘Code’ button copy the Https link of GitHub repository. 

 ![](./readme_images/Copy-github.png)

Now go to the terminal and run the following command to clone this repository to your local machine. 

`git clone <link to your GitHub repo>`

Now open your repository that you just cloned down by typing `code .` to open in visual studio code. Here lets take a look at the package.json file. In this file is all the dependencies that will be needed to run the application along with developer dependencies such as our Cypress engine. If we take a look at the scripts object we can see commands that we can use to get started. However these commands run through our project dependencies that need to be downloaded and installed. We will do this by opening up a terminal inside visual studio code (the IDE) through ‘Terminal-> New Terminal’ and typing `yarn`

 ![](./readme_images/installing-packages.png)

Now the dependencies (including cypress) are installed we can run `npx cypress open` which will open up the Cypress UI. 
Now let’s test we have managed to integrate. We will do this by opening another terminal inside of visual studio code to run the application with `yarn start`. Once the application is running you should see this message ‘Compiled successfully’ in the terminal.
 
![](./readme_images/terminal-application-running.png)


Please feel free to send me a linkedIn connection request: https://www.linkedin.com/in/treeofgrace/

