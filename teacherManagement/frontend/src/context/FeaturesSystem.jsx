import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../customHook/UseLocalStorageHook";

export const FeatureContext = createContext(null);

export default function FeatureState({ children }) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage("studentsData");
  const userData = useLocalStorage("fetchedData");
  const [markAttendLoading, setMarkAttendLoading] = useState(false);
  const [attendListLoading, setAttendListLoading] = useState(false);
  const [studentLoading, setStudentLoading] = useState(false);
  const [studentListingLoading, setStudentListingLoading] = useState(false);
  const [sendAssignmentLoading, setSendAssignmentLoading] = useState(false);
  const [studentsAssignmentLoading, setStudentsAssignmentLoading] =
    useState(false);

  const [markAttendList, setMarkAttendList] = useState([]);
  const [attendList, setAttendList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [studentListing, setStudentListing] = useState([]);
  const [sendAssignmentList, setSendAssignmentList] = useState([]);
  const [studentsAssignmentsList, setStudentsAssignmentsList] = useState("");

  const [markAttendError, setMarkAttendError] = useState("");
  const [attendListError, setAttendListError] = useState("");
  const [studentError, setStudentError] = useState("");
  const [studentListingError, setStudentListingError] = useState("");
  const [sendAssignmentError, setSendAssignmentError] = useState("");
  const [studentsAssignmentsError, setStudentsAssignmentsError] = useState("");

  const studentRef = useRef();
  const markAttendRef = useRef();
  const updateStudentRef = useRef();
  const deleteStudentRef = useRef();
  const sendAssignmentRef = useRef();

  const user = userData.getLocalStorage();
  const token = user?.data?.accessToken;

  const createStudent = (data) => {
    studentRef.current = data;
    CreateStudent();
  };
  const deleteStudent = (data) => {
    updateStudentRef.current = data;
    UpdateStudent();
  };
  const updateStudent = (data) => {
    deleteStudentRef.current = data;
    DeleteStudent();
  };
  const createAttendList = (data) => {
    markAttendRef.current = data;
    CreateAttendList();
  };
  const sendAssignments = (data) => {
    sendAssignmentRef.current = data;
    SendAssignment();
  };

  async function CreateStudent() {
    setStudentLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/student/info`,
        studentRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      setStudentList(data);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function UpdateStudent() {
    setStudentLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/student/updateStudent`,
        updateStudentRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      setStudentList(data);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function DeleteStudent() {
    setStudentLoading(true);
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/v1/student/deleteStudent`,
        markAttendRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      console.log(data);
      setStudentList(data);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function CreateAttendList() {
    setMarkAttendLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/attendenceRecord",
        markAttendRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setMarkAttendList(data);
      setMarkAttendLoading(false);
    } catch (e) {
      setMarkAttendError(e);
      setMarkAttendLoading(false);
    }
  }
  async function Students() {
    setStudentListingLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/allStudents",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setStudentListing(data);
      setStudentListingLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setStudentListingError(e);
      setStudentListingLoading(false);
    }
  }
  async function AttendList() {
    setAttendListLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/allattendenceRecord",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );

      const data = res.data;

      setAttendList(data);
      setAttendListLoading(false);
      setLocalStorage(data);
    } catch (error) {
      setAttendListError(error);
      setAttendListLoading(false);
    }
  }
  async function SendAssignment() {
    setSendAssignmentLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/student/uploadAssignment`,
        sendAssignmentRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      setSendAssignmentList(data);
      setSendAssignmentLoading(false);
    } catch (e) {
      setSendAssignmentError(e);
      setSendAssignmentLoading(false);
    }
  }
  async function assignments() {
    setStudentListingLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/uploadAssignment",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setStudentsAssignmentsList(data);
      setStudentsAssignmentLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setStudentsAssignmentsError(e);
      setStudentsAssignmentLoading(false);
    }
  }

  useEffect(() => {
    const featureDataFromLocalStorage = () => {
      try {
        const data = getLocalStorage();
        if (data) {
          setStudentListing(data);
          setStudentsAssignmentsList(data);
          setAttendList(data);
        }
      } catch (error) {
        setStudentListingError(error);
      }
    };
    featureDataFromLocalStorage();
  }, []);

  return (
    <FeatureContext.Provider
      value={{
        // states of a particular
        studentError,
        studentList,
        studentLoading,
        markAttendList,
        markAttendError,
        markAttendLoading,
        studentListing,
        studentListingError,
        studentListingLoading,
        attendList,
        attendListError,
        attendListLoading,
        sendAssignmentError,
        sendAssignmentList,
        sendAssignmentLoading,
        studentsAssignmentLoading,
        studentsAssignmentsError,
        studentsAssignmentsList,
        //All api fetched methods
        createStudent,
        createAttendList,
        Students,
        AttendList,
        updateStudent,
        deleteStudent,
        sendAssignments,
        assignments,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
}
