# Password Generator

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

I came across the website that sought to help users generate a password. However, the javascript was not yet built out and there was no functionality on the page. I enhanced the javacript by creating functionality that asks the user for certain password parameters, then displays the generated password to on the webpage.

The parameters that influence the generated password are:

    - Character length
    - Character types (uppercase, lowercase, numeric, or special characters)

Behind the scenes the javascript logic takes the paramenters choson by the user and genarates a password accounting the those instructions. The resulting password is then made availale to the user for them to copy and use! 

During this project I learned the importance of pseudocding in order to make sure the javascript is going down the right track. I also learned the importance of console.logging variables during the script in order to debug. I was able to resolve two major issues with the password length validation in this way.  

## Usage

This webpage can be accessed by following this link: https://nolacoder.github.io/03-Module-Challenge/

Although no functionality is visible in the console, some important validation can be seen by the following actions:

    - Attempting to cancel out of the first prompt will return you to the starting position
    - Entering an invalid character length with allow you to try again at that step
    - Choosing cancel (effectively 'No') on the character type confirm boxes will inform you that at least one character type is required and let you try again at that step
    - You can generate multiple passwords without refreshing the page because the variable storing the password is reset on each run

![Screenshot of webpage with generated password](./assets/images/Generated%20Password.png)

