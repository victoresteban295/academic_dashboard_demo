import ProfCoursePage from "@/components/course/professor/ProfCoursePage";

const ProfessorCoursePage = ({ params }) => {

    //Which Course to query
    const course = params.course;

    return (
        <ProfCoursePage 
            crs={course}
        />
    )
} 

export default ProfessorCoursePage;
