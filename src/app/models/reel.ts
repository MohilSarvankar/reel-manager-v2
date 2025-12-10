export interface Reel {
  id: string;
  movie: string;
  category: string;
  scene: string;
  status: 'Idea' | 'Created' | 'Uploaded';
}