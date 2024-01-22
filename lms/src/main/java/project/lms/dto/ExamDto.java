package project.lms.dto;

public class ExamDto {

	private Long courseId;
	private Integer durationMins;
	private Integer passingScore;
	private Boolean examIsActive;
	
	public ExamDto() {
		super();
	}

	public ExamDto(Long courseId, Integer durationMins, Integer passingScore, Boolean examIsActive) {
		super();
		this.courseId = courseId;
		this.durationMins = durationMins;
		this.passingScore = passingScore;
		this.examIsActive = examIsActive;
	}

	public Long getCourseId() {
		return courseId;
	}

	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}

	public Integer getDurationMins() {
		return durationMins;
	}

	public void setDurationMins(Integer durationMins) {
		this.durationMins = durationMins;
	}

	public Integer getPassingScore() {
		return passingScore;
	}

	public void setPassingScore(Integer passingScore) {
		this.passingScore = passingScore;
	}

	public Boolean getExamIsActive() {
		return examIsActive;
	}

	public void setExamIsActive(Boolean examIsActive) {
		this.examIsActive = examIsActive;
	}
	
}
