export interface VocabularyItem {
  id: string;
  arabic: string;
  english: string;
  pronunciation: string;
}

export interface Category {
  id: string;
  emoji: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  items: VocabularyItem[];
}

export const vocabularyData: Category[] = [
  {
    id: "clothes",
    emoji: "👕",
    title: "Clothes",
    level: "Beginner",
    items: [
      { id: "1", arabic: "قميص", english: "Shirt", pronunciation: "qamees" },
      { id: "2", arabic: "بنطلون", english: "Pants", pronunciation: "bantaloon" },
      { id: "3", arabic: "فستان", english: "Dress", pronunciation: "fustan" },
      { id: "4", arabic: "حذاء", english: "Shoes", pronunciation: "hithaa" },
      { id: "5", arabic: "معطف", english: "Coat", pronunciation: "mi'taf" },
      { id: "6", arabic: "قبعة", english: "Hat", pronunciation: "qubba'a" },
      { id: "7", arabic: "جوارب", english: "Socks", pronunciation: "jawarib" },
      { id: "8", arabic: "تنورة", english: "Skirt", pronunciation: "tanoora" },
    ],
  },
  {
    id: "food",
    emoji: "🍔",
    title: "Food",
    level: "Beginner",
    items: [
      { id: "1", arabic: "خبز", english: "Bread", pronunciation: "khubz" },
      { id: "2", arabic: "ماء", english: "Water", pronunciation: "maa" },
      { id: "3", arabic: "لحم", english: "Meat", pronunciation: "lahm" },
      { id: "4", arabic: "أرز", english: "Rice", pronunciation: "aruzz" },
      { id: "5", arabic: "فاكهة", english: "Fruit", pronunciation: "fakiha" },
      { id: "6", arabic: "خضروات", english: "Vegetables", pronunciation: "khudarawat" },
      { id: "7", arabic: "حليب", english: "Milk", pronunciation: "haleeb" },
      { id: "8", arabic: "بيض", english: "Eggs", pronunciation: "bayd" },
    ],
  },
  {
    id: "colors",
    emoji: "🎨",
    title: "Colors",
    level: "Beginner",
    items: [
      { id: "1", arabic: "أحمر", english: "Red", pronunciation: "ahmar" },
      { id: "2", arabic: "أزرق", english: "Blue", pronunciation: "azraq" },
      { id: "3", arabic: "أخضر", english: "Green", pronunciation: "akhdar" },
      { id: "4", arabic: "أصفر", english: "Yellow", pronunciation: "asfar" },
      { id: "5", arabic: "أبيض", english: "White", pronunciation: "abyad" },
      { id: "6", arabic: "أسود", english: "Black", pronunciation: "aswad" },
      { id: "7", arabic: "برتقالي", english: "Orange", pronunciation: "burtuqali" },
      { id: "8", arabic: "وردي", english: "Pink", pronunciation: "wardi" },
    ],
  },
  {
    id: "places",
    emoji: "🏢",
    title: "Places Town",
    level: "Beginner",
    items: [
      { id: "1", arabic: "مدرسة", english: "School", pronunciation: "madrasa" },
      { id: "2", arabic: "مستشفى", english: "Hospital", pronunciation: "mustashfa" },
      { id: "3", arabic: "متجر", english: "Store", pronunciation: "matjar" },
      { id: "4", arabic: "مطعم", english: "Restaurant", pronunciation: "mat'am" },
      { id: "5", arabic: "بنك", english: "Bank", pronunciation: "bank" },
      { id: "6", arabic: "مسجد", english: "Mosque", pronunciation: "masjid" },
      { id: "7", arabic: "حديقة", english: "Park", pronunciation: "hadeeqa" },
      { id: "8", arabic: "مكتبة", english: "Library", pronunciation: "maktaba" },
    ],
  },
  {
    id: "emotions",
    emoji: "😊",
    title: "Emotions",
    level: "Beginner",
    items: [
      { id: "1", arabic: "سعيد", english: "Happy", pronunciation: "sa'eed" },
      { id: "2", arabic: "حزين", english: "Sad", pronunciation: "hazeen" },
      { id: "3", arabic: "غاضب", english: "Angry", pronunciation: "ghadib" },
      { id: "4", arabic: "خائف", english: "Scared", pronunciation: "kha'if" },
      { id: "5", arabic: "متحمس", english: "Excited", pronunciation: "mutahammis" },
      { id: "6", arabic: "متعب", english: "Tired", pronunciation: "mut'ab" },
      { id: "7", arabic: "مرتاح", english: "Comfortable", pronunciation: "murtah" },
      { id: "8", arabic: "قلق", english: "Worried", pronunciation: "qaliq" },
    ],
  },
  {
    id: "verbs",
    emoji: "📖",
    title: "Common Verbs",
    level: "Beginner",
    items: [
      { id: "1", arabic: "أكل", english: "To eat", pronunciation: "akala" },
      { id: "2", arabic: "شرب", english: "To drink", pronunciation: "shariba" },
      { id: "3", arabic: "نام", english: "To sleep", pronunciation: "naama" },
      { id: "4", arabic: "ذهب", english: "To go", pronunciation: "thahaba" },
      { id: "5", arabic: "جاء", english: "To come", pronunciation: "jaa'a" },
      { id: "6", arabic: "كتب", english: "To write", pronunciation: "kataba" },
      { id: "7", arabic: "قرأ", english: "To read", pronunciation: "qara'a" },
      { id: "8", arabic: "تكلم", english: "To speak", pronunciation: "takallama" },
    ],
  },
  {
    id: "days",
    emoji: "📅",
    title: "Days of Week",
    level: "Beginner",
    items: [
      { id: "1", arabic: "الأحد", english: "Sunday", pronunciation: "al-ahad" },
      { id: "2", arabic: "الاثنين", english: "Monday", pronunciation: "al-ithnayn" },
      { id: "3", arabic: "الثلاثاء", english: "Tuesday", pronunciation: "ath-thulathaa" },
      { id: "4", arabic: "الأربعاء", english: "Wednesday", pronunciation: "al-arbi'aa" },
      { id: "5", arabic: "الخميس", english: "Thursday", pronunciation: "al-khamees" },
      { id: "6", arabic: "الجمعة", english: "Friday", pronunciation: "al-jumu'a" },
      { id: "7", arabic: "السبت", english: "Saturday", pronunciation: "as-sabt" },
    ],
  },
  {
    id: "numbers",
    emoji: "🔢",
    title: "Numbers",
    level: "Beginner",
    items: [
      { id: "1", arabic: "واحد", english: "One", pronunciation: "wahid" },
      { id: "2", arabic: "اثنان", english: "Two", pronunciation: "ithnan" },
      { id: "3", arabic: "ثلاثة", english: "Three", pronunciation: "thalatha" },
      { id: "4", arabic: "أربعة", english: "Four", pronunciation: "arba'a" },
      { id: "5", arabic: "خمسة", english: "Five", pronunciation: "khamsa" },
      { id: "6", arabic: "ستة", english: "Six", pronunciation: "sitta" },
      { id: "7", arabic: "سبعة", english: "Seven", pronunciation: "sab'a" },
      { id: "8", arabic: "ثمانية", english: "Eight", pronunciation: "thamaniya" },
      { id: "9", arabic: "تسعة", english: "Nine", pronunciation: "tis'a" },
      { id: "10", arabic: "عشرة", english: "Ten", pronunciation: "ashara" },
    ],
  },
];
