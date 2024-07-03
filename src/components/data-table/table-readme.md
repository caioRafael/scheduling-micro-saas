# AppDataTable documentation

## DataTable Component

The `DataTable` component is a flexible and reusable table component that can be used to display data in a tabular format. It is designed to work with any data type that extends the `Entity` interface.

### Props

The `DataTable` component accepts the following props:

- `data`: An array of data items to be displayed in the table. Each item must extend the `Entity` interface.
- `columns`: An array of column definitions. Each column is defined using the `DataColumnsTable` interface.

### DataColumnsTable Interface

The `DataColumnsTable` interface defines the structure of a column in the `DataTable` component. It includes the following properties:

- `header`: A string representing the column header.
- `headerIcon` (optional): A ReactNode that can be used to display an icon next to the column header.
- `key`: A string representing the key of the data item to be displayed in the column.
- `render` (optional): A function that takes a data item and returns a ReactNode to be displayed in the column. This can be used to customize the rendering of the column content.

### Example Usage

Here is an example of how to use the `DataTable` component:

```tsx
import { DataTable } from '@/components/data-table'
import { Patient } from '@/interface/patients'

const columns = [
  {
    header: 'Paciente',
    key: 'name',
  },
  {
    header: 'Idade',
    key: 'age',
  },
  {
    header: 'Telefone',
    key: 'phone',
  },
  {
    header: 'Cidade',
    key: 'city',
  },
  {
    header: 'Opções',
    key: 'options',
    render: (patient: Patient) => <button>Ver mais</button>,
  },
]

const patients: Patient[] = [
  {
    id: '1',
    name: 'João Silva',
    phone: '123456789',
    age: 30,
    birthday: new Date('1991-01-01'),
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
    birthday: new Date('1996-02-02'),
    gender: 'Feminino',
    address: 'Rua B, 456',
    city: 'Rio de Janeiro',
    state: 'RJ',
    zip: '20000-000',
  },
  // Adicione mais pacientes conforme necessário
]

export function Example() {
  return <DataTable data={patients} columns={columns} />
}
