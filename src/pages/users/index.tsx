import { useState } from "react";
import styles from "./styles.module.scss";
import { Topbar } from "@/components/Topbar";
import { Table, IconButton, Pagination, Input, InputGroup } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import SearchIcon from '@rsuite/icons/Search';
import PageIcon from '@rsuite/icons/Page';
import ReloadIcon from '@rsuite/icons/Reload';
import EditIcon from '@rsuite/icons/Edit';
import { paginationLocale } from "@/utils/paginationLocale";

const { Column, HeaderCell, Cell } = Table;

const CustomInputGroupWidthButton = ({ placeholder, ...props }: any) => (
    <InputGroup {...props} inside style={styles}>
        <Input placeholder={placeholder} />
        <InputGroup.Button>
            <SearchIcon />
        </InputGroup.Button>
    </InputGroup>
);

const defaultData = [
    { id: 1, firstName: "Rafael", lastName: "Menegalli", gender: "Masculino", age: 19, postcode: "123123123", email: "rafaelmenegalli@gmail.com", phone: "11987654321", city: "São Paulo", jobTitle: "Estudante" },
    { id: 2, firstName: "Ana", lastName: "Silva", gender: "Feminino", age: 25, postcode: "456456456", email: "ana.silva@example.com", phone: "11998765432", city: "Rio de Janeiro", jobTitle: "Designer Gráfico" },
    { id: 3, firstName: "João", lastName: "Oliveira", gender: "Masculino", age: 30, postcode: "789789789", email: "joao.oliveira@example.com", phone: "11996543218", city: "Belo Horizonte", jobTitle: "Engenheiro" },
    { id: 4, firstName: "Mariana", lastName: "Santos", gender: "Feminino", age: 22, postcode: "321321321", email: "mariana.santos@example.com", phone: "11998712345", city: "Curitiba", jobTitle: "Advogada" },
    { id: 5, firstName: "Carlos", lastName: "Pereira", gender: "Masculino", age: 28, postcode: "654654654", email: "carlos.pereira@example.com", phone: "11996457821", city: "Porto Alegre", jobTitle: "Analista de TI" },
    { id: 6, firstName: "Fernanda", lastName: "Costa", gender: "Feminino", age: 35, postcode: "987987987", email: "fernanda.costa@example.com", phone: "11998765489", city: "Florianópolis", jobTitle: "Médica" },
    { id: 7, firstName: "Gabriel", lastName: "Lima", gender: "Masculino", age: 26, postcode: "123456789", email: "gabriel.lima@example.com", phone: "11996321547", city: "Fortaleza", jobTitle: "Professor" },
    { id: 8, firstName: "Beatriz", lastName: "Machado", gender: "Feminino", age: 21, postcode: "987654321", email: "beatriz.machado@example.com", phone: "11997865432", city: "Salvador", jobTitle: "Estilista" },
    { id: 9, firstName: "Lucas", lastName: "Almeida", gender: "Masculino", age: 24, postcode: "456123789", email: "lucas.almeida@example.com", phone: "11996548721", city: "Recife", jobTitle: "Desenvolvedor" },
    { id: 10, firstName: "Sofia", lastName: "Rodrigues", gender: "Feminino", age: 27, postcode: "789456123", email: "sofia.rodrigues@example.com", phone: "11997432561", city: "Brasília", jobTitle: "Arquiteta" },
    { id: 11, firstName: "Pedro", lastName: "Ferreira", gender: "Masculino", age: 31, postcode: "741852963", email: "pedro.ferreira@example.com", phone: "11996547821", city: "Goiânia", jobTitle: "Publicitário" },
    { id: 12, firstName: "Laura", lastName: "Barbosa", gender: "Feminino", age: 29, postcode: "852963741", email: "laura.barbosa@example.com", phone: "11998732145", city: "Manaus", jobTitle: "Nutricionista" },
    { id: 13, firstName: "Victor", lastName: "Moraes", gender: "Masculino", age: 33, postcode: "963852741", email: "victor.moraes@example.com", phone: "11997456321", city: "Belém", jobTitle: "Gerente de Projetos" },
    { id: 14, firstName: "Isabela", lastName: "Nascimento", gender: "Feminino", age: 20, postcode: "159753486", email: "isabela.nascimento@example.com", phone: "11998653214", city: "São Luís", jobTitle: "Jornalista" },
    { id: 15, firstName: "Thiago", lastName: "Azevedo", gender: "Masculino", age: 32, postcode: "357951468", email: "thiago.azevedo@example.com", phone: "11995462178", city: "Natal", jobTitle: "Empresário" },
    { id: 16, firstName: "Camila", lastName: "Ramos", gender: "Feminino", age: 23, postcode: "258369147", email: "camila.ramos@example.com", phone: "11997456348", city: "João Pessoa", jobTitle: "Fotógrafa" },
    { id: 17, firstName: "Henrique", lastName: "Cardoso", gender: "Masculino", age: 27, postcode: "369852147", email: "henrique.cardoso@example.com", phone: "11996874523", city: "Aracaju", jobTitle: "Contador" },
    { id: 18, firstName: "Juliana", lastName: "Souza", gender: "Feminino", age: 24, postcode: "147258369", email: "juliana.souza@example.com", phone: "11997456312", city: "Teresina", jobTitle: "Psicóloga" },
    { id: 19, firstName: "André", lastName: "Borges", gender: "Masculino", age: 36, postcode: "753951486", email: "andre.borges@example.com", phone: "11998765231", city: "Maceió", jobTitle: "Administrador" },
    { id: 20, firstName: "Patrícia", lastName: "Campos", gender: "Feminino", age: 28, postcode: "951753468", email: "patricia.campos@example.com", phone: "11998654712", city: "Cuiabá", jobTitle: "Cientista de Dados" }
];



export default function Users() {
    const [loadingTable, setLoadingTable] = useState(false);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const handleChangeLimit = (dataKey: any) => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = defaultData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Topbar title="Usuários" backgroundColor="#db8000" />
                <div className={styles.container}>

                    <div className={styles.headerActions}>
                        <div style={{ width: '100%' }}>
                            <CustomInputGroupWidthButton
                                placeholder="Filtrar por..."
                            />
                        </div>

                        <div className={styles.buttonActions}>
                            <IconButton icon={<PageIcon />} appearance="primary" color="violet" />
                            <IconButton icon={<ReloadIcon />} appearance="primary" color="yellow" />
                            <IconButton icon={<PlusIcon />} appearance="primary" color="green" />
                        </div>
                    </div>

                    <div>

                        <Table
                            height={450}
                            data={data}
                            bordered
                            loading={loadingTable}
                        >
                            <Column width={60} align="center" resizable>
                                <HeaderCell>Código</HeaderCell>
                                <Cell dataKey="id" />
                            </Column>

                            <Column width={150} resizable>
                                <HeaderCell>Primeiro Nome</HeaderCell>
                                <Cell dataKey="firstName" />
                            </Column>

                            <Column width={150} resizable>
                                <HeaderCell>Último Nome</HeaderCell>
                                <Cell dataKey="lastName" />
                            </Column>

                            <Column width={100} resizable>
                                <HeaderCell>Gênero</HeaderCell>
                                <Cell dataKey="gender" />
                            </Column>

                            <Column width={100} resizable>
                                <HeaderCell>Idade</HeaderCell>
                                <Cell dataKey="age" />
                            </Column>

                            <Column width={150} resizable>
                                <HeaderCell>CPF</HeaderCell>
                                <Cell dataKey="postcode" />
                            </Column>

                            <Column width={300} resizable>
                                <HeaderCell>Email</HeaderCell>
                                <Cell dataKey="email" />
                            </Column>

                            <Column width={150} resizable>
                                <HeaderCell>Telefone</HeaderCell>
                                <Cell dataKey="phone" />
                            </Column>

                            <Column width={200} resizable>
                                <HeaderCell>CIdade</HeaderCell>
                                <Cell dataKey="city" />
                            </Column>

                            <Column width={250} resizable>
                                <HeaderCell>Trabalho</HeaderCell>
                                <Cell dataKey="jobTitle" />
                            </Column>

                            <Column width={80} resizable>
                                <HeaderCell>Ações</HeaderCell>

                                <Cell style={{ padding: '6px' }}>
                                    {rowData => (
                                        <IconButton
                                            icon={<EditIcon />}
                                            appearance="subtle"
                                            onClick={() => alert(rowData.id)}
                                        />
                                    )}
                                </Cell>
                            </Column>
                        </Table>

                        <div style={{ padding: 20 }}>
                            <Pagination
                                prev
                                next
                                first
                                last
                                ellipsis
                                boundaryLinks
                                maxButtons={5}
                                size="xs"
                                layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                                total={defaultData.length}
                                limitOptions={[10, 30, 50, 100]}
                                limit={limit}
                                activePage={page}
                                onChangePage={setPage}
                                onChangeLimit={handleChangeLimit}
                                locale={paginationLocale}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}