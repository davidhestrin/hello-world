// Local greetings in different languages
const greetings = {
    'US': { hello: 'Howdy', language: 'English' },
    'GB': { hello: 'Hello there', language: 'English' },
    'FR': { hello: 'Bonjour', language: 'French' },
    'DE': { hello: 'Guten Tag', language: 'German' },
    'ES': { hello: 'Hola', language: 'Spanish' },
    'IT': { hello: 'Ciao', language: 'Italian' },
    'PT': { hello: 'Olá', language: 'Portuguese' },
    'BR': { hello: 'Oi', language: 'Portuguese' },
    'JP': { hello: 'こんにちは', language: 'Japanese' },
    'CN': { hello: '你好', language: 'Chinese' },
    'KR': { hello: '안녕하세요', language: 'Korean' },
    'RU': { hello: 'Привет', language: 'Russian' },
    'IN': { hello: 'नमस्ते', language: 'Hindi' },
    'SA': { hello: 'مرحبا', language: 'Arabic' },
    'EG': { hello: 'أهلاً', language: 'Arabic' },
    'IL': { hello: 'שלום', language: 'Hebrew' },
    'TR': { hello: 'Merhaba', language: 'Turkish' },
    'GR': { hello: 'Γειά σου', language: 'Greek' },
    'NL': { hello: 'Hallo', language: 'Dutch' },
    'PL': { hello: 'Cześć', language: 'Polish' },
    'SE': { hello: 'Hej', language: 'Swedish' },
    'NO': { hello: 'Hei', language: 'Norwegian' },
    'DK': { hello: 'Hej', language: 'Danish' },
    'FI': { hello: 'Hei', language: 'Finnish' },
    'TH': { hello: 'สวัสดี', language: 'Thai' },
    'VN': { hello: 'Xin chào', language: 'Vietnamese' },
    'ID': { hello: 'Halo', language: 'Indonesian' },
    'PH': { hello: 'Kumusta', language: 'Filipino' },
    'MY': { hello: 'Hai', language: 'Malay' },
    'AU': { hello: "G'day", language: 'English' },
    'NZ': { hello: 'Kia ora', language: 'Maori' },
    'MX': { hello: '¡Hola!', language: 'Spanish' },
    'AR': { hello: '¡Hola!', language: 'Spanish' },
    'CL': { hello: '¡Hola!', language: 'Spanish' },
    'CO': { hello: '¡Quiubo!', language: 'Spanish' },
    'IE': { hello: 'Dia dhuit', language: 'Irish' },
    'ZA': { hello: 'Howzit', language: 'English' },
    'NG': { hello: 'Bawo ni', language: 'Yoruba' },
    'KE': { hello: 'Jambo', language: 'Swahili' },
    'UA': { hello: 'Привіт', language: 'Ukrainian' },
    'CZ': { hello: 'Ahoj', language: 'Czech' },
    'RO': { hello: 'Bună', language: 'Romanian' },
    'HU': { hello: 'Szia', language: 'Hungarian' },
    'default': { hello: 'Hello', language: 'English' }
};

// Country flag emojis
const flags = {
    'US': '🇺🇸', 'GB': '🇬🇧', 'FR': '🇫🇷', 'DE': '🇩🇪', 'ES': '🇪🇸',
    'IT': '🇮🇹', 'PT': '🇵🇹', 'BR': '🇧🇷', 'JP': '🇯🇵', 'CN': '🇨🇳',
    'KR': '🇰🇷', 'RU': '🇷🇺', 'IN': '🇮🇳', 'SA': '🇸🇦', 'EG': '🇪🇬',
    'IL': '🇮🇱', 'TR': '🇹🇷', 'GR': '🇬🇷', 'NL': '🇳🇱', 'PL': '🇵🇱',
    'SE': '🇸🇪', 'NO': '🇳🇴', 'DK': '🇩🇰', 'FI': '🇫🇮', 'TH': '🇹🇭',
    'VN': '🇻🇳', 'ID': '🇮🇩', 'PH': '🇵🇭', 'MY': '🇲🇾', 'AU': '🇦🇺',
    'NZ': '🇳🇿', 'MX': '🇲🇽', 'AR': '🇦🇷', 'CL': '🇨🇱', 'CO': '🇨🇴',
    'IE': '🇮🇪', 'ZA': '🇿🇦', 'NG': '🇳🇬', 'KE': '🇰🇪', 'UA': '🇺🇦',
    'CZ': '🇨🇿', 'RO': '🇷🇴', 'HU': '🇭🇺', 'CA': '🇨🇦', 'AT': '🇦🇹',
    'CH': '🇨🇭', 'BE': '🇧🇪', 'SG': '🇸🇬', 'HK': '🇭🇰', 'TW': '🇹🇼',
    'default': '🌍'
};

// Fun facts about countries
const funFacts = {
    'US': [
        "The U.S. has no official language at the federal level!",
        "Alaska is both the westernmost and easternmost U.S. state!",
        "The Library of Congress is the largest library in the world."
    ],
    'GB': [
        "The Queen's handbag signals to her staff when she wants to leave!",
        "Big Ben is actually the name of the bell, not the tower!",
        "The British invented the sandwich, fish and chips, and the internet!"
    ],
    'FR': [
        "France is the most visited country in the world!",
        "The Louvre is the most visited art museum on Earth!",
        "French was the official language of England for about 300 years."
    ],
    'DE': [
        "Germany has over 1,500 different types of sausages!",
        "The first printed book was created in Germany!",
        "Oktoberfest actually starts in September!"
    ],
    'JP': [
        "Japan has more than 6,800 islands!",
        "Vending machines in Japan sell everything from bananas to ramen!",
        "There's a 'cat island' where cats outnumber humans 6 to 1!"
    ],
    'AU': [
        "Australia is wider than the moon!",
        "There are more kangaroos than people in Australia!",
        "The Great Barrier Reef has its own mailbox!"
    ],
    'BR': [
        "Brazil has more species of monkeys than any other country!",
        "Portuguese is the only official language in South America besides Spanish!",
        "Brazil shares a border with every South American country except Chile and Ecuador!"
    ],
    'IN': [
        "India has the world's largest postal network!",
        "Chess was invented in India!",
        "The world's largest sundial is in Jaipur, India!"
    ],
    'CN': [
        "China uses 45 billion chopsticks per year!",
        "All pandas in the world are on loan from China!",
        "The Great Wall of China is not visible from space with the naked eye!"
    ],
    'IT': [
        "Italy has more UNESCO World Heritage sites than any other country!",
        "The average Italian eats about 25 kg of pasta per year!",
        "Italians invented the thermometer, piano, and eyeglasses!"
    ],
    'ES': [
        "Spain has the second highest number of bars per capita!",
        "The tooth fairy in Spain is a mouse named Ratoncito Pérez!",
        "Spanish is the second most spoken native language in the world!"
    ],
    'MX': [
        "Mexico introduced chocolate to the world!",
        "Mexico City was built on top of the ruins of Tenochtitlan!",
        "The world's smallest volcano is in Mexico - just 43 feet tall!"
    ],
    'CA': [
        "Canada has more lakes than the rest of the world combined!",
        "The longest street in the world is in Canada - Yonge Street!",
        "Canadians eat more mac and cheese than any other nation!"
    ],
    'KR': [
        "South Korea has the fastest average internet speed!",
        "Koreans add a year to their age at birth!",
        "South Korea's national sport is Taekwondo!"
    ],
    'NL': [
        "The Netherlands has more bikes than people!",
        "Amsterdam has more canals than Venice!",
        "The Dutch are the tallest people in the world on average!"
    ],
    'default': [
        "Every country has its own unique beauty and culture!",
        "The world has 195 countries and over 7,000 languages!",
        "Hello has been said billions of times today around the world!"
    ]
};

// Time-based greetings
function getTimeGreeting(hour) {
    if (hour >= 5 && hour < 12) return { period: 'morning', emoji: '🌅' };
    if (hour >= 12 && hour < 17) return { period: 'afternoon', emoji: '☀️' };
    if (hour >= 17 && hour < 21) return { period: 'evening', emoji: '🌆' };
    return { period: 'night', emoji: '🌙' };
}

// Apply theme based on time
function applyTimeTheme(hour) {
    document.body.classList.remove('morning', 'afternoon', 'evening', 'night');
    const { period } = getTimeGreeting(hour);
    document.body.classList.add(period);
}

// Format local time nicely
function formatLocalTime(timezone) {
    try {
        return new Date().toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    } catch {
        return new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
}

// Get current hour in timezone
function getLocalHour(timezone) {
    try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            hour12: false
        });
        return parseInt(timeStr);
    } catch {
        return new Date().getHours();
    }
}

// Main function to fetch location and display greeting
async function init() {
    const loadingEl = document.getElementById('loading');
    const contentEl = document.getElementById('content');
    const errorEl = document.getElementById('error');

    try {
        // Fetch location data from IP
        const response = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,query');
        const data = await response.json();

        if (data.status === 'fail') {
            throw new Error(data.message || 'Failed to get location');
        }

        // Get greeting data
        const countryCode = data.countryCode || 'default';
        const greeting = greetings[countryCode] || greetings['default'];
        const flag = flags[countryCode] || flags['default'];
        const facts = funFacts[countryCode] || funFacts['default'];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];

        // Get time info
        const localHour = getLocalHour(data.timezone);
        const timeInfo = getTimeGreeting(localHour);
        const localTime = formatLocalTime(data.timezone);

        // Apply theme
        applyTimeTheme(localHour);

        // Update DOM
        document.getElementById('greeting').innerHTML =
            `${greeting.hello}! ${timeInfo.emoji}<br>
            <span style="font-size: 0.6em; color: #888;">Welcome to the world!</span>`;

        document.getElementById('location').textContent =
            `${data.city}, ${data.regionName}, ${data.country}`;

        document.getElementById('coordinates').textContent =
            `📍 ${data.lat.toFixed(4)}°, ${data.lon.toFixed(4)}°`;

        document.getElementById('flag').textContent = flag;

        document.getElementById('fun-fact').innerHTML =
            `<strong>Did you know?</strong><br>${randomFact}`;

        document.getElementById('local-time').textContent =
            `🕐 Local time: ${localTime} (${data.timezone})`;

        // Hide loading, show content
        loadingEl.style.display = 'none';
        contentEl.style.display = 'block';

        // Add a nice entrance animation
        contentEl.style.opacity = '0';
        contentEl.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
            contentEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            contentEl.style.opacity = '1';
            contentEl.style.transform = 'translateY(0)';
        });

        // Update time every minute
        setInterval(() => {
            const newTime = formatLocalTime(data.timezone);
            document.getElementById('local-time').textContent =
                `🕐 Local time: ${newTime} (${data.timezone})`;
        }, 60000);

    } catch (error) {
        console.error('Error:', error);
        loadingEl.style.display = 'none';
        errorEl.style.display = 'block';
        document.getElementById('error-message').textContent =
            error.message || 'Could not determine your location. Please try again.';
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
