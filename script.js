// Language translations
const translations = {
    'en': {
        title: 'Recovery Tracker',
        daysStrong: 'Days Strong',
        recoveryStartDate: 'Recovery Start Date:',
        currentDate: 'Current Date:',
        footer: 'Commitment to Recovery',
        milestones: {
            beginning: 'Recovery journey begins today.',
            firstDay: 'First day completed successfully.',
            oneWeek: 'One week milestone achieved.',
            oneMonth: 'One month of sustained recovery.',
            threeMonths: 'Three months of consistent progress.',
            hundredDays: '100-day milestone reached.',
            oneYear: 'One year of recovery completed.',
            months: '{months} months of sustained progress.',
            weeks: '{weeks} weeks completed.',
            maintaining: 'Maintaining progress. Every day matters.'
        },
        quotes: [
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "Every day you choose recovery is a day you choose yourself.",
            "Progress, not perfection. Every step counts.",
            "You are stronger than your urges.",
            "One day at a time, one choice at a time.",
            "Your future self will thank you for the choices you make today.",
            "Recovery is not about being perfect, it's about being persistent.",
            "The pain of discipline weighs ounces, but the pain of regret weighs tons.",
            "You've survived 100% of your worst days. You're doing great.",
            "Healing is not linear, but every day forward is progress.",
            "Courage doesn't always roar. Sometimes it's the quiet voice that says 'I will try again tomorrow'.",
            "The only impossible journey is the one you never begin.",
            "It does not matter how slowly you go as long as you do not stop.",
            "Success is the sum of small efforts repeated day in and day out.",
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            "You don't have to be great to get started, but you have to get started to be great.",
            "The comeback is always stronger than the setback.",
            "Every master was once a disaster.",
            "Fall seven times, rise eight.",
            "You didn't come this far to only come this far.",
            "Small steps in the right direction can turn out to be the biggest step of your life.",
            "Recovery is an acceptance that your life is in shambles and you have to change it.",
            "The greatest revolution of our generation is the discovery that human beings can alter their lives.",
            "Strength grows in the moments when you think you can't go on but you keep going anyway.",
            "Recovery is about progression, not perfection.",
            "The first step toward recovery is admitting you have a problem.",
            "You are not your mistakes. You are not your struggles. You are here now with the power to shape your day.",
            "The only way out is through.",
            "Recovery is a process. It takes time. It takes patience. It takes everything you've got.",
            "You have been assigned this mountain to show others it can be moved."
        ]
    },
    'es-MX': {
        title: 'Seguimiento de Recuperación',
        daysStrong: 'Días Fuertes',
        recoveryStartDate: 'Fecha de Inicio de Recuperación:',
        currentDate: 'Fecha Actual:',
        footer: 'Compromiso con la Recuperación',
        milestones: {
            beginning: 'El viaje de recuperación comienza hoy.',
            firstDay: 'Primer día completado con éxito.',
            oneWeek: 'Meta de una semana alcanzada.',
            oneMonth: 'Un mes de recuperación sostenida.',
            threeMonths: 'Tres meses de progreso constante.',
            hundredDays: 'Meta de 100 días alcanzada.',
            oneYear: 'Un año de recuperación completado.',
            months: '{months} meses de progreso sostenido.',
            weeks: '{weeks} semanas completadas.',
            maintaining: 'Manteniendo el progreso. Cada día importa.'
        },
        quotes: [
            "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
            "Cada día que eliges la recuperación es un día que te eliges a ti mismo.",
            "Progreso, no perfección. Cada paso cuenta.",
            "Eres más fuerte que tus impulsos.",
            "Un día a la vez, una decisión a la vez.",
            "Tu yo futuro te agradecerá las decisiones que tomes hoy.",
            "La recuperación no se trata de ser perfecto, se trata de ser persistente.",
            "El dolor de la disciplina pesa gramos, pero el dolor del arrepentimiento pesa toneladas.",
            "Has sobrevivido al 100% de tus peores días. Lo estás haciendo muy bien.",
            "La sanación no es lineal, pero cada día hacia adelante es progreso.",
            "El coraje no siempre ruge. A veces es la voz tranquila que dice 'lo intentaré de nuevo mañana'.",
            "El único viaje imposible es el que nunca comienzas.",
            "No importa qué tan lento vayas siempre y cuando no te detengas.",
            "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            "Lo que está detrás de nosotros y lo que está frente a nosotros son asuntos pequeños comparados con lo que está dentro de nosotros.",
            "No tienes que ser grandioso para comenzar, pero tienes que comenzar para ser grandioso.",
            "El regreso siempre es más fuerte que el revés.",
            "Todo maestro alguna vez fue un desastre.",
            "Cae siete veces, levántate ocho.",
            "No llegaste tan lejos solo para llegar tan lejos.",
            "Pequeños pasos en la dirección correcta pueden resultar ser el paso más grande de tu vida.",
            "La recuperación es aceptar que tu vida está en ruinas y que tienes que cambiarla.",
            "La mayor revolución de nuestra generación es el descubrimiento de que los seres humanos pueden alterar sus vidas.",
            "La fuerza crece en los momentos en que piensas que no puedes continuar pero sigues adelante de todos modos.",
            "La recuperación se trata de progresión, no de perfección.",
            "El primer paso hacia la recuperación es admitir que tienes un problema.",
            "No eres tus errores. No eres tus luchas. Estás aquí ahora con el poder de dar forma a tu día.",
            "La única salida es atravesar.",
            "La recuperación es un proceso. Toma tiempo. Toma paciencia. Toma todo lo que tienes.",
            "Se te ha asignado esta montaña para mostrar a otros que se puede mover."
        ]
    }
};

// Current language
let currentLang = 'en';

// Detect browser language and set initial language
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    // Check if browser language is Spanish (any variant)
    if (browserLang.startsWith('es')) {
        // Default to Spanish (Mexico) for Spanish speakers
        currentLang = 'es-MX';
    } else {
        currentLang = 'en';
    }

    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    return currentLang;
}

// Apply translations to the page
function applyTranslations(lang) {
    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'es-MX' ? 'es-MX' : 'en';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update page title
    document.title = translations[lang].title;

    // Update language selector buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update all dynamic content
    updateDisplay();
}

// Last gambling date: January 16, 2026
const lastGamblingDate = new Date('2026-01-17');


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

    // Determine locale based on current language
    const locale = currentLang === 'es-MX' ? 'es-MX' : 'en-US';

    // Update current date
    const currentDateLabel = translations[currentLang].currentDate;
    document.getElementById('current-date').innerHTML =
        `<span data-i18n="currentDate">${currentDateLabel}</span> <strong>${today.toLocaleDateString(locale, {
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
    const milestones = translations[currentLang].milestones;

    // Remove existing milestone classes
    milestoneElement.classList.remove('week', 'month', 'hundred');

    if (days === 0) {
        milestoneElement.textContent = milestones.beginning;
    } else if (days === 1) {
        milestoneElement.textContent = milestones.firstDay;
    } else if (days === 7) {
        milestoneElement.textContent = milestones.oneWeek;
        milestoneElement.classList.add('week');
    } else if (days === 30) {
        milestoneElement.textContent = milestones.oneMonth;
        milestoneElement.classList.add('month');
    } else if (days === 90) {
        milestoneElement.textContent = milestones.threeMonths;
        milestoneElement.classList.add('month');
    } else if (days === 100) {
        milestoneElement.textContent = milestones.hundredDays;
        milestoneElement.classList.add('hundred');
    } else if (days === 365) {
        milestoneElement.textContent = milestones.oneYear;
        milestoneElement.classList.add('hundred');
    } else if (days % 30 === 0 && days > 30) {
        const months = Math.floor(days / 30);
        milestoneElement.textContent = milestones.months.replace('{months}', months);
        milestoneElement.classList.add('month');
    } else if (days % 7 === 0 && days > 7) {
        const weeks = Math.floor(days / 7);
        milestoneElement.textContent = milestones.weeks.replace('{weeks}', weeks);
        milestoneElement.classList.add('week');
    } else {
        milestoneElement.textContent = milestones.maintaining;
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
    const quotes = translations[currentLang].quotes;
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
    // Detect and set initial language
    const initialLang = detectLanguage();
    applyTranslations(initialLang);

    // Add event listeners for language selector buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });

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