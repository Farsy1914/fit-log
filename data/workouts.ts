export interface Workout {
  id: string;
  title: string;
  category: string;
  duration: number; // minutes
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
    title: 'Barbell Bench Press',
    category: 'Chest',
    duration: 45,
    calories: 320,
    difficulty: 'Intermediate',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell & Bench',
    description: 'The king of upper body compound movements for building massive chest, triceps, and anterior delts.'
  },
  {
    id: '2',
    title: 'Conventional Deadlift',
    category: 'Back',
    duration: 50,
    calories: 450,
    difficulty: 'Advanced',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell & Plates',
    description: 'Build total-body strength, posterior chain power, and grip strength with heavy deadlifts.'
  },
  {
    id: '3',
    title: 'Barbell Back Squat',
    category: 'Legs',
    duration: 50,
    calories: 400,
    difficulty: 'Advanced',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600',
    equipment: 'Squat Rack & Barbell',
    description: 'The ultimate lower body builder targeting quads, glutes, hamstrings, and core stability.'
  },
  {
    id: '4',
    title: 'Overhead Shoulder Press',
    category: 'Shoulders',
    duration: 35,
    calories: 250,
    difficulty: 'Intermediate',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    equipment: 'Barbell or Dumbbells',
    description: 'Develop powerful boulder shoulders and bulletproof core strength overhead.'
  },
  {
    id: '5',
    title: 'Pull-Ups',
    category: 'Back',
    duration: 30,
    calories: 220,
    difficulty: 'Intermediate',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    equipment: 'Pull-up Bar',
    description: 'A classic bodyweight movement for an expansive, strong back and powerful biceps.'
  },
  {
    id: '6',
    title: 'Dumbbell Bicep Curls',
    category: 'Arms',
    duration: 25,
    calories: 150,
    difficulty: 'Beginner',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=600',
    equipment: 'Dumbbells',
    description: 'Isolate and grow your biceps with controlled concentric and eccentric contractions.'
  }
];