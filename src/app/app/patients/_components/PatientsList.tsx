import {
  DataTable,
  DataTableContent,
  DataTableFooter,
  DataTableHeader,
} from '@/components/data-table'
import { DataColumnsTable } from '@/interface/data-columns-table'

import { Patient } from '@/interface/patients'
import { Eye, UserIcon } from 'lucide-react'
import { listPatients } from '../actions'
import { auth } from '@/services/auth'
import { EmptyState } from '@/components/empty-state'
import Link from 'next/link'
import { CreatePatientModal } from './CreatePatientModal'

const columns: DataColumnsTable<Patient>[] = [
  {
    header: 'Paciente',
    key: 'name',
    headerIcon: <UserIcon />,
  },
  {
    header: 'Idade',
    key: 'age',
  },
  {
    header: 'Data de nascimento',
    key: 'birthday',
    render: (patient: Patient) =>
      new Date(patient.birthday).toLocaleDateString(), // Formata a data
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
    render: (patient: Patient) => (
      <Link href={`/app/patients/${patient.id}`}>
        <Eye />
      </Link>
    ),
  },
]

export async function PatientsList() {
  const session = await auth()
  const userId = session?.user?.id || ''
  const patients = await listPatients(userId)
  return (
    <DataTable>
      <DataTableHeader className="justify-end">
        <CreatePatientModal userId={userId} />
      </DataTableHeader>
      {patients.length > 0 ? (
        <DataTableContent data={patients} columns={columns} />
      ) : (
        <EmptyState message="Nenhum paciente encontrado" />
      )}
      <DataTableFooter>
        <h1>Total de pacientes: {patients.length}</h1>
      </DataTableFooter>
    </DataTable>
  )
}
