import styles from "./styles.module.scss";
import Link from "next/link";
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import EditIcon from '@rsuite/icons/Edit';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

export function Sidebar() {
    return (
        <>
            <div style={{ width: 240 }}>
                <div className={styles.logoContainer}>
                    <span>Logo</span>
                </div>
                <Sidenav className={styles.sidenav}>
                    <Sidenav.Body>
                        <Nav activeKey="1">
                            <Nav.Item eventKey="1" icon={<DashboardIcon />} as={Link} href="/dashboard">
                                Dashboard
                            </Nav.Item>
                            <Nav.Menu eventKey="3" title="Cadastros" icon={<EditIcon />}>
                                <Nav.Item eventKey="3-1" as={Link} href="/users">Usuários</Nav.Item>
                                <Nav.Menu eventKey="3-2" title="Example">
                                    <Nav.Item eventKey="3-2-1">Example 1</Nav.Item>
                                    <Nav.Item eventKey="3-2-2">Example 2</Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        </>
    )
}