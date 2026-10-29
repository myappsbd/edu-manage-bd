// config.js
const COACHING_CONFIG = {
    // ==========================================
    // 🔑 Firebase Credentials (ক্লায়েন্ট এখানে তার কোড বসাবে)
    // ==========================================
    firebaseConfig: {
        apiKey: "AIzaSyDuhL55eQgHperMDB5Txv_qtF36L9fqRXU",
        authDomain: "coaching-center-manageme-4a0e7.firebaseapp.com",
        projectId: "coaching-center-manageme-4a0e7",
        storageBucket: "coaching-center-manageme-4a0e7.firebasestorage.app",
        messagingSenderId: "280350316094",
        appId: "1:280350316094:web:f29da5659be5f28010e36f"
    },

    // ----- ব্র্যান্ডিং ও পরিচিতি -----
    siteName:        "EduManage",
    siteShortName:   "EduManage",
    logoUrl:         "https://i.postimg.cc/vmTmfG7c/Edu-Manage-Academy-Logo.png",
    logoRightUrl:    "",
    heroBackground:  "",
    tagline:         "Manage Your Academy Digitally",
    founderLine:     "Your Complete Coaching Management Solution",
// ----- স্টুডেন্ট পোর্টাল নিরাপত্তা -----
    enableStudentPin: true, // true দিলে পিন লাগবে, false দিলে শুধু মোবাইল নম্বরে লগইন হবে
    // ----- পেমেন্ট ও যোগাযোগের তথ্য -----
    bkashNumber:     "017xxxxxxxx",
    nagadNumber:     "017xxxxxxxx",
    contactNumbers:  ["+8801712345678"],
    whatsappNumber:  "+8801712345678",

    // ----- কোর্স ও ফি কনফিগারেশন -----
    courseDurationMonths: 12,
    defaultSeatLimit:     50,
    defaultAdmissionFee:  1000,
    defaultMonthlyFee:    800,

    // ----- প্যাকেজসমূহ -----
    packages: {
        single_male:   { label: "রেগুলার (ছাত্র)",   value: "একক পুরুষ",   price: 800 },
        single_female: { label: "রেগুলার (ছাত্রী)",   value: "একক মহিলা",   price: 800 }
    },

    // ----- ফুটার টেক্সট -----
    footerText:      "EduManage - Manage Your Academy Digitally",
    footerCopyright: "© ২০২৬ EduManage। All Rights Reserved.",

    // ----- বিষয়সমূহ -----
    subjects: "গণিত, ইংরেজি, বিজ্ঞান ও আইসিটি",
};

window.COACHING_CONFIG = COACHING_CONFIG;