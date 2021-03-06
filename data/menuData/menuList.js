import {
  UserOutlined,
  PlayCircleOutlined,
  PlaySquareOutlined,
  AlibabaOutlined,
  SelectOutlined,
  CopyOutlined,
  TeamOutlined,
  FileAddOutlined,
  EditOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import Roles from "../../lib/role";

const menuList = [
  {
    title: "OverView",
    icon: <PlayCircleOutlined />,
    path: "/dashboard/manager",
  },
  {
    title: "Students",
    icon: <PlaySquareOutlined />,
    key: "students",
    children: [
      {
        title: "Students List",
        icon: <UserOutlined />,
        path: "/dashboard/manager/students",
      },
    ],
  },
  {
    title: "Teachers",
    icon: <AlibabaOutlined />,
    key: "teachers",
    children: [
      {
        title: "Teacher",
        icon: <TeamOutlined />,
        path: "/dashboard/manager/teachers",
      },
    ],
  },
  {
    title: "Courses",
    icon: <CopyOutlined />,
    key: "courses",
    children: [
      {
        title: "All Courses",
        icon: <TeamOutlined />,
        path: "/dashboard/manager/courses",
      },
      {
        title: "Add Courses",
        icon: <FileAddOutlined />,
        path: "/dashboard/manager/courses/add-course",
      },
      {
        title: "Edit Courses",
        icon: <EditOutlined />,
        path: "/dashboard/manager/courses/edit-course",
      },
    ],
  },
  {
    title: "Message",
    icon: <TeamOutlined />,
    path: "/dashboard/manager/message",
  },
];
const studentMenuList = [
  {
    title: "OverView",
    icon: <PlayCircleOutlined />,
    path: "/dashboard/student",
  },
  {
    title: "Courses",
    icon: <CopyOutlined />,
    key: "courses",
    children: [
      {
        title: "All Courses",
        icon: <TeamOutlined />,
        path: "/dashboard/student/courses",
      },
      {
        title: "My Courses",
        icon: <TeamOutlined />,
        path: "/dashboard/student/courses/own",
      },
    ],
  },
  {
    title: "Course Schedule",
    icon: <TeamOutlined />,
    path: "/dashboard/student/schedule",
  },
  {
    title: "Message",
    icon: <CommentOutlined />,
    path: "/dashboard/student/message",
  },
];
const teacherMenuList = [
  {
    title: "OverView",
    icon: <PlayCircleOutlined />,
    path: "/dashboard/teacher",
  },
  {
    title: "Class Schedule",
    icon: <TeamOutlined />,
    path: "/dashboard/teacher/schedule",
  },
  {
    title: "Students",
    icon: <PlaySquareOutlined />,
    key: "students",
    children: [
      {
        title: "Students List",
        icon: <UserOutlined />,
        path: "/dashboard/teacher/students",
      },
    ],
  },
  {
    title: "Courses",
    icon: <CopyOutlined />,
    key: "courses",
    children: [
      {
        title: "All Courses",
        icon: <TeamOutlined />,
        path: "/dashboard/teacher/courses",
      },
      {
        title: "Add Courses",
        icon: <FileAddOutlined />,
        path: "/dashboard/teacher/courses/add-course",
      },
      {
        title: "Edit Courses",
        icon: <CommentOutlined />,
        path: "/dashboard/teacher/courses/edit-course",
      },
    ],
  },
  {
    title: "Message",
    icon: <TeamOutlined />,
    path: "/dashboard/teacher/message",
  },
];

export { menuList };

const routes = new Map();
routes.set(Roles.student, studentMenuList);
routes.set(Roles.manager, menuList);
routes.set(Roles.teacher, teacherMenuList);
export { routes };
