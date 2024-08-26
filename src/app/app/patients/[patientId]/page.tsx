import { findOnePatient, listSchedulesByPatient } from '../actions'
import { PatientContainerForm } from './_components/PatientContainerForm'
import { PatientProvider } from './_context/usePatient'
import { Patient } from '@/interface/patients'
import { auth } from '@/services/auth'
import { PatientPageHeader } from './_components/PatientPageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PatientSchedulleCard } from './_components/PatientSchedulleCard'
import { ListTags } from '../../tools/tags/actions'

interface PatientPageProps {
  params: {
    patientId: string
  }
  searchParams?: {
    vision?: string
  }
}

export default async function PatientPage({
  params,
  searchParams,
}: PatientPageProps) {
  const session = await auth()
  const patient = await findOnePatient(params.patientId)
  const schedules = await listSchedulesByPatient(params.patientId)
  const tagList = await ListTags(session?.user?.id || '')
  return (
    <div className="p-4 flex flex-col gap-2 w-full">
      <PatientProvider
        initialData={patient as Patient}
        userId={session?.user?.id as string}
        hasSchedule={schedules.length > 0}
      >
        <Tabs defaultValue={searchParams?.vision || 'profile'}>
          <TabsList>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="schedules">Agendamentos</TabsTrigger>
          </TabsList>
          <PatientPageHeader />
          <TabsContent value="profile">
            <PatientContainerForm tagList={tagList} />
          </TabsContent>
          <TabsContent value="schedules">
            <PatientSchedulleCard schedules={schedules} />
          </TabsContent>
        </Tabs>
      </PatientProvider>
    </div>
  )
}
