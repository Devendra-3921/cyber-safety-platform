import { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: 'phishing',
    question: 'You receive an urgent SMS claiming your bank account will be suspended unless you click a link to update your PAN card. What should you do?',
    message: {
      sender: '+91-98765-XXXXX',
      text: 'Dear Customer, your HDFC account will be BLOCKED today. Update PAN immediately via this link: http://hdfc-pan-update.net'
    },
    options: [
      'Click the link and quickly update the details to avoid suspension.',
      'Reply to the SMS asking for more information.',
      'Ignore the message and do not click the link.',
      'Forward the message to all your friends so they can update theirs too.'
    ],
    correctIndex: 2,
    explanation: 'Banks never send threatening SMS messages with links to update KYC details. This is a classic phishing attempt.'
  },
  {
    id: 2,
    topic: 'upi-fraud',
    question: 'You are selling a sofa online. A buyer agrees to pay the full amount without seeing it and sends you a QR code on WhatsApp, saying "Scan this to receive your ₹5000". What is the correct action?',
    options: [
      'Scan the QR code but ensure you enter your UPI PIN carefully.',
      'Ask them to send a different QR code because the first one might not work.',
      'Refuse to scan the QR code and explain that scanning QR codes is only for sending money, not receiving.',
      'Scan it using a different UPI app.'
    ],
    correctIndex: 2,
    explanation: 'You never need to scan a QR code or enter your UPI PIN to receive money. Doing so will deduct money from your account.'
  },
  {
    id: 3,
    topic: 'otp-scams',
    question: 'Someone calls you claiming to be from customer support and says they are upgrading your SIM to 5G. They ask you to read out the 6-digit code you just received on your phone. What should you do?',
    options: [
      'Read out the code so your phone internet gets faster.',
      'Read out only the first 3 digits to be safe.',
      'Tell them you will call them back later and give the code.',
      'Disconnect the call immediately and do not share the code.'
    ],
    correctIndex: 3,
    explanation: 'The code is an OTP (One-Time Password) that gives access to your accounts. Legitimate customer support will never ask for your OTP over a call.'
  },
  {
    id: 4,
    topic: 'password-security',
    question: 'Which of the following is the most secure practice for managing your passwords?',
    options: [
      'Using your pet\'s name followed by 123 (e.g., Tommy123) for easy remembering.',
      'Using the exact same complex password for every website.',
      'Writing all your passwords on a sticky note attached to your laptop screen.',
      'Using a unique, strong passphrase for each important account and enabling Two-Factor Authentication.'
    ],
    correctIndex: 3,
    explanation: 'Unique passphrases prevent hackers from accessing all your accounts if one gets compromised. Two-Factor Authentication adds an essential extra layer of security.'
  },
  {
    id: 5,
    topic: 'fake-jobs',
    question: 'You get a WhatsApp message offering a part-time job from home earning ₹3000 a day just by liking YouTube videos. What is the most likely reality?',
    message: {
      sender: '+44 7911 123456',
      text: 'Hello, I am HR from Global Media. We have a part time job for you. Earn ₹3000-5000 daily by liking videos. Reply YES to start.'
    },
    options: [
      'It is a genuine opportunity from a foreign company expanding in India.',
      'It is a task fraud scam where they will eventually ask you to deposit money for "premium tasks".',
      'It is a safe job as long as you do not give them your bank account password.',
      'It is a good way to earn pocket money, so you should reply YES.'
    ],
    correctIndex: 1,
    explanation: 'This is a common "Task Scam". They start by paying small amounts to build trust, then demand large deposits which they steal.'
  },
  {
    id: 6,
    topic: 'social-media-safety',
    question: 'You receive an urgent message on Facebook Messenger from your cousin asking you to transfer ₹10,000 immediately for a medical emergency. What is the safest first step?',
    options: [
      'Transfer the money immediately because it is an emergency.',
      'Ask them to prove it by sending a photo of the hospital.',
      'Call your cousin directly on their known phone number to verify the situation.',
      'Message another relative on Facebook to see if they know about it.'
    ],
    correctIndex: 2,
    explanation: 'Scammers often clone or hack social media accounts to impersonate family members. Always verify urgent requests by calling the person directly on a known number.'
  },
  {
    id: 7,
    topic: 'ai-impersonation',
    question: 'You receive a frantic phone call from an unknown number. The voice sounds exactly like your father, saying he has been in an accident and needs money sent to a stranger\'s account. What should you do?',
    options: [
      'Transfer the money immediately to help him.',
      'Stay calm, hang up, and call your father\'s actual phone number to verify.',
      'Keep him on the line and ask for the account details.',
      'Ask the stranger on the phone to take a photo of your father.'
    ],
    correctIndex: 1,
    explanation: 'Scammers use AI voice cloning to sound exactly like loved ones in distress. Always hang up and call their actual number to verify.'
  },
  {
    id: 8,
    topic: 'phishing',
    question: 'You get an email saying you have won a lottery of $1,000,000. It asks you to pay a small processing fee of $50 to claim the prize. Is this real?',
    options: [
      'Yes, paying small fees for large prizes is standard procedure.',
      'No, you never have to pay money upfront to claim a real lottery prize. It is a scam.',
      'Yes, but you should try to negotiate the fee down to $20.',
      'Maybe, you should send the $50 just in case.'
    ],
    correctIndex: 1,
    explanation: 'Advance-fee scams promise large sums of money but require a small upfront payment. Legitimate lotteries deduct taxes from the winnings, they don\'t ask for money first.'
  },
  {
    id: 9,
    topic: 'upi-fraud',
    question: 'A person pretending to be army personnel calls you to buy goods from your shop. They say army rules require them to send a payment request link of ₹10,000 for you to approve so the money enters your account. Should you approve it?',
    options: [
      'Yes, because army personnel are trustworthy.',
      'Yes, approving requests is how merchants receive payments.',
      'No, approving a payment request and entering your PIN will send money FROM your account, not to it.',
      'Ask them to send ₹5000 first as a test.'
    ],
    correctIndex: 2,
    explanation: 'Scammers frequently impersonate armed forces personnel to gain trust. Approving a UPI mandate or payment request always debits money from your account.'
  },
  {
    id: 10,
    topic: 'otp-scams',
    question: 'You ordered food online. You receive an SMS with a link to "track your live order" and it asks you to download an APK app and enter an OTP to view the delivery boy\'s location. What do you do?',
    message: {
      sender: 'FD-DLVRY',
      text: 'Your food is arriving late. Install this live tracking app and enter OTP 8492 to view rider location: http://food-track-apk.com'
    },
    options: [
      'Download the app and enter the OTP to find out where your food is.',
      'Only enter the OTP if the app looks professional.',
      'Do not download the app or share the OTP. Track orders only within the official food delivery app.',
      'Forward the SMS to the restaurant.'
    ],
    correctIndex: 2,
    explanation: 'Scammers use fake delivery issues to trick you into downloading malicious apps (APKs) that can steal your data and intercept your bank OTPs.'
  }
];
