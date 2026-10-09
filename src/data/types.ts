export interface Topic {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name as string
  description: string;
  explanation: string;
  example: { scenario: string; details: string };
  warningSigns: string[];
  safeActions: string[];
  takeaway: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string; // references topic slug
  message?: { sender: string; text: string }; // fictional SMS/WhatsApp for chat bubble
}

export interface SurveyData {
  totalResponses: number | null;
  highlights: { label: string; value: string }[];
}

export interface EngagementData {
  peopleReached: number | null;
  sessions: {
    title: string;
    date: string;
    venue: string;
    description: string;
    photos: string[];
  }[];
}
