import { ExampleLineChart } from "@/components/ExampleLineChart";
import styles from "./styles.module.scss";
import { Topbar } from "@/components/Topbar";
import { DashboardCard } from "@/components/DashboardCard";
import PeoplesIcon from '@rsuite/icons/Peoples';
import { ExamplePieChartOne } from "@/components/ExamplePieChartOne";

export default function Dashboard() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Topbar title="Dashboard" backgroundColor="#22a12a" />
                <div className={styles.container}>
                    <div className={styles.cardsContainer}>
                        <DashboardCard
                            value="100"
                            label="Usuários Ativos"
                            icon={<PeoplesIcon color="blue" style={{ fontSize: 30 }} />}
                        />

                        <DashboardCard
                            value="10"
                            label="Usuários Inativos"
                            icon={<PeoplesIcon color="red" style={{ fontSize: 30 }} />}
                        />
                    </div>

                    <ExampleLineChart />

                    <div className={styles.pieCharsContainer}>
                        <ExamplePieChartOne />
                        <ExamplePieChartOne />
                    </div>
                </div>
            </div>
        </>
    )
}