# Twimble

Twimble is a dynamic web application designed to enhance the Twitter browsing experience by allowing users to view and interact with tweets in a user-friendly interface. The app supports liking, retweeting, replying to tweets, and adding new tweets in real-time, with all data stored locally in the browser.

## Features

- **Real-time Tweet Interaction**: Users can like, retweet, and reply to tweets.
- **Tweet Creation**: Users can create new tweets.
- **Replies Section**: Users can view and post replies to tweets.
- **Delete Tweets**: Users can delete their tweets.
- **Persistent Data**: All tweets and interactions are saved in the browser's localStorage.
- **Responsive Design**: Optimized for both mobile and desktop use.

## Functionality

### Tweet Actions

- **Like**: Click the heart icon to like or unlike a tweet. The like count updates dynamically.
- **Retweet**: Click the retweet icon to retweet or undo a retweet. The retweet count updates in real time.
- **Reply**: Click on the comment icon to view and reply to a tweet. Replies are stored with the tweet.
- **Delete**: Delete tweets from the feed, removing them from localStorage.
- **Create Tweets**: Use the "Tweet" button to create new tweets, which will be added to the top of the feed.

### Data Persistence

- **Local Storage**: All tweets, replies, likes, and retweets are saved to `localStorage`, ensuring the data persists across page reloads.

## Demo

Check out a live demo of the application at [Twimble Demo](https://twimble.netlify.app/). (Insert demo link if available)

## Getting Started

To run Twimble locally, follow these steps:

### Prerequisites

- **Visual Studio Code (VS Code)**: A code editor to run the project with a live server.
- **Live Server Extension**: A VS Code extension that serves the app from a local server and prevents CORS issues.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hi8esh/Twimble.git
   ```
2. Open the project folder in **VS Code**:
   ```bash
   code Twimble
3. Install the **Live Server** extension in VS Code (if you don't have it already):
      - Go to the Extensions view in VS Code (Click on the Extensions icon in the Activity Bar on the side of the window).
      - Search for "Live Server" and click **Install**.
4. Once the extension is installed, right-click on `index.html` in the Explorer panel and select **Open with Live Server**.
5. The application will open in your browser, and you can interact with the features as intended.

### Project Structure
```graphql
Twimble/
│
├── index.html          # Main HTML file
├── index.js            # JavaScript for app logic (includes tweet interactions, localStorage handling)
├── style.css           # CSS for styling (responsiveness, layout)
├── data.js             # JavaScript file for mock data (tweets, user profiles)
└── .gitattributes      # Git configuration (to handle text files and attributes)
```
## Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout.
- **JavaScript**: Dynamic functionality such as tweet interactions (like, retweet, reply, delete) and data persistence using localStorage.
- **UUID**: The uuid library is used to generate unique IDs for tweets and replies.

## Key Functions

### LocalStorage
`getTweetsData()`: Fetches the stored tweet data from `localStorage`. If no data exists, it returns the initial mock data from `data.js`.
`saveTweetsData()`: Saves the current state of tweets to `localStorage`, ensuring the data persists even after page reloads.

### Event Handlers
- `repliesClickHandler()`: Toggles the visibility of the replies section for a tweet.
- `likeClickHandler()`: Toggles the like status of a tweet and updates the like count.
- `retweetClickHandler()`: Toggles the retweet status of a tweet and updates the retweet count.
- `tweetBtnClickHandler()`: Adds a new tweet to the top of the feed.
- `replyBtnClickHandler()`: Adds a reply to a specific tweet and displays it under the tweet.
- `deleteTweetClickHandler()`: Deletes a tweet from both the feed and `localStorage`.

### Rendering the Feed
The `render()` function dynamically generates the HTML for the tweet feed, including replies, likes, and retweets. It updates the feed each time a new action is performed.

## Contributing
Contributions are welcome to improve Twimble. If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

## License
This project is open-source and available under the [MIT License on Open Source](https://opensource.org/licenses/MIT).
<a href="https://twimble.netlify.app/" target="_blank">Twimble Demo</a>

## Acknowledgments
Thanks to the open-source community for various JavaScript libraries and tools used in this project, including the `uuid` library for generating unique identifiers.
