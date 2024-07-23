'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { useEffect, useState } from 'react'

export function FirstAccessModal() {
  const [isFirstAccess, setIsFirstAccess] = useState<boolean>(false)
  useEffect(() => {
    const firstAccess = localStorage.getItem('firstTimeUser')
    if (firstAccess === 'true') {
      setIsFirstAccess(true)
    }
  }, [])

  const handleResetFirstTimeUser = () => {
    localStorage.setItem('firstTimeUser', 'false')
    setIsFirstAccess(false)
  }

  return (
    <Dialog open={isFirstAccess} onOpenChange={setIsFirstAccess}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl font-bold mb-4">
            Bem-vindo ao HealthPlaning!
          </h2>
        </DialogHeader>
        <div className="max-w-[600px] max-h-[600px] overflow-y-scroll p-2 space-y-2">
          <p className="w-full text-sm">
            Estamos felizes em tê-lo aqui. Nossa plataforma está em
            desenvolvimento, e está sendo criada para facilitar a gestão de
            horários e pacientes, esperando proporcionar uma experiência
            organizada para profissionais de saúde.
          </p>

          <h2 className="w-full text-sm font-bold">Sessão de Testes</h2>
          <p className="w-full text-sm">
            Nesta sessão de testes, você poderá explorar as seguintes
            funcionalidades:
          </p>
          <ul className="w-full text-sm list-decimal list-inside">
            <li>Cadastro de usuários(Já realizada ao logar)</li>
            <li>Página de perfil</li>
            <li>Inclusão de pacientes</li>
            <li>Agendamento de horários</li>
          </ul>
          <p className="w-full text-sm">
            Aproveite para familiarizar-se com o sistema.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleResetFirstTimeUser}>Prosseguir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
