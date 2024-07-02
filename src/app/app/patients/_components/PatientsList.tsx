import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Patient } from '@/interface/patients'

export function PatientsList() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Paceinte</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.phone}</TableCell>
              <TableCell>{patient.city}</TableCell>
              <TableCell>
                <Button>Ver mais</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'João Silva',
    phone: '123456789',
    age: 30,
    gender: 'Masculino',
    address: 'Rua A, 123',
    city: 'São Paulo',
    state: 'SP',
    zip: '01000-000',
  },
  {
    id: '2',
    name: 'Maria Souza',
    phone: '987654321',
    age: 25,
    gender: 'Feminino',
    address: 'Rua B, 456',
    city: 'Rio de Janeiro',
    state: 'RJ',
    zip: '20000-000',
  },
  {
    id: '3',
    name: 'Carlos Pereira',
    phone: '123123123',
    age: 40,
    gender: 'Masculino',
    address: 'Rua C, 789',
    city: 'Belo Horizonte',
    state: 'MG',
    zip: '30000-000',
  },
  {
    id: '4',
    name: 'Ana Costa',
    phone: '321321321',
    age: 35,
    gender: 'Feminino',
    address: 'Rua D, 101',
    city: 'Porto Alegre',
    state: 'RS',
    zip: '90000-000',
  },
  {
    id: '5',
    name: 'Pedro Santos',
    phone: '456456456',
    age: 28,
    gender: 'Masculino',
    address: 'Rua E, 202',
    city: 'Curitiba',
    state: 'PR',
    zip: '80000-000',
  },
  {
    id: '6',
    name: 'Juliana Almeida',
    phone: '654654654',
    age: 32,
    gender: 'Feminino',
    address: 'Rua F, 303',
    city: 'Florianópolis',
    state: 'SC',
    zip: '88000-000',
  },
  {
    id: '7',
    name: 'Rafael Lima',
    phone: '789789789',
    age: 45,
    gender: 'Masculino',
    address: 'Rua G, 404',
    city: 'Salvador',
    state: 'BA',
    zip: '40000-000',
  },
  {
    id: '8',
    name: 'Fernanda Oliveira',
    phone: '987987987',
    age: 27,
    gender: 'Feminino',
    address: 'Rua H, 505',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60000-000',
  },
  {
    id: '9',
    name: 'Lucas Rocha',
    phone: '123987123',
    age: 33,
    gender: 'Masculino',
    address: 'Rua I, 606',
    city: 'Manaus',
    state: 'AM',
    zip: '69000-000',
  },
  //   {
  //     id: '10',
  //     name: 'Mariana Ribeiro',
  //     phone: '321789321',
  //     age: 29,
  //     gender: 'Feminino',
  //     address: 'Rua J, 707',
  //     city: 'Recife',
  //     state: 'PE',
  //     zip: '50000-000',
  //   },
  //   {
  //     id: '11',
  //     name: 'Bruno Fernandes',
  //     phone: '456123456',
  //     age: 38,
  //     gender: 'Masculino',
  //     address: 'Rua K, 808',
  //     city: 'Goiânia',
  //     state: 'GO',
  //     zip: '74000-000',
  //   },
  //   {
  //     id: '12',
  //     name: 'Patrícia Mendes',
  //     phone: '654321654',
  //     age: 26,
  //     gender: 'Feminino',
  //     address: 'Rua L, 909',
  //     city: 'Belém',
  //     state: 'PA',
  //     zip: '66000-000',
  //   },
  //   {
  //     id: '13',
  //     name: 'Rodrigo Azevedo',
  //     phone: '789123789',
  //     age: 41,
  //     gender: 'Masculino',
  //     address: 'Rua M, 1010',
  //     city: 'Natal',
  //     state: 'RN',
  //     zip: '59000-000',
  //   },
  //   {
  //     id: '14',
  //     name: 'Camila Barbosa',
  //     phone: '987321987',
  //     age: 34,
  //     gender: 'Feminino',
  //     address: 'Rua N, 1111',
  //     city: 'João Pessoa',
  //     state: 'PB',
  //     zip: '58000-000',
  //   },
  //   {
  //     id: '15',
  //     name: 'Gustavo Martins',
  //     phone: '123654123',
  //     age: 37,
  //     gender: 'Masculino',
  //     address: 'Rua O, 1212',
  //     city: 'Maceió',
  //     state: 'AL',
  //     zip: '57000-000',
  //   },
  //   {
  //     id: '16',
  //     name: 'Larissa Gomes',
  //     phone: '321456321',
  //     age: 31,
  //     gender: 'Feminino',
  //     address: 'Rua P, 1313',
  //     city: 'Aracaju',
  //     state: 'SE',
  //     zip: '49000-000',
  //   },
  //   {
  //     id: '17',
  //     name: 'Felipe Nunes',
  //     phone: '456789456',
  //     age: 39,
  //     gender: 'Masculino',
  //     address: 'Rua Q, 1414',
  //     city: 'Campo Grande',
  //     state: 'MS',
  //     zip: '79000-000',
  //   },
  //   {
  //     id: '18',
  //     name: 'Renata Carvalho',
  //     phone: '654987654',
  //     age: 28,
  //     gender: 'Feminino',
  //     address: 'Rua R, 1515',
  //     city: 'Cuiabá',
  //     state: 'MT',
  //     zip: '78000-000',
  //   },
  //   {
  //     id: '19',
  //     name: 'Thiago Teixeira',
  //     phone: '789456789',
  //     age: 36,
  //     gender: 'Masculino',
  //     address: 'Rua S, 1616',
  //     city: 'Teresina',
  //     state: 'PI',
  //     zip: '64000-000',
  //   },
  //   {
  //     id: '20',
  //     name: 'Isabela Ferreira',
  //     phone: '987654987',
  //     age: 24,
  //     gender: 'Feminino',
  //     address: 'Rua T, 1717',
  //     city: 'Palmas',
  //     state: 'TO',
  //     zip: '77000-000',
  //   },
]
