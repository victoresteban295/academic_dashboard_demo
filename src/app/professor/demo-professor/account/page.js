import ProfAccount from "@/components/account/professor/ProfAccount";
import { getProfData } from "@/lib/data/account/professor";

export const metadata = {
    title: "Account",
    themeColor: '#78a1bb'
}

const ProfAccountPage = () => {
    const accountInfo = getProfData();

    return (
        <ProfAccount 
            accountInfo={accountInfo}
            officeHrs={accountInfo.officeHrs}
        />
    )
}

export default ProfAccountPage;
