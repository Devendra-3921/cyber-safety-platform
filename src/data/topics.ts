import { Topic } from './types';

export const topics: Topic[] = [
  {
    slug: 'phishing',
    title: 'Phishing & Suspicious Links',
    icon: 'Fish',
    description: 'Learn how to identify fake websites and deceptive emails.',
    explanation: 'Phishing is when scammers send fake messages pretending to be a real organization like a bank, delivery service, or government agency. Their goal is to trick you into clicking a malicious link and entering your personal details.',
    example: {
      scenario: 'Priya receives an SMS claiming her electricity bill is overdue and her power will be cut tonight unless she pays immediately.',
      details: 'The SMS contains a link like "http://ebill-update-urgent.info". When she clicks it, it takes her to a fake payment page that looks like the real electricity board website to steal her card details.'
    },
    warningSigns: [
      'Messages creating a sense of extreme urgency or panic',
      'Links that look slightly different from official websites',
      'Unexpected messages about packages, prizes, or account suspensions',
      'Poor spelling or grammar in official-looking messages'
    ],
    safeActions: [
      'Do not click links in unsolicited messages',
      'Type the official website address directly into your browser',
      'Verify claims by calling the official customer care number',
      'A padlock/HTTPS does not mean a site is safe. Check that the domain spelling is exact.'
    ],
    takeaway: 'Never click on suspicious links or panic under pressure; always verify directly.'
  },
  {
    slug: 'upi-fraud',
    title: 'UPI & Digital Payment Fraud',
    icon: 'Smartphone',
    description: 'Protect your money from fake payment requests and QR code scams.',
    explanation: 'Scammers trick you into sending money when you believe you are receiving it. Remember, you never need to scan a QR code or enter your UPI PIN to receive money. Your UPI PIN is for authorising payments, never for receiving money.',
    example: {
      scenario: 'Rajesh lists an old bicycle for sale online. A buyer agrees to the price without negotiating and says they will send money immediately.',
      details: 'The "buyer" sends a QR code or a payment request on a UPI app, claiming Rajesh needs to scan it or enter his PIN to "receive" the payment. In reality, it is a request to deduct money from Rajesh\'s account.'
    },
    warningSigns: [
      'Buyers who refuse to meet in person or negotiate',
      'Requests to scan a QR code to receive payment',
      'Being asked to enter your UPI PIN to accept money',
      'Fake payment screenshots showing a successful transfer before it hits your bank'
    ],
    safeActions: [
      'You never need to scan a QR code or enter your UPI PIN to receive money.',
      'Your UPI PIN is for authorising payments, never for receiving money.',
      'Always check your bank SMS or app to confirm receipt of funds',
      'Cancel unknown payment requests on your UPI app immediately'
    ],
    takeaway: 'You never need to scan a QR code or enter your UPI PIN to receive money.'
  },
  {
    slug: 'otp-scams',
    title: 'OTP Theft & Impersonation',
    icon: 'ShieldAlert',
    description: 'Understand how scammers steal your One-Time Passwords.',
    explanation: 'An OTP (One-Time Password) is the final key to your accounts or money. Scammers call pretending to be from a bank, telecom provider, or tech support, making up a story to convince you to share the OTP that just arrived on your phone.',
    example: {
      scenario: 'Ananya gets a call from someone claiming her SIM card will be blocked because her KYC is pending.',
      details: 'The caller sounds professional and says they can update the KYC over the phone. They ask Ananya to share the 6-digit code she just received. If she shares it, they will use it to log into her bank account or hijack her WhatsApp.'
    },
    warningSigns: [
      'Unexpected calls asking for an OTP, password, or PIN',
      'Callers claiming to be from official organizations asking for sensitive codes',
      'Threats of blocking services (bank, SIM, gas connection) if you do not comply',
      'Being asked to read out or forward a code you just received.'
    ],
    safeActions: [
      'Never share your OTP with anyone, under any circumstances',
      'Disconnect suspicious calls immediately',
      'Banks and legitimate companies will never call to ask for your OTP',
      'Read the full SMS containing the OTP to see what transaction it is for'
    ],
    takeaway: 'Your OTP is a secret key; never share it with anyone over a call or text.'
  },
  {
    slug: 'password-security',
    title: 'Password Security',
    icon: 'Lock',
    description: 'Keep your accounts safe with strong, unique passwords.',
    explanation: 'Using the same, simple password for everything is like using one weak lock for your house, car, and safe. If hackers guess it or steal it from one website, they can access all your other accounts.',
    example: {
      scenario: 'Vikram uses "vikram123" as the password for his email, social media, and online shopping accounts.',
      details: 'A small shopping website gets hacked, and Vikram\'s password is leaked. The hackers then try the same email and password on major social media sites, successfully taking over his accounts and messaging his friends for money.'
    },
    warningSigns: [
      'Using names, birthdates, or simple sequences (123456) as passwords',
      'Using the exact same password for multiple different websites',
      'Writing passwords on sticky notes near your computer',
      'Not changing a password after a data breach or suspicious login'
    ],
    safeActions: [
      'Use a strong, unique password for each important account',
      'Combine random words to make a memorable passphrase (e.g., BlueMangoTrainStar) (example only, don\'t use it)',
      'Enable Two-Factor Authentication (2FA) wherever possible',
      'Use a trusted password manager to store complex passwords securely'
    ],
    takeaway: 'Use strong, unique passwords and enable Two-Factor Authentication (2FA) for extra security.'
  },
  {
    slug: 'social-media-safety',
    title: 'Social Media Safety',
    icon: 'Users',
    description: 'Protect your privacy and personal information online.',
    explanation: 'Oversharing on social media gives scammers the information they need to impersonate you, guess your passwords, or target your friends. Scammers often clone profiles to trick your contacts into sending money.',
    example: {
      scenario: 'Sunita\'s friends receive direct messages from an account that uses her exact name and profile picture.',
      details: 'The fake account claims Sunita is in a medical emergency and urgently needs money sent via UPI. Because Sunita\'s profile was fully public, the scammer easily downloaded her photos and saw her friends list to target them.'
    },
    warningSigns: [
      'Friend requests from people you are already friends with (cloned accounts)',
      'Messages from friends suddenly asking for money urgently',
      'Online quizzes asking for personal details (first pet name, mother\'s maiden name)',
      'Strangers sending romantic messages or asking to switch to private video calls'
    ],
    safeActions: [
      'Make your social media profiles private',
      'Do not accept friend requests from strangers',
      'Verify emergency requests from friends by calling them on their phone number',
      'Report fake profiles to the platform.',
      'Avoid oversharing personal routines, travel plans, or sensitive photos'
    ],
    takeaway: 'Keep your profile private, verify urgent requests, and think before you share.'
  },
  {
    slug: 'fake-jobs',
    title: 'Fake Jobs & Scams',
    icon: 'Briefcase',
    description: 'Identify fraudulent job offers, fake internships, and task scams.',
    explanation: 'Scammers offer high-paying jobs or part-time work from home requiring little effort. They eventually ask you to pay a "registration fee," buy equipment from a specific vendor, or invest your own money to complete "tasks" for commissions.',
    example: {
      scenario: 'Rahul receives a WhatsApp message offering ₹5000/day just to like YouTube videos.',
      details: 'He is added to a Telegram group and gets paid ₹150 for the first few tasks. Then, he is told he must deposit ₹10,000 to get "premium tasks" for higher commissions. Once he deposits the money, the scammers disappear.'
    },
    warningSigns: [
      'Job offers via WhatsApp or Telegram from unknown international numbers',
      'Promises of high pay for very simple tasks (liking videos, reviewing hotels)',
      'Being asked to pay money (for training, kit, or registration) to get a job',
      'Recruiters who only use a personal email and give no company domain or official careers page.'
    ],
    safeActions: [
      'Remember that legitimate employers will never ask you to pay them for a job',
      'Confirm the offer on the company\'s official website or careers page.',
      'Research the company independently on LinkedIn or official job portals',
      'Ignore unsolicited job offers via chat apps that seem too good to be true',
      'Never invest your own money to complete online "tasks"'
    ],
    takeaway: 'If you have to pay money to get a job or earn money, it is a scam.'
  },
  {
    slug: 'ai-impersonation',
    title: 'AI Voice & Image Impersonation',
    icon: 'Bot',
    description: 'Learn about deepfakes and AI voice scams.',
    explanation: 'Scammers are now using Artificial Intelligence to clone the voices or faces of your loved ones. They can take a short audio clip from social media and use it to make a fake distress call that can sound very convincing.',
    example: {
      scenario: 'Mr. Sharma gets a frantic phone call from his son\'s phone number. The voice can sound very convincing.',
      details: 'The voice claims he has been arrested and needs bail money transferred immediately to a lawyer\'s account. The scammer spoofed the phone number and used AI to clone the son\'s voice from a public Instagram video.'
    },
    warningSigns: [
      'Unexpected distress calls from family members sounding panicked',
      'Urgent demands for money transferred to unknown accounts',
      'Callers making excuses for why they cannot turn on video or answer specific personal questions',
      'Don\'t rely on spotting glitches; always verify by calling back on a known number.'
    ],
    safeActions: [
      'Stay calm. Hang up and call the person back on their known number directly',
      'Agree on a "safe word" with your family to use in real emergencies',
      'Ask the caller a personal question only your real family member would know',
      'Limit the public availability of your voice and video recordings online'
    ],
    takeaway: 'Always verify shocking calls from loved ones by hanging up and calling them back directly.'
  }
];
