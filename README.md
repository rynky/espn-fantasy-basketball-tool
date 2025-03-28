# ESPN Fantasy Basketball Tool

## Overview
The **ESPN Fantasy Basketball Tool** is a web-based application designed to track and analyze NBA player trends for **ESPN Fantasy Men's Basketball**. Using the **balldontlie API**, this tool helps users make informed decisions by providing real-time statistics, performance trends, and key insights.

## Features
- **Search & Filter Players**: Look up NBA players and filter them by position, team, or other stats.
- **Trending Players**: Displays a list of the most popular or high-performing players.
- **Player Profiles**: View detailed player information, including stats, team details, and position.
- **Fantasy Insights**: Analyze performance trends to make strategic decisions in fantasy basketball.
- **ESPN Fantasy Integration** (Planned) – Future updates may include ESPN Fantasy API integration.

## Tech Stack
- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Vite, Node.js
- **API:** [balldontlie API](https://www.balldontlie.io/)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Clone the Repository
```bash
git clone https://github.com/rynky/espn-fantasy-basketball-tool.git
cd espn-fantasy-basketball-tool
```

### Install Dependencies
```bash
npm install
```

### Set Up API Keys
Create a `keys.js` file in `frontend/src/services/` and add:
```js
export const BALDONTLIE_API_KEY = "your_api_key_here";
```
Ensure `**/keys.js` is added to `.gitignore` to prevent committing API keys.

### Run the Application
```bash
npm start
```
The app will be now be available in your local browser.

