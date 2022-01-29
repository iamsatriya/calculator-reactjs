# Challenge - Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![day mode](https://i.imgur.com/wOVDfqt.png)
![night mode](https://i.imgur.com/DYXTwEU.png)

## Main Features

Perform basic calculation of 2 number with operator of `+ - x /`

### Limitation

- This calculator will display error message if any operation that might make an error calculation such as `2 / 0` (in JS it will return Infinity) or `-2 / 0` (in JS it will return -Infinity).
- Calculation with large amount of number that can cause overflow will be hidden in the screen, but still can be calculate within the `number` data type boundary.
- You can only perform single calculation, and the result will displayed immidiately after you press equal sign button `=`, and you need to clear it out after that with button `c` for the next calculation.

## Additional Features

This calculator has a `night mode` and `day mode` theme. There is a toggle button in the top-left corner to switch between `night mode` and `day mode`. This mode switch is using state from `reactjs`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
