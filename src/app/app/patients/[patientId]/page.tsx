import { findOnePatient, listSchedulesByPatient } from '../actions'
import { PatientContainerForm } from './_components/PatientContainerForm'
import { PatientProvider } from './_context/usePatient'
import { Patient } from '@/interface/patients'
import { auth } from '@/services/auth'
import { PatientPageHeader } from './_components/PatientPageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PatientSchedulleCard } from './_components/PatientSchedulleCard'

interface PatientPageProps {
  params: {
    patientId: string
  }
}

export default async function PatientPage({ params }: PatientPageProps) {
  const session = await auth()
  const patient = await findOnePatient(params.patientId)
  const schedules = await listSchedulesByPatient(params.patientId)
  return (
    <div className="p-4 flex flex-col gap-2 w-full">
      <PatientProvider
        initialData={patient as Patient}
        userId={session?.user?.id as string}
      >
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="schedules">Agendamentos</TabsTrigger>
          </TabsList>
          <PatientPageHeader />
          <TabsContent value="profile">
            <PatientContainerForm />
          </TabsContent>
          <TabsContent value="schedules">
            <PatientSchedulleCard schedules={schedules} />
          </TabsContent>
        </Tabs>
      </PatientProvider>
    </div>
  )
}
