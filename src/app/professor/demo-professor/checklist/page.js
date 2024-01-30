import ChecklistPageContent from "@/components/checklist/ChecklistPageContent";
import { allChecklists, checklists, grouplists } from "@/lib/data/checklist/professor";
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

const ProfChecklistPage = () => {
    const cookieStore = cookies();
    const { value: username } = cookieStore.get('username');
    const { value: role } = cookieStore.get('role');

    const isProfessor = (username === 'demo-professor') && (role === 'PROFESSOR');
    if(!isProfessor) {
        notFound(); 
    }

    return (
        <>
            <ChecklistPageContent
                username="demo-professor"
                allChecklists={allChecklists}
                lists={checklists}
                grouplists={grouplists}
            />
        </>
    )
}

export default ProfChecklistPage;
