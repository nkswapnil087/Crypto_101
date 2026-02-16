# 🔐 Crypto 101 - Cryptography Workshop

A beginner-friendly interactive workshop for learning cryptography fundamentals through hands-on Capture The Flag (CTF) challenges.

## 🌐 Live Demo

**Yes, this is a public project and can be run in any modern web browser!**

### Access Options

#### Option 1: GitHub Pages (Recommended)
Once GitHub Pages is enabled, this site will be accessible at:
```
https://nkswapnil087.github.io/Crypto_101/
```

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select the branch (usually `main` or `master`)
4. Select the root folder (`/`) as the source
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be live!

#### Option 2: Run Locally
Since this is a static website (HTML/CSS/JavaScript), you can run it locally:

**Method 1: Direct File Opening**
1. Clone or download this repository
2. Open `index.html` in your web browser
   - Simply double-click the `index.html` file, or
   - Right-click and select "Open with" → Your Browser

**Method 2: Using a Local Server (Recommended)**
For the best experience, use a local web server:

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx http-server
```

Using PHP:
```bash
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## ✨ Features

- 📚 **Educational Lessons**: Learn cryptography fundamentals
- 🎯 **Interactive Challenges**: 5 beginner-friendly CTF challenges
- 🏆 **Scoreboard**: Track your progress and compete with others
- 💾 **Local Storage**: Your progress is saved in your browser
- 🎨 **Modern UI**: Clean and responsive design
- 👨‍🏫 **Instructor Panel**: Manage lessons and challenges

## 🎓 What You'll Learn

1. **Introduction to Cryptography** - Basic concepts and terminology
2. **Caesar Cipher** - Classical substitution cipher
3. **Base64 Encoding** - Common encoding scheme
4. **XOR Encryption** - Bitwise operations in cryptography
5. **Hash Functions** - One-way cryptographic functions

## 🎮 How to Use

1. **Start**: Open `index.html` or visit the live site
2. **Learn**: Read the lessons on the homepage
3. **Practice**: Navigate to the Challenges page
4. **Solve**: Complete challenges to earn points
5. **Track**: Monitor your progress on the scoreboard

## 📁 Project Structure

```
Crypto_101/
├── index.html          # Homepage with lessons and stats
├── challenges.html     # CTF challenges page
├── admin.html         # Instructor panel
├── css/
│   └── styles.css     # Styling for all pages
├── js/
│   └── main.js        # Core JavaScript functionality
└── README.md          # This file
```

## 🌍 Browser Compatibility

This project works on all modern browsers:
- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Requirements:**
- JavaScript must be enabled
- LocalStorage must be enabled (for saving progress)

## 🔧 No Build Required

This is a **static website** with no build process or dependencies:
- ❌ No npm install needed
- ❌ No compilation required
- ❌ No backend server required
- ✅ Just open and run!

## 👨‍💻 For Instructors

Access the instructor panel at `admin.html` to:
- Create and manage lessons
- Add new challenges
- Edit existing content
- View all student progress

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add more challenges
- Improve documentation

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

Made with ❤️ by [@nkswapnil087](https://github.com/nkswapnil087)

---

**Ready to start?** Just open `index.html` in your browser and begin your cryptography journey! 🚀
