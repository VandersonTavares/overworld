export interface Activity {
  id: number;
  name: string;
  image: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}