package project.lms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import project.lms.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
	
	@EntityGraph(attributePaths = "authorities")
	Optional<Member> findOneWithAuthoritiesByLoginId(String LoginId);
	
	@EntityGraph(attributePaths = "courses")
	Optional<Member> findOneWithLecturesByLoginId(String loginId);
	
	Member findByLoginId(String loginId);
}
