export interface ICardsInfo {
  image: string;
  title: string;
  desc: string;
}

export interface ISinglePageData {
  infoData: {
    imageUrl: string;
    name: string;
    desc: string;
    blood: string;
    date: string;
    email: string;
    phone: string;
  };
  cardsInfo: ICardsInfo[];
}

export const singleTeacherPageData: ISinglePageData = {
  infoData: {
    imageUrl: "/avatar.png",
    name: "John Doe",
    desc: "Dedicated educator with a passion for teaching and student development.",
    blood: "A+",
    date: "January 2025",
    email: "johndoe@example.com",
    phone: "+123456789",
  },
  cardsInfo: [
    {
      image: "/singleAttendance.png",
      title: "90%",
      desc: "Attendance",
    },
    {
      image: "/singleBranch.png",
      title: "2",
      desc: "Branches",
    },
    {
      image: "/singleLesson.png",
      title: "6",
      desc: "Lessons",
    },
    {
      image: "/singleClass.png",
      title: "4",
      desc: "Classes",
    },
  ],
};

export const singleStudentPageData: ISinglePageData = {
  infoData: {
    imageUrl: "/avatar.png",
    name: "Jane Smith",
    desc: "Motivated student with a strong interest in learning and personal growth.",
    blood: "B+",
    date: "Enrolled: September 2023",
    email: "janesmith@example.com",
    phone: "+987654321",
  },
  cardsInfo: [
    {
      image: "/singleAttendance.png",
      title: "95%",
      desc: "Attendance",
    },
    {
      image: "/singleBranch.png",
      title: "6th",
      desc: "Grade",
    },
    {
      image: "/singleLesson.png",
      title: "10",
      desc: "Lessons",
    },
    {
      image: "/singleClass.png",
      title: "6",
      desc: "Class",
    },
  ],
};

export type TMenuItem = {
  title: string;
  items: {
    icon: string;
    label: string;
    href: string;
    visible: string[];
  }[];
};

export const menuItems: TMenuItem[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export type TCountChart = {
  name: string;
  count: number;
  fill: string;
};

export const countChart: TCountChart[] = [
  {
    name: "Total",
    count: 300,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 100,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 200,
    fill: "#C3EBFA",
  },
];

export type TAttendanceChart = {
  name: string;
  present: number;
  absent: number;
};

export const attendanceChart: TAttendanceChart[] = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

export type TFinanceChart = {
  name: string;
  income: number;
  expense: number;
};

export const financeChart: TFinanceChart[] = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

export type TAnglePie = {
  name: string;
  value: number;
  fill: string;
};

export const AnglePie: TAnglePie[] = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

export type TEvent = {
  id: number;
  title: string;
  time: string;
  description: string;
};

export const events: TEvent[] = [
  {
    id: 1,
    title: "Event 1",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Event 2",
    time: "2:00 PM - 4:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Event 3",
    time: "4:00 PM - 6:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

type TAnnouncement = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export const announcements: TAnnouncement[] = [
  {
    id: 1,
    title: "Announcement 1",
    date: "2023-01-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Announcement 2",
    date: "2023-02-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Announcement 3",
    date: "2023-03-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// TEMPORARY DATA

export const role = "admin";

export interface ITeachersData {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    teacherId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    teacherId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Music", "History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    teacherId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    teacherId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["English", "Spanish"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    teacherId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    teacherId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Literature", "English"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    teacherId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
];

export interface IStudentsData {
  id: number;
  studentId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
}

export const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "1B",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    studentId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    studentId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    studentId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    studentId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    studentId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    studentId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    studentId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    studentId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    studentId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
];

export interface IParentsData {
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
}

export const parentsData = [
  {
    id: 1,
    name: "John Doe",
    students: ["Sarah Brewer"],
    email: "john@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Doe",
    students: ["Cecilia Bradley"],
    email: "jane@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    name: "Mike Geller",
    students: ["Fanny Caldwell"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    name: "Jay French",
    students: ["Mollie Fitzgerald", "Ian Bryant"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    name: "Jane Smith",
    students: ["Mable Harvey"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    name: "Anna Santiago",
    students: ["Joel Lambert"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    name: "Allen Black",
    students: ["Carrie Tucker", "Lilly Underwood"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    name: "Ophelia Castro",
    students: ["Alexander Blair"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    name: "Derek Briggs",
    students: ["Susan Webster", "Maude Stone"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    name: "John Glover",
    students: ["Stella Scott"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
];

export interface ISubjectsData {
  id: number;
  name: string;
  teachers: string[];
}

export const subjectsData = [
  {
    id: 1,
    name: "Math",
    teachers: ["Alice Phelps", "Russell Davidson"],
  },
  {
    id: 2,
    name: "English",
    teachers: ["Manuel Becker", "Eddie Chavez"],
  },
  {
    id: 3,
    name: "Physics",
    teachers: ["Lola Newman", "Darrell Delgado"],
  },
  {
    id: 4,
    name: "Chemistry",
    teachers: ["Nathan Kelly", "Benjamin Snyder"],
  },
  {
    id: 5,
    name: "Biology",
    teachers: ["Alma Benson", "Lina Collier"],
  },
  {
    id: 6,
    name: "History",
    teachers: ["Hannah Bowman", "Betty Obrien"],
  },
  {
    id: 7,
    name: "Geography",
    teachers: ["Lora French", "Sue Brady"],
  },
  {
    id: 8,
    name: "Art",
    teachers: ["Harriet Alvarado", "Mayme Keller"],
  },
  {
    id: 9,
    name: "Music",
    teachers: ["Gertrude Roy", "Rosa Singleton"],
  },
  {
    id: 10,
    name: "Literature",
    teachers: ["Effie Lynch", "Brett Flowers"],
  },
];

export interface IClassesData {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}

export const classesData = [
  {
    id: 1,
    name: "1A",
    capacity: 20,
    grade: 1,
    supervisor: "Joseph Padilla",
  },
  {
    id: 2,
    name: "2B",
    capacity: 22,
    grade: 2,
    supervisor: "Blake Joseph",
  },
  {
    id: 3,
    name: "3C",
    capacity: 20,
    grade: 3,
    supervisor: "Tom Bennett",
  },
  {
    id: 4,
    name: "4B",
    capacity: 18,
    grade: 4,
    supervisor: "Aaron Collins",
  },
  {
    id: 5,
    name: "5A",
    capacity: 16,
    grade: 5,
    supervisor: "Iva Frank",
  },
  {
    id: 6,
    name: "5B",
    capacity: 20,
    grade: 5,
    supervisor: "Leila Santos",
  },
  {
    id: 7,
    name: "7A",
    capacity: 18,
    grade: 7,
    supervisor: "Carrie Walton",
  },
  {
    id: 8,
    name: "6B",
    capacity: 22,
    grade: 6,
    supervisor: "Christopher Butler",
  },
  {
    id: 9,
    name: "6C",
    capacity: 18,
    grade: 6,
    supervisor: "Marc Miller",
  },
  {
    id: 10,
    name: "6D",
    capacity: 20,
    grade: 6,
    supervisor: "Ophelia Marsh",
  },
];

export interface ILessonsData {
  id: number;
  subject: string;
  class: string;
  teacher: string;
}

export const lessonsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Tommy Wise",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Rhoda Frank",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Della Dunn",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Bruce Rodriguez",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Birdie Butler",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Bettie Oliver",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Herman Howard",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Lucinda Thomas",
  },
  {
    id: 9,
    subject: "Physics",
    class: "6C",
    teacher: "Ronald Roberts",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "4B",
    teacher: "Julia Pittman",
  },
];

export interface IExamsData {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
}

export const examsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Martha Morris",
    date: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Randall Garcia",
    date: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Myrtie Scott",
    date: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Alvin Swanson",
    date: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Mabelle Wallace",
    date: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Dale Thompson",
    date: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Allie Conner",
    date: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Hunter Fuller",
    date: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Lois Lindsey",
    date: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Vera Soto",
    date: "2025-01-01",
  },
];

export interface IAssignmentsData {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
}

export const assignmentsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Anthony Boone",
    dueDate: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Clifford Bowen",
    dueDate: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Catherine Malone",
    dueDate: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Willie Medina",
    dueDate: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Jose Ruiz",
    dueDate: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Katharine Owens",
    dueDate: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Shawn Norman",
    dueDate: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Don Holloway",
    dueDate: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Franklin Gregory",
    dueDate: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Danny Nguyen",
    dueDate: "2025-01-01",
  },
];

export interface IResultsData {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
}

export const resultsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
];

export interface IEventsData {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    title: "Picnic",
    class: "2A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    title: "Beach Trip",
    class: "3A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 4,
    title: "Museum Trip",
    class: "4A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 5,
    title: "Music Concert",
    class: "5A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 6,
    title: "Magician Show",
    class: "1B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 7,
    title: "Lake Trip",
    class: "2B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 8,
    title: "Cycling Race",
    class: "3B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 9,
    title: "Art Exhibition",
    class: "4B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 10,
    title: "Sports Tournament",
    class: "5B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
];

export interface IAnnouncements {
  id: number;
  title: string;
  class: string;
  date: string;
}

export const announcementsData = [
  {
    id: 1,
    title: "About 4A Math Test",
    class: "4A",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "About 3A Math Test",
    class: "3A",
    date: "2025-01-01",
  },
  {
    id: 3,
    title: "About 3B Math Test",
    class: "3B",
    date: "2025-01-01",
  },
  {
    id: 4,
    title: "About 6A Math Test",
    class: "6A",
    date: "2025-01-01",
  },
  {
    id: 5,
    title: "About 8C Math Test",
    class: "8C",
    date: "2025-01-01",
  },
  {
    id: 6,
    title: "About 2A Math Test",
    class: "2A",
    date: "2025-01-01",
  },
  {
    id: 7,
    title: "About 4C Math Test",
    class: "4C",
    date: "2025-01-01",
  },
  {
    id: 8,
    title: "About 4B Math Test",
    class: "4B",
    date: "2025-01-01",
  },
  {
    id: 9,
    title: "About 3C Math Test",
    class: "3C",
    date: "2025-01-01",
  },
  {
    id: 10,
    title: "About 1C Math Test",
    class: "1C",
    date: "2025-01-01",
  },
];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

export const calendarEvents = [
  {
    title: "Math",
    allDay: false,
    start: new Date(year, month, day, 8, 0),
    end: new Date(year, month, day, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(year, month, day, 9, 0),
    end: new Date(year, month, day, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(year, month, day, 10, 0),
    end: new Date(year, month, day, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(year, month, day, 11, 0),
    end: new Date(year, month, day, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(year, month, day, 13, 0),
    end: new Date(year, month, day, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(year, month, day, 14, 0),
    end: new Date(year, month, day, 14, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(year, month, day + 1, 9, 0),
    end: new Date(year, month, day + 1, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(year, month, day + 1, 10, 0),
    end: new Date(year, month, day + 1, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(year, month, day + 1, 11, 0),
    end: new Date(year, month, day + 1, 11, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(year, month, day + 1, 14, 0),
    end: new Date(year, month, day + 1, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(year, month, day + 2, 8, 0),
    end: new Date(year, month, day + 2, 8, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(year, month, day + 2, 10, 0),
    end: new Date(year, month, day + 2, 10, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(year, month, day + 2, 13, 0),
    end: new Date(year, month, day + 2, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(year, month, day + 2, 14, 0),
    end: new Date(year, month, day + 2, 14, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(year, month, day + 3, 9, 0),
    end: new Date(year, month, day + 3, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(year, month, day + 3, 10, 0),
    end: new Date(year, month, day + 3, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(year, month, day + 3, 11, 0),
    end: new Date(year, month, day + 3, 11, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(year, month, day + 3, 14, 0),
    end: new Date(year, month, day + 3, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(year, month, day + 4, 8, 0),
    end: new Date(year, month, day + 4, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(year, month, day + 4, 9, 0),
    end: new Date(year, month, day + 4, 9, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(year, month, day + 4, 11, 0),
    end: new Date(year, month, day + 4, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(year, month, day + 4, 13, 0),
    end: new Date(year, month, day + 4, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(year, month, day + 4, 14, 0),
    end: new Date(year, month, day + 4, 14, 45),
  },
];
