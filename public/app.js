// EMIS School Management System - Core Frontend logic & i18n Engine

// Translation Dictionary for English, Sinhala and Tamil
const TRANSLATIONS = {
    en: {
        title: "EMIS Portal",
        subtitle: "Education Management Information System",
        welcomeTitle: "School Management System",
        welcomeSubtitle: "Select your role below to manage classes, students, marks, discipline, or view academic report cards.",
        rolePrincipal: "Principal / Admin",
        roleTeacher: "Teacher Portal",
        roleStudent: "Student Search",
        descPrincipal: "Create classes, register teachers, and view overall school analytics.",
        descTeacher: "Add new students, enter test marks, and record student conduct logs.",
        descStudent: "View report cards, grades, term averages, and discipline history.",
        principalBadge: "Principal View",
        teacherBadge: "Teacher View",
        studentBadge: "Student View",
        logout: "Switch Role",
        
        // Principal Sidebar
        pDashboard: "Dashboard",
        pClasses: "Manage Classes",
        pAllStudents: "All Students",
        pStats: "School Statistics",
        pAddClassTitle: "Add New Class",
        pClassNameLabel: "Class Name (e.g. Grade 10-A, Grade 12-Science)",
        pClassListTitle: "Existing Classes",
        pClassId: "Class ID",
        pClassName: "Class Name",
        pTotalClasses: "Total Classes",
        pTotalStudents: "Total Students",
        pDisciplineLogs: "Discipline Logs",
        
        // Teacher Sidebar & Tabs
        tSelectProfile: "Select Teacher Profile",
        tDashboard: "Overview",
        tAddStudent: "Add Student",
        tEnterMarks: "Enter Marks",
        tLogDiscipline: "Record Discipline",
        tAddStudentTitle: "Register New Student",
        tAdmissionNo: "Admission Number (Unique)",
        tFullName: "Full Name",
        tSelectClass: "Select Class",
        tEnterMarksTitle: "Enter Academic Marks",
        tSelectTerm: "Select Term",
        tTerm1: "Term 1",
        tTerm2: "Term 2",
        tTerm3: "Term 3",
        tSelectSubject: "Select Subject",
        tMaths: "Mathematics",
        tScience: "Science",
        tEnglish: "English",
        tHistory: "History",
        tScoreLabel: "Score (0 - 100)",
        tLogDisciplineTitle: "Record Discipline / Merit Log",
        tCategory: "Category",
        tCategoryMerit: "Merit / Good Conduct",
        tCategoryWarning: "Warning / Misconduct",
        tCategoryLate: "Late Attendance",
        tCategoryUniform: "Uniform Issue",
        tDescription: "Incident Description",
        tActionTaken: "Action Taken",
        tStudentListTitle: "Students in your selected class",
        
        // Student Search Portal
        sPortalTitle: "Student Report Portal",
        sPortalSubtitle: "Enter your admission details below to check your term report card & conduct timeline.",
        sSearchBtn: "View Report",
        sNotFound: "No student found with the given admission number in this class.",
        sReportTitle: "Academic Performance Card",
        sTermResults: "Term-wise Performance",
        sAverage: "Average Score",
        sTotalMarks: "Total Marks",
        sNoMarks: "No marks recorded for this term yet.",
        sDisciplineTitle: "Conduct & Discipline Timeline",
        sNoDiscipline: "No discipline records logged. Exemplary behavior!",
        sSubject: "Subject",
        sScore: "Score",
        sGrade: "Grade",
        sDate: "Date",
        sAction: "Action",
        
        // Global
        submit: "Submit Record",
        loading: "Loading data...",
        successClassAdded: "Class created successfully!",
        successStudentAdded: "Student registered successfully!",
        successMarkSaved: "Academic mark saved successfully!",
        successDisciplineSaved: "Discipline record logged successfully!",
        errEmpty: "All fields are required.",
        errInvalidScore: "Score must be an integer between 0 and 100.",
        errDuplicateClass: "A class with this name already exists.",
        errDuplicateStudent: "A student with this admission number already exists.",
        errGeneric: "An error occurred. Please try again.",
        pManageTeachers: "Manage Teachers",
        pAddTeacherTitle: "Register New Teacher",
        tUsernameLabel: "Username / ID",
        tPasswordLabel: "Password",
        loginTitle: "Login",
        loginSubtitle: "Please enter your credentials to access the portal.",
        loginBtn: "Log In",
        back: "Back",
        pTeacherListTitle: "Registered Teachers",
        successTeacherAdded: "Teacher registered successfully!",
        errInvalidCredentials: "Invalid username or password."
    },
    si: {
        title: "EMIS ද්වාරය",
        subtitle: "අධ්‍යාපන කළමනාකරණ තොරතුරු පද්ධතිය",
        welcomeTitle: "පාසල් කළමනාකරණ පද්ධතිය",
        welcomeSubtitle: "පන්ති, සිසුන්, ලකුණු, විනය පාලනය කිරීමට හෝ අධ්‍යයන වාර්තා බැලීමට ඔබේ භූමිකාව තෝරන්න.",
        rolePrincipal: "විදුහල්පති / පරිපාලක",
        roleTeacher: "ගුරු ද්වාරය",
        roleStudent: "ශිෂ්‍ය සොයාගැනීම",
        descPrincipal: "පන්ති සාදන්න, ගුරුවරුන් ලියාපදිංචි කරන්න, සහ පාසල් විශ්ලේෂණ බලන්න.",
        descTeacher: "නව සිසුන් ඇතුළත් කරන්න, විභාග ලකුණු සහ සිසුන්ගේ විනය වාර්තා ඇතුළත් කරන්න.",
        descStudent: "ලකුණු වාර්තා, ශ්‍රේණි, වාර සාමාන්‍යයන් සහ විනය ඉතිහාසය බලන්න.",
        principalBadge: "විදුහල්පති දර්ශනය",
        teacherBadge: "ගුරු දර්ශනය",
        studentBadge: "ශිෂ්‍ය දර්ශනය",
        logout: "භූමිකාව මාරු කරන්න",
        
        // Principal Sidebar
        pDashboard: "පාලන පුවරුව",
        pClasses: "පන්ති කළමනාකරණය",
        pAllStudents: "සියලුම සිසුන්",
        pStats: "පාසල් සංඛ්‍යාලේඛන",
        pAddClassTitle: "නව පන්තියක් එක් කරන්න",
        pClassNameLabel: "පන්තියේ නම (උදා: 10-A ශ්‍රේණිය, 12-විද්‍යා ශ්‍රේණිය)",
        pClassListTitle: "පවතින පන්ති",
        pClassId: "පන්ති හැඳුනුම්පත",
        pClassName: "පන්තියේ නම",
        pTotalClasses: "මුළු පන්ති",
        pTotalStudents: "මුළු සිසුන්",
        pDisciplineLogs: "විනය වාර්තා",
        
        // Teacher Sidebar & Tabs
        tSelectProfile: "ගුරු පැතිකඩ තෝරන්න",
        tDashboard: "දළ විශ්ලේෂණය",
        tAddStudent: "ශිෂ්‍යයෙකු එක් කරන්න",
        tEnterMarks: "ලකුණු දාන්න",
        tLogDiscipline: "විනය වාර්තා කරන්න",
        tAddStudentTitle: "නව ශිෂ්‍යයෙකු ලියාපදිංචි කිරීම",
        tAdmissionNo: "ඇතුළත් කිරීමේ අංකය (අද්විතීය)",
        tFullName: "සම්පූර්ණ නම",
        tSelectClass: "පන්තිය තෝරන්න",
        tEnterMarksTitle: "විභාග ලකුණු ඇතුළත් කිරීම",
        tSelectTerm: "වාරය තෝරන්න",
        tTerm1: "1 වන වාරය",
        tTerm2: "2 වන වාරය",
        tTerm3: "3 වන වාරය",
        tSelectSubject: "විෂය තෝරන්න",
        tMaths: "ගණිතය",
        tScience: "විද්‍යාව",
        tEnglish: "ඉංග්‍රීසි",
        tHistory: "ඉතිහාසය",
        tScoreLabel: "ලකුණු (0 - 100)",
        tLogDisciplineTitle: "විනය / කුසලතා වාර්තාවක් ඇතුළත් කරන්න",
        tCategory: "වර්ගය",
        tCategoryMerit: "කුසලතා / යහපත් හැසිරීම්",
        tCategoryWarning: "අවවාද / අයහපත් හැසිරීම්",
        tCategoryLate: "ප්‍රමාද වී පැමිණීම",
        tCategoryUniform: "නිල ඇඳුම් ගැටලුවක්",
        tDescription: "සිද්ධිය පිළිබඳ විස්තරය",
        tActionTaken: "ගත් පියවර",
        tStudentListTitle: "තෝරාගත් පන්තියේ සිසුන්",
        
        // Student Search Portal
        sPortalTitle: "ශිෂ්‍ය ප්‍රතිඵල ද්වාරය",
        sPortalSubtitle: "වාර ලකුණු පත්‍රිකාව සහ හැසිරීම් කාලසටහන බැලීමට ඔබේ ඇතුළත් කිරීමේ අංකය සහ පන්තිය ඇතුළත් කරන්න.",
        sSearchBtn: "වාර්තාව බලන්න",
        sNotFound: "මෙම පන්තියේ දී ඇති ඇතුළත් කිරීමේ අංකය සහිත ශිෂ්‍යයෙකු සොයාගත නොහැක.",
        sReportTitle: "අධ්‍යයන ප්‍රගති පත්‍රිකාව",
        sTermResults: "වාරය අනුව ප්‍රගතිය",
        sAverage: "ලකුණු සාමාන්‍යය",
        sTotalMarks: "මුළු ලකුණු",
        sNoMarks: "මෙම වාරය සඳහා තවමත් ලකුණු ඇතුළත් කර නොමැත.",
        sDisciplineTitle: "හැසිරීම් සහ විනය ඉතිහාසය",
        sNoDiscipline: "කිසිදු විනය වාර්තාවක් නොමැත. යහපත් හැසිරීම්!",
        sSubject: "විෂය",
        sScore: "ලකුණු",
        sGrade: "ශ්‍රේණිය",
        sDate: "දිනය",
        sAction: "පියවර",
        
        // Global
        submit: "දත්ත ඇතුළත් කරන්න",
        loading: "දත්ත පූරණය වෙමින් පවතී...",
        successClassAdded: "පන්තිය සාර්ථකව සාදන ලදී!",
        successStudentAdded: "ශිෂ්‍යයා සාර්ථකව ලියාපදිංචි කරන ලදී!",
        successMarkSaved: "ලකුණු සාර්ථකව සුරකින ලදී!",
        successDisciplineSaved: "විනය වාර්තාව සාර්ථකව ඇතුළත් කරන ලදී!",
        errEmpty: "සියලුම ක්ෂේත්‍ර පිරවීම අනිවාර්ය වේ.",
        errInvalidScore: "ලකුණු 0 ත් 100 ත් අතර පූර්ණ සංඛ්‍යාවක් විය යුතුය.",
        errDuplicateClass: "මෙම නමින් පන්තියක් දැනටමත් පවතී.",
        errDuplicateStudent: "මෙම ඇතුළත් වීමේ අංකයෙන් ශිෂ්‍යයෙකු දැනටමත් ලියාපදිංචි කර ඇත.",
        errGeneric: "දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න.",
        pManageTeachers: "ගුරුවරුන් කළමනාකරණය",
        pAddTeacherTitle: "නව ගුරුවරයෙකු ලියාපදිංචි කිරීම",
        tUsernameLabel: "පරිශීලක නාමය / හැඳුනුම්පත",
        tPasswordLabel: "මුරපදය",
        loginTitle: "ඇතුල් වන්න",
        loginSubtitle: "ද්වාරයට පිවිසීමට කරුණාකර ඔබගේ පරිශීලක නාමය සහ මුරපදය ඇතුළත් කරන්න.",
        loginBtn: "ඇතුල් වන්න",
        back: "ආපසු",
        pTeacherListTitle: "ලියාපදිංචි ගුරුවරුන්",
        successTeacherAdded: "ගුරුවරයා සාර්ථකව ලියාපදිංචි කරන ලදී!",
        errInvalidCredentials: "වැරදි පරිශීලක නාමයක් හෝ මුරපදයක්."
    },
    ta: {
        title: "ஈ.எம்.ஐ.எஸ் தளம்",
        subtitle: "கல்வி மேலாண்மை தகவல் அமைப்பு",
        welcomeTitle: "பள்ளி மேலாண்மை முறைமை",
        welcomeSubtitle: "வகுப்புகள், மாணவர்கள், மதிப்பெண்கள், ஒழுக்கங்களை நிர்வகிக்க அல்லது கல்வி அறிக்கைகளைப் பார்க்க உங்கள் பாத்திரத்தைத் தேர்வுசெய்யவும்.",
        rolePrincipal: "அதிபர் / நிர்வாகி",
        roleTeacher: "ஆசிரியர் தளம்",
        roleStudent: "மாணவர் தேடல்",
        descPrincipal: "வகுப்புகளை உருவாக்கவும், ஆசிரியர்களைப் பதிவு செய்யவும், பள்ளிப் புள்ளிவிவரங்களைப் பார்க்கவும்.",
        descTeacher: "புதிய மாணவர்களைச் சேர்க்கவும், தேர்வு மதிப்பெண்களை உள்ளிடவும், ஒழுக்கப் பதிவுகளைச் சேர்க்கவும்.",
        descStudent: "மதிப்பெண் அட்டைகள், தரங்கள், தவணை சராசரிகள் மற்றும் ஒழுக்க வரலாற்றைப் பார்க்கவும்.",
        principalBadge: "அதிபர் காட்சி",
        teacherBadge: "ஆசிரியர் காட்சி",
        studentBadge: "மாணவர் காட்சி",
        logout: "பயனரை மாற்றுக",
        
        // Principal Sidebar
        pDashboard: "டாஷ்போர்டு",
        pClasses: "வகுப்பு மேலாண்மை",
        pAllStudents: "அனைத்து மாணவர்கள்",
        pStats: "பள்ளி புள்ளிவிவரங்கள்",
        pAddClassTitle: "புதிய வகுப்பைச் சேர்",
        pClassNameLabel: "வகுப்பின் பெயர் (எ.கா. தரம் 10-A, தரம் 12-அறிவியல்)",
        pClassListTitle: "தற்போதுள்ள வகுப்புகள்",
        pClassId: "வகுப்பு ஐடி",
        pClassName: "வகுப்பு பெயர்",
        pTotalClasses: "மொத்த வகுப்புகள்",
        pTotalStudents: "மொத்த மாணவர்கள்",
        pDisciplineLogs: "ஒழுக்கப் பதிவுகள்",
        
        // Teacher Sidebar & Tabs
        tSelectProfile: "ஆசிரியர் சுயவிவரத்தைத் தேர்ந்தெடுக்கவும்",
        tDashboard: "கண்ணோட்டம்",
        tAddStudent: "மாணவரைச் சேர்",
        tEnterMarks: "மதிப்பெண் உள்ளீடு",
        tLogDiscipline: "ஒழுக்கப் பதிவு செய்க",
        tAddStudentTitle: "புதிய மாணவர் பதிவு",
        tAdmissionNo: "சேர்க்கை எண் (தனித்துவமானது)",
        tFullName: "முழு பெயர்",
        tSelectClass: "வகுப்பைத் தெரிவுசெய்",
        tEnterMarksTitle: "தேர்வு மதிப்பெண்களை உள்ளிடவும்",
        tSelectTerm: "தவணையைத் தேர்ந்தெடுக்கவும்",
        tTerm1: "தவணை 1",
        tTerm2: "தவணை 2",
        tTerm3: "தவணை 3",
        tSelectSubject: "பாடத்தைத் தேர்ந்தெடுக்கவும்",
        tMaths: "கணிதம்",
        tScience: "அறிவியல்",
        tEnglish: "ஆங்கிலம்",
        tHistory: "வரலாறு",
        tScoreLabel: "மதிப்பெண் (0 - 100)",
        tLogDisciplineTitle: "ஒழுக்கம் / நற்மதிப்புப் பதிவை உள்ளிடவும்",
        tCategory: "வகை",
        tCategoryMerit: "நற்மதிப்பு / நன்னடத்தை",
        tCategoryWarning: "எச்சரிக்கை / ஒழுக்கக்கேடு",
        tCategoryLate: "தாமத வருகை",
        tCategoryUniform: "சீருடைப் பிரச்சனை",
        tDescription: "சம்பவத்தின் விளக்கம்",
        tActionTaken: "எடுக்கப்பட்ட நடவடிக்கை",
        tStudentListTitle: "தேர்ந்தெடுக்கப்பட்ட வகுப்பிலுள்ள மாணவர்கள்",
        
        // Student Search Portal
        sPortalTitle: "மாணவர் முடிவுத் தளம்",
        sPortalSubtitle: "உங்கள் தவணை மதிப்பெண் அட்டை மற்றும் ஒழுக்க வரலாற்றைச் சரிபார்க்க சேர்க்கை எண் மற்றும் வகுப்பை உள்ளிடவும்.",
        sSearchBtn: "அறிக்கையைப் பார்",
        sNotFound: "இந்த வகுப்பில் கொடுக்கப்பட்ட சேர்க்கை எண்ணுடன் மாணவர் எவரும் காணப்படவில்லை.",
        sReportTitle: "கல்வி செயல்திறன் அட்டை",
        sTermResults: "தவணை வாரியான செயல்திறன்",
        sAverage: "சராசரி புள்ளி",
        sTotalMarks: "மொத்த மதிப்பெண்கள்",
        sNoMarks: "இந்தத் தவணைக்கான மதிப்பெண்கள் இன்னும் பதிவு செய்யப்படவில்லை.",
        sDisciplineTitle: "நடத்தை மற்றும் ஒழுக்க காலவரிசை",
        sNoDiscipline: "ஒழுக்கப் பதிவுகள் எதுவும் இல்லை. சிறந்த நடத்தை!",
        sSubject: "பாடம்",
        sScore: "மதிப்பெண்",
        sGrade: "தரம்",
        sDate: "தேதி",
        sAction: "நடவடிக்கை",
        
        // Global
        submit: "பதிவைச் சமர்ப்பி",
        loading: "தரவு ஏற்றப்படுகிறது...",
        successClassAdded: "வகுப்பு வெற்றிகரமாக உருவாக்கப்பட்டது!",
        successStudentAdded: "மாணவர் வெற்றிகரமாகப் பதிவு செய்யப்பட்டார்!",
        successMarkSaved: "மதிப்பெண் வெற்றிகரமாகச் சேமிக்கப்பட்டது!",
        successDisciplineSaved: "ஒழுக்கப் பதிவு வெற்றிகரமாகப் பதிவு செய்யப்பட்டது!",
        errEmpty: "அனைத்து புலங்களும் நிரப்பப்பட வேண்டும்.",
        errInvalidScore: "மதிப்பெண் 0 முதல் 100 வரையிலான முழு எண்ணாக இருக்க வேண்டும்.",
        errDuplicateClass: "இந்த பெயரில் ஒரு வகுப்பு ஏற்கனவே உள்ளது.",
        errDuplicateStudent: "இந்த சேர்க்கை எண்ணுடன் ஒரு மாணவர் ஏற்கனவே உள்ளார்.",
        errGeneric: "ஒரு பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.",
        pManageTeachers: "ஆசிரியர்களை நிர்வகி",
        pAddTeacherTitle: "புதிய ஆசிரியரை பதிவு செய்க",
        tUsernameLabel: "பயனர் பெயர் / ஐடி",
        tPasswordLabel: "கடவுச்சொல்",
        loginTitle: "உள்நுழைவு",
        loginSubtitle: "போர்ட்டலை அணுக உங்கள் சான்றுகளை உள்ளிடவும்.",
        loginBtn: "உள்நுழைக",
        back: "பின்னால்",
        pTeacherListTitle: "பதிவு செய்யப்பட்ட ஆசிரியர்கள்",
        successTeacherAdded: "ஆசிரியர் வெற்றிகரமாக பதிவு செய்யப்பட்டார்!",
        errInvalidCredentials: "தவறான பயனர்பெயர் அல்லது கடவுச்சொல்."
    }
};

// Application State
let state = {
    currentLang: localStorage.getItem('emis_lang') || 'en',
    currentRole: null, // 'principal', 'teacher', 'student'
    pendingRole: null, // role waiting for authentication
    currentUser: null, // logged-in user profile
    activeTab: 'dashboard', // dependent on role
    classes: [],
    students: [],
    teachers: [],
    selectedTeacherId: '',
    selectedClassId: '' // For Teacher Class filter
};

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Initialize translation elements
    updateLanguage(state.currentLang);
    
    // 2. Fetch classes initially and seed mock data if D1 is empty
    await initializeData();

    // 3. Register Event Listeners
    registerEvents();
    
    // 4. Set Initial UI
    showScreen('welcome-screen');
});

// Seed DB and Fetch Classes
async function initializeData() {
    try {
        // Trigger D1 seeder if empty
        const initRes = await fetch('/api/init');
        const initData = await initRes.json();
        console.log("Database Init Response:", initData);
    } catch (e) {
        console.warn("Failed to contact database seeder API. Falling back to default static state query.", e);
    }
    
    // Fetch classes list
    await reloadClasses();
    // Fetch teachers list
    await reloadTeachers();
}

async function reloadTeachers() {
    try {
        const res = await fetch('/api/teachers');
        if (res.ok) {
            state.teachers = await res.json();
            renderTeachersTable();
            renderTeacherProfileSelection();
        }
    } catch (e) {
        console.error("Failed to load teachers from D1 database:", e);
    }
}

async function reloadClasses() {
    try {
        const res = await fetch('/api/classes');
        if (res.ok) {
            state.classes = await res.json();
            renderClassesDropdowns();
            renderClassesTable();
        }
    } catch (e) {
        console.error("Failed to load classes from D1 database:", e);
    }
}

// Translate dynamic elements
function t(key) {
    return TRANSLATIONS[state.currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function updateLanguage(lang) {
    state.currentLang = lang;
    localStorage.setItem('emis_lang', lang);
    
    // Update active class on buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Translate statically tagged HTML elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t(key);
        } else {
            el.textContent = t(key);
        }
    });

    // Update dynamically rendered screens
    if (state.currentRole === 'principal') {
        renderPrincipalStats();
        renderClassesTable();
        renderTeachersTable();
    } else if (state.currentRole === 'teacher') {
        renderTeacherView();
    }
}

// Screen Routing
function showScreen(screenId) {
    document.querySelectorAll(".app-screen").forEach(screen => {
        screen.classList.add("hidden");
    });
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove("hidden");
        target.classList.add("animate-fade-in");
    }

    // Adjust global role header badge
    const badge = document.getElementById("header-role-badge");
    if (state.currentRole === 'principal') {
        badge.textContent = t('principalBadge');
        badge.classList.remove("hidden");
    } else if (state.currentRole === 'teacher') {
        badge.textContent = t('teacherBadge');
        badge.classList.remove("hidden");
    } else if (state.currentRole === 'student') {
        badge.textContent = t('studentBadge');
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

// Global Event Handlers
function registerEvents() {
    // Language Switchers
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            updateLanguage(btn.dataset.lang);
        });
    });

    // Welcome Screen Role Cards
    document.getElementById("btn-role-principal").addEventListener("click", () => {
        state.pendingRole = 'principal';
        document.getElementById("login-username-input").value = 'admin';
        document.getElementById("login-username-input").readOnly = true;
        document.getElementById("login-password-input").value = '';
        showScreen('login-screen');
    });

    document.getElementById("btn-role-teacher").addEventListener("click", () => {
        state.pendingRole = 'teacher';
        document.getElementById("login-username-input").value = '';
        document.getElementById("login-username-input").readOnly = false;
        document.getElementById("login-password-input").value = '';
        showScreen('login-screen');
    });

    document.getElementById("btn-role-student").addEventListener("click", () => {
        state.currentRole = 'student';
        showScreen('student-portal');
        resetStudentPortal();
    });

    // Login Submission
    document.getElementById("login-form").addEventListener("submit", handleLoginSubmit);

    // Login Back Button
    document.getElementById("login-back-btn").addEventListener("click", () => {
        state.pendingRole = null;
        showScreen('welcome-screen');
    });

    // Logouts
    document.querySelectorAll(".logout-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            state.currentRole = null;
            state.currentUser = null;
            showScreen('welcome-screen');
        });
    });

    // Principal Navigation
    document.getElementById("p-nav-dash").addEventListener("click", () => switchPrincipalTab('dashboard'));
    document.getElementById("p-nav-classes").addEventListener("click", () => switchPrincipalTab('classes'));
    document.getElementById("p-nav-students").addEventListener("click", () => switchPrincipalTab('students'));
    document.getElementById("p-nav-teachers").addEventListener("click", () => switchPrincipalTab('teachers'));

    // Principal Form Submit
    document.getElementById("add-class-form").addEventListener("submit", handleAddClass);
    document.getElementById("add-teacher-form").addEventListener("submit", handleAddTeacher);

    // Teacher Tab Navigation
    document.getElementById("t-tab-overview").addEventListener("click", () => switchTeacherTab('overview'));
    document.getElementById("t-tab-student").addEventListener("click", () => switchTeacherTab('student'));
    document.getElementById("t-tab-marks").addEventListener("click", () => switchTeacherTab('marks'));
    document.getElementById("t-tab-discipline").addEventListener("click", () => switchTeacherTab('discipline'));

    // Teacher forms
    document.getElementById("teacher-class-select").addEventListener("change", (e) => {
        state.selectedClassId = e.target.value;
        renderTeacherStudentTable();
        updateTeacherStudentDropdowns();
    });
    
    document.getElementById("add-student-form").addEventListener("submit", handleAddStudent);
    document.getElementById("add-marks-form").addEventListener("submit", handleAddMark);
    document.getElementById("add-discipline-form").addEventListener("submit", handleAddDiscipline);

    // Student Lookup Portal Form
    document.getElementById("student-search-form").addEventListener("submit", handleStudentSearch);
}

// --- PRINCIPAL ACTIONS ---

function switchPrincipalTab(tab) {
    state.activeTab = tab;
    
    // Toggle side buttons active styling
    document.getElementById("p-nav-dash").classList.toggle("active", tab === 'dashboard');
    document.getElementById("p-nav-classes").classList.toggle("active", tab === 'classes');
    document.getElementById("p-nav-students").classList.toggle("active", tab === 'students');
    document.getElementById("p-nav-teachers").classList.toggle("active", tab === 'teachers');
 
    // Show content container
    document.getElementById("p-content-dash").classList.toggle("hidden", tab !== 'dashboard');
    document.getElementById("p-content-classes").classList.toggle("hidden", tab !== 'classes');
    document.getElementById("p-content-students").classList.toggle("hidden", tab !== 'students');
    document.getElementById("p-content-teachers").classList.toggle("hidden", tab !== 'teachers');
 
    if (tab === 'dashboard') {
        renderPrincipalStats();
    } else if (tab === 'classes') {
        renderClassesTable();
    } else if (tab === 'students') {
        renderPrincipalAllStudents();
    } else if (tab === 'teachers') {
        renderTeachersTable();
    }
}

async function renderPrincipalStats() {
    try {
        const classesCount = state.classes.length;
        
        // Fetch students and discipline logs to show overall statistics
        const studentsRes = await fetch('/api/students');
        const students = studentsRes.ok ? await studentsRes.json() : [];
        
        // We aggregate total discipline cases by fetching discipline for all students or querying D1.
        // Let's count discipline items by querying D1 via an aggregation or sum up local records.
        // For simplicity, we can fetch all students and their discipline logs, or just display a beautiful counter.
        // Let's query total discipline records count.
        // Since we don't have a direct "stats" API, we can calculate stats using students counts.
        // Let's count total students
        document.getElementById("stat-classes-count").textContent = classesCount;
        document.getElementById("stat-students-count").textContent = students.length;
        
        // We will query all discipline reports. Let's make an endpoint check or just query students.
        // Let's count discipline logs in students.
        // Let's fetch classes and students
        let disciplineCount = 0;
        for (const s of students) {
            const dRes = await fetch(`/api/discipline?admissionNo=${s.admissionNo}`);
            if (dRes.ok) {
                const logs = await dRes.json();
                disciplineCount += logs.length;
            }
        }
        document.getElementById("stat-discipline-count").textContent = disciplineCount;
    } catch (e) {
        console.error("Error loading Principal statistics:", e);
    }
}

async function handleAddClass(e) {
    e.preventDefault();
    const nameInput = document.getElementById("class-name-input");
    const name = nameInput.value.trim();

    if (!name) {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    try {
        const res = await fetch('/api/classes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        const data = await res.json();

        if (res.ok) {
            showAlert(t('successClassAdded'), 'success');
            nameInput.value = '';
            await reloadClasses();
        } else {
            showAlert(t(data.error) || t('errGeneric'), 'error');
        }
    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}

async function handleLoginSubmit(e) {
    e.preventDefault();
    const usernameInput = document.getElementById("login-username-input");
    const passwordInput = document.getElementById("login-password-input");
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const role = state.pendingRole;

    if (!username || !password) {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    try {
        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role, username, password })
        });
        const data = await res.json();

        if (res.ok && data.success) {
            state.currentRole = role;
            state.currentUser = data.user;
            
            if (role === 'principal') {
                showScreen('principal-dashboard');
                switchPrincipalTab('dashboard');
                renderPrincipalStats();
            } else if (role === 'teacher') {
                state.selectedTeacherId = data.user.username;
                showScreen('teacher-dashboard');
                
                // Set teacher current subject in DOM badge
                const subjectBadge = document.getElementById("teacher-current-subject");
                if (subjectBadge) {
                    subjectBadge.textContent = t('t' + data.user.subject) || data.user.subject;
                }
                
                // Auto-fill subject select in Enter Marks form
                const subjectSelect = document.getElementById("mark-subject-select");
                if (subjectSelect) {
                    subjectSelect.value = data.user.subject;
                }
                switchTeacherTab('overview');
                renderTeacherView();
            }
            usernameInput.value = '';
            passwordInput.value = '';
            state.pendingRole = null;
        } else {
            showAlert(t('errInvalidCredentials'), 'error');
        }
    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}

async function handleAddTeacher(e) {
    e.preventDefault();
    const usernameInput = document.getElementById("teacher-username-input");
    const nameInput = document.getElementById("teacher-name-input");
    const subjectSelect = document.getElementById("teacher-subject-input");
    const passwordInput = document.getElementById("teacher-password-input");

    const username = usernameInput.value.trim().toLowerCase();
    const name = nameInput.value.trim();
    const subject = subjectSelect.value;
    const password = passwordInput.value.trim();

    if (!username || !name || !subject || !password) {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    try {
        const res = await fetch('/api/teachers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, name, subject, password })
        });
        const data = await res.json();

        if (res.ok) {
            showAlert(t('successTeacherAdded'), 'success');
            usernameInput.value = '';
            nameInput.value = '';
            passwordInput.value = '';
            await reloadTeachers();
        } else {
            showAlert(t(data.error) || t('errGeneric'), 'error');
        }
    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}
 
function renderClassesTable() {
    const tbody = document.getElementById("classes-table-body");
    tbody.innerHTML = '';

    if (state.classes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="2" style="text-align: center;">${t('loading')}</td></tr>`;
        return;
    }

    state.classes.forEach(c => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><code>${c.id}</code></td>
            <td><strong>${c.name}</strong></td>
        `;
        tbody.appendChild(row);
    });
}

function renderTeachersTable() {
    const tbody = document.getElementById("p-teachers-table-body");
    tbody.innerHTML = '';

    if (state.teachers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center;">${t('loading')}</td></tr>`;
        return;
    }

    state.teachers.forEach(t => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><code>${t.id}</code></td>
            <td><strong>${t.name}</strong></td>
            <td><span class="role-badge" style="background: hsl(38, 95%, 95%); color: var(--secondary); border-color: rgba(255, 190, 0, 0.25);">${t.subject}</span></td>
        `;
        tbody.appendChild(row);
    });
}

async function renderPrincipalAllStudents() {
    const tbody = document.getElementById("p-students-table-body");
    tbody.innerHTML = `<tr><td colspan="3" style="text-align: center;">${t('loading')}</td></tr>`;

    try {
        const res = await fetch('/api/students');
        if (!res.ok) throw new Error();
        const students = await res.json();

        tbody.innerHTML = '';
        if (students.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" style="text-align: center;">No students registered.</td></tr>`;
            return;
        }

        students.forEach(s => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><strong>${s.admissionNo}</strong></td>
                <td>${s.name}</td>
                <td><span class="role-badge">${s.className || 'Unknown Class'}</span></td>
            `;
            tbody.appendChild(row);
        });
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--danger);">${t('errGeneric')}</td></tr>`;
    }
}

// --- TEACHER ACTIONS ---

function renderTeacherProfileSelection() {
    const container = document.getElementById("teacher-profiles");
    container.innerHTML = '';
    
    const loggedInTeacher = state.teachers.find(t => t.id === state.selectedTeacherId);
    if (loggedInTeacher) {
        const card = document.createElement("div");
        card.className = `teacher-profile-card selected`;
        card.innerHTML = `
            <div class="teacher-name">${loggedInTeacher.name}</div>
            <div class="teacher-subject">${t('tSelectSubject')}: ${loggedInTeacher.subject}</div>
        `;
        container.appendChild(card);
    }
}

function switchTeacherTab(tab) {
    state.activeTab = tab;

    document.getElementById("t-tab-overview").classList.toggle("active", tab === 'overview');
    document.getElementById("t-tab-student").classList.toggle("active", tab === 'student');
    document.getElementById("t-tab-marks").classList.toggle("active", tab === 'marks');
    document.getElementById("t-tab-discipline").classList.toggle("active", tab === 'discipline');

    document.getElementById("t-content-overview").classList.toggle("hidden", tab !== 'overview');
    document.getElementById("t-content-student").classList.toggle("hidden", tab !== 'student');
    document.getElementById("t-content-marks").classList.toggle("hidden", tab !== 'marks');
    document.getElementById("t-content-discipline").classList.toggle("hidden", tab !== 'discipline');

    if (tab === 'overview') {
        renderTeacherStudentTable();
    }
}

function renderTeacherView() {
    // Fill subject selects based on teacher subject or static values
    const subjectSelect = document.getElementById("mark-subject-select");
    const currentTeacher = state.teachers.find(t => t.id === state.selectedTeacherId);
    if (subjectSelect && currentTeacher) {
        subjectSelect.value = currentTeacher.subject;
    }
    
    renderTeacherStudentTable();
    updateTeacherStudentDropdowns();
}

async function renderTeacherStudentTable() {
    const tbody = document.getElementById("teacher-students-tbody");
    tbody.innerHTML = '';

    if (!state.selectedClassId) {
        tbody.innerHTML = `<tr><td colspan="2" style="text-align: center; font-style: italic;">Please select a class above.</td></tr>`;
        return;
    }

    try {
        const res = await fetch(`/api/students?classId=${state.selectedClassId}`);
        if (!res.ok) throw new Error();
        const students = await res.json();

        if (students.length === 0) {
            tbody.innerHTML = `<tr><td colspan="2" style="text-align: center; font-style: italic;">No students in this class.</td></tr>`;
            return;
        }

        students.forEach(s => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><strong>${s.admissionNo}</strong></td>
                <td>${s.name}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="2" style="text-align: center; color: var(--danger);">${t('errGeneric')}</td></tr>`;
    }
}

async function updateTeacherStudentDropdowns() {
    const markStudentSelect = document.getElementById("mark-student-select");
    const discStudentSelect = document.getElementById("disc-student-select");

    markStudentSelect.innerHTML = `<option value="">-- Select Student --</option>`;
    discStudentSelect.innerHTML = `<option value="">-- Select Student --</option>`;

    if (!state.selectedClassId) return;

    try {
        const res = await fetch(`/api/students?classId=${state.selectedClassId}`);
        if (res.ok) {
            const students = await res.json();
            students.forEach(s => {
                const opt = `<option value="${s.admissionNo}">${s.name} (${s.admissionNo})</option>`;
                markStudentSelect.insertAdjacentHTML('beforeend', opt);
                discStudentSelect.insertAdjacentHTML('beforeend', opt);
            });
        }
    } catch (e) {
        console.error("Error updating student dropdowns:", e);
    }
}

// Handle Teacher Form Submissions
async function handleAddStudent(e) {
    e.preventDefault();
    const admissionInput = document.getElementById("student-admission-input");
    const nameInput = document.getElementById("student-name-input");
    const classSelect = document.getElementById("student-class-select");

    const admissionNo = admissionInput.value.trim();
    const name = nameInput.value.trim();
    const classId = classSelect.value;

    if (!admissionNo || !name || !classId) {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    try {
        const res = await fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ admissionNo, name, classId })
        });
        const data = await res.json();

        if (res.ok) {
            showAlert(t('successStudentAdded'), 'success');
            admissionInput.value = '';
            nameInput.value = '';
            
            // Refresh table and dropdowns if registered to current filtered class
            if (classId === state.selectedClassId) {
                await renderTeacherStudentTable();
                await updateTeacherStudentDropdowns();
            }
        } else {
            showAlert(t(data.error) || t('errGeneric'), 'error');
        }
    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}

async function handleAddMark(e) {
    e.preventDefault();
    const studentSelect = document.getElementById("mark-student-select");
    const termSelect = document.getElementById("mark-term-select");
    const subjectSelect = document.getElementById("mark-subject-select");
    const scoreInput = document.getElementById("mark-score-input");

    const admissionNo = studentSelect.value;
    const term = termSelect.value;
    const subject = subjectSelect.value;
    const score = scoreInput.value.trim();

    if (!admissionNo || !term || !subject || score === '') {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    const scoreVal = parseInt(score, 10);
    if (isNaN(scoreVal) || scoreVal < 0 || scoreVal > 100) {
        showAlert(t('errInvalidScore'), 'error');
        return;
    }

    try {
        const res = await fetch('/api/marks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ admissionNo, term, subject, score: scoreVal })
        });
        const data = await res.json();

        if (res.ok) {
            showAlert(t('successMarkSaved'), 'success');
            scoreInput.value = '';
        } else {
            showAlert(t(data.error) || t('errGeneric'), 'error');
        }
    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}

async function handleAddDiscipline(e) {
    e.preventDefault();
    const studentSelect = document.getElementById("disc-student-select");
    const categorySelect = document.getElementById("disc-category-select");
    const descInput = document.getElementById("disc-desc-input");
    const actionInput = document.getElementById("disc-action-input");

    const admissionNo = studentSelect.value;
    const category = categorySelect.value;
    const description = descInput.value.trim();
    const action = actionInput.value.trim();

    if (!admissionNo || !category || !description || !action) {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    try {
        const res = await fetch('/api/discipline', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ admissionNo, category, description, action })
        });
        const data = await res.json();

        if (res.ok) {
            showAlert(t('successDisciplineSaved'), 'success');
            descInput.value = '';
            actionInput.value = '';
        } else {
            showAlert(t(data.error) || t('errGeneric'), 'error');
        }
    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}

// --- STUDENT SEARCH PORTAL ---

function resetStudentPortal() {
    document.getElementById("student-search-form").reset();
    document.getElementById("student-results-wrapper").classList.add("hidden");
    document.getElementById("student-portal-search-box").classList.remove("hidden");
}

async function handleStudentSearch(e) {
    e.preventDefault();
    const classSelect = document.getElementById("search-class-select");
    const admissionInput = document.getElementById("search-admission-input");

    const classId = classSelect.value;
    const admissionNo = admissionInput.value.trim();

    if (!classId || !admissionNo) {
        showAlert(t('errEmpty'), 'error');
        return;
    }

    try {
        // 1. Fetch student info
        const studentRes = await fetch(`/api/students?admissionNo=${admissionNo}`);
        if (!studentRes.ok) {
            showAlert(t('sNotFound'), 'error');
            return;
        }

        const student = await studentRes.json();
        
        // Validate class match
        if (student.classId !== classId) {
            showAlert(t('sNotFound'), 'error');
            return;
        }

        // Show results containers
        document.getElementById("student-portal-search-box").classList.add("hidden");
        document.getElementById("student-results-wrapper").classList.remove("hidden");
        document.getElementById("student-results-wrapper").classList.add("animate-fade-in");

        // Set student metadata
        document.getElementById("res-student-name").textContent = student.name;
        document.getElementById("res-student-class").textContent = student.className;
        document.getElementById("res-student-admission").textContent = student.admissionNo;

        // Load academic reports & discipline records
        await loadStudentAcademicReport(admissionNo);
        await loadStudentDisciplineTimeline(admissionNo);

    } catch (err) {
        showAlert(t('errGeneric'), 'error');
    }
}

async function loadStudentAcademicReport(admissionNo) {
    const container = document.getElementById("term-reports-container");
    container.innerHTML = `<div style="text-align: center; padding: 2rem;">${t('loading')}</div>`;

    try {
        const res = await fetch(`/api/marks?admissionNo=${admissionNo}`);
        if (!res.ok) throw new Error();
        const marks = await res.json();

        container.innerHTML = '';

        if (marks.length === 0) {
            container.innerHTML = `<div class="term-group" style="text-align: center; color: var(--text-secondary);">${t('sNoMarks')}</div>`;
            return;
        }

        // Group marks by term
        const terms = {
            'Term 1': [],
            'Term 2': [],
            'Term 3': []
        };

        marks.forEach(m => {
            if (terms[m.term]) {
                terms[m.term].push(m);
            }
        });

        Object.keys(terms).forEach(termKey => {
            const termMarks = terms[termKey];
            if (termMarks.length === 0) return; // Skip empty terms

            let termTotal = 0;
            let count = 0;
            
            const termCard = document.createElement("div");
            termCard.className = "term-group animate-fade-in";
            
            // Build subjects mark list
            let subjectsHTML = '';
            termMarks.forEach(m => {
                termTotal += m.score;
                count++;
                
                const gradeInfo = getSriLankanGrade(m.score);
                subjectsHTML += `
                    <div class="subject-result-item">
                        <div class="subject-info">
                            <span class="subject-name">${t('t' + m.subject) || m.subject}</span>
                            <span class="subject-score">${m.score} / 100 (${gradeInfo.grade})</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill ${gradeInfo.class}" style="width: ${m.score}%"></div>
                        </div>
                    </div>
                `;
            });

            const avg = Math.round(termTotal / count);

            termCard.innerHTML = `
                <div class="term-title">${t('t' + termKey.replace(' ', '')) || termKey}</div>
                <div class="term-subjects-list">
                    ${subjectsHTML}
                </div>
                <div class="term-summary-stats">
                    <div>
                        <div class="summary-stat-label">${t('sTotalMarks')}</div>
                        <div class="summary-stat-val">${termTotal}</div>
                    </div>
                    <div>
                        <div class="summary-stat-label">${t('sAverage')}</div>
                        <div class="summary-stat-val">${avg}%</div>
                    </div>
                    <div>
                        <div class="summary-stat-label">${t('sGrade')}</div>
                        <div class="summary-stat-val" style="color: ${getSriLankanGrade(avg).color};">${getSriLankanGrade(avg).grade}</div>
                    </div>
                </div>
            `;
            container.appendChild(termCard);
        });

    } catch (e) {
        container.innerHTML = `<div class="term-group" style="text-align: center; color: var(--danger);">${t('errGeneric')}</div>`;
    }
}

async function loadStudentDisciplineTimeline(admissionNo) {
    const timeline = document.getElementById("discipline-timeline");
    timeline.innerHTML = `<div style="text-align: center; padding: 2rem;">${t('loading')}</div>`;

    try {
        const res = await fetch(`/api/discipline?admissionNo=${admissionNo}`);
        if (!res.ok) throw new Error();
        const records = await res.json();

        timeline.innerHTML = '';

        if (records.length === 0) {
            timeline.innerHTML = `<div class="timeline-content" style="text-align: center; color: var(--text-secondary);">${t('sNoDiscipline')}</div>`;
            return;
        }

        records.forEach(rec => {
            const item = document.createElement("div");
            item.className = "timeline-item";

            // Classify category styling
            let dotClass = "dot-neutral";
            let badgeClass = "badge-neutral";
            const categoryLower = rec.category.toLowerCase();
            
            if (categoryLower.includes("merit") || categoryLower.includes("good")) {
                dotClass = "dot-merit";
                badgeClass = "badge-merit";
            } else if (categoryLower.includes("warning") || categoryLower.includes("misconduct") || categoryLower.includes("uniform")) {
                dotClass = "dot-warning";
                badgeClass = "badge-warning";
            }

            item.innerHTML = `
                <div class="timeline-dot ${dotClass}"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="badge ${badgeClass}">${t('tCategory' + rec.category.replace(' ', '')) || rec.category}</span>
                        <span class="timeline-date">${rec.date}</span>
                    </div>
                    <div class="timeline-desc">${rec.description}</div>
                    <div class="timeline-action"><strong>${t('sAction')}:</strong> ${rec.action}</div>
                </div>
            `;
            timeline.appendChild(item);
        });

    } catch (e) {
        timeline.innerHTML = `<div class="timeline-content" style="text-align: center; color: var(--danger);">${t('errGeneric')}</div>`;
    }
}

// Sri Lankan Grading Scale Logic
function getSriLankanGrade(score) {
    if (score >= 75) return { grade: 'A', class: 'grade-a', color: 'var(--success)' };
    if (score >= 65) return { grade: 'B', class: 'grade-b', color: 'hsl(142, 60%, 45%)' };
    if (score >= 50) return { grade: 'C', class: 'grade-c', color: 'var(--secondary)' };
    if (score >= 35) return { grade: 'S', class: 'grade-s', color: 'hsl(38, 90%, 60%)' };
    return { grade: 'F', class: 'grade-f', color: 'var(--danger)' };
}

// --- DROP DOWN RENDER HELPERS ---

function renderClassesDropdowns() {
    const studentSelect = document.getElementById("student-class-select");
    const teacherSelect = document.getElementById("teacher-class-select");
    const searchSelect = document.getElementById("search-class-select");

    const placeholder = `<option value="">-- ${t('tSelectClass')} --</option>`;
    
    studentSelect.innerHTML = placeholder;
    teacherSelect.innerHTML = placeholder;
    searchSelect.innerHTML = placeholder;

    state.classes.forEach(c => {
        const option = `<option value="${c.id}">${c.name}</option>`;
        studentSelect.insertAdjacentHTML('beforeend', option);
        teacherSelect.insertAdjacentHTML('beforeend', option);
        searchSelect.insertAdjacentHTML('beforeend', option);
    });
}

// --- UTILITY ALERTS ---

function showAlert(message, type = 'success') {
    const alertBox = document.getElementById("alert-notification");
    alertBox.textContent = message;
    
    alertBox.className = "alert-banner";
    if (type === 'success') {
        alertBox.classList.add("alert-success");
    } else {
        alertBox.classList.add("alert-error");
    }
    
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 4000);
}
