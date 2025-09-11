# Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output

## Description

This app is designed to help me decide on a daily workout routine. It takes my current energy level, the day of the week, and the outside temperature as inputs to generate a personalized workout suggestion.

This initial step focuses on building the foundational structure of the application. It includes:
* Setting up the basic user interface (HTML form and results display area).
* Capturing and handling user input from the form.
* Processing the inputs using a set of logical rules to make a decision.
* Displaying the final workout recommendation back to the user.

The project is built using a modular JavaScript approach, with separate files for handling form interactions (`form-handler.js`), core decision logic (`decision.js`), UI updates (`ui.js`), and the main application setup (`app.js`).

## My Decision Focus

This app is specifically tailored to help me decide **what kind of workout to do each day**. It removes the guesswork by considering key factors that influence workout quality and consistency:

1.  **My personal energy level**: To match the workout's intensity with how I'm feeling.
2.  **The day of the week**: To align with a structured weekly fitness plan (e.g., HIIT on some days, active recovery on others).
3.  **The weather**: To decide whether an indoor or outdoor activity is more appropriate.


### My Decision Logic

My app uses a series of rules to turn the raw inputs into a final recommendation. Here’s how it works:

1.  **Energy Score Logic**: The app first converts the numerical **Energy Score** into a qualitative factor.
    * **When** the score is 85 or higher, **then** the factor is `"intense"`.
    * **When** the score is between 75 and 84, **then** the factor is `"regular"`.
    * **When** the score is between 60 and 74, **then** the factor is `"moderate"`.
    * **When** the score is below 60, **then** the factor is `"rest"`.

2.  **Day of the Week Logic**: Next, the app uses the **Day of the Week** to assign a specific workout type.
    * **When** the day is Monday, Wednesday, or Sunday, **then** the workout type is `"hiit"`.
    * **When** the day is Friday or Tuesday, **then** the workout type is `"walk"`.
    * **When** the day is Thursday or Saturday, **then** the workout type is `"bike"`.

3.  **Temperature Logic**: Then, the app uses the **Outside Temperature** to decide on the workout location.
    * **When** the temperature is "nice" or "warm", **then** the location is `"outside"`.
    * **When** the temperature is "cold", "cool", or "hot", **then** the location is `"inside"`.

4.  **Final Decision Logic**: Finally, the app combines these factors to generate a specific, actionable recommendation. It checks for special conditions first:
    * **If** the energy factor is `"rest"`, **then** the output is a custom rest day message.
    * **If** the energy is `"intense"` AND the workout is `"hiit"`, **then** the output is a specific high-intensity recommendation.
    * **If** the energy is `"intense"`, the workout is `"bike"`, AND the location is `"outside"`, **then** the output is a custom long-ride message.
    * **Otherwise**, it generates a standard message by combining the factors (e.g., `Do a regular walk outside`).

### Example Outputs

To see how it all comes together, here are a few examples showing how different inputs produce different recommendations.

#### Example 1: A High-Energy HIIT Day

* **If I input the following...**
    * **Energy Score**: `90` (translates to `intense`)
    * **Day of the Week**: `Monday` (translates to `hiit`)
    * **Outside Temperature**: `Cold` (translates to `inside`)
* **...the app produces this specific output:**
    > `Do a hiit workout and lift 80% of your failure weight!`

#### Example 2: A Rest Day

* **If I input the following...**
    * **Energy Score**: `55` (translates to `rest`)
    * **Day of the Week**: `Tuesday`
    * **Outside Temperature**: `Nice`
* **...the app produces this specific output:**
    > `Take a rest day! Consider doing some yoga!`

#### Example 3: A Standard Workout Day

* **If I input the following...**
    * **Energy Score**: `80` (translates to `regular`)
    * **Day of the Week**: `Friday` (translates to `walk`)
    * **Outside Temperature**: `Warm` (translates to `outside`)
* **...the app produces this standard (fallback) output:**
    > `Do a regular walk outside`


## Input Types Used

The application uses the following form inputs to gather the necessary information:

* **Number Input** for **Energy Score**: A numerical input where I can rate my energy on a scale (e.g., 1-100). This is crucial for determining the suggested workout intensity (Rest, Moderate, Regular, or Intense).
* **Dropdown Select** for **Day of the Week**: This allows me to choose the current day. The app uses this to suggest a specific type of activity based on my pre-defined weekly schedule (e.g., Walk, HIIT, or Bike).
* **Radio Buttons** for **Outside Temperature**: A set of options (e.g., Cold, Cool, Nice, Warm, Hot) to determine the best location for the workout (Inside or Outside).

## Color Palette

*(This section is a placeholder for you to fill in, as the color information is in your CSS file.)*

**Example:**
> My chosen color palette is a clean and modern theme using dark blues and grays, with a vibrant green for calls to action.
> * Main Background: `#1A202C` (Charcoal)
> * Form Background: `#2D3748` (Slate Gray)
> * Text Color: `#F7FAFC` (Off-White)
> * Button/Accent Color: `#48BB78` (Emerald Green)
>
> You can find the palette I used at [Coolors - Palette URL](https://coolors.co/1a202c-2d3748-f7fafc-48bb78-a0aec0).