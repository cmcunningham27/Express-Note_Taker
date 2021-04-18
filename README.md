# Express-Note_Taker
![License: MIT](https://img.shields.io/badge/License-MIT-Red.svg)
---
## Descriptions
---
I was motivated to create the back-end of this app to allow users the ability to read old notes, write new notes, and delete any notes they wish to no longer see. Adding to this project helped me in understanding how to utilize GET, POST, and DELETE for api fetches. Sometimes we find it difficult to remember important information or dates. This app does all the work for the user. You no longer have to remember because you can create notes that you can come back to later. The app uses express, node, HTML, CSS, and Javascript.
## Deployed Link
---
[Deployed Application URL](https://mysterious-dusk-21471.herokuapp.com)
## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Complications](#complications)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
---
1. Clone the repository from [GitHub](https://github.com/cmcunningham27/Express-Note_Taker).
2. Run npm i
3. Run node server.js
4. You can now go to localhost:3000.
5. It will run the same as if you were on the deployed URL
## Usage
---
![Live Demo](https://drive.google.com/file/d/1ZZekUZHGM5DI23lUMQh_g7ZMX2gPjpXy/view)
1. Visit the deployed website listed above.
2. Click on the "Get Started" button.
3. Click on "Note Title" and type in the title you would like for you note.
4. Click the tab button or use you mouse to click "Note Text" and type in your note.
5. As you type the note text a Save button will appear in the top right. Click it.
6. You should see your Note Title on the left side of your screen.
7. You can click on the Title of the note you just created and it will show the Title and Text in the fields to the right.
8. To create a new note, click the pencil icon in the top right, as it is the New Note Button.
9. Your original Title and Text will disappear and you can enter a new note's Title and Text.
10. If you wish to remove a note you have created, click the red Delete Button (trash can) and you will see that it has been removed.

## License
---
This project is licensed under the MIT license.

## Complications
---
Early on I ran into an issue with getting the notes to get written into the db file and render onto the page. It took time, but eventually realized that the file paths were the problem. I did not need the ./ in the apiRoutes file for my read and write methods. A simple change and it was all restored.

I ran into an issue with my deployed app. It wasn't displaying the save button when I created a new note. I could not figure it out. Then the TA skimmed the index.html and noticed that at some point I must have changed it. I remember doing that because I thought the parameter needed to have html in it. Was I wrong! A quick change back to /notes and the issue was resolved.
## Questions
---
[GitHub Profile](https://github.com/cmcunningham27)

[E-mail](mailto:sttepstutoring@yahoo.com)

E-mailing me is the best option.
