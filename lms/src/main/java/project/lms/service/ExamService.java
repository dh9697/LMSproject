package project.lms.service;

import java.util.List;

import project.lms.dto.ExamDto;
import project.lms.dto.ResponseDto;
import project.lms.model.Exam;

public interface ExamService {
	
	public ResponseDto<List<Exam>> getAllExams();
	public ResponseDto<List<Exam>> getExamByCourse(Long courseId);
	public ResponseDto<Exam> createExam(ExamDto examDto);
	public ResponseDto<Exam> updateExam(Long examId, ExamDto examDto);
	public ResponseDto<String> deleteExam(Long examId);
}
