/**
 * Main JavaScript file for Crypto 101 CTF Platform
 * Handles local storage management and shared functionality
 */

// ============ LOCAL STORAGE KEYS ============
const STORAGE_KEYS = {
    LESSONS: 'crypto101_lessons',
    CHALLENGES: 'crypto101_challenges',
    COMPLETED_CHALLENGES: 'crypto101_completed',
    USER_SCORE: 'crypto101_score',
    SCOREBOARD: 'crypto101_scoreboard'
};

// ============ INITIALIZATION ============

/**
 * Initialize lessons with default content if none exist
 */
function initializeLessons() {
    if (!localStorage.getItem(STORAGE_KEYS.LESSONS)) {
        const defaultLessons = [
            {
                id: 1,
                title: "Introduction to Cryptography",
                content: "Cryptography is the science of secret writing and communication. It's been used for thousands of years to protect sensitive information. In this course, we'll explore different encryption techniques and how they work.",
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                title: "Caesar Cipher Explained",
                content: "The Caesar Cipher is one of the simplest encryption techniques. It shifts each letter by a fixed number of positions in the alphabet. For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', etc. This method is very easy to break, but it's a great starting point for learning.",
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                title: "Base64 Encoding",
                content: "Base64 is not exactly encryption, but rather an encoding scheme. It converts binary data into a text format using 64 printable ASCII characters. Base64 is commonly used in email, URLs, and data transmission. While it provides obfuscation, it does NOT provide security.",
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                title: "XOR Encryption Basics",
                content: "XOR (exclusive OR) is a bitwise operation that forms the basis of many encryption algorithms. In XOR encryption, each bit of the plaintext is combined with a bit from the key using the XOR operation. It's reversible: A XOR B = C, and C XOR B = A.",
                createdAt: new Date().toISOString()
            },
            {
                id: 5,
                title: "Understanding Hash Functions",
                content: "Hash functions are one-way transformations that convert input data into fixed-size strings. They are deterministic (same input = same output) and fast to compute. Common hash functions include SHA-256 and MD5. Hash functions are used for data verification, not encryption.",
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(defaultLessons));
    }
}

/**
 * Initialize challenges with 5 default crypto challenges
 */
function initializeChallenges() {
    if (!localStorage.getItem(STORAGE_KEYS.CHALLENGES)) {
        const defaultChallenges = [
            {
                id: 1,
                title: "Caesar Cipher Challenge",
                category: "Caesar Cipher",
                difficulty: "Easy",
                points: 100,
                description: "The text has been shifted by 3 positions. Can you decrypt it?",
                encrypted: "KHOOR ZRUOG",
                flag: "FLAG{HELLO_WORLD}",
                hint: "Each letter is shifted by 3 positions in the alphabet. A->D, B->E, etc.",
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                title: "Base64 Decoder",
                category: "Base64 Encoding",
                difficulty: "Easy",
                points: 100,
                description: "Decode the Base64 string to find the flag.",
                encrypted: "RkxBR3tjcnlwdG9fMTAxfQ==",
                flag: "FLAG{CRYPTO_101}",
                hint: "This is Base64 encoded. You can use any Base64 decoder online.",
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                title: "Simple XOR Challenge",
                category: "XOR Encryption",
                difficulty: "Medium",
                points: 150,
                description: "A message was encrypted using XOR with the key 'SECRET'. Decrypt it!",
                encrypted: "0x06 0x07 0x1a 0x04 0x09 0x00 0x14 0x03 0x19 0x0b 0x1f",
                flag: "FLAG{XOR_CIPHER}",
                hint: "XOR each hexadecimal value with the ASCII codes of 'SECRET' repeated. The result spells out the flag.",
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                title: "Hash Identification",
                category: "Hash Functions",
                difficulty: "Medium",
                points: 150,
                description: "Identify the hash type and find the plaintext. Given: 2c26b46911185131006ba5df20aaf2f retorted",
                encrypted: "Hash: 2c26b46911185131006ba5df20aaf2f27ffd3b23",
                flag: "FLAG{HASH_IDENTIFIED}",
                hint: "This is a SHA-1 hash (40 hexadecimal characters). The plaintext is a simple 5-letter word.",
                createdAt: new Date().toISOString()
            },
            {
                id: 5,
                title: "Double Encoding",
                category: "Double Encoding",
                difficulty: "Hard",
                points: 200,
                description: "The flag has been Base64 encoded twice. Decode it twice to find the message.",
                encrypted: "Rkc4Uy9PSjg4eVg1MVZQTVEvP1k=",
                flag: "FLAG{DOUBLE_ENCODED}",
                hint: "First decode with Base64. The result will be another Base64 string. Decode it again!",
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.CHALLENGES, JSON.stringify(defaultChallenges));
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initializeLessons();
    initializeChallenges();
});

// ============ LESSONS MANAGEMENT ============

/**
 * Get all lessons from localStorage
 * @returns {Array} Array of lesson objects
 */
function getLessons() {
    const lessons = localStorage.getItem(STORAGE_KEYS.LESSONS);
    return lessons ? JSON.parse(lessons) : [];
}

/**
 * Save lessons to localStorage
 * @param {Array} lessons - Array of lesson objects
 */
function saveLessons(lessons) {
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessons));
}

// ============ CHALLENGES MANAGEMENT ============

/**
 * Get all challenges from localStorage
 * @returns {Array} Array of challenge objects
 */
function getChallenges() {
    const challenges = localStorage.getItem(STORAGE_KEYS.CHALLENGES);
    return challenges ? JSON.parse(challenges) : [];
}

/**
 * Save challenges to localStorage
 * @param {Array} challenges - Array of challenge objects
 */
function saveChallenges(challenges) {
    localStorage.setItem(STORAGE_KEYS.CHALLENGES, JSON.stringify(challenges));
}

// ============ PROGRESS TRACKING ============

/**
 * Get array of completed challenge IDs
 * @returns {Array} Array of completed challenge IDs
 */
function getCompletedChallenges() {
    const completed = localStorage.getItem(STORAGE_KEYS.COMPLETED_CHALLENGES);
    return completed ? JSON.parse(completed) : [];
}

/**
 * Mark a challenge as completed and add points
 * @param {number} challengeId - ID of the challenge
 * @param {number} points - Points awarded for this challenge
 */
function addCompletedChallenge(challengeId, points) {
    const completed = getCompletedChallenges();
    
    // Avoid duplicates
    if (!completed.includes(challengeId)) {
        completed.push(challengeId);
        localStorage.setItem(STORAGE_KEYS.COMPLETED_CHALLENGES, JSON.stringify(completed));
        
        // Add to user score
        const currentScore = getUserScore();
        localStorage.setItem(STORAGE_KEYS.USER_SCORE, (currentScore + points).toString());
        
        // Add to scoreboard
        const challenge = getChallenges().find(c => c.id === challengeId);
        if (challenge) {
            addToScoreboard(challenge.title, points);
        }
    }
}

/**
 * Get total user score
 * @returns {number} Total points earned
 */
function getUserScore() {
    const score = localStorage.getItem(STORAGE_KEYS.USER_SCORE);
    return score ? parseInt(score) : 0;
}

/**
 * Get scoreboard data
 * @returns {Array} Array of score records
 */
function getScoreboard() {
    const scoreboard = localStorage.getItem(STORAGE_KEYS.SCOREBOARD);
    return scoreboard ? JSON.parse(scoreboard) : [];
}

/**
 * Add entry to scoreboard
 * @param {string} challengeName - Name of the challenge
 * @param {number} points - Points earned
 */
function addToScoreboard(challengeName, points) {
    const scoreboard = getScoreboard();
    scoreboard.push({
        challengeName: challengeName,
        points: points,
        date: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEYS.SCOREBOARD, JSON.stringify(scoreboard));
}

// ============ UTILITY FUNCTIONS ============

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

/**
 * Validate flag format
 * @param {string} flag - Flag to validate
 * @returns {boolean} True if valid format
 */
function isValidFlagFormat(flag) {
    return flag.startsWith('FLAG{') && flag.endsWith('}');
}

/**
 * Generate a unique ID
 * @returns {number} Unique timestamp-based ID
 */
function generateId() {
    return Date.now();
}

// ============ DEBUGGING HELPERS ============

/**
 * Log current storage state (for debugging)
 */
function logStorageState() {
    console.log('=== Crypto 101 Storage State ===');
    console.log('Lessons:', getLessons());
    console.log('Challenges:', getChallenges());
    console.log('Completed:', getCompletedChallenges());
    console.log('Score:', getUserScore());
    console.log('Scoreboard:', getScoreboard());
}

/**
 * Clear all data (for reset)
 */
function clearAllData() {
    localStorage.clear();
    initializeLessons();
    initializeChallenges();
    console.log('All data cleared and reinitialized');
}
