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

// All data API
export const fetchWorkouts = async (): Promise<Workout[]> => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch from API');
    const data = await res.json();
    
    return Array.isArray(data) ? data.map((item: any) => ({
      id: String(item.id || item._id || '1'),
      title: item.title || item.name || item.workoutName || 'WORKOUT',
      categories: Array.isArray(item.categories) ? item.categories : (item.category ? [item.category] : ['CHEST']),
      duration: Number(item.duration || item.time || 20),
      calories: Number(item.calories || item.cal || item.calorie || 180),
      difficulty: item.difficulty || 'Intermediate',
      rating: Number(item.rating || item.score || 4.8),
      image: item.image || item.img || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
      equipment: item.equipment || item.gear || 'Barbell, Bench',
      description: item.description || item.desc || 'A great compound workout.'
    })) : [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};

// Single Data API using specific ID endpoint
export const fetchWorkoutById = async (id: string): Promise<Workout | null> => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch workout with id ${id}`);
    const item = await res.json();

    if (!item) return null;

    return {
      id: String(item.id || item._id || id),
      title: item.title || item.name || item.workoutName || 'WORKOUT',
      categories: Array.isArray(item.categories) ? item.categories : (item.category ? [item.category] : ['CHEST']),
      duration: Number(item.duration || item.time || 20),
      calories: Number(item.calories || item.cal || item.calorie || 180),
      difficulty: item.difficulty || 'Intermediate',
      rating: Number(item.rating || item.score || 4.8),
      image: item.image || item.img || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
      equipment: item.equipment || item.gear || 'Barbell, Bench',
      description: item.description || item.desc || 'A great compound workout.'
    };
  } catch (error) {
    console.error(`API Error for ID ${id}:`, error);
    return null;
  }
};