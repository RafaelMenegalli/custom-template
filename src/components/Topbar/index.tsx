import styles from "./styles.module.scss";
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import MessageIcon from '@rsuite/icons/Message';
import NoticeIcon from '@rsuite/icons/Notice';
import AdminIcon from '@rsuite/icons/Admin';
import { Badge } from "rsuite";

interface TopbarProps {
    title: string;
    backgroundColor: string;
}

export function Topbar({ title, backgroundColor }: TopbarProps) {
    return (
        <>
            <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
                <div className={styles.containerIcons}>
                    <Badge>
                        <MessageIcon className={styles.icon} />
                    </Badge>
                    <NoticeIcon className={styles.icon} />
                </div>

                <span className={styles.title}>{title}</span>

                <div>
                    <AdminIcon className={styles.icon} />
                </div>
            </div>
        </>
    )
}