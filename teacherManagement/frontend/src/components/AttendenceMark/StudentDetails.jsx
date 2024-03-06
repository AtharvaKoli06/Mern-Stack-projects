import React, { useState } from "react";

const StudentDetails = ({
  createStudent,
  updateStudent,
  studentData,
  studentError,
}) => {
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [studentDetail, setStudentDetail] = useState({
    rollNo: "",
    enrollNo: "",
    studentsName: "",
    medium: "",
    year: "",
    course: "",
    courseName: "",
    section: "",
    prn: "",
  });
  const [contact, setContact] = useState({
    phoneNo: "",
    whatsAppNo: "",
    address: "",
  });
  const [personalDetail, setPersonalDetail] = useState({
    father: "",
    mother: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    religion: "",
    caste: "",
    subCaste: "",
    nationality: "",
    motherTongue: "",
    aadharNo: "",
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(studentDetail).forEach(([key, value]) => {
      formData.append(key, value);
    });
    Object.entries(contact).forEach(([key, value]) => {
      formData.append(key, value);
    });
    Object.entries(personalDetail).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData);
    alert(`Are you sure want to update student `);
    try {
      await updateStudent(formData);
    } catch (error) {
      setUpdateStudentError(error);
    }
    // setStudentDetail({
    //   rollNo: "",
    //   enrollNo: "",
    //   studentsName: "",
    //   medium: "",
    //   year: "",
    //   course: "",
    //   courseName: "",
    //   section: "",
    //   lecture: "",
    //   date: "",
    //   prn: "",
    // });
    // setContact({
    //   phoneNo: "",
    //   whatsAppNo: "",
    //   address: "",
    // });
    // setPersonalDetail({
    //   father: "",
    //   mother: "",
    //   dateOfBirth: "",
    //   placeOfBirth: "",
    //   gender: "",
    //   religion: "",
    //   caste: "",
    //   subCaste: "",
    //   nationality: "",
    //   motherTongue: "",
    //   aadharNo: "",
    // });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(studentDetail).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Object.entries(contact).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Object.entries(personalDetail).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("avatar", avatar);
    formData.append("coverImage", coverImage);
    console.log(formData);
    try {
      await createStudent(formData);
    } catch (error) {
      setCreateStudentError(error);
    }
    // setStudentDetail({
    //   rollNo: "",
    //   enrollNo: "",
    //   studentsName: "",
    //   medium: "",
    //   year: "",
    //   course: "",
    //   courseName: "",
    //   section: "",
    //   lecture: "",
    //   date: "",
    //   prn: "",
    // });
    // setContact({
    //   phoneNo: "",
    //   whatsAppNo: "",
    //   address: "",
    // });
    // setPersonalDetail({
    //   father: "",
    //   mother: "",
    //   dateOfBirth: "",
    //   placeOfBirth: "",
    //   gender: "",
    //   religion: "",
    //   caste: "",
    //   subCaste: "",
    //   nationality: "",
    //   motherTongue: "",
    //   aadharNo: "",
    // });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudentDetail((prevData) => ({
      ...prevData,
      [name]: value.toLowerCase(),
    }));
  };
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: value.toLowerCase(),
    }));
  };
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetail((prevData) => ({
      ...prevData,
      [name]: value.toLowerCase(),
    }));
  };

  const [studentDetails, setStudentDetails] = useState(true);
  const [contactDetails, setContactDetails] = useState(true);
  const [personalDetails, setPersonalDetails] = useState(true);

  const handleStudentToggle = () => {
    setStudentDetails(!studentDetails);
  };
  const handleContactToggle = () => {
    setContactDetails(!contactDetails);
  };
  const handlePersonalToggle = () => {
    setPersonalDetails(!personalDetails);
  };

  return (
    <>
      {!studentData && (
        <div className="top-8 sm:right-5 shadow-lg rounded-md p-2 text-black bg-white w-full mt-10 text-sm border">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <p
              className={`${
                studentError.message ? "block" : "hidden"
              } bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
            >
              {studentError.message}
            </p>
            <div className="flex items-center justify-between p-2 w-full">
              <h1>College Details</h1>
              <span
                onClick={handleStudentToggle}
                className="bg-green-300 p-2 rounded cursor-pointer"
              >
                +
              </span>
            </div>
            {!studentDetails ? (
              <div className="w-full">
                <div className="w-full border grid sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Roll no."
                    type="number"
                    name="rollNo"
                    min={1}
                    value={studentDetail.rollNo}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Enroll no."
                    type="number"
                    name="enrollNo"
                    min={1}
                    value={studentDetail.enrollNo}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Student Name"
                    type="text"
                    name="studentsName"
                    value={studentDetail.studentsName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Medium eg.'degree'"
                    type="text"
                    name="medium"
                    value={studentDetail.medium}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Year eg:'First Year'"
                    type="text"
                    name="year"
                    value={studentDetail.year}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Course"
                    type="text"
                    name="course"
                    value={studentDetail.course}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="CourseName eg:'FYBCA'"
                    type="text"
                    name="courseName"
                    value={studentDetail.courseName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Section eg.'A'"
                    type="text"
                    name="section"
                    value={studentDetail.section}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="PRN"
                    type="text"
                    name="prn"
                    value={studentDetail.prn}
                    onChange={handleChange}
                    required
                  />
                  <div className="flex items-center justify-center w-full ">
                    <label htmlFor="avatar">Avatar:</label>
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image"
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      onChange={(e) => setAvatar(e.target.files[0])}
                    />
                  </div>
                  <div className="flex items-center justify-center col-span-2 ">
                    <label htmlFor="coverImage">Cover Image:</label>
                    <input
                      type="file"
                      id="cover"
                      name="coverImage"
                      accept="image"
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      onChange={(e) => setCoverImage(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            <div className="flex items-center justify-between p-2 w-full">
              <h1>Contact Details</h1>
              <span
                onClick={handleContactToggle}
                className="bg-green-300 p-2 rounded cursor-pointer"
              >
                +
              </span>
            </div>
            {!contactDetails ? (
              <div className="w-full">
                <div className="w-full border grid sm:grid-cols-2 lg:grid-cols-2 gap-2 ">
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Contact No."
                    type="text"
                    name="phoneNo"
                    value={contact.phoneNo}
                    onChange={handleContactChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="WhatsApp No."
                    type="text"
                    name="whatsAppNo"
                    value={contact.whatsAppNo}
                    onChange={handleContactChange}
                    required
                  />
                  <textarea
                    cols="5"
                    rows="3"
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600 col-span-2"
                    placeholder="Address..."
                    type="text"
                    name="address"
                    value={contact.address}
                    onChange={handleContactChange}
                    required
                  />
                </div>
              </div>
            ) : null}
            <div className="flex items-center justify-between p-2 w-full">
              <h1>Personal Details</h1>
              <span
                onClick={handlePersonalToggle}
                className="bg-green-300 p-2 rounded cursor-pointer"
              >
                +
              </span>
            </div>
            {!personalDetails ? (
              <div className="w-full border ">
                <div className="w-full border grid sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Fathers Name"
                    type="text"
                    name="father"
                    value={personalDetail.father}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Mothers Name"
                    type="text"
                    name="mother"
                    value={personalDetail.mother}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={personalDetail.dateOfBirth}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Place Of Birth"
                    type="text"
                    name="placeOfBirth"
                    value={personalDetail.placeOfBirth}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Gender"
                    type="text"
                    name="gender"
                    value={personalDetail.gender}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Religion"
                    type="text"
                    name="religion"
                    value={personalDetail.religion}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Caste"
                    type="text"
                    name="caste"
                    value={personalDetail.caste}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Sub Caste"
                    type="text"
                    name="subCaste"
                    value={personalDetail.subCaste}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Nationality"
                    type="text"
                    name="nationality"
                    value={personalDetail.nationality}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="Mother Tongue"
                    type="text"
                    name="motherTongue"
                    value={personalDetail.motherTongue}
                    onChange={handlePersonalChange}
                    required
                  />
                  <input
                    className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                    placeholder="AAdhar No."
                    type="text"
                    name="aadharNo"
                    value={personalDetail.aadharNo}
                    onChange={handlePersonalChange}
                    required
                  />
                </div>
              </div>
            ) : null}
            <button
              type="submit"
              className="group relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5"
            >
              CREATE
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </form>
        </div>
      )}
      {/* //For updating a Student */}
      {studentData &&
        studentData.map((student) => (
          <div
            key={student._id}
            className="top-8 sm:right-5 shadow-lg rounded-md p-2 text-black bg-white w-full mt-10 text-sm border"
          >
            <form
              onSubmit={handleUpdate}
              className="w-full flex flex-col items-center justify-center"
            >
              <p
                className={`${
                  studentError.message ? "block" : "hidden"
                } bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
              >
                {studentError.message}
              </p>
              <div className="flex items-center justify-between p-2 w-full">
                <h1>College Details</h1>
                <span
                  onClick={handleStudentToggle}
                  className="bg-green-300 p-2 rounded cursor-pointer"
                >
                  +
                </span>
              </div>
              {!studentDetails ? (
                <div className="w-full">
                  <div className="w-full border grid sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Roll no."
                      type="number"
                      name="rollNo"
                      min={1}
                      value={student.rollNo}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Enroll no."
                      type="number"
                      name="enrollNo"
                      min={1}
                      value={student.enrollNo}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Student Name"
                      type="text"
                      name="studentsName"
                      value={student.studentsName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Medium eg.'degree'"
                      type="text"
                      name="medium"
                      value={student.medium}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Year eg:'First Year'"
                      type="text"
                      name="year"
                      value={student.year}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Course"
                      type="text"
                      name="course"
                      value={student.course}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="CourseName eg:'FYBCA'"
                      type="text"
                      name="courseName"
                      value={student.courseName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Section eg.'A'"
                      type="text"
                      name="section"
                      value={student.section}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="PRN"
                      type="text"
                      name="prn"
                      value={student.prn}
                      onChange={handleChange}
                      required
                    />
                    {/* <div className="flex items-center justify-center w-full ">
                      <label htmlFor="avatar">Avatar:</label>
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image"
                        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                        onChange={(e) => setAvatar(e.target.files[0])}
                      />
                    </div>
                    <div className="flex items-center justify-center col-span-2 ">
                      <label htmlFor="coverImage">Cover Image:</label>
                      <input
                        type="file"
                        id="cover"
                        name="coverImage"
                        accept="image"
                        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                        onChange={(e) => setCoverImage(e.target.files[0])}
                      />
                    </div> */}
                  </div>
                </div>
              ) : null}
              <div className="flex items-center justify-between p-2 w-full">
                <h1>Contact Details</h1>
                <span
                  onClick={handleContactToggle}
                  className="bg-green-300 p-2 rounded cursor-pointer"
                >
                  +
                </span>
              </div>
              {!contactDetails ? (
                <div className="w-full">
                  <div className="w-full border grid sm:grid-cols-2 lg:grid-cols-2 gap-2 ">
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Contact No."
                      type="text"
                      name="phoneNo"
                      value={student.phone}
                      onChange={handleContactChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="WhatsApp No."
                      type="text"
                      name="whatsAppNo"
                      value={student.whatsappNo}
                      onChange={handleContactChange}
                      required
                    />
                    <textarea
                      cols="5"
                      rows="3"
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600 col-span-2"
                      placeholder="Address..."
                      type="text"
                      name="address"
                      value={student.Address}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                </div>
              ) : null}
              <div className="flex items-center justify-between p-2 w-full">
                <h1>Personal Details</h1>
                <span
                  onClick={handlePersonalToggle}
                  className="bg-green-300 p-2 rounded cursor-pointer"
                >
                  +
                </span>
              </div>
              {!personalDetails ? (
                <div className="w-full border ">
                  <div className="w-full border grid sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Fathers Name"
                      type="text"
                      name="father"
                      value={student.father}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Mothers Name"
                      type="text"
                      name="mother"
                      value={student.mother}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Date Of Birth"
                      type="date"
                      name="dateOfBirth"
                      value={student.dateOfBirth}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Place Of Birth"
                      type="text"
                      name="placeOfBirth"
                      value={student.placeOfBirth}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Gender"
                      type="text"
                      name="gender"
                      value={student.gender}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Religion"
                      type="text"
                      name="religion"
                      value={student.religion}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Caste"
                      type="text"
                      name="caste"
                      value={student.caste}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Sub Caste"
                      type="text"
                      name="subCaste"
                      value={student.subCaste}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Nationality"
                      type="text"
                      name="nationality"
                      value={student.nationality}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="Mother Tongue"
                      type="text"
                      name="motherTongue"
                      value={student.motherTongue}
                      onChange={handlePersonalChange}
                      required
                    />
                    <input
                      className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                      placeholder="AAdhar No."
                      type="text"
                      name="aadharNo"
                      value={student.aadharNo}
                      onChange={handlePersonalChange}
                      required
                    />
                  </div>
                </div>
              ) : null}
              <button
                type="submit"
                className="relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5"
              >
                Update
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            </form>
          </div>
        ))}
    </>
  );
};

export default StudentDetails;
