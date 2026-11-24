export type CategoryId =
  | 'management'
  | 'health'
  | 'money'
  | 'hiring'
  | 'productivity'
  | 'gaming'
  | 'learning';

export interface Category {
  id: CategoryId;
  label: string;
  icon: string;
  color: string;
  description: string;
}

export type DemoType =
  | 'kanban'
  | 'expense'
  | 'habit'
  | 'applicant'
  | 'notes'
  | 'quiz'
  | 'faceVideo';

export interface AppItem {
  id: string;
  name: string;
  category: CategoryId;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  demo: DemoType;
  popularity: number;
  externalUrl?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
}

export const categories: Category[] = [
  {
    id: 'management',
    label: 'Management',
    icon: 'LayoutDashboard',
    color: 'brand',
    description: 'Plan, track, and ship work with boards, timelines, and dashboards.',
  },
  {
    id: 'health',
    label: 'Health',
    icon: 'HeartPulse',
    color: 'accent',
    description: 'Build habits, track wellness, and stay consistent day after day.',
  },
  {
    id: 'money',
    label: 'Money',
    icon: 'Wallet',
    color: 'warn',
    description: 'Budget, earn, and watch every dollar with smart money tools.',
  },
  {
    id: 'hiring',
    label: 'Hiring',
    icon: 'UserCheck',
    color: 'brand',
    description: 'Manage candidates, schedule interviews, and hire faster.',
  },
  {
    id: 'productivity',
    label: 'Productivity',
    icon: 'Zap',
    color: 'accent',
    description: 'Capture notes, automate tasks, and get more done in less time.',
  },
  {
    id: 'learning',
    label: 'Learning',
    icon: 'GraduationCap',
    color: 'warn',
    description: 'Take quizzes, track progress, and master new skills.',
  },
  {
    id: 'gaming',
    label: 'Gaming',
    icon: 'Gamepad2',
    color: 'accent',
    description: 'Play, compete, and sharpen your mind with casual and strategy games.',
  },
];

export const apps: AppItem[] = [
  {
    id: 'erpconstruction',
    name: 'ERP Construction',
    category: 'management',
    tagline: 'Construction operations hub',
    description:
      'A practical construction management workspace for reports, attendance, storekeeping, workers, purchasing, schedules, and project dashboards — all in one place.',
    icon: 'HardHat',
    gradient: 'from-slate-700 to-amber-700',
    features: ['Daily reports', 'Attendance tracking', 'Project schedules', 'Purchasing dashboard'],
    demo: 'kanban',
    popularity: 99,
    externalUrl: 'https://erpconstruction.glide.page',
    image: 'https://images.pexels.com/photos/30278773/pexels-photo-30278773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Construction cranes silhouetted against a warm sunset sky',
    videoUrl: 'https://drive.google.com/file/d/14J71X32RsnVD0jRBt1wIWGyNWxHvAqo9/preview',
  },
  {
    id: 'flowboard',
    name: 'FlowBoard',
    category: 'management',
    tagline: 'Kanban project board',
    description:
      'A visual kanban board for moving tasks from backlog to done. Drag cards across columns, assign team members, and keep every project flowing smoothly.',
    icon: 'LayoutDashboard',
    gradient: 'from-brand-500 to-brand-700',
    features: ['Drag-and-drop columns', 'Assign team members', 'Priority labels', 'Progress insights'],
    demo: 'kanban',
    popularity: 98,
    image: 'https://images.pexels.com/photos/38888701/pexels-photo-38888701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Digital kanban board on a tablet',
  },
  {
    id: 'trackmate',
    name: 'TrackMate',
    category: 'management',
    tagline: 'Team work tracker',
    description:
      'Track tasks across your team with a clean, shared workspace. See who is working on what, spot blockers early, and keep delivery on schedule.',
    icon: 'CheckSquare',
    gradient: 'from-brand-400 to-brand-600',
    features: ['Shared task lists', 'Team assignments', 'Due dates', 'Blocker alerts'],
    demo: 'kanban',
    popularity: 84,
    image: 'https://images.pexels.com/photos/33222053/pexels-photo-33222053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Hands using a stylus on a digital checklist',
  },
  {
    id: 'sana',
    name: 'Sana',
    category: 'health',
    tagline: 'Calm wellness companion',
    description:
      'A warm, welcoming wellness space for slowing down, checking in with yourself, and building healthier daily rhythms inspired by nature, sea, and sunlight.',
    icon: 'Waves',
    gradient: 'from-orange-400 to-cyan-600',
    features: ['Wellness check-ins', 'Mindful routines', 'Nature-inspired design', 'Gentle daily guidance'],
    demo: 'habit',
    popularity: 97,
    externalUrl: 'https://malazhub.github.io/sana/',
    image: 'https://images.pexels.com/photos/29150568/pexels-photo-29150568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Golden hour sunset over a calm tropical beach',
  },
  {
    id: 'habitly',
    name: 'Habitly',
    category: 'health',
    tagline: 'Daily habit tracker',
    description:
      'Build streaks that stick. Mark habits done each day, watch your streak grow, and stay motivated with gentle reminders and weekly insights.',
    icon: 'Flame',
    gradient: 'from-accent-400 to-accent-600',
    features: ['Daily habit check-in', 'Streak counter', 'Weekly insights', 'Gentle reminders'],
    demo: 'habit',
    popularity: 95,
    image: 'https://images.pexels.com/photos/6471420/pexels-photo-6471420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Creative habit tracker journal page',
  },
  {
    id: 'pulsefit',
    name: 'PulseFit',
    category: 'health',
    tagline: 'Wellness dashboard',
    description:
      'Track steps, water, sleep, and mood in one friendly dashboard. See trends over time and celebrate small wins on your wellness journey.',
    icon: 'HeartPulse',
    gradient: 'from-accent-500 to-accent-700',
    features: ['Steps & water tracking', 'Sleep logging', 'Mood check-in', 'Trend charts'],
    demo: 'habit',
    popularity: 79,
    image: 'https://images.pexels.com/photos/8038637/pexels-photo-8038637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Woman exercising on a yoga mat outdoors',
  },
  {
    id: 'budgetbuddy',
    name: 'BudgetBuddy',
    category: 'money',
    tagline: 'Personal expense tracker',
    description:
      'Log income and expenses, sort them into categories, and see exactly where your money goes. A clean budget overview keeps you in control every month.',
    icon: 'Wallet',
    gradient: 'from-warn-400 to-warn-600',
    features: ['Quick expense entry', 'Category breakdown', 'Monthly overview', 'Balance at a glance'],
    demo: 'expense',
    popularity: 92,
    image: 'https://images.pexels.com/photos/7111588/pexels-photo-7111588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Calculator with coins and cash on a notepad',
  },
  {
    id: 'sidehustle',
    name: 'SideHustle',
    category: 'money',
    tagline: 'Freelance income tracker',
    description:
      'Track freelance gigs, invoices, and payouts in one place. See your earnings grow and never lose track of an unpaid invoice again.',
    icon: 'TrendingUp',
    gradient: 'from-warn-500 to-warn-700',
    features: ['Gig tracking', 'Invoice status', 'Earnings dashboard', 'Payout log'],
    demo: 'expense',
    popularity: 73,
    image: 'https://images.pexels.com/photos/6862442/pexels-photo-6862442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Freelancer reviewing papers near a laptop',
  },
  {
    id: 'hireflow',
    name: 'HireFlow',
    category: 'hiring',
    tagline: 'Applicant pipeline',
    description:
      'Move candidates through your hiring pipeline — from applied to hired. Review profiles, leave notes, and keep every stakeholder in sync.',
    icon: 'UserCheck',
    gradient: 'from-brand-500 to-brand-700',
    features: ['Candidate pipeline', 'Profile review', 'Interview notes', 'Team collaboration'],
    demo: 'applicant',
    popularity: 88,
    image: 'https://images.pexels.com/photos/5439373/pexels-photo-5439373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Professional handshake in a modern office',
  },
  {
    id: 'talentdesk',
    name: 'TalentDesk',
    category: 'hiring',
    tagline: 'Interview scheduler',
    description:
      'Schedule interviews, send invites, and collect feedback — all in one tidy workspace built for busy hiring teams.',
    icon: 'CalendarCheck',
    gradient: 'from-brand-400 to-brand-600',
    features: ['Interview scheduling', 'Auto-invites', 'Feedback forms', 'Hiring analytics'],
    demo: 'applicant',
    popularity: 71,
    image: 'https://images.pexels.com/photos/8441260/pexels-photo-8441260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Hand writing on a calendar with a pencil',
  },
  {
    id: 'faceswap',
    name: 'FaceSwap',
    category: 'productivity',
    tagline: 'Swap a face between photo and video',
    description:
      'Swap a face between a still photo and a target video with one tap. Upload your photo, pick a video, and watch the face transfer land naturally frame by frame.',
    icon: 'Smile',
    gradient: 'from-fuchsia-500 to-slate-800',
    features: ['Photo-to-video face swap', 'Automatic frame alignment', 'Natural blend', 'Quick export'],
    demo: 'faceVideo',
    popularity: 93,
    image: 'https://images.pexels.com/photos/20578716/pexels-photo-20578716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Person holding a mirror to their face',
  },
  {
    id: 'facevideoswap',
    name: 'FaceVideoSwap',
    category: 'productivity',
    tagline: 'Photo, text, and voice to video',
    description:
      'Turn a photo into a talking video by combining face swapping with your own text and voice. Create expressive short videos from a single image.',
    icon: 'Video',
    gradient: 'from-rose-500 to-slate-800',
    features: ['Photo face swap', 'Text-to-video scenes', 'Voice narration', 'Short video creation'],
    demo: 'faceVideo',
    popularity: 94,
    image: 'https://images.pexels.com/photos/19115814/pexels-photo-19115814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Artistic double-exposure portrait with a film camera',
  },
  {
    id: 'facebook-post-analyzer',
    name: 'Facebook Post Analyzer',
    category: 'productivity',
    tagline: 'Find relevant posts with keyword matching',
    description:
      'Analyze accessible Facebook posts for supplied keywords. Compare post text using lightweight similarity scoring and display screenshots of matching posts.',
    icon: 'Search',
    gradient: 'from-blue-600 to-slate-900',
    features: ['Keyword-based post matching', 'Text similarity scoring', 'Post text extraction', 'Matching post screenshots'],
    demo: 'notes',
    popularity: 95,
    externalUrl: 'https://faceapp-2-7jyi.onrender.com',
  },
  {
    id: 'quicknote',
    name: 'QuickNote',
    category: 'productivity',
    tagline: 'Fast note capture',
    description:
      'Capture ideas the moment they strike. Organize notes with tags, search instantly, and never lose a great thought again.',
    icon: 'StickyNote',
    gradient: 'from-accent-400 to-accent-600',
    features: ['Instant note capture', 'Tag organization', 'Full-text search', 'Pin important notes'],
    demo: 'notes',
    popularity: 90,
    image: 'https://images.pexels.com/photos/19736977/pexels-photo-19736977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Colorful sticky notes in a notebook',
  },
  {
    id: 'focusflow',
    name: 'FocusFlow',
    category: 'productivity',
    tagline: 'Pomodoro timer + tasks',
    description:
      'Work in focused sprints with a built-in pomodoro timer. Pair tasks with focus sessions and track how much deep work you get done each day.',
    icon: 'Timer',
    gradient: 'from-accent-500 to-accent-700',
    features: ['Pomodoro timer', 'Task pairing', 'Focus stats', 'Distraction blocker'],
    demo: 'notes',
    popularity: 82,
    image: 'https://images.pexels.com/photos/37494738/pexels-photo-37494738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Glass hourglass with sand on books',
  },
  {
    id: 'skillquiz',
    name: 'SkillQuiz',
    category: 'learning',
    tagline: 'Interactive quiz builder',
    description:
      'Test your knowledge with interactive quizzes. Get instant feedback, track your score, and learn from every answer — right or wrong.',
    icon: 'GraduationCap',
    gradient: 'from-warn-400 to-warn-600',
    features: ['Multiple-choice quizzes', 'Instant feedback', 'Score tracking', 'Topic variety'],
    demo: 'quiz',
    popularity: 86,
    image: 'https://images.pexels.com/photos/6684210/pexels-photo-6684210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Student writing answers during an exam',
  },
  {
    id: 'pixelquest',
    name: 'PixelQuest',
    category: 'gaming',
    tagline: 'Retro arcade game collection',
    description:
      'A pocket arcade of retro-inspired mini games. Jump, dodge, and chase high scores across neon-lit levels that load instantly in your browser.',
    icon: 'Gamepad2',
    gradient: 'from-fuchsia-500 to-indigo-700',
    features: ['Instant browser play', 'High-score chasing', 'Neon retro visuals', 'Multiple mini games'],
    demo: 'quiz',
    popularity: 91,
    image: 'https://images.pexels.com/photos/29027879/pexels-photo-29027879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Vintage arcade machine joystick glowing under ambient light',
  },
  {
    id: 'checkmate',
    name: 'CheckMate',
    category: 'gaming',
    tagline: 'Chess puzzle trainer',
    description:
      'Sharpen your mind with bite-sized chess puzzles. Solve mate-in-one challenges, practice tactics, and climb from beginner to master one move at a time.',
    icon: 'Crown',
    gradient: 'from-slate-600 to-slate-900',
    features: ['Mate-in-one puzzles', 'Tactics trainer', 'Progress levels', 'Daily challenge'],
    demo: 'quiz',
    popularity: 85,
    image: 'https://images.pexels.com/photos/30182768/pexels-photo-30182768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'White chess knight piece on a minimalist board',
  },
  {
    id: 'triviablast',
    name: 'TriviaBlast',
    category: 'gaming',
    tagline: 'Multiplayer trivia showdown',
    description:
      'Race the clock and your friends in fast-paced trivia rounds. Pick a topic, answer quick questions, and climb the weekly leaderboard.',
    icon: 'Trophy',
    gradient: 'from-amber-500 to-rose-600',
    features: ['Fast trivia rounds', 'Topic categories', 'Weekly leaderboard', 'Play with friends'],
    demo: 'quiz',
    popularity: 89,
    image: 'https://images.pexels.com/photos/8763318/pexels-photo-8763318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Group of friends having fun playing games under neon lights',
  },
  {
    id: 'agenda',
    name: 'Agenda',
    category: 'learning',
    tagline: 'School and project planning workspace',
    description:
      'A focused agenda workspace for organising lessons, projects and important work in one clear place.',
    icon: 'CalendarDays',
    gradient: 'from-brand-500 to-accent-600',
    features: ['Daily agenda', 'Project planning', 'Clear schedule', 'Easy access'],
    demo: 'quiz',
    popularity: 96,
    externalUrl: 'https://agenda.mycamp.workers.dev',
  },
  {
    id: 'learnloop',
    name: 'LearnLoop',
    category: 'learning',
    tagline: 'Spaced repetition flashcards',
    description:
      'Master anything with spaced-repetition flashcards. Cards you struggle with come back sooner, so you retain more with less effort.',
    icon: 'BookOpen',
    gradient: 'from-warn-500 to-warn-700',
    features: ['Flashcard decks', 'Spaced repetition', 'Progress tracking', 'Custom cards'],
    demo: 'quiz',
    popularity: 77,
    image: 'https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Tall stack of books symbolizing knowledge',
  },
];
