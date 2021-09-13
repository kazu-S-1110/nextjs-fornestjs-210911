export interface Book {
  id: string;
  title: string;
  model: string;
  price?: string;
  userName?: string;
  userNum?: string;
  userBelongto?: string;
  destination?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EditBook extends Book {}
