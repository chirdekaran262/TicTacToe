# Tic-Tac-Toe Game

This is a simple **Tic-Tac-Toe** game built using **React.js**. The game allows two players to take turns marking spaces in a 3x3 grid, with the goal of being the first to get three marks in a row (horizontally, vertically, or diagonally).

## Features
- **Player vs Player**: Two players can take turns playing the game.
- **Game Reset**: After a player wins or if the board is full and there's no winner, players can reset the game.
- **Responsive Layout**: The game board is styled to be responsive and work on different screen sizes.
- **Turn-based Gameplay**: The game alternates turns between player 'X' and player 'O'.
- **Winner Check**: The game checks for a winner or a draw after every move.

## Technologies Used
- **React.js** for frontend development
- **CSS** for styling

## Installation

To run this project locally, follow the steps below:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/chirdekaran262/tic-tac-toe.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd tic-tac-toe
    ```

3. **Install dependencies**:
    If you haven't installed the dependencies yet, you can do so using npm or yarn:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

    After running the above command, open your browser and go to `http://localhost:3000` to play the game.

## Usage

- Players take turns clicking on the 3x3 grid to place their mark ('X' or 'O').
- The game will announce the winner once a player has three marks in a row.
- If the grid is full and there is no winner, the game will end in a draw.
- Players can click the "Play Again" button to reset the game.

## Game Features

- **Turn Indicator**: The game shows which player's turn it is.
- **Winner Announcement**: Once a player wins, a message is displayed announcing the winner.
- **Board Reset**: Players can start a new game after a win or draw.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the React documentation and community for inspiration.
