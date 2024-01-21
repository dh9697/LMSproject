import axios from "axios";

export function RestApi() {
  return <></>;
}

const token = localStorage.getItem("Token");

// signup
export function apiSignupByAxiosPost(
  loginId,
  password,
  name,
  birthDate,
  gender,
  nationality,
  email,
  phoneNum
) {
  return axios.post(
    "http://localhost:8080/api/signup",
    {
      loginId: loginId,
      password: password,
      name: name,
      birthDate: birthDate,
      gender: gender,
      nationality: nationality,
      email: email,
      phoneNum: phoneNum,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// login
export function apiLoginByAxiosPost(loginId, password) {
  return axios.post(
    "http://localhost:8080/api/login",
    {
      loginId: loginId,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
// withdrawal
export function apiWithdrawalByAxiosPost(withdrawalReason) {
  return axios.post(
    "http://localhost:8080/api/withdrawal",
    { withdrawalReason: withdrawalReason },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

export function loginUser(loginId, password) {
  return apiLoginByAxiosPost(loginId, password).then((response) => {
    const token = response.data.token;
    const loginId = response.data.loginId;

    localStorage.setItem("Token", token);
    localStorage.setItem("LoginId", loginId);

    return response;
  });
}

// user 정보
export function apiGetCurrentUserInfo() {
  const loginId = localStorage.getItem("LoginId");

  if (!token) {
    return Promise.reject("No Token or LoginId available.");
  }
  return axios.get(`http://localhost:8080/api/dashboard/${loginId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// --- exam question ---
// 모든 시험 문제 조회
export function apiGetAllExamQuestions() {
  return axios.get("http://localhost:8080/api/exam-questions/list", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// 특정 시험 문제 조회
export function apiGetQuestionsForExam(examId) {
  return axios.get(`http://localhost:8080/api/exam-questions/list/${examId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// 시험 문제 저장
export function apiPostQuestionsForExam(
  examId,
  questionText,
  options,
  correctOptionIndex
) {
  return axios.post(
    "http://localhost:8080/api/exam-questions/save",
    {
      examId: examId,
      questionText: questionText,
      options: options,
      correctOptionIndex: correctOptionIndex,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

// 시험 문제 수정
export function apiPutQuestionsForExam(
  examQuestionId,
  examId,
  questionText,
  options,
  correctOptionIndex
) {
  return axios.put(
    `http://localhost:8080/api/exam-questions/update/${examQuestionId}`,
    {
      examId: examId,
      questionText: questionText,
      options: options,
      correctOptionIndex: correctOptionIndex,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

// 시험 문제 삭제
export function apiDeleteQuestionsForExam(examQuestionId) {
  return axios.delete(
    `http://localhost:8080/api/exam-questions/delete/${examQuestionId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
}
