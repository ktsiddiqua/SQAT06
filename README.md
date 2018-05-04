# SQAT06 - test

Assignment 1 ::

To Test Web Application  'Figure 1' Registration page functionality
URL:'https://app.figure1.com/account/register'

Prerequisites for Test Automation::
        > Internet Access and Latest Chrome Browser
        > Node.js
        > Senium-standalone server as NPM package
        > Java
        > A GitHub.com account   
        > Git on the command line 
        > Code/Text Editor 

     
    (1) Node.js ::
        Getting Node Environment
        1) Go to the official site of Node.js
            URL: 'https://nodejs.org/en/'
        2) Choose  the required version (7.8.0) of Node
        3) Run the downloaded .msi file
        Test Installation:
        1) Use command line, run 'node -v' command, the version should be 7.8.0    
    	
        Note: Node.js=JavaScript Library + runtime environment 


    (2) Selenium-standalone npm package ::
        Getting Selenium Environment
        1) Go to the official site of npmjs
            URL: 'https://www.npmjs.com/'
        2) Search for Selenium-standalone NPM package
            URL: 'https://www.npmjs.com/package/selenium-standalone'
        3)  Use command line to install and start module/package globally
            1) npm install selenium-standalone -g 
            2) selenium-standalone install
            3) selenium-standalone start
        4) Start selenium-standalone whenever (windows,os) machine starts!
    	Note:
        -Package will automatically sets up the selenium standalone server and all required drivers such as chrome driver, ie driver, firefox driver, and etc.
        -It will also install a selenium-standalone command line that will be able to install selenium server and start chrome, firefox or ie for the tests.
    

    (3) NPM (Node Package Manager) ::
        1) Use command prompt, run 'npm -v' to test npm version
        2) To install any package always run command 'npm install'
        Note: When install node.js, npm is automatically installed
    

    (4) Download Java ::
        URL: 'https://www.java.com/en/download/windows-64bit.jsp'
        Note: Ensuring the minimum required of Java version for selenium-standalone server


    (5) Visual Studio Code Editor
        Download and install VSCodeSetup-x64-1.21.1 file
        URL: 'https://code.visualstudio.com/'
            

    (6) GitHub ::	
        Create an account on  GitHub.com login as
            URL:  'https://github.com/ktsiddiqua'
            Username : ktsiddiqua
            Email : ktsiddiqua@gmail.com

        Note: GitHub is a code hosting platform for version control and collaboration. It lets one and others work together on projects from anywhere.


    (7) Git ::
        Setting up Git
        1) To use Git on the command line, download and install Git for Windows
            URL: 'https://git-scm.com/download/win'
        2) Check git version using command prompt, run 'git --version'
        output: git version 2.16.2.windows.1 
    
        Note: 
        - Git is an open source version control system (VCS) at the heart of GitHub
        - Git is responsible for everything GitHub-related that happens locally on your computer


    (8) Fetch code from GitHub repository

        1) On GitHub search for a username as IzzatBamieh and the folder SQAT06

        2) Click on 'Clone' button under IzzatBamieh/SQAT06 repository to clone/copy the link 
        URL : 'https://github.com/IzzatBamieh/SQAT06.git'

        3) Use command line, create a loacle directory to clone the repository
        'git clone' command copy an existing Git repository into locale directory
        'git clone https://github.com/IzzatBamieh/SQAT06.git' creates two folders inside my locale directory as 
            1. SQAT06
            2. .git

        4) Click on 'Fork' button in the github web browser gui of the 'IzzatBamieh/SQAT06' It creates an exact copy of 'IzzatBamieh/SQAT06' onto my 'ktsiddiqua/SQAT06' repository

        6) Use command line, run  'cd sqat06' to go to SQAT06 folder
        Check the directory folder to ensure all files are copied from origin repository- command as 'dir'
        
        7) Using command line, run 'mpn install' to install required packages from package.json file       
        
        8) Open 'SQAT06' folder from visual studio Code editor
        
        9) Select and Edit web_basic.js and readme.md files        
       
        10) Use command line, run 'node web_basic.js' to run test cases for 'Figure 1' registration page 


    (9) Push code to GitHub repository, use command line,
        
        1) 'git remote -v' command to show a list of existing remotes as - 
            origin  https://github.com/IzzatBamieh/SQAT06.git (fetch)
            origin  https://github.com/IzzatBamieh/SQAT06.git (push)

        2) 'git remote add kts-sqat06 https://github.com/ktsiddiqua/SQAT06.git'

        3) 'git remote -v'
            kts-sqat06      https://github.com/ktsiddiqua/SQAT06.git (fetch)
            kts-sqat06      https://github.com/ktsiddiqua/SQAT06.git (push)
            origin  https://github.com/IzzatBamieh/SQAT06.git (fetch)
            origin  https://github.com/IzzatBamieh/SQAT06.git (push)

        4) 'git add -p' interactive add and save after any changes in the loacal forlder 

        5) 'git commit -m "My latest update1"'

        6) 'git push kts-sqat06 master -f'








