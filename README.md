**Name**: Veera Halonen

**Topic**: A quiz app that pulls trivia from an API and quizzes the user.

**API**: https://opentdb.com/api_config.php

**Possible Features**: Single-player and two-player modes. Different categories. Separate timer mode. Sound effects. Avatar creation via camera and/or phone's file system.

**Target**: Android (possibly also iOS but unable to test)

**Language**: React Native

**Google Play Link**: TBA

**Introduction Video**: TBA

<br>

<h2>Releases</h2>

**[Release 1 (2021-04-25)](https://github.com/VeeHalonen/Quiza/tree/95ec72dd848982ce4a99b8c62753f29016d64d46): Features**

The apps opens to the "New Quiz with Options" screen.

The user can choose the number of questions asked (10, 20, or 50) and quiz difficulty (Easy, Medium, Hard, or All). The questions are multiple choice with four options and one correct answer.

The app keeps track of the user's points and gives the correct answer after an incorrect option is chosen. The app also vibrates with a different pattern depending on whether the answer was correct. One long buzz means the answer was incorrect, two shorter ones indicate a correct answer.

After all the questions have been answered, the quiz ends. A recap screen is shown with the user's final points and a button to start a new quiz, which returns the user back to the options screen.

<br>

<h2>Changelog</h2>

<br>

**v1.0 (2021/04/24)**

Simple styling added. First release.

**v0.2 (2021/04/23)**

User can now choose the number of questions (10, 20, or 50) and difficulty (Easy, Medium, Hard, or All).

App now sends vibrate feedback with a different pattern depending on whether the answer was correct.

<br>

**v0.1 (2021/04/22): Barebones first release**

User is given 10 questions with multiple choice options to choose from.

Program keeps track of user's points and gives the correct answer after an incorrect option is chosen.

After 10 questions, the quiz ends and a recap screen is shown with the user's final points.

The quiz can be restarted from the recap screen.

No styling. Uglier than a 90s website.
