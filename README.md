ListNote is an idea that I had to enable users to create to-do lists to better organize their time. I was inspired to create this application because I love making lists, but I've had some frustration in not having access to an application that differentiated between the different kinds of to-do lists I'd
use. It was much easier for me to just write things down on a piece of paper.
ListNote changes that by allowing me to create different kinds of lists, so I am no longer dependent on a piece of paper to get the functionality that I need.

ListNote will ultimately allow users to create 3 kinds of lists: A 'chore' to-do list, which allows users to list all the things they need to do around the house (e.g. do laundry, make dinner, wash dishes, etc); an 'errand' to-do list, which allows users to list all the things they nred to do outside the house (e.g. pick up dry-cleaning, drop kids off at soccer practice, get groceries,
etc); and a 'to-get' list, where users can list all the things they need to get (e.g. list of groceries to buy, list of Christmas gifts to get, etc).

his is the repository for all the front-end code for my ListNote project. Here is the link to the back-end site: https://list-note-project-back-end.herokuapp.com/

Here is the link to the back-end repository:
https://github.com/VickyRockingster/list-note-project-back-end

Here is the link to the front-end repository: https://github.com/VickyRockingster/list-note-project-front-end

And lastly, here is the link to the ListNote (front-end) site:
https://vickyrockingster.github.io/list-note-project-front-end/

Wireframe:
https://i.imgur.com/Kg7oSaO.png

User Stories:
As a user, I want to be able to make multiple kinds of to-do lists (e.g. one for
groceries to buy, one for places to go to run errands, one for chores to do at
home, etc), so that I can organize my life.
As a user, I want each list to have a do-by or do-on date attached to it.
As a user, I want to set reminders to finish my to-do lists by a certain time,
so that I can have a reminder to do them when they need to be done.

Technologies Used: AJAX, CSS3, Handlebars, HTML5, JavaScript, jQuery, Ruby on Rails, Sass


Process:
After creating my front- and back-end repositories, I actually started by creating a lot of the html in the front-end. I wanted to clarify in my mind what I wanted my user to be able to do, and utilizing the wireframe so structure the html helped me do that. This way, I was better able to design a back end where my API requests would be specific and targetted without getting lost in the process.
After organizing my html, I used my ERD table to start the process of meeting MVP; that is, creating a one-to-many relationship between the users table and the errands table. After I was successfully able to CRUD user via curl-script, I tested my ability to CRUD errands after logging in as a user. After fixing a mix-up with :user and :current_user, I was able to do so successfully, so that any user could CRUD an errand, and each user only had access to their own errands on the errands table.
Then, I moved on to building out the front-end, so that users can sign-up, sign-in, and create errands. I went through the same process of making sure that a signed-in user could CRUD on the errands table.
I ran into a lot more issues on the front end, however, specifically CRUDing my errands resource table. Even though I was quickly able to successfully GET and POST errands, It took a long time to figure out how to PATCH and DELETE as well, especially the former. Working with checkboxes in the done_status column required custom formatting before I could send the data to the back-end. Likewise, using Handlebars to update information required careful management of event bubbling and button types. Now that I can successfully CRUD the errands table, though, the next step is building out the 'chores' and 'to-get' resources.
