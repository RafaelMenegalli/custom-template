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
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                User Group
                            </Nav.Item>
                            <Nav.Menu eventKey="3" title="Cadastros" icon={<EditIcon />}>
                                <Nav.Item eventKey="3-1" as={Link} href="/users">Usuários</Nav.Item>
                                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                                <Nav.Menu eventKey="4-5" title="Custom Action">
                                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        </>
    )
}