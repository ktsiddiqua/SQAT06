# SQAT06 - test

Assignment 1 ::

Automation of Web Application  'Figure 1' Registration page functionality using Open source tools
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


(5) Visual Studio (VS) Code Editor
        Download and install VSCodeSetup-x64-1.21.1 file
        URL: 'https://code.visualstudio.com/'
            

(6) GitHub ::	
    Create an account on  GitHub.com login as
        URL:  'https://github.com/ktsiddiqua'
        Username : ktsiddiqua
        Email : ktsiddiqua@gmail.com

    Note: GitHub is a code hosting platform for version control and collaboration. It lets      one and others work together on projects from anywhere.


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
        
        7) Use command line, run 'npm install'-- to install required packages       
        
        8) Open 'SQAT06' folder from visual studio Code editor
        
        9) Select, Edit, and Save web_basic.js and readme.md files      
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

        6) 'git push kts-sqat06 master'


Assignment 2 ::

    Testing a user registration scenario for  Figure 1 sign up web page on the web browser and 
    to assert/ensure a expected behavior that 'I should see home logo  after the successful registration'

To work with this scenario I use ::

Cucumber-js :: (cucumber for javaScript)
   
    Cucumber is a testing framwork, helps with writing tests (scenario as acceptance criteria) in BDD (Behavior Driven Development) using Gherkin syntax (Feature, Scenario, Given, When, Then, so on) and then writing tests according to it. For cucumber required is 'features' directory - it includes 4 types of files-
    
    1) a Feature file : 'sign_scenario.feature' extention File
         Cucumber reads the code written in plain English text (Gherkin language) in the feature file
    
    2) a Steps defination File : 'signup_steps.js' 
        It finds the exact match of feature file for each steps in step file(a code file).
    
    3) a World File : 'world.js'
        World is an isolated context for each scenario, exposed to the hooks.js and steps.js as 'this'.
    
    4) a Hook File : 'hooks.js'
        Hooks are used for setup and teardown the environment before and after each scenario.
    Note: 
    cucumber-js automatically looks in, and expects content to be inside a features/ directory, so we don’t actually have to configure anything, just use this structure.

Chai :: 
    BDD assertion framework for node.js and the browser that can be paired with Cucumber-js testing framework.
    Assertion functions (chai.should()) are functions that make sure tests result as expected.

WebdriverIO ::
    Selenium bindings for NodeJS. 

Following steps are required to run cucumber js and chai assertion framework :

1) Use Command line, run 'selenium-standalone start' for a new start

2) Use another Command line, go to 'SQAT06' folder and run 'npm install'. To install 'cucumber-js' and 'chai' from 'package.json' file mention as 'dependencies'

3) Open VS Editor, under 'SQAT06' folder create 'features/signup_scenario.feature' file and write a scenario ' User Registration for Figure1 sign up page' using 'Given', 'When', 'Then'

4)In VS Editor, create another 'features/support/signup_steps.js' file to write code exact match with feature file. Save and execute code step by step to meet the assertion criteria 'I should see home logo  after the successful registration'

5) Use Command line, run '.\node_modules\.bin\cucumber-js'
(when code run without error it passed otherwise failed/undefined)

Output:
        C:\Git\SQAT06>.\node_modules\.bin\cucumber-js
        ...........

        1 scenario (1 passed)
        10 steps (10 passed)
        0m07.319s

6) Use Command line, run 'git status' to obtain a summary of which files have changes that are staged for the next commit.

Output:
        Untracked files:
    (use "git add <file>..." to include in what will be committed)

        .vscode/
        features/signup_scenario.feature
        features/support/signup_steps.js
        index.js
        node_modules/
        test/

7) Use Command line, run 'git add' to update the index using the current content found in the working tree, to prepare the content staged for the next commit

8) Use Command line, run 'git commit -m "KTS Assignment 2"'

9) Use Command line, run 'git push kts-sqat06 master' to send files onto Github remote repository

10) In GitHub, go to 'ktsiddiqua/SQAT06
forked from IzzatBamieh/SQAT06' and click on 'New pull request' to open a pull request. Once create a pull request, we don't need to open  another pull request then 'push' command will do the same.

-------------------------------------End Assignment 2---------------------------------------