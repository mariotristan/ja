// Last gambling date: January 16, 2026
const lastGamblingDate = new Date('2026-01-16');

// Motivational quotes array
const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Every day you choose recovery is a day you choose yourself.",
    "Progress, not perfection. Every step counts.",
    "You are stronger than your urges.",
    "One day at a time, one choice at a time.",
    "Your future self will thank you for the choices you make today.",
    "Recovery is not about being perfect, it's about being persistent.",
    "The pain of discipline weighs ounces, but the pain of regret weighs tons.",
    "You've survived 100% of your worst days. You're doing great.",
    "Healing is not linear, but every day forward is progress."
];

// Function to calculate days without gambling
function calculateDaysSober() {
    const today = new Date();
    const timeDifference = today.getTime() - lastGamblingDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
}

// Function to update the display
function updateDisplay() {
    const days = calculateDaysSober();
    const today = new Date();
    
    // Update days counter
    document.getElementById('days-count').textContent = days;
    
    // Update current date
    document.getElementById('current-date').innerHTML = 
        `Today: <strong>${today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })}</strong>`;
    
    // Update milestone message and styling
    updateMilestone(days);
    
    // Update progress bar
    updateProgressBar(days);
    
    // Update motivational quote
    updateQuote();
}

// Function to update milestone message and styling
function updateMilestone(days) {
    const milestoneElement = document.getElementById('milestone-text');
    
    // Remove existing milestone classes
    milestoneElement.classList.remove('week', 'month', 'hundred');
    
    if (days === 0) {
        milestoneElement.textContent = "Day one starts now! You've got this! 🌟";
    } else if (days === 1) {
        milestoneElement.textContent = "Amazing! Your first full day! 🎉";
    } else if (days === 7) {
        milestoneElement.textContent = "🎉 One week milestone achieved! 🎉";
        milestoneElement.classList.add('week');
    } else if (days === 30) {
        milestoneElement.textContent = "🏆 One month strong! Incredible! 🏆";
        milestoneElement.classList.add('month');
    } else if (days === 90) {
        milestoneElement.textContent = "🌟 Three months! You're unstoppable! 🌟";
        milestoneElement.classList.add('month');
    } else if (days === 100) {
        milestoneElement.textContent = "💯 100 DAYS! Triple digits! 💯";
        milestoneElement.classList.add('hundred');
    } else if (days === 365) {
        milestoneElement.textContent = "🎊 ONE YEAR! AMAZING! 🎊";
        milestoneElement.classList.add('hundred');
    } else if (days % 30 === 0 && days > 30) {
        const months = Math.floor(days / 30);
        milestoneElement.textContent = `🏅 ${months} months strong! Keep going! 🏅`;
        milestoneElement.classList.add('month');
    } else if (days % 7 === 0 && days > 7) {
        const weeks = Math.floor(days / 7);
        milestoneElement.textContent = `✨ ${weeks} weeks completed! ✨`;
        milestoneElement.classList.add('week');
    } else {
        milestoneElement.textContent = "Keep going! Every day counts 💪";
    }
}

// Function to update progress bar (progress towards next milestone)
function updateProgressBar(days) {
    const progressFill = document.getElementById('progress-fill');
    let progress = 0;
    
    if (days < 7) {
        // Progress towards first week
        progress = (days / 7) * 100;
    } else if (days < 30) {
        // Progress towards first month
        progress = ((days - 7) / 23) * 100;
    } else if (days < 100) {
        // Progress towards 100 days
        progress = ((days - 30) / 70) * 100;
    } else if (days < 365) {
        // Progress towards one year
        progress = ((days - 100) / 265) * 100;
    } else {
        // Beyond one year
        progress = 100;
    }
    
    progressFill.style.width = `${Math.min(progress, 100)}%`;
}

// Function to update motivational quote
function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
}

// Function to add confetti effect for milestones
function showConfetti() {
    // Simple confetti effect using CSS animations
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            width: 10px;
            height: 10px;
            background: ${['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 4)]};
            animation: fall ${Math.random() * 2 + 1}s linear forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        body.appendChild(confetti);
        
        setTimeout(() => {
            body.removeChild(confetti);
        }, 3000);
    }
}

// Add CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize the display when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    
    // Check for milestone celebration
    const days = calculateDaysSober();
    if (days === 7 || days === 30 || days === 100 || days === 365 || (days % 30 === 0 && days > 30)) {
        setTimeout(showConfetti, 500);
    }
    
    // Update the quote every 30 seconds
    setInterval(updateQuote, 30000);
});

// Update the display every hour
setInterval(updateDisplay, 3600000);