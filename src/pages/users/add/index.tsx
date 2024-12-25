import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";
import { Topbar } from "@/components/Topbar";
import { IconButton, Button, Input, Nav } from "rsuite";
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine';
import PageIcon from '@rsuite/icons/Page';

export default function Add() {
    const [selectedNav, setSelectedNav] = useState<string>('main');

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Topbar title="Cadastro de Usuários" backgroundColor="#db8000" />

                <div className={styles.container}>
                    <div className={styles.headerActions}>
                        <IconButton icon={<ArrowLeftLineIcon />} appearance="primary" color="blue" as={Link} href="/users" />
                    </div>

                    <Nav appearance="subtle" activeKey={selectedNav} onSelect={setSelectedNav}>
                        <Nav.Item eventKey="main">Principal</Nav.Item>
                        <Nav.Item eventKey="responsable">Dados do Responsável</Nav.Item>
                        <Nav.Item eventKey="contact">Contato</Nav.Item>
                        <Nav.Item eventKey="config">Configurações</Nav.Item>
                    </Nav>

                    <div className={styles.formContainer}>
                        <form className={styles.form}>
                            {selectedNav === "main" && (
                                <>
                                    <div className={styles.formItem} style={{ gridColumn: 'span 4' }}>
                                        <span>Nome</span>
                                        <Input
                                            type="text"
                                            placeholder="Nome completo..."
                                        />
                                        <span className={styles.helpText}>*Obrigatório</span>
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 4' }}>
                                        <span>Email</span>
                                        <Input
                                            type="email"
                                            placeholder="Email completo..."
                                        />
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 4' }}>
                                        <span>CPF</span>
                                        <Input
                                            type="text"
                                            placeholder="CPF..."
                                        />
                                        <span className={styles.helpText}>*Obrigatório</span>
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 2' }}>
                                        <span>Idade</span>
                                        <Input
                                            type="number"
                                        />
                                        <span className={styles.helpText}>*Obrigatório</span>
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 3' }}>
                                        <span>Telefone</span>
                                        <Input
                                            type="text"
                                            placeholder="(DDD) 99999-9999"
                                        />
                                        <span className={styles.helpText}>*Obrigatório</span>
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 7' }}>
                                        <span>Endereço</span>
                                        <Input
                                            type="text"
                                            placeholder="Endereço completo..."
                                        />
                                        <span className={styles.helpText}>*Obrigatório</span>
                                    </div>
                                </>
                            )}
                            {selectedNav === "contact" && (
                                <>
                                    <div className={styles.formItem} style={{ gridColumn: 'span 4' }}>
                                        <span>Email Comercial</span>
                                        <Input
                                            type="email"
                                            placeholder="Digite seu email profissional..."
                                        />
                                        <span className={styles.helpText}>*Obrigatório</span>
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 2' }}>
                                        <span>Telefone Empresa</span>
                                        <Input
                                            type="text"
                                            placeholder="Telefone comercial..."
                                        />
                                    </div>

                                    <div className={styles.formItem} style={{ gridColumn: 'span 6' }}>
                                        <span>Dados a mais</span>
                                        <Input
                                            type="text"
                                            placeholder="Observações de contato..."
                                        />
                                    </div>
                                </>
                            )}
                        </form>
                    </div>

                    <div className={styles.footerActions}>
                        <Button
                            appearance="primary"
                            color="green"
                        >
                            Gravar
                        </Button>
                        <IconButton
                            appearance="primary"
                            color="violet"
                            icon={<PageIcon />}
                        >
                            Imprimir Detalhado
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}