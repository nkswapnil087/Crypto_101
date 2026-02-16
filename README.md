# 🔐 Crypto 101 CTF Workshop

A beginner-friendly, interactive web-based cryptography workshop with Capture The Flag (CTF) challenges. Learn cryptographic concepts through practical hands-on exercises.

## 📋 Features

- **Interactive Learning Platform**: Homepage with lesson management system
- **5 Crypto Challenges**: Caesar Cipher, Base64, XOR, Hash Identification, and Double Encoding
- **Challenge Management**: Admin panel to add, edit, and delete CTF challenges
- **Lesson Management**: Create and manage cryptography lessons
- **Local Scoreboard**: Track completed challenges and earned points using browser storage
- **Client-Side Validation**: Flag submission with instant feedback
- **Responsive Design**: Mobile-friendly interface suitable for all devices
- **GitHub Pages Ready**: Deploy instantly with no backend required

## 🎯 Challenges Included

### 1. Caesar Cipher Challenge (Easy - 100 pts)

Decrypt text shifted by 3 positions in the alphabet.

### 2. Base64 Decoder (Easy - 100 pts)

Decode a Base64 encoded string to reveal the flag.

### 3. Simple XOR Challenge (Medium - 150 pts)

Decrypt a message encrypted with XOR cipher using the key "SECRET".

### 4. Hash Identification (Medium - 150 pts)

Identify the hash type and find the original plaintext.

### 5. Double Encoding (Hard - 200 pts)

Decode a Base64 string that has been encoded twice.

## 🚀 Getting Started

### Local Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nkswapnil087/Crypto101-CTF.git
   cd Crypto101-CTF
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No installation or dependencies required
   - Works offline (all data stored locally in browser)

3. **Access Admin Panel**
   - Navigate to `admin.html`
   - Create new lessons and challenges
   - Edit or delete existing content

### Usage

- **Home Page** (`index.html`): View lessons and track progress
- **Challenges Page** (`challenges.html`): Solve CTF challenges and submit flags
- **Admin Panel** (`admin.html`): Manage lessons and challenges

## 📁 Project Structure

```
Crypto101-CTF/
├── index.html                 # Homepage with lessons
├── challenges.html            # CTF challenges page
├── admin.html                 # Admin management panel
├── css/
│   └── styles.css            # All styling
├── js/
│   └── main.js               # Core functionality and storage
├── assets/                    # Images and resources
├── README.md                  # This file
└── .gitignore
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Responsive design with modern features
- **JavaScript (Vanilla)**: No frameworks, pure ES6+
- **LocalStorage API**: Client-side data persistence

## 💾 Local Storage

All data is stored in the browser's LocalStorage:

- **Lessons**: Custom lessons added via admin panel
- **Challenges**: CTF challenges and their configurations
- **Progress**: Completed challenges and user scores
- **Scoreboard**: History of solved challenges

## ✏️ Managing Content

### Adding a Lesson

1. Go to `index.html`
2. Click "+ Add Lesson"
3. Fill in title and content
4. Click "Save Lesson"

### Adding a Challenge

1. Go to `admin.html`
2. Click the "Manage Challenges" tab
3. Click "+ Add New Challenge"
4. Fill in all fields:
   - Title, Category, Difficulty
   - Points, Description
   - Encrypted content and Flag
5. Click "Save Challenge"

### Flag Format

All flags must follow this format:

```
FLAG{your_answer_here}
```

## 🎓 Educational Use

This project is ideal for:

- University computer science courses
- Cybersecurity workshops
- CTF competitions
- Self-paced cryptography learning
- Introduction to encryption concepts

## 📊 Features for Students

- Track your progress with the scoreboard
- Earn points for solving challenges
- View hints for each challenge
- Learn from provided lessons
- Reset progress anytime to start fresh

## 🌐 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose main branch and `/root` folder
5. Your site will be live at `https://username.github.io/Crypto101-CTF`

### Other Hosting Options

- Netlify
- Vercel
- Any static hosting service

## 🔄 Future Improvements

- [ ] Backend database for persistent storage
- [ ] User authentication and accounts
- [ ] Real-time multiplayer scoreboard
- [ ] More advanced cryptography challenges
- [ ] Video tutorials for each lesson
- [ ] Difficulty progression system
- [ ] Certificate generation
- [ ] API to manage challenges remotely
- [ ] Mobile app version
- [ ] Timed challenges

## 📝 Challenge Creation Guide

When creating custom challenges, consider:

1. **Difficulty Progression**: Start with easy, progress to hard
2. **Clear Instructions**: Describe exactly what students need to do
3. **Helpful Hints**: Provide guidance without revealing the answer
4. **Appropriate Points**: Allocate based on difficulty
5. **Realistic Encryption**: Use actual cryptographic methods
6. **Testable Flags**: Ensure flags are unambiguous

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📄 License

MIT License - feel free to use and modify for educational purposes.

## 👨‍💻 Author

**Swapnil Nayak**

- GitHub: [@nkswapnil087](https://github.com/nkswapnil087)
- Email: [Your Email Here]

## 🙏 Acknowledgments

- Inspired by CTF platforms worldwide
- Built for the cryptography education community
- Special thanks to all educators and students

## 📞 Support

If you encounter any issues or have suggestions:

1. Check existing GitHub issues
2. Create a new issue with details
3. Include browser console errors if applicable

## 🔒 Security Notes

- This is an educational tool, not for production use
- All processing happens client-side (no data sent to servers)
- Suitable for teaching concepts, not real security implementations
- For real cryptography, use established libraries like TweetNaCl.js

---

**Happy Learning! 🎉**

Made with ❤️ for the cryptography community.
