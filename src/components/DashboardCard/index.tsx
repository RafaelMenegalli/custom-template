import styles from './styles.module.scss';
import { Stat } from 'rsuite';

interface DashboardCardProps {
    value: string;
    label: string;
    icon: React.ReactNode;
}

export function DashboardCard({ value, label, icon }: DashboardCardProps) {
    return (
        <>
            <Stat bordered icon={icon} className={styles.card}>
                <Stat.Value>{value}</Stat.Value>
                <Stat.Label>{label}</Stat.Label>
            </Stat>
        </>
    )
}