export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  icon: string;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  faculty: string;
  classYear: string;
  note?: string;
  registeredAt: string;
}

export interface GallerySlide {
  id: string;
  title: string;
  image: string;
  description: string;
}
