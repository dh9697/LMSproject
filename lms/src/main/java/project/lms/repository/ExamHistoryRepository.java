package project.lms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import project.lms.model.ExamHistory;

public interface ExamHistoryRepository extends JpaRepository<ExamHistory, Long> {

	List<ExamHistory> findByMember_MemberId(Long memberId);
}
