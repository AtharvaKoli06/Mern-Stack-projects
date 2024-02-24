import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../customHook/UseLocalStorageHook";

export const FeatureContext = createContext(null);

export default function FeatureState({ children }) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage("studentsData");
  const [markAttendLoading, setMarkAttendLoading] = useState(false);
  const [attendListLoading, setAttendListLoading] = useState(false);
  const [studentLoading, setStudentLoading] = useState(false);
  const [studentListingLoading, setStudentListingLoading] = useState(false);

  const [markAttendList, setMarkAttendList] = useState([]);
  const [attendList, setAttendList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [studentListing, setStudentListing] = useState([]);

  const [markAttendError, setMarkAttendError] = useState("");
  const [attendListError, setAttendListError] = useState("");
  const [studentError, setStudentError] = useState("");
  const [studentListingError, setStudentListingError] = useState("");

  const studentRef = useRef();
  const markAttendRef = useRef();

  const createStudent = (data) => {
    studentRef.current = data;
    CreateStudent();
  };
  const createAttendList = (data) => {
    markAttendRef.current = data;
    CreateAttendList();
  };

  async function CreateStudent() {
    setStudentLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/student/info`,
        studentRef.current
      );
      const data = res.data;
      setStudentList(data);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function CreateAttendList() {
    setMarkAttendLoading(true);
    console.log(markAttendRef.current);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/attendenceRecord",
        markAttendRef.current
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
        "http://localhost:8000/api/v1/student/allStudents"
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
        "http://localhost:8000/api/v1/student/allattendenceRecord"
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

  useEffect(() => {
    const featureDataFromLocalStorage = () => {
      try {
        const data = getLocalStorage();
        if (data) {
          setStudentListing(data);
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
        createStudent,
        createAttendList,
        Students,
        AttendList,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
}
