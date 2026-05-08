export const languages = [
  { id: "cymraeg", native: "Cymraeg", english: "Welsh", region: "Wales, UK", regionGroup: "Europe", status: "Safe", score: 72, speakers: "880K", pieces: 1, learners: 12 },
  { id: "runasimi", native: "Runasimi", english: "Quechua", region: "Peru, Bolivia, Ecuador", regionGroup: "South America", status: "Vulnerable", score: 22, speakers: "8.9M", pieces: 1, learners: 45 },
  { id: "yoruba", native: "Èdè Yorùbá", english: "Yoruba", region: "Nigeria, Benin, Togo", regionGroup: "West Africa", status: "Safe", score: 58, speakers: "45M", pieces: 1, learners: 34 },
  { id: "hawaii", native: "ʻŌlelo Hawaiʻi", english: "Hawaiian", region: "United States (Hawaii)", regionGroup: "Pacific", status: "Critically Endangered", score: 41, speakers: "24K", pieces: 0, learners: 8 },
  { id: "euskara", native: "Euskara", english: "Basque", region: "Spain, France", regionGroup: "Europe", status: "Vulnerable", score: 65, speakers: "750K", pieces: 0, learners: 15 },
  { id: "maori", native: "Te Reo Māori", english: "Maori", region: "New Zealand", regionGroup: "Pacific", status: "Vulnerable", score: 62, speakers: "165K", pieces: 0, learners: 22 },
  { id: "odia", native: "ଓଡ଼ିଆ", english: "Odia", region: "Odisha, India", regionGroup: "South India", status: "Safe", score: 78, speakers: "35M", pieces: 0, learners: 5 },
  { id: "santali", native: "ᱥᱟᱱᱛᱟᱲᱤ", english: "Santali", region: "India (Jharkhand)", regionGroup: "South Asia", status: "Vulnerable", score: 35, speakers: "7.6M", pieces: 0, learners: 9 },
  { id: "tulu", native: "ತುಳು", english: "Tulu", region: "Karnataka, India", regionGroup: "South India", status: "Endangered", score: 28, speakers: "1.85M", pieces: 0, learners: 3 },
  { id: "konkani", native: "कोंकणी", english: "Konkani", region: "Goa, India", regionGroup: "South India", status: "Vulnerable", score: 44, speakers: "2.4M", pieces: 0, learners: 11 },
  { id: "kodava", native: "ಕೊಡವ ತಕ್ಕ್", english: "Kodava", region: "Coorg, India", regionGroup: "South India", status: "Critically Endangered", score: 18, speakers: "97K", pieces: 0, learners: 2 },
  { id: "urdu", native: "اُردُو", english: "Urdu", region: "Pakistan, India", regionGroup: "South Asia", status: "Safe", score: 71, speakers: "70M", pieces: 0, learners: 55 },
  { id: "banjara", native: "gor boli", english: "Banjara", region: "Rajasthan, India", regionGroup: "South Asia", status: "Endangered", score: 22, speakers: "1.5M", pieces: 0, learners: 4 },
];

export const content = [
  { id: 1, type: "proverb", language: "Santali", timeAgo: "2 hours ago", nativeTitle: "ᱥᱤᱸᱫᱽᱨᱟ ᱦᱚᱸ ᱠᱚ ᱢᱮᱱᱟᱜᱼᱟ", translation: "Hunting also exists", tags: ["wisdom", "nature"], author: "Arjun Mukhopadhyay", likes: 12, comments: 2 },
  { id: 2, type: "poem", language: "Welsh", timeAgo: "5 hours ago", nativeTitle: "Hiraeth — The Welsh Word With No English Translation", translation: "Longing for a home that no longer exists", tags: ["emotion", "home"], author: "Siân Williams", likes: 45, comments: 8 },
  { id: 3, type: "story", language: "Quechua", timeAgo: "1 day ago", nativeTitle: "Kay Pacha — The Living World", translation: "This world, the here and now", tags: ["mythology", "earth"], author: "Tupac Quispe", likes: 34, comments: 5 },
  { id: 4, type: "poem", language: "Yoruba", timeAgo: "1 day ago", nativeTitle: "Àárọ̀ Tí Ò Níjò", translation: "A morning without dance", tags: ["life", "morning"], author: "Amara Okafor", likes: 56, comments: 11 },
  { id: 5, type: "story", language: "Hawaiian", timeAgo: "2 days ago", nativeTitle: "E Ola Mau Ka ʻŌlelo Hawaiʻi", translation: "Long live the Hawaiian language", tags: ["history", "culture"], author: "Keahi Kahananui", likes: 89, comments: 22 },
  { id: 6, type: "poem", language: "Basque", timeAgo: "3 days ago", nativeTitle: "Itsasoa", translation: "The Sea", tags: ["nature", "ocean"], author: "Mireia Etxeberria", likes: 21, comments: 3 },
];

export const lessons = [
  { id: 1, level: "beginner", title: "Santali Alphabet: Ol Chiki Script", description: "Learn the basics of the unique Ol Chiki script.", duration: "15m", exercises: 3, xp: 75, completions: 89, language: "Santali" },
  { id: 2, level: "intermediate", title: "Welsh Mutations: The Living Grammar", description: "Master the consonant mutations that give Welsh its flow.", duration: "20m", exercises: 3, xp: 100, completions: 143, language: "Welsh" },
  { id: 3, level: "beginner", title: "Quechua Numbers and Counting", description: "Learn to count from 1 to 10 in Quechua.", duration: "12m", exercises: 3, xp: 60, completions: 67, language: "Quechua" },
  { id: 4, level: "beginner", title: "Yoruba Tones: The Music of Speech", description: "Understand how tone changes meaning in Yoruba.", duration: "18m", exercises: 3, xp: 80, completions: 201, language: "Yoruba" },
  { id: 5, level: "beginner", title: "Tulu Greetings: Coastal Connections", description: "Basic greetings to start a conversation in Tulu.", duration: "12m", exercises: 3, xp: 60, completions: 14, language: "Tulu" },
  { id: 6, level: "beginner", title: "Konkani Basics: Goa's Language", description: "First steps into the Konkani language.", duration: "15m", exercises: 3, xp: 70, completions: 31, language: "Konkani" },
  { id: 7, level: "beginner", title: "Urdu Script: Reading Nastaliq", description: "Introduction to the elegant Nastaliq script.", duration: "20m", exercises: 3, xp: 90, completions: 44, language: "Urdu" },
];

export const challenges = [
  { id: 1, title: "Translate 5 Welsh proverbs", language: "Welsh", xp: 50, timeLimit: "10 min", difficulty: "intermediate" },
  { id: 2, title: "Record a Santali greeting", language: "Santali", xp: 75, timeLimit: "5 min", difficulty: "beginner" },
  { id: 3, title: "Write a Quechua haiku", language: "Quechua", xp: 100, timeLimit: "15 min", difficulty: "advanced" },
];

export const leaderboard = [
  { rank: 1, name: "Tupac Quispe", initials: "TQ", languages: "Quechua", streak: "88d", pieces: 41, xp: "8,900" },
  { rank: 2, name: "Amara Okafor", initials: "AO", languages: "Yoruba", streak: "45d", pieces: 22, xp: "5,800" },
  { rank: 3, name: "Arjun Mukhopadhyay", initials: "AM", languages: "Santali, Odia", streak: "21d", pieces: 8, xp: "3,500" },
  { rank: 4, name: "Keahi Kahananui", initials: "KK", languages: "Hawaiian, Maori", streak: "30d", pieces: 11, xp: "2,100" },
  { rank: 5, name: "Siân Williams", initials: "SW", languages: "Welsh", streak: "12d", pieces: 3, xp: "1,200" },
  { rank: 6, name: "Mireia Etxeberria", initials: "ME", languages: "Basque", streak: "7d", pieces: 2, xp: "620" },
];

export const activity = [
  { id: 1, user: "Amara", action: "completed a lesson in", target: "Yoruba", time: "5m ago" },
  { id: 2, user: "Tupac", action: "created a new story in", target: "Quechua", time: "12m ago" },
  { id: 3, user: "Siân", action: "earned 50 XP in", target: "Welsh", time: "1h ago" },
  { id: 4, user: "Keahi", action: "started learning", target: "Maori", time: "2h ago" },
];
