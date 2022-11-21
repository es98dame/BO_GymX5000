# GymX5000
GymX5000 is a fitness app that brings health, fitness and a fun video game aspect to living a healthy lifestyle, providing users with an all in one experience where you can stay motivated, eat healthy, get stronger, and compete with friends.  This app uses a multipurpose card system that dynamically renders many different activties from a polymorphic postgreSQL database. GymX5000 includes a unique challenge feature that contains interactable 3D models of trophies that are awarded upon completing tasks. 

![image](https://lh3.googleusercontent.com/g91D-KmK_R3ajx9XSY7l6d9kJkfXZhBUmzW7yUajU7FW5ffk9rHmrmDU7P__xtALIA1RCrF4X7P5JnNC7z14vwf0V_gqPHoPU7x3O0YWUeoiuV0L8I8kbUHZy2v9NYmm4U-HTyW9FQ=w2400)

This project was a brief 1-week sprint where our team tried to complete an MVP for an external user Chad. As a team, we decided to build the database in a polymorphic design where more categories could be easily added in future updates. With a short period of time, we narrowed down the features to the top must haves of the client to meet a very short deadline. Meet the team who made this possible!


## Contributers

**[Walter Latimer](https://github.com/floridamaniac)**\
*Project Manager*

**[Dami Kim](https://github.com/es98dame)**\
*Architecture Owner*

**[Andrew Orodenker](https://github.com/aorodenker)**\
*UI Owner*

**[Alexander Cannon](https://github.com/theVikingMan)**\
*Fullstack Engineer*

**[Benjamin Cope](https://github.com/BenjaminRCope)**\
*Fullstack Engineer*

**[Hunter Motko](https://github.com/hunterMotko)**\
*Fullstack Engineer*

**[Ivy Wong](https://github.com/ivykw)**\
*Fullstack Engineer*

**[Ryan De Leon](https://github.com/ryand8008)**\
*Fullstack Engineer*

**[Owen Yoshishige](https://github.com/OwenMY)**\
*Fullstack Engineer*


<br/>

## Front-End
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

## Back-End
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

## Testing
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

<br/>

## App User Interface

### Activities
The activities page displays a list of cards where a user can filter the cards by category and further search through them by tag using the search bar.
Near the top of the page is a random motivational quote that changes everytime you refresh the page. Each card can be favorited by clicking the star icon and are added to the profile page upon click. Clicking a cards title will take you to another page displaying more information about that card. 
>>
![image](https://media.giphy.com/media/gZGKgbMA7zDn0raCKj/giphy.gif)
>>
### Classes
In the classes section is a carousel of favorited classes and a list of classes a user has booked and completed.  Below that is a list of upcoming classes you can also book that are not in your favorites list.  Pressing the 'Book' button will show a prompt verifying that you have booked a class.  At the moment, there is no way to delete classes or unbook them. This feature will be added in a future update.
>>
![image](https://media.giphy.com/media/IaYQDYErZuqPvZVybO/giphy.gif)
>>
### Challenges
The challenges page showcases a display of 3D interactive badges that can be earned by completing challenges.  Beneath it is a leaderboard that displays the top users who have earned the most points by completing challenges, a feature not yet implemented. Challenges for the month can be found at the bottom of the page where clicking on one will take you to a page with more information about that challenge.  The points system and challenge information will be implemented in a future update.
>>
![image](https://media.giphy.com/media/P8IWfYps4PD4OtpoCM/giphy.gif)

### Profile Page
The profile page consists of a users information, badges earned and favorited activity cards.  The friends and messaging features are not implemented and will be added in a future update.
>>
![image](https://media.giphy.com/media/o4uXO0ayp3Cfi5cHcM/giphy.gif)

<br/>

## Back-End Structure
This is a database structure in which all classes, recipes, and workouts data are linked and managed through an activity table that serves as a great hub. The database is built in such a way that future implementations can be easily added by adding a relationship between the new table and activities table. Thanks to this structure, we are able to consolidate all of the different features (i.e. recipes, workouts, classes) into a single GET request, thus allowing the front end team to create many different activities through a single card component.
>>
![gymx5000-2](https://user-images.githubusercontent.com/25275753/203009834-56622dea-936d-4859-8847-72abd1c0c08e.png)


### Query
```sql
## To get user's favorite
   (
    SELECT A.id, A.name As type, exercise.id AS activity_id, exercise.exercise_name AS activity,
exercise.gif_url AS thumbnail_url, ARRAY[exercise.body_category, exercise.equipment, exercise.target_muscle] as tags,
	f.activitytype_id as favorited
FROM exercise
    INNER JOIN activitytype as A ON A.id = exercise.activitytype_id
    INNER JOIN favorites AS f ON exercise.activitytype_id = f.activitytype_id WHERE f.user_id= ${userid}
group by A.id, exercise.id, f.activitytype_id
    )
    UNION
    (
      SELECT C.id, C.name As type, A.id As activity_id, A.name AS activity, A.image AS thumbnail_url,
      ARRAY[A.dietlabel, A.healthlabel] as tags,
		f.activitytype_id as favorited
      FROM food as A
      INNER JOIN activitytype as C ON C.id = A.activitytype_id
      INNER JOIN favorites AS f ON A.activitytype_id = f.activitytype_id WHERE f.user_id=${userid}
      group by C.id, A.id, f.activitytype_id
    )
    UNION
  (
      SELECT C.id, C.name As type, S.id As activity_id, S.name AS activity, S.image AS thumbnail_url,
      ARRAY[S.category] as tags,
	 f.activitytype_id as favorited
      FROM classes as S
      INNER JOIN activitytype as C ON C.id = S.activitytype_id
    INNER JOIN favorites AS f ON S.activitytype_id = f.activitytype_id WHERE f.user_id= ${userid}
      group by C.id, S.id, f.activitytype_id
    )
```
### Result
```json
[
	{
		id: 1,
		type: "recipes",
	        activity_id: 3,
	        activity: "Fruit Smoothie",
		thumbnail_url: "www.url.com",
		tags: ["tag", "another tag", "third tag"],
      		favorited : 25
	},
	{
		id: 2,
		type: "workouts",
		activity_id: 4,
      		activity: "Bench Press",
		thumbnail_url: "www.url.com",
		tags: ["tag", "another tag", "third tag"],
      		favorited : 36
	},
	...
]
```

## API Endpoints

### `POST /signup` `POST /signin`
Increase security by granting authorization using bcrypt, jsonwebtoken, authRouter when a user signin.

### `GET /api/user`
Return user infomation.

### `GET /api/activities`
Retrieve a list of all activities.

### `GET /api/recipes`
Retrieve a list of all recipes or specific recipe information.

#### Parameters
| Parameter  | Type    | Description                                                       |
|------------|---------|-------------------------------------------------------------------|
| recipeid   | Integer | Required ID of the recipe for which data should be returned.      |

### `GET /api/workout`
Retrieve a list of all exercise or specific exericise information.

#### Parameters
| Parameter  | Type    | Description                                                         |
|------------|---------|---------------------------------------------------------------------|
| workoutid  | Integer | Required ID of the workout for which data should be returned.       |

### `GET /api/classes`
Retrieve a list of all classes or specific class information.

#### Parameters
| Parameter  | Type    | Description                                                 |
|------------|---------|-------------------------------------------------------------|
| classid    | Integer | Required ID of the class for which data should be returned. |

### `POST /api/bookclass`
To add a selected class to a single user's class list.

#### Parameters
| Parameter  | Type    | Description                                                 |
|------------|---------|-------------------------------------------------------------|
| classid    | Integer | Required ID of the class for which data should be inserted. |

### `DELETE /api/cancelclass`
Removed a selected class from a single user's class list.
#### Parameters
| Parameter  | Type    | Description                                                 |
|------------|---------|-------------------------------------------------------------|
| classid    | Integer | Required ID of the class for which data should be removed. |


### `GET /api/favorites`
Retrieve a list of favorites for a single user.

### `POST /api/favorites`
Add a selected activity to a list of favorites for a single user.
#### Parameters
| Parameter  | Type    | Description                                                 |
|------------|---------|-------------------------------------------------------------|
| activityid    | Integer | Required ID of the activity for which data should be inserted. |

### `DELETE /api/favorites`
Remove a selected activity from a list of favorites for a single user.
#### Parameters
| Parameter  | Type    | Description                                                 |
|------------|---------|-------------------------------------------------------------|
| activityid    | Integer | Required ID of the activity for which data should be removed. |

### `GET /api/classhistory`
Retrieve a single user's class history

### `GET /api/favoriteclass`
Retrieve a list of favorite classes for a single user.

### `GET /api/quotes`
Retrieve random workout motivation quotes.

## Testing
Testing has been done using cypress.

1. Install Cypress.
   > `npm install —save-dev cypress`
   > Install Cypress on desktop: https://www.cypress.io/.
2. Run dev and server
   > `npm run dev` and `npm run server-start`
3. Run Cypress on desktop and locate `integration` folder.

Example of tests
</br>
![image](https://i.imgur.com/oOtOySX.png)
</br>
![image](https://i.imgur.com/KHRdbsG.gif)

<br/>

## Setup

1. Download depencies with npm install.
   > `npm install`

2. Create `.env` file using `example.env` as an example.

3. Run webpack in development with:

   > `npm run dev`

4. Run server with:

   > `npm run server-start`

5. Visit local site at http://localhost:3000.

## Note
You will no longer be able to log in as our AWS database is no longer active. However, you may still download our repository and take a look at our log in page.
