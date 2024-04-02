import StudAccount from "@/components/account/student/StudAccount";
import { getStudData } from "@/lib/data/account/student";

export const metadata = {
    title: "Account",
    themeColor: '#78a1bb'
}

const StudAccountPage = () => {
    const accountInfo = getStudData();

    return (
        <StudAccount 
            accountInfo={accountInfo}
        />
    )
}

export default StudAccountPage;
