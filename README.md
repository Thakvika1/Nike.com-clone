# **Convention Guide**

**Goals :**   clone nike website

# **Development Tools :**

VScode , Git-Lab , Figma , Notion

- **Visual Studio Code (VSCode):** A powerful and versatile code editor that provides an excellent development environment with features like syntax highlighting, debugging support, and extensions for enhanced productivity.
- **GitLab:** A web-based Git repository manager that offers version control, issue tracking, and continuous integration/continuous deployment (CI/CD) pipelines, facilitating collaborative software development.
- **Figma:** An innovative design tool used for creating user interfaces, prototypes, and collaborative design projects.
- Notion: A platform to organize team progress and sprint report. Note down the thing that we stuck on and the things that we learn.

# Figma Design Convention :

- **Frame naming:** Frames must have proper names corresponding to their responsible pages that they represent.
- **Element naming:** Elements inside frames must have proper names corresponding to their purpose and usage.
- **Frame alignment:** Frames must have proper alignment and all have the exact same spacing and gap which is 100px gap between each frame.
- **Frame placement:** All frames must follow their placement, the frames containing the components for each resolution must be on the right, whereas, the frames that contain the UI clone of each page is on the left.

Resolution for :
- Phone (iphone 12 pro max) : 390 x 844
- Tablet (Ipad pro) :1024 x 1366
- Desktop : 1920 x 1080

Grid system for (iphone 12 pro): 
- Grid width: 390px
- Gutter: 10px
- Total columns: 5

Grid system for (Ipad pro): 
- Grid width: 1024px
- Gutter: 30px
- Total columns: 9

Grid system for (Desktop): 
- Grid width: 1920px
- Gutter: 60px
- Total columns: 12.

# Fonts Families :

default fonts from boostrap

# Coding-Global-color :

- White #FFFFFF
- black: #000000
- light-gray: #707072
- red: #9E3500
- red-pork: #E7352B
- purple: #8D429F
- orange: #F36B26
- sky-blue: #1790C8
- brown: #825D41
- Green: #7BBA3C
- yellow: #FED533
- pink: #F0728F

# Wireframe-color :

- **wireframe-primary:** #545F71
- **wireframe-secondary:** #9BA5B7
- **pure-white:** #FFFFFF

# CSS styling framework :

_Boostrap

_change container width to support desktop screen

.container {
    width: 100%;
}
@media(min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media(min-width: 760px) {
    .container {
        max-width: 760px;
    }
}
@media(min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
@media(min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}
@media(min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}
@media(min-width: 1800px) {
    .container {
        max-width: 1800px;
    }
}
@media(min-width: 2200px) {
    .container {
        max-width: 2200px;
    }
}

# HTML & CSS Convention:

- file that create in Html/Css should name lowercase letter all example :

homepage.html

homepage.css

# JavaScript  Convention:

- file that create in javascript should name as camel case. example :

HomePage.js 

- and for component is also name like this too

### Description :

- components:  a folder to store reusable components.
- pages: stores each page about html.
- src: stores each page about css.
- index.html: the file that represents the landing page of the website.

### Peer Review :

- General comments: inline comments made must be specified in the general comment 
e.g: Please check my comment on file-name.ext( css, js, html ) on line :
- 112
- 321
- or if the code clean without any error comments ship it!

### Version control :

Issue naming convention : 

- Issue naming : The issues must have the issue name followed by ‘:’ and then a description of the issue at hand

# Merge Request :

- Title: The issue name must be put in the title part.
- Description: The issue name must be followed by a description of what the issue is and how it should be fixed.  e.g: homepage: Create the homepage with responsiveness. 
Commit Message :
- Common commit rules: Commits must be detailed stating the changes made along with a short and meaningful description of the changes.
Commit prefixes:
- Init: when you initialize the workspace on a new branch.
- Add: when adding a new functionality on a branch.
- Finish: when the entire branch is finished (the last commit before merging the branch).
- Fix: when fixing something on the bugfix/hotfix branch.
- Merge: when merging your branch into a parent branch. e.g : Merge: merging into the release branch with the bugfix/homepage branch