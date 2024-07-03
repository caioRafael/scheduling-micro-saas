import Image from 'next/image'

export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/no-data.svg" alt="Empty State" width={200} height={200} />
      <p className="text-md font-medium text-gray-900">
        {message || 'Nenhum dado encontrado'}
      </p>
    </div>
  )
}
