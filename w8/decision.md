# Video Narration Script: Debugging with Chrome DevTools

### Introduction

*(Intro Music Fades)*

**Narrator:** Hey everyone! Today, we're going to take a look at the Chrome DevTools debugger, one of the most powerful tools a developer has. We'll use it to step through some JavaScript line-by-line to see exactly how it makes decisions.

*(Screen shows the `decision.js` code with a breakpoint set on the first line inside the `determineWorkout` function)*

**Narrator:** We have a file here called `decision.js`. Its job is to suggest a workout based on a user's energy level, the day of the week, and the temperature. We've set a breakpoint inside our main function, `determineWorkout`, which has just been called. The code execution is now paused.

---

### Stepping Through the Code

*(Debugger is paused on `const energyScoreFactor = ...`)*

**Narrator:** Our function receives a `data` object with the user's input. Let's imagine the user told us their energy score was `90`, the day is `'Saturday'`, and the temperature is `'nice'`.

Our first line calls a helper function, `determineEnergyScoreFactor`. Let's step into that function to see what it does.

*(Debugger steps into `determineEnergyScoreFactor`)*

**Narrator:** Okay, we're inside `determineEnergyScoreFactor` now. It received the `energy` value of `90`. The first `if` statement checks if `energy` is greater than or equal to 85. Since 90 is greater than 85, this condition is true! The code will now execute the `return 'intense'` line and exit the function.

*(Debugger steps out, back to the `determineWorkout` function)*

**Narrator:** And just like that, we're back. The `energyScoreFactor` variable is now set to the string `'intense'`.

Now we move to the next line, which calls `determineDayFactor`. Let's step into that one.

*(Debugger steps into `determineDayFactor`)*

**Narrator:** This function received the `day` value of `'Saturday'`. The first `if` condition checks for 'Friday' or 'Tuesday', which is false. The second checks for 'Monday', 'Wednesday', or 'Sunday'—also false. The third `if` statement checks if the day is 'Thursday' or 'Saturday'. This one is true! So, the function will return `'bike'`.

*(Debugger steps out, back to the `determineWorkout` function)*

**Narrator:** Perfect. Now the `dayFactor` variable holds the value `'bike'`. You can see how we're gathering our building blocks. Next up is `determineTempFactor`.

*(Debugger steps into `determineTempFactor`)*

**Narrator:** Here, the `temp` parameter is `'nice'`. The first `if` statement is false. The second one checks if `temp` is `'nice'` or `'warm'`. That's a match! The function returns `'outside