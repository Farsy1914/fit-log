export interface Workout {
  id: string;
  title: string;
  categories: string[];
  duration: number;
  calories: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  image: string;
  equipment: string;
  description: string;
}

export const workoutsData: Workout[] = [
  {
    id: '1',
    title: 'BARBELL BENCH PRESS',
    categories: ['CHEST', 'ARMS'],
    duration: 25,
    calories: 180,
    difficulty: 'Intermediate',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell, Bench',
    description: 'A compound press that builds chest thickness, triceps, and pressing power from a stable bench.'
  },
  {
    id: '2',
    title: 'PULL-UP',
    categories: ['BACK', 'ARMS'],
    duration: 15,
    calories: 120,
    difficulty: 'Intermediate',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    equipment: 'Pull-up Bar',
    description: 'A classic bodyweight movement for an expansive, strong back and powerful biceps.'
  },
  {
    id: '3',
    title: 'BACK SQUAT',
    categories: ['LEGS', 'CORE'],
    duration: 30,
    calories: 240,
    difficulty: 'Advanced',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell, Rack',
    description: 'The ultimate lower body builder targeting quads, glutes, hamstrings, and core stability.'
  },
  {
    id: '4',
    title: 'OVERHEAD PRESS',
    categories: ['SHOULDERS', 'ARMS'],
    duration: 20,
    calories: 150,
    difficulty: 'Intermediate',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell',
    description: 'Develop powerful boulder shoulders and bulletproof core strength overhead.'
  },
  {
    id: '5',
    title: 'DUMBBELL BICEP CURL',
    categories: ['ARMS'],
    duration: 12,
    calories: 80,
    difficulty: 'Beginner',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=600',
    equipment: 'Dumbbells',
    description: 'Isolate and grow your biceps with controlled concentric and eccentric contractions.'
  },
  {
    id: '6',
    title: 'HOLLOW-BODY PLANK',
    categories: ['CORE'],
    duration: 10,
    calories: 60,
    difficulty: 'Beginner',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80&w=600',
    equipment: 'Bodyweight',
    description: 'Strengthen deep core muscles and improve overall stability.'
  },
  {
    id: '7',
    title: 'CONVENTIONAL DEADLIFT',
    categories: ['BACK', 'LEGS'],
    duration: 28,
    calories: 260,
    difficulty: 'Advanced',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell',
    description: 'Build total-body strength, posterior chain power, and grip strength with heavy deadlifts.'
  },
  {
    id: '8',
    title: 'PUSH-UP',
    categories: ['CHEST', 'ARMS', 'CORE'],
    duration: 10,
    calories: 90,
    difficulty: 'Beginner',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    equipment: 'Bodyweight',
    description: 'A versatile bodyweight exercise targeting chest, shoulders, and triceps.'
  },
  {
    id: '9',
    title: 'WALKING LUNGE',
    categories: ['LEGS'],
    duration: 18,
    calories: 170,
    difficulty: 'Intermediate',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600',
    equipment: 'Dumbbells (optional)',
    description: 'Great unilateral movement for leg balance, quads, and glutes.'
  },
  {
    id: '10',
    title: 'RUSSIAN TWIST',
    categories: ['CORE'],
    duration: 8,
    calories: 70,
    difficulty: 'Beginner',
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80&w=600',
    equipment: 'Medicine Ball',
    description: 'Rotational core exercise targeting obliques and abdominal muscles.'
  },
  {
    id: '11',
    title: 'DUMBBELL ROW',
    categories: ['BACK', 'ARMS'],
    duration: 15,
    calories: 110,
    difficulty: 'Intermediate',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    equipment: 'Dumbbells, Bench',
    description: 'Build back thickness and correct muscular imbalances with single-arm dumbbell rows.'
  },
  {
    id: '12',
    title: 'KETTLEBELL SWING',
    categories: ['LEGS', 'CORE'],
    duration: 12,
    calories: 140,
    difficulty: 'Intermediate',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    equipment: 'Kettlebell',
    description: 'Explosive hip hinge movement to build explosive power, endurance, and conditioning.'
  }
];