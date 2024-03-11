import ProfCoursePage from "@/components/course/professor/ProfCoursePage";
import { getTitle } from "@/lib/data/course/professor";

export async function generateMetadata({ params }) {

    const title = getTitle(params.course);

    return {
        title: title,
        themeColor: '#78a1bb'
    }
}

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
