import { db } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';

export interface HighResImageRecord {
  id: string;
  title: string;
  category: 'hero' | 'gala' | 'gate' | 'gallery';
  originalUrl: string;
  googleDriveFolder: string;
  description: string;
  createdAt: string;
}

const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1bs1c-gzpO4zzQGM0f86EXgO0ihJIBiNt?usp=sharing";

export const DEFAULT_HIGH_RES_IMAGES: HighResImageRecord[] = [
  {
    id: "hero-1",
    title: "Poster Kỷ Niệm 20 Năm K44 NEU",
    category: "hero",
    originalUrl: "https://lh3.googleusercontent.com/d/1fNHbZw80s98Lmsvq3yH_f0jTgxI7yePL",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Ảnh gốc chất lượng cao cho trang chủ kỷ niệm 20 năm ngày ra trường (2006 - 2026).",
    createdAt: new Date().toISOString()
  },
  {
    id: "gala-1",
    title: "Sân Khấu Chính Dạ Tiệc '20 Về Lại Thanh Xuân'",
    category: "gala",
    originalUrl: "https://lh3.googleusercontent.com/d/1PpMB77SiJcCwNdeQjJApDxWcmIk2Srtd",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Ảnh gốc độ phân giải 4K không nén của sân khấu chính sự kiện Gala Dinner.",
    createdAt: new Date().toISOString()
  },
  {
    id: "gala-2",
    title: "Không Gian Dạ Tiệc Tri Ân - Góc Nhìn Tổng Thể",
    category: "gala",
    originalUrl: "https://lh3.googleusercontent.com/d/1IBle8A_UTMduuj1i3Ey_tlM6-5GClSaf",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Góc nhìn tổng thể dạ tiệc tri ân nguyên bản chất lượng cao.",
    createdAt: new Date().toISOString()
  },
  {
    id: "gala-3",
    title: "Sân Khấu '20 Năm Sau Nữa...'",
    category: "gala",
    originalUrl: "https://lh3.googleusercontent.com/d/1Wej7NJEvT_-cccDC4G-djLAf2X14syy-",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Khoảnh khắc sân khấu rực rỡ nguyên bản.",
    createdAt: new Date().toISOString()
  },
  {
    id: "gala-4",
    title: "Khoảnh Khắc Cựu Sinh Viên K44 Tề Tựu",
    category: "gala",
    originalUrl: "https://lh3.googleusercontent.com/d/1fNHbZw80s98Lmsvq3yH_f0jTgxI7yePL",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Đông đảo cựu sinh viên K44 tề tựu nguyên bản.",
    createdAt: new Date().toISOString()
  },
  {
    id: "gate-1",
    title: "Con đường ký ức - Dấu ấn hành trình",
    category: "gate",
    originalUrl: "https://lh3.googleusercontent.com/d/1oOAMGAgiP_4wQmppNs3jCbuBk842E9hL",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Cổng ký ức K44 NEU độ phân giải gốc.",
    createdAt: new Date().toISOString()
  },
  {
    id: "gate-2",
    title: "Cổng Ký Ức Chi Tiết",
    category: "gate",
    originalUrl: "https://lh3.googleusercontent.com/d/1Jq-hhR2xNxZ9eHU_OvNJ_0O1rUiGpJQz",
    googleDriveFolder: GOOGLE_DRIVE_FOLDER,
    description: "Chi tiết cổng ký ức chất lượng nguyên bản.",
    createdAt: new Date().toISOString()
  }
];

export async function fetchHighResImages(): Promise<HighResImageRecord[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "high_res_images"));
    if (querySnapshot.empty) {
      // Seed default records if empty
      for (const record of DEFAULT_HIGH_RES_IMAGES) {
        await setDoc(doc(db, "high_res_images", record.id), record);
      }
      return DEFAULT_HIGH_RES_IMAGES;
    }
    const items: HighResImageRecord[] = [];
    querySnapshot.forEach((docSnap) => {
      items.push(docSnap.data() as HighResImageRecord);
    });
    return items;
  } catch (error) {
    console.warn("Firestore offline or fallback mode active:", error);
    return DEFAULT_HIGH_RES_IMAGES;
  }
}
