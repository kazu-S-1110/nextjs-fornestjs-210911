export interface Book {
  id: any;
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
