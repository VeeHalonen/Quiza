**Name**: Veera Halonen

**Topic**: A quiz app that pulls trivia from an API and quizzes the user.

**API**: https://opentdb.com/api_config.php

**Features**: Single-player and Team VS Team modes. Difficulty and number of questions can be chosen. Vibrate feedback on answer. Team avatar creation via phone camera.

**Target**: Android

**Language**: React Native

**Google Play Link**: https://play.google.com/store/apps/details?id=veh.quiza

**Introduction Video**: https://www.youtube.com/watch?v=iLWy52PJ1m4

<br>

<h2>Releases</h2>

**[Release 1 (2021-04-25)](https://github.com/VeeHalonen/Quiza/tree/a98aa8d7e880f290515be996b317136ca1fc02d7): Features**

The apps opens to the "New Quiz with Options" screen.

The user can choose the number of questions asked (10, 20, or 50) and quiz difficulty (Easy, Medium, Hard, or All). The questions are multiple choice with four options and one correct answer.

The app keeps track of the user's points and gives the correct answer after an incorrect option is chosen. The app also vibrates with a different pattern depending on whether the answer was correct. One long buzz means the answer was incorrect, two shorter ones indicate a correct answer.

After all the questions have been answered, the quiz ends. A recap screen is shown with the user's final points and a button to start a new quiz, which returns the user back to the options screen.

<br>

**[Release 2 (2021-05-06)](https://github.com/VeeHalonen/Quiza/tree/f59e3cbb0bd6f809b1334b559471c875d9b30947): Features**

Fixed a bug where the dropdown menus on the options screen were sometimes not responsive.

Team VS Team mode added to the new quiz options. This mode splits the questions between Team 1 and Team 2 and alternates between asking each team. After all the questions have been answered, the program announces the winner and the final points of each team.

An additional avatar mode option is available for Team VS Team mode. This option becomes visible when Team VS Team mode is chosen from the quiz mode dropdown. When the quiz is started in avatar mode, the app first attempts to launch the device camera. If the camera permission is not granted, the quiz launches without avatar mode. If the camera permission is granted, the app launches a camera view prompting the user to take a picture of Team 1. The top button toggles between the front and rear cameras, and the bottom button takes the picture. After a picture is taken, the app loads it to a confirmation screen where it is cropped to fit the square avatar. The user can then either return to the camera to retake the picture or accept it. When Team 1 accepts their avatar, the process is repeated for Team 2. After both teams have taken their pictures, the quiz launches. In avatar mode, the quiz shows the portrait of the team currently answering, and at the end of the quiz, the winner's portrait is shown on the victory screen. Each team avatar is also given a different border color: red for Team 1 and blue for Team 2.

<br>

<h2>Known Issues</h2>

- The app has not been sufficiently tested on different screen sizes. Absolute pixel values had to be set for certain components, which could cause issues with devices of different sizes. The camera aspect ratio is also statically set to 16:9, which could cause distortion of the image on some devices.

- Pictures taken with the camera take a long time to be processed, and the screen may not give sufficient feedback to the user on what is happening. The "Take pic" button does become unresponsive and informs the user that the picture is loading, but the camera view remains active.

- The pictures are stored within the app cache, but the cache is not automatically cleared when the files become unnecessary. This could lead to storage issues as the number of pictures taken increases.

- When taking the pictures, the camera does not show the user the actual dimensions of the avatar until the confirmation screen. This makes it difficult to estimate how the picture will be cropped to fit the avatar.

- The app adaptive icon has not been customized.

<br>

<h2>Possible Future Developments</h2>

- Support for landscape mode
- Navigation options to interrupt the quiz or cancel avatar creation
- Question categories as an option
- Timer mode with limited answer time
- Sound effects
- Instant death tiebreaker
- Persisting team profiles (names, avatars, points across multiple quizzes)
- Prevent duplicate questions during the same session with a Session Token
- "Pub quiz" mode with multiple teams
- Online multiplayer

<br>

<h2>Changelog</h2>

<br>

**v2.2 (2021/05/06): Google Play v1.2.0**

Fixed a bug where the points icon would break in team mode if the point count was a two-digit number.

<br>

**v2.1 (2021/05/03): Google Play v1.1.0**

Custom icons and splash image added.

<br>

**v2.0 (2021/05/02): Google Play v1.0.0**

Team VS Team mode added as an alternative to the default single-player mode.

As an additional option for Team VS Team mode, avatar pictures can be taken for each team using the phone camera.

<br>

**v1.1 (2021/05/01)**

Dropdowns should be fully interactive again.

<br>

**v1.0 (2021/04/24)**

Simple styling added. First release.

<br>

**v0.2 (2021/04/23)**

User can now choose the number of questions (10, 20, or 50) and difficulty (Easy, Medium, Hard, or All).

App now sends vibrate feedback with a different pattern depending on whether the answer was correct.

<br>

**v0.1 (2021/04/22): Barebones first version**

User is given 10 questions with multiple choice options to choose from.

Program keeps track of user's points and gives the correct answer after an incorrect option is chosen.

After 10 questions, the quiz ends and a recap screen is shown with the user's final points.

The quiz can be restarted from the recap screen.

No styling. Uglier than a 90s website.
